import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Calendar, Heart, Scale, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Layout } from "@/components/layout/Layout";
import { HubCard } from "@/components/shared/HubCard";
import { DisclaimerBanner } from "@/components/shared/DisclaimerBanner";
import { SectionDivider } from "@/components/shared/SectionDivider";
import { PDFResourceSection } from "@/components/shared/PDFResourceSection";
import { SymptomTracker } from "@/components/shared/SymptomTracker";
import heroWellness from "@/assets/images/hero-wellness.jpg";

const symptoms = [
  { id: "irregular", label: "Irregular periods (too early, too late, or unpredictable)" },
  { id: "heavy", label: "Very heavy or very light periods" },
  { id: "cramps", label: "Severe menstrual cramps or pain" },
  { id: "acne", label: "Acne, especially around jawline and chin" },
  { id: "hair", label: "Excess facial/body hair or hair thinning" },
  { id: "weight", label: "Unexplained weight gain, especially around belly" },
  { id: "fatigue", label: "Persistent fatigue or low energy" },
  { id: "cravings", label: "Intense sugar or carb cravings" },
  { id: "mood", label: "Mood swings, anxiety, or irritability" },
  { id: "sleep", label: "Sleep problems or insomnia" },
  { id: "bloating", label: "Bloating, especially before periods" },
];

const sciencePoints = [
  "Your hormones (estrogen, progesterone, insulin, cortisol) work together like an orchestra — when one is out of balance, others often follow.",
  "Stress, poor sleep, and diet directly affect hormone levels — it's not 'just in your head'.",
  "Many symptoms women dismiss as 'normal' may actually be signs worth understanding better.",
  "PCOS/PCOD, thyroid issues, and insulin resistance are closely connected and often overlap.",
  "Small lifestyle changes can make a meaningful difference — you don't need extreme diets or supplements."
];

const hubTopics = [
  {
    title: "Periods & Menstrual Cycle",
    description: "Understand your cycle, manage cramps, and learn what irregular periods might mean.",
    href: "/periods",
    icon: Calendar,
  },
  {
    title: "PCOS / PCOD",
    description: "Clear, practical information about polycystic ovary syndrome — diagnosis, symptoms, and management.",
    href: "/pcos",
    icon: Heart,
  },
  {
    title: "Hormonal Weight",
    description: "Why weight changes with hormones, the insulin connection, and sustainable approaches.",
    href: "/hormonal-weight",
    icon: Scale,
  },
  {
    title: "Mood & PMS",
    description: "PMS, PMDD, hormonal mood swings — understand patterns and find what helps.",
    href: "/mood-pms",
    icon: Brain,
  },
];

export default function HomePage() {
  const [checkedSymptoms, setCheckedSymptoms] = useState<string[]>([]);

  const toggleSymptom = (id: string) => {
    setCheckedSymptoms(prev => 
      prev.includes(id) 
        ? prev.filter(s => s !== id) 
        : [...prev, id]
    );
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sage-50 to-background py-16 sm:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground animate-fade-in">
                Hormonal health,{" "}
                <span className="text-primary">explained simply</span>
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-muted-foreground animate-slide-up">
                Irregular periods, PCOS/PCOD, unexplained weight changes, mood swings — 
                <span className="text-foreground font-medium"> often connected</span>. 
                Let's help you understand what's happening.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-4 animate-slide-up">
                <Button variant="hero" size="xl" asChild>
                  <a href="#start-here">
                    Start here
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button variant="hero-outline" size="lg" asChild>
                  <Link to="/quiz">Take the quiz</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative hidden lg:block">
              <img 
                src={heroWellness} 
                alt="Woman meditating peacefully surrounded by nature" 
                className="rounded-2xl shadow-lg w-full max-w-lg mx-auto"
              />
              <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-primary/10 blur-2xl" />
              <div className="absolute -top-6 -right-6 h-40 w-40 rounded-full bg-terracotta-100/50 blur-2xl" />
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 h-32 w-32 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-40 w-40 rounded-full bg-terracotta-100/50 blur-3xl" />
      </section>

      {/* Disclaimer */}
      <div className="container -mt-4 mb-8">
        <DisclaimerBanner variant="inline" />
      </div>

      {/* Symptom Checklist Section */}
      <section id="start-here" className="container py-12 scroll-mt-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-center mb-2">
            Do any of these sound familiar?
          </h2>
          <p className="text-center text-muted-foreground mb-8">
            This is not a diagnostic tool — just a starting point to help you explore.
          </p>

          <div className="grid sm:grid-cols-2 gap-3">
            {symptoms.map((symptom) => (
              <label
                key={symptom.id}
                className={`flex items-start gap-3 rounded-lg border p-4 cursor-pointer transition-all duration-200 ${
                  checkedSymptoms.includes(symptom.id)
                    ? "border-primary bg-sage-50"
                    : "border-border hover:border-sage-300 hover:bg-muted/30"
                }`}
              >
                <Checkbox
                  checked={checkedSymptoms.includes(symptom.id)}
                  onCheckedChange={() => toggleSymptom(symptom.id)}
                  className="mt-0.5"
                />
                <span className="text-sm leading-relaxed">{symptom.label}</span>
              </label>
            ))}
          </div>

          {checkedSymptoms.length > 0 && (
            <div className="mt-6 p-4 rounded-lg bg-sage-50 border border-sage-200 animate-scale-in">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">You checked {checkedSymptoms.length} symptom{checkedSymptoms.length > 1 ? 's' : ''}.</strong>{" "}
                Many of these can be connected to hormonal patterns. Scroll down to learn how, 
                or explore the topic that affects you most.
              </p>
            </div>
          )}
        </div>
      </section>

      <SectionDivider />

      {/* How These Connect Section */}
      <section className="container py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-center mb-8">
            How these can be connected
          </h2>
          
          <div className="space-y-4">
            {sciencePoints.map((point, index) => (
              <div 
                key={index}
                className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border"
              >
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-medium">
                  {index + 1}
                </div>
                <p className="text-muted-foreground">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Guided Split Section */}
      <section className="container py-12">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-serif text-2xl sm:text-3xl font-semibold mb-3">
            Which affects you the most right now?
          </h2>
          <p className="text-muted-foreground mb-8">
            Choose one to start — you can always explore the others later.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {hubTopics.map((topic) => (
              <HubCard key={topic.href} {...topic} />
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Symptom Tracker Section */}
      <section className="container py-12">
        <div className="mx-auto max-w-2xl">
          <SymptomTracker variant="women" />
        </div>
      </section>

      <SectionDivider />

      {/* PDF Resource Section */}
      <section className="container py-12">
        <div className="mx-auto max-w-2xl">
          <PDFResourceSection section="women" />
        </div>
      </section>
    </Layout>
  );
}
