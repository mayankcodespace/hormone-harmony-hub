import { useState, useEffect } from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Plus, Trash2, TrendingUp, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
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

interface SymptomEntry {
  id: string;
  date: string;
  symptom: string;
  severity: number;
  notes: string;
}

interface SymptomTrackerProps {
  variant?: "women" | "men";
  className?: string;
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

export function SymptomTracker({ variant = "women", className }: SymptomTrackerProps) {
  const [entries, setEntries] = useState<SymptomEntry[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [date, setDate] = useState<Date>(new Date());
  const [symptom, setSymptom] = useState("");
  const [severity, setSeverity] = useState([5]);
  const [notes, setNotes] = useState("");

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
    localStorage.setItem(storageKey, JSON.stringify(entries));
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
    
    // Reset form
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

  // Calculate symptom frequency
  const symptomFrequency = entries.reduce((acc, entry) => {
    acc[entry.symptom] = (acc[entry.symptom] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const topSymptoms = Object.entries(symptomFrequency)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3);

  return (
    <div className={cn("rounded-2xl bg-card border border-border p-6", className)}>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Activity className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-serif text-lg font-semibold">Symptom Tracker</h3>
            <p className="text-sm text-muted-foreground">Log and track your symptoms over time</p>
          </div>
        </div>
        
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button variant="hero" size="sm">
              <Plus className="h-4 w-4 mr-2" />
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
              {/* Date picker */}
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

              {/* Symptom select */}
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

              {/* Severity slider */}
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

              {/* Notes */}
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
      </div>

      {/* Stats overview */}
      {entries.length > 0 && (
        <div className="mb-6 p-4 rounded-lg bg-muted/50">
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Your Patterns</span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-2xl font-bold text-primary">{entries.length}</p>
              <p className="text-xs text-muted-foreground">Total entries</p>
            </div>
            <div>
              <p className="text-sm font-medium">Most common:</p>
              <div className="flex flex-wrap gap-1 mt-1">
                {topSymptoms.map(([symptomName, count]) => (
                  <span 
                    key={symptomName}
                    className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full"
                  >
                    {symptomName} ({count})
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Recent entries */}
      <div className="space-y-3">
        <h4 className="text-sm font-medium text-muted-foreground">Recent Entries</h4>
        
        {entries.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground">
            <Activity className="h-8 w-8 mx-auto mb-2 opacity-50" />
            <p className="text-sm">No symptoms logged yet</p>
            <p className="text-xs">Click "Log Symptom" to start tracking</p>
          </div>
        ) : (
          <div className="space-y-2 max-h-64 overflow-y-auto">
            {entries.slice(0, 10).map((entry) => (
              <div 
                key={entry.id}
                className="flex items-start justify-between p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium text-sm">{entry.symptom}</span>
                    <span className={cn(
                      "text-xs px-1.5 py-0.5 rounded text-white",
                      getSeverityColor(entry.severity)
                    )}>
                      {entry.severity}/10
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {format(new Date(entry.date), "MMM d, yyyy")}
                  </p>
                  {entry.notes && (
                    <p className="text-xs text-muted-foreground mt-1 italic">
                      "{entry.notes}"
                    </p>
                  )}
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-muted-foreground hover:text-destructive"
                  onClick={() => handleDeleteEntry(entry.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        )}
      </div>

      <p className="text-xs text-muted-foreground mt-4 text-center">
        All data is stored locally on your device and never shared.
      </p>
    </div>
  );
}
