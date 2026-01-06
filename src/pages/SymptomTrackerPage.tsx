import { useState, useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { format, subDays, parseISO, startOfDay } from "date-fns";
import { 
  Calendar as CalendarIcon, 
  Plus, 
  Trash2, 
  TrendingUp, 
  Activity,
  Download,
  FileText,
  BarChart3,
  PieChart as PieChartIcon
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { Layout } from "@/components/layout/Layout";
import { DisclaimerBanner } from "@/components/shared/DisclaimerBanner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

interface SymptomEntry {
  id: string;
  date: string;
  symptom: string;
  severity: number;
  notes: string;
}

const womenSymptoms = [
  "Cramps",
  "Bloating",
  "Headache",
  "Mood swings",
  "Fatigue",
  "Breast tenderness",
  "Acne",
  "Food cravings",
  "Anxiety",
  "Irritability",
  "Back pain",
  "Insomnia",
];

const menSymptoms = [
  "Fatigue",
  "Low energy",
  "Brain fog",
  "Mood changes",
  "Sleep issues",
  "Stress",
  "Low motivation",
  "Muscle weakness",
  "Weight changes",
  "Anxiety",
  "Irritability",
  "Low libido",
];

const CHART_COLORS = [
  "hsl(var(--primary))",
  "hsl(var(--chart-2))",
  "hsl(var(--chart-3))",
  "hsl(var(--chart-4))",
  "hsl(var(--chart-5))",
  "#10b981",
  "#f59e0b",
  "#ef4444",
  "#8b5cf6",
  "#ec4899",
];

export default function SymptomTrackerPage() {
  const location = useLocation();
  const isMenSection = location.pathname.startsWith("/men");
  const variant = isMenSection ? "men" : "women";
  
  const [entries, setEntries] = useState<SymptomEntry[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [date, setDate] = useState<Date>(new Date());
  const [symptom, setSymptom] = useState("");
  const [severity, setSeverity] = useState([5]);
  const [notes, setNotes] = useState("");
  const [timeRange, setTimeRange] = useState<"7" | "30" | "90" | "all">("30");

  const symptoms = variant === "women" ? womenSymptoms : menSymptoms;
  const storageKey = variant === "women" ? "women-symptom-tracker" : "men-symptom-tracker";

  // Load entries from localStorage
  useEffect(() => {
    const stored = localStorage.getItem(storageKey);
    if (stored) {
      try {
        setEntries(JSON.parse(stored));
      } catch (e) {
        console.error("Failed to parse stored symptoms:", e);
      }
    }
  }, [storageKey]);

  // Save entries to localStorage
  useEffect(() => {
    if (entries.length > 0) {
      localStorage.setItem(storageKey, JSON.stringify(entries));
    }
  }, [entries, storageKey]);

  const handleAddEntry = () => {
    if (!symptom) return;

    const newEntry: SymptomEntry = {
      id: Date.now().toString(),
      date: format(date, "yyyy-MM-dd"),
      symptom,
      severity: severity[0],
      notes,
    };

    setEntries(prev => [newEntry, ...prev].sort((a, b) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    ));
    
    setSymptom("");
    setSeverity([5]);
    setNotes("");
    setIsOpen(false);
  };

  const handleDeleteEntry = (id: string) => {
    setEntries(prev => prev.filter(entry => entry.id !== id));
  };

  const getSeverityColor = (sev: number) => {
    if (sev <= 3) return "bg-green-500";
    if (sev <= 6) return "bg-yellow-500";
    return "bg-red-500";
  };

  const getSeverityLabel = (sev: number) => {
    if (sev <= 3) return "Mild";
    if (sev <= 6) return "Moderate";
    return "Severe";
  };

  // Filter entries by time range
  const filteredEntries = useMemo(() => {
    if (timeRange === "all") return entries;
    const days = parseInt(timeRange);
    const cutoffDate = subDays(new Date(), days);
    return entries.filter(entry => 
      new Date(entry.date) >= startOfDay(cutoffDate)
    );
  }, [entries, timeRange]);

  // Calculate symptom frequency
  const symptomFrequency = useMemo(() => {
    return filteredEntries.reduce((acc, entry) => {
      acc[entry.symptom] = (acc[entry.symptom] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
  }, [filteredEntries]);

  const topSymptoms = Object.entries(symptomFrequency)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  // Pie chart data for symptom distribution
  const pieData = useMemo(() => {
    return Object.entries(symptomFrequency).map(([name, value]) => ({
      name,
      value,
    }));
  }, [symptomFrequency]);

  // Line chart data for severity over time
  const lineChartData = useMemo(() => {
    const days = timeRange === "all" ? 90 : parseInt(timeRange);
    const data: { date: string; avgSeverity: number; count: number }[] = [];
    
    for (let i = days - 1; i >= 0; i--) {
      const targetDate = format(subDays(new Date(), i), "yyyy-MM-dd");
      const dayEntries = entries.filter(e => e.date === targetDate);
      
      if (dayEntries.length > 0) {
        const avgSeverity = dayEntries.reduce((sum, e) => sum + e.severity, 0) / dayEntries.length;
        data.push({
          date: format(parseISO(targetDate), "MMM d"),
          avgSeverity: Math.round(avgSeverity * 10) / 10,
          count: dayEntries.length,
        });
      }
    }
    
    return data;
  }, [entries, timeRange]);

  // Bar chart data for symptom frequency
  const barChartData = useMemo(() => {
    return topSymptoms.map(([name, count]) => ({
      name: name.length > 10 ? name.substring(0, 10) + "..." : name,
      fullName: name,
      count,
    }));
  }, [topSymptoms]);

  // Average severity by symptom
  const severityBySymptom = useMemo(() => {
    const severityMap: Record<string, { total: number; count: number }> = {};
    
    filteredEntries.forEach(entry => {
      if (!severityMap[entry.symptom]) {
        severityMap[entry.symptom] = { total: 0, count: 0 };
      }
      severityMap[entry.symptom].total += entry.severity;
      severityMap[entry.symptom].count += 1;
    });

    return Object.entries(severityMap)
      .map(([name, data]) => ({
        name: name.length > 12 ? name.substring(0, 12) + "..." : name,
        fullName: name,
        avgSeverity: Math.round((data.total / data.count) * 10) / 10,
      }))
      .sort((a, b) => b.avgSeverity - a.avgSeverity);
  }, [filteredEntries]);

  // Export as CSV
  const exportCSV = () => {
    const headers = ["Date", "Symptom", "Severity", "Severity Level", "Notes"];
    const rows = entries.map(entry => [
      entry.date,
      entry.symptom,
      entry.severity.toString(),
      getSeverityLabel(entry.severity),
      `"${entry.notes.replace(/"/g, '""')}"`,
    ]);

    const csvContent = [
      headers.join(","),
      ...rows.map(row => row.join(",")),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `symptom-tracker-${format(new Date(), "yyyy-MM-dd")}.csv`;
    link.click();
  };

  // Export as PDF (text-based)
  const exportPDF = () => {
    const content = `
SYMPTOM TRACKER REPORT
Generated: ${format(new Date(), "PPP")}
Section: ${variant === "women" ? "Women's Health" : "Men's Health"}
Total Entries: ${entries.length}

=====================================
SUMMARY
=====================================
${topSymptoms.length > 0 ? `Most Common Symptoms:
${topSymptoms.map(([name, count], i) => `  ${i + 1}. ${name} (${count} occurrences)`).join("\n")}` : "No symptoms logged yet."}

=====================================
ALL ENTRIES
=====================================
${entries.length > 0 ? entries.map(entry => `
Date: ${format(parseISO(entry.date), "PPP")}
Symptom: ${entry.symptom}
Severity: ${entry.severity}/10 (${getSeverityLabel(entry.severity)})
${entry.notes ? `Notes: ${entry.notes}` : ""}
---`).join("\n") : "No entries to display."}

=====================================
Note: This report is for personal tracking only.
Always consult a healthcare provider for medical advice.
    `.trim();

    const blob = new Blob([content], { type: "text/plain;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `symptom-tracker-report-${format(new Date(), "yyyy-MM-dd")}.txt`;
    link.click();
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-sage-50 to-background py-12">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary mx-auto mb-6">
              <Activity className="h-8 w-8" />
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
              Symptom Tracker
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              Log your symptoms, track patterns over time, and gain insights into your health.
              All data is stored locally on your device.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogTrigger asChild>
                  <Button variant="hero" size="lg">
                    <Plus className="h-5 w-5 mr-2" />
                    Log Symptom
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Log a Symptom</DialogTitle>
                    <DialogDescription>
                      Track how you're feeling today. This data is stored locally on your device.
                    </DialogDescription>
                  </DialogHeader>
                  
                  <div className="space-y-4 py-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Date</label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-start text-left font-normal"
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {format(date, "PPP")}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={(d) => d && setDate(d)}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Symptom</label>
                      <Select value={symptom} onValueChange={setSymptom}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a symptom" />
                        </SelectTrigger>
                        <SelectContent>
                          {symptoms.map((s) => (
                            <SelectItem key={s} value={s}>
                              {s}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <label className="text-sm font-medium">Severity</label>
                        <span className={cn(
                          "text-sm font-medium px-2 py-0.5 rounded text-white",
                          getSeverityColor(severity[0])
                        )}>
                          {severity[0]}/10 - {getSeverityLabel(severity[0])}
                        </span>
                      </div>
                      <Slider
                        value={severity}
                        onValueChange={setSeverity}
                        min={1}
                        max={10}
                        step={1}
                        className="py-2"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>Mild</span>
                        <span>Severe</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Notes (optional)</label>
                      <Textarea
                        placeholder="Any additional details..."
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        rows={2}
                      />
                    </div>
                  </div>

                  <div className="flex justify-end gap-2">
                    <Button variant="outline" onClick={() => setIsOpen(false)}>
                      Cancel
                    </Button>
                    <Button variant="hero" onClick={handleAddEntry} disabled={!symptom}>
                      Save Entry
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>

              {entries.length > 0 && (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="lg">
                      <Download className="h-5 w-5 mr-2" />
                      Export Data
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem onClick={exportCSV}>
                      <FileText className="h-4 w-4 mr-2" />
                      Export as CSV
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={exportPDF}>
                      <FileText className="h-4 w-4 mr-2" />
                      Export as Report (TXT)
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              )}
            </div>
          </div>
        </div>
      </section>

      <div className="container -mt-4 mb-8">
        <DisclaimerBanner variant="inline" />
      </div>

      {/* Main Content */}
      <section className="container py-8">
        <div className="max-w-6xl mx-auto">
          {entries.length === 0 ? (
            <div className="text-center py-16 bg-muted/30 rounded-2xl">
              <Activity className="h-16 w-16 mx-auto mb-4 text-muted-foreground/50" />
              <h2 className="font-serif text-2xl font-semibold mb-2">No Symptoms Logged Yet</h2>
              <p className="text-muted-foreground mb-6">
                Start tracking your symptoms to see patterns and insights over time.
              </p>
              <Button variant="hero" onClick={() => setIsOpen(true)}>
                <Plus className="h-5 w-5 mr-2" />
                Log Your First Symptom
              </Button>
            </div>
          ) : (
            <>
              {/* Stats Overview */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <div className="bg-card border rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Activity className="h-5 w-5 text-primary" />
                    <span className="text-sm text-muted-foreground">Total Entries</span>
                  </div>
                  <p className="text-3xl font-bold text-primary">{entries.length}</p>
                </div>
                <div className="bg-card border rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    <span className="text-sm text-muted-foreground">This Period</span>
                  </div>
                  <p className="text-3xl font-bold">{filteredEntries.length}</p>
                </div>
                <div className="bg-card border rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <BarChart3 className="h-5 w-5 text-primary" />
                    <span className="text-sm text-muted-foreground">Unique Symptoms</span>
                  </div>
                  <p className="text-3xl font-bold">{Object.keys(symptomFrequency).length}</p>
                </div>
                <div className="bg-card border rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <PieChartIcon className="h-5 w-5 text-primary" />
                    <span className="text-sm text-muted-foreground">Avg Severity</span>
                  </div>
                  <p className="text-3xl font-bold">
                    {filteredEntries.length > 0 
                      ? (filteredEntries.reduce((sum, e) => sum + e.severity, 0) / filteredEntries.length).toFixed(1)
                      : "0"
                    }
                  </p>
                </div>
              </div>

              {/* Time Range Filter */}
              <div className="flex justify-end mb-6">
                <Select value={timeRange} onValueChange={(v) => setTimeRange(v as typeof timeRange)}>
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="7">Last 7 days</SelectItem>
                    <SelectItem value="30">Last 30 days</SelectItem>
                    <SelectItem value="90">Last 90 days</SelectItem>
                    <SelectItem value="all">All time</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Charts and Data */}
              <Tabs defaultValue="charts" className="mb-8">
                <TabsList className="mb-6">
                  <TabsTrigger value="charts">Charts & Insights</TabsTrigger>
                  <TabsTrigger value="entries">All Entries</TabsTrigger>
                </TabsList>

                <TabsContent value="charts">
                  <div className="grid lg:grid-cols-2 gap-6">
                    {/* Severity Over Time */}
                    <div className="bg-card border rounded-xl p-6">
                      <h3 className="font-semibold mb-4">Severity Over Time</h3>
                      {lineChartData.length > 0 ? (
                        <ResponsiveContainer width="100%" height={250}>
                          <LineChart data={lineChartData}>
                            <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                            <XAxis 
                              dataKey="date" 
                              tick={{ fontSize: 12 }}
                              className="text-muted-foreground"
                            />
                            <YAxis 
                              domain={[0, 10]} 
                              tick={{ fontSize: 12 }}
                              className="text-muted-foreground"
                            />
                            <Tooltip 
                              contentStyle={{ 
                                backgroundColor: "hsl(var(--card))",
                                border: "1px solid hsl(var(--border))",
                                borderRadius: "8px"
                              }}
                            />
                            <Line 
                              type="monotone" 
                              dataKey="avgSeverity" 
                              stroke="hsl(var(--primary))" 
                              strokeWidth={2}
                              dot={{ fill: "hsl(var(--primary))" }}
                              name="Avg Severity"
                            />
                          </LineChart>
                        </ResponsiveContainer>
                      ) : (
                        <div className="h-[250px] flex items-center justify-center text-muted-foreground">
                          No data for this time period
                        </div>
                      )}
                    </div>

                    {/* Symptom Distribution */}
                    <div className="bg-card border rounded-xl p-6">
                      <h3 className="font-semibold mb-4">Symptom Distribution</h3>
                      {pieData.length > 0 ? (
                        <ResponsiveContainer width="100%" height={250}>
                          <PieChart>
                            <Pie
                              data={pieData}
                              cx="50%"
                              cy="50%"
                              innerRadius={60}
                              outerRadius={80}
                              paddingAngle={2}
                              dataKey="value"
                              label={({ name, percent }) => 
                                `${name.length > 8 ? name.substring(0, 8) + "..." : name} ${(percent * 100).toFixed(0)}%`
                              }
                              labelLine={false}
                            >
                              {pieData.map((_, index) => (
                                <Cell 
                                  key={`cell-${index}`} 
                                  fill={CHART_COLORS[index % CHART_COLORS.length]} 
                                />
                              ))}
                            </Pie>
                            <Tooltip />
                          </PieChart>
                        </ResponsiveContainer>
                      ) : (
                        <div className="h-[250px] flex items-center justify-center text-muted-foreground">
                          No data for this time period
                        </div>
                      )}
                    </div>

                    {/* Most Common Symptoms */}
                    <div className="bg-card border rounded-xl p-6">
                      <h3 className="font-semibold mb-4">Most Common Symptoms</h3>
                      {barChartData.length > 0 ? (
                        <ResponsiveContainer width="100%" height={250}>
                          <BarChart data={barChartData} layout="vertical">
                            <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                            <XAxis type="number" tick={{ fontSize: 12 }} />
                            <YAxis 
                              type="category" 
                              dataKey="name" 
                              tick={{ fontSize: 12 }}
                              width={80}
                            />
                            <Tooltip 
                              contentStyle={{ 
                                backgroundColor: "hsl(var(--card))",
                                border: "1px solid hsl(var(--border))",
                                borderRadius: "8px"
                              }}
                              formatter={(value, name, props) => [value, props.payload.fullName]}
                            />
                            <Bar 
                              dataKey="count" 
                              fill="hsl(var(--primary))" 
                              radius={[0, 4, 4, 0]}
                              name="Occurrences"
                            />
                          </BarChart>
                        </ResponsiveContainer>
                      ) : (
                        <div className="h-[250px] flex items-center justify-center text-muted-foreground">
                          No data for this time period
                        </div>
                      )}
                    </div>

                    {/* Severity by Symptom */}
                    <div className="bg-card border rounded-xl p-6">
                      <h3 className="font-semibold mb-4">Average Severity by Symptom</h3>
                      {severityBySymptom.length > 0 ? (
                        <ResponsiveContainer width="100%" height={250}>
                          <BarChart data={severityBySymptom} layout="vertical">
                            <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                            <XAxis 
                              type="number" 
                              domain={[0, 10]} 
                              tick={{ fontSize: 12 }}
                            />
                            <YAxis 
                              type="category" 
                              dataKey="name" 
                              tick={{ fontSize: 12 }}
                              width={80}
                            />
                            <Tooltip 
                              contentStyle={{ 
                                backgroundColor: "hsl(var(--card))",
                                border: "1px solid hsl(var(--border))",
                                borderRadius: "8px"
                              }}
                              formatter={(value, name, props) => [`${value}/10`, props.payload.fullName]}
                            />
                            <Bar 
                              dataKey="avgSeverity" 
                              fill="hsl(var(--chart-2))" 
                              radius={[0, 4, 4, 0]}
                              name="Avg Severity"
                            />
                          </BarChart>
                        </ResponsiveContainer>
                      ) : (
                        <div className="h-[250px] flex items-center justify-center text-muted-foreground">
                          No data for this time period
                        </div>
                      )}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="entries">
                  <div className="bg-card border rounded-xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold">All Entries ({filteredEntries.length})</h3>
                    </div>
                    
                    <div className="space-y-3 max-h-[600px] overflow-y-auto">
                      {filteredEntries.map((entry) => (
                        <div 
                          key={entry.id}
                          className="flex items-start justify-between p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                        >
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-medium">{entry.symptom}</span>
                              <span className={cn(
                                "text-xs px-2 py-0.5 rounded text-white",
                                getSeverityColor(entry.severity)
                              )}>
                                {entry.severity}/10 - {getSeverityLabel(entry.severity)}
                              </span>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              {format(parseISO(entry.date), "EEEE, MMMM d, yyyy")}
                            </p>
                            {entry.notes && (
                              <p className="text-sm text-muted-foreground mt-2 italic">
                                "{entry.notes}"
                              </p>
                            )}
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-muted-foreground hover:text-destructive"
                            onClick={() => handleDeleteEntry(entry.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </>
          )}
        </div>
      </section>

      <div className="container pb-12">
        <p className="text-center text-sm text-muted-foreground">
          All data is stored locally on your device and never shared. This is for personal tracking only — not medical advice.
        </p>
      </div>
    </Layout>
  );
}
