import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { DisclaimerBanner } from "@/components/shared/DisclaimerBanner";
import { RedFlagsBox } from "@/components/shared/RedFlagsBox";
import { FAQSection } from "@/components/shared/FAQSection";
import { FoodGuideExpanded, menTestosteroneMacros } from "@/components/shared/FoodGuideExpanded";
import { ExerciseLibrary, menTestosteroneExercises } from "@/components/shared/ExerciseLibrary";
import { Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const articles = [
  {
    title: "Understanding Testosterone",
    description: "What testosterone does, normal levels, and why it matters.",
    href: "/men/testosterone/basics",
  },
  {
    title: "Signs of Low Testosterone",
    description: "Common symptoms and when to get tested.",
    href: "/men/testosterone/low-t-signs",
  },
  {
    title: "Lifestyle & Testosterone",
    description: "Sleep, stress, exercise, and diet — what actually helps.",
    href: "/men/testosterone/lifestyle",
  },
  {
    title: "Testosterone Testing",
    description: "What tests to ask for and how to interpret results.",
    href: "/men/testosterone/testing",
  },
  {
    title: "Cortisol & Testosterone Connection",
    description: "How chronic stress tanks your testosterone.",
    href: "/men/testosterone/cortisol-connection",
  },
  {
    title: "Sleep & Testosterone",
    description: "Why poor sleep destroys hormone balance.",
    href: "/men/testosterone/sleep",
  },
  {
    title: "Exercise for Testosterone",
    description: "What type of exercise actually helps (and what doesn't).",
    href: "/men/testosterone/exercise",
  },
  {
    title: "TRT: What You Should Know",
    description: "Testosterone replacement therapy — facts, not hype.",
    href: "/men/testosterone/trt-facts",
  },
];

const faqs = [
  {
    question: "What's a normal testosterone level?",
    answer: "Total testosterone typically ranges from 300-1000 ng/dL, but 'normal' varies by age and individual. Free testosterone matters too. Don't obsess over numbers — symptoms and overall health matter more."
  },
  {
    question: "Can I boost testosterone naturally?",
    answer: "Yes, to an extent. Quality sleep, strength training, stress management, maintaining healthy weight, and adequate zinc/vitamin D can help optimize your natural levels. But no supplement will double your testosterone."
  },
  {
    question: "Do testosterone boosters work?",
    answer: "Most 'testosterone boosters' have little to no evidence. Some ingredients (like ashwagandha, zinc) may have modest effects. Save your money and focus on sleep, exercise, and stress management first."
  },
  {
    question: "At what age does testosterone decline?",
    answer: "Testosterone typically declines about 1% per year after age 30. But lifestyle factors often matter more than age. A healthy 50-year-old may have better levels than an unhealthy 30-year-old."
  },
  {
    question: "Should I get my testosterone tested?",
    answer: "If you have persistent symptoms (fatigue, low libido, mood changes, muscle loss), testing can be useful. Get tested in the morning when levels are highest. Test total and free testosterone."
  },
];

const redFlags = [
  "Sudden, severe loss of libido",
  "Erectile dysfunction that doesn't respond to lifestyle changes",
  "Breast tissue growth or tenderness",
  "Testicular pain or lumps",
  "Depression with physical symptoms",
  "Infertility concerns",
  "Unexplained significant muscle loss",
];

export default function TestosteronePage() {
  return (
    <Layout>
      <DisclaimerBanner />
      
      <section className="bg-gradient-to-b from-sage-50 to-background py-12">
        <div className="container">
          <Breadcrumb 
            items={[
              { label: "Men's Health", href: "/men" },
              { label: "Testosterone & Energy" }
            ]} 
          />
          
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                <Zap className="h-7 w-7" />
              </div>
              <div>
                <h1 className="font-serif text-3xl sm:text-4xl font-bold">
                  Testosterone & Energy
                </h1>
                <p className="text-muted-foreground mt-1">
                  Understanding the hormone that affects energy, mood, and vitality
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
              Testosterone is often called the "male hormone," but it's more accurate to say it's a hormone that 
              men have in higher amounts. It influences energy, mood, muscle mass, fat distribution, libido, 
              and mental clarity.
            </p>
            <p className="text-muted-foreground">
              Many men struggle with low energy, motivation, or vitality without realizing that testosterone 
              (or factors affecting it, like cortisol and sleep) may be involved. This isn't about chasing 
              unnaturally high levels — it's about understanding what's normal and what you can actually do.
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
            title="Nutrition for Testosterone Support"
            description="While no food will magically boost testosterone, certain nutrients are essential for hormone production."
            macros={menTestosteroneMacros}
            mealTips={[
              "Don't fear cholesterol — your body needs it to make testosterone",
              "Avoid severe calorie restriction — it tanks testosterone",
              "Minimize processed foods and excess alcohol",
              "Eat adequate protein distributed across meals",
            ]}
          />

          {/* Exercise Library */}
          <ExerciseLibrary 
            title="Exercise for Testosterone"
            description="Strength training is the most evidence-based way to support testosterone through exercise."
            categories={menTestosteroneExercises}
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
