import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { DisclaimerBanner } from "@/components/shared/DisclaimerBanner";
import { RedFlagsBox } from "@/components/shared/RedFlagsBox";
import { FAQSection } from "@/components/shared/FAQSection";
import { FoodGuideExpanded, menSexualHealthMacros } from "@/components/shared/FoodGuideExpanded";
import { ExerciseLibrary, menSexualHealthExercises } from "@/components/shared/ExerciseLibrary";
import { Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const articles = [
  {
    title: "Testosterone & Libido",
    description: "Understanding the hormone-libido connection.",
    href: "/men/sexual-health/testosterone-libido",
  },
  {
    title: "Erectile Function Basics",
    description: "What causes issues and when to seek help.",
    href: "/men/sexual-health/erectile-function",
  },
  {
    title: "Stress & Sexual Health",
    description: "How cortisol affects desire and performance.",
    href: "/men/sexual-health/stress-impact",
  },
  {
    title: "Sleep & Sexual Function",
    description: "Why quality sleep matters for sexual health.",
    href: "/men/sexual-health/sleep-impact",
  },
  {
    title: "Cardiovascular Health Connection",
    description: "Heart health and sexual health are linked.",
    href: "/men/sexual-health/cardiovascular",
  },
  {
    title: "Energy & Vitality",
    description: "Building sustainable energy, not quick fixes.",
    href: "/men/sexual-health/energy-vitality",
  },
  {
    title: "Dopamine & Reward Pathways",
    description: "How overstimulation affects desire (porn, etc.).",
    href: "/men/sexual-health/dopamine-balance",
  },
  {
    title: "Fertility Basics",
    description: "What affects sperm quality and fertility.",
    href: "/men/sexual-health/fertility",
  },
];

const faqs = [
  {
    question: "Is low libido normal as I age?",
    answer: "Some decline is normal, but significant loss of interest may indicate hormonal issues (low testosterone, high cortisol), relationship factors, stress, or health conditions. It's worth investigating rather than accepting as inevitable."
  },
  {
    question: "Can stress really affect sexual function?",
    answer: "Absolutely. Stress raises cortisol, which suppresses testosterone and affects blood flow. The mind-body connection is real. Many men find that addressing stress significantly improves sexual health."
  },
  {
    question: "Is porn affecting my sexual health?",
    answer: "It can. Excessive porn use can alter dopamine pathways, creating unrealistic expectations and potentially contributing to desire or function issues with real partners. Consider taking breaks and observing the effects."
  },
  {
    question: "Does exercise improve sexual health?",
    answer: "Yes. Regular exercise improves cardiovascular health, testosterone levels, mood, and body confidence — all of which support sexual health. Strength training in particular is beneficial."
  },
  {
    question: "When should I see a doctor for ED?",
    answer: "If erectile issues are persistent (not occasional), affecting your relationship, or accompanied by other symptoms. ED can be an early warning sign of cardiovascular problems, so it's worth getting checked."
  },
];

const redFlags = [
  "Persistent erectile dysfunction (not occasional)",
  "Complete loss of libido",
  "Pain during intercourse or ejaculation",
  "Blood in semen or urine",
  "Testicular pain or lumps",
  "ED with chest pain or shortness of breath (cardiovascular warning)",
  "Fertility concerns after 12+ months of trying",
];

export default function SexualHealthPage() {
  return (
    <Layout>
      <DisclaimerBanner />
      
      <section className="bg-gradient-to-b from-sage-50 to-background py-12">
        <div className="container">
          <Breadcrumb 
            items={[
              { label: "Men's Health", href: "/men" },
              { label: "Sexual Health & Energy" }
            ]} 
          />
          
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                <Heart className="h-7 w-7" />
              </div>
              <div>
                <h1 className="font-serif text-3xl sm:text-4xl font-bold">
                  Sexual Health & Energy
                </h1>
                <p className="text-muted-foreground mt-1">
                  Understanding libido, vitality, and the hormonal connections
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container py-12">
        <div className="max-w-3xl mx-auto space-y-12">
          {/* Introduction */}
          <section className="prose prose-sage max-w-none">
            <p className="text-lg text-muted-foreground">
              Sexual health is often a taboo topic, but it's an important aspect of overall wellbeing. 
              Libido, energy, and sexual function are influenced by hormones (testosterone, cortisol), 
              cardiovascular health, mental health, sleep, and lifestyle factors.
            </p>
            <p className="text-muted-foreground">
              This section provides educational information — no shame, no judgment, no quick-fix promises. 
              Understanding the factors at play can help you take informed action or know when to seek 
              professional help.
            </p>
          </section>

          {/* Articles Grid */}
          <section>
            <h2 className="font-serif text-2xl font-semibold mb-6">Explore Topics</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {articles.map((article) => (
                <Link
                  key={article.href}
                  to={article.href}
                  className="group rounded-lg border border-border bg-card p-4 hover:border-primary/50 hover:shadow-md transition-all"
                >
                  <h3 className="font-semibold group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {article.description}
                  </p>
                  <span className="inline-flex items-center text-sm text-primary mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    Read more <ArrowRight className="ml-1 h-3 w-3" />
                  </span>
                </Link>
              ))}
            </div>
          </section>

          {/* Red Flags */}
          <RedFlagsBox 
            title="When to See a Doctor"
            flags={redFlags}
          />

          {/* Food Guide */}
          <FoodGuideExpanded 
            title="Nutrition for Sexual Health"
            description="Good nutrition supports hormone production, blood flow, and overall vitality."
            macros={menSexualHealthMacros}
            mealTips={[
              "Cardiovascular health = sexual health — eat heart-healthy foods",
              "Limit processed foods and excess sugar",
              "Stay hydrated — dehydration affects energy and performance",
              "Moderate alcohol — it may reduce inhibition but impairs function",
            ]}
          />

          {/* Exercise Library */}
          <ExerciseLibrary 
            title="Exercise for Vitality"
            description="Cardiovascular fitness and strength both support sexual health."
            categories={menSexualHealthExercises}
          />

          {/* FAQs */}
          <FAQSection 
            title="Common Questions"
            faqs={faqs}
          />

          {/* CTA */}
          <section className="rounded-xl bg-gradient-to-br from-sage-50 to-terracotta-50 border border-sage-200 p-8 text-center">
            <h2 className="font-serif text-xl font-semibold mb-3">
              Not sure where to start?
            </h2>
            <p className="text-muted-foreground mb-6">
              Take our quick assessment to find your focus area.
            </p>
            <Button variant="hero" asChild>
              <Link to="/men/quiz">Take the quiz</Link>
            </Button>
          </section>
        </div>
      </div>
    </Layout>
  );
}
