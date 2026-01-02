import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { DisclaimerBanner } from "@/components/shared/DisclaimerBanner";
import { RedFlagsBox } from "@/components/shared/RedFlagsBox";
import { FAQSection } from "@/components/shared/FAQSection";
import { FoodGuideExpanded, menMoodMacros } from "@/components/shared/FoodGuideExpanded";
import { ExerciseLibrary, menMoodExercises } from "@/components/shared/ExerciseLibrary";
import { Brain, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const articles = [
  {
    title: "Stress & Male Hormones",
    description: "How chronic stress disrupts testosterone and overall health.",
    href: "/men/mood/stress-hormones",
  },
  {
    title: "Anxiety: Hormonal Causes",
    description: "When anxiety isn't just psychological — the hormone connection.",
    href: "/men/mood/anxiety-hormones",
  },
  {
    title: "Sleep Deprivation Effects",
    description: "How poor sleep wrecks hormones, mood, and metabolism.",
    href: "/men/mood/sleep-deprivation",
  },
  {
    title: "Burnout & Adrenal Health",
    description: "Understanding burnout from a hormonal perspective.",
    href: "/men/mood/burnout",
  },
  {
    title: "Mood & Low Testosterone",
    description: "The connection between testosterone and depression in men.",
    href: "/men/mood/testosterone-mood",
  },
  {
    title: "Stress Management Techniques",
    description: "Evidence-based ways to lower cortisol and feel better.",
    href: "/men/mood/stress-management",
  },
  {
    title: "When to Seek Help",
    description: "Recognizing when professional support is needed.",
    href: "/men/mood/when-to-seek-help",
  },
  {
    title: "Nutrition for Mental Health",
    description: "Foods and nutrients that support brain and mood.",
    href: "/men/mood/nutrition-mental-health",
  },
];

const faqs = [
  {
    question: "Can low testosterone cause depression?",
    answer: "Yes, there's a bidirectional relationship. Low testosterone can contribute to depressive symptoms, and depression can lower testosterone. If you have persistent low mood with other symptoms (fatigue, low libido), getting hormones checked is reasonable."
  },
  {
    question: "Why do I feel burnt out all the time?",
    answer: "Chronic stress leads to sustained high cortisol, which eventually leads to burnout. This affects testosterone, thyroid, sleep, and energy. It's a real physiological state, not just being 'weak.' Recovery requires addressing root causes."
  },
  {
    question: "How does sleep affect mood?",
    answer: "Profoundly. Poor sleep increases cortisol, reduces testosterone, disrupts neurotransmitters, and impairs emotional regulation. Many men underestimate how much their mood issues are sleep-related. Prioritize 7-9 hours."
  },
  {
    question: "Is anxiety always psychological?",
    answer: "No. Anxiety can have hormonal components — thyroid issues, blood sugar swings, high cortisol, and low testosterone can all amplify or cause anxiety symptoms. It's worth ruling out physical causes."
  },
  {
    question: "Should men talk about mental health?",
    answer: "Absolutely. Men are often socialized to suppress emotions, which leads to worse outcomes. Seeking help is a sign of responsibility, not weakness. Professional support can be transformative."
  },
];

const redFlags = [
  "Persistent thoughts of self-harm or suicide (seek immediate help)",
  "Anxiety or depression affecting work and relationships",
  "Panic attacks or severe anxiety",
  "Insomnia lasting more than a few weeks",
  "Using alcohol or substances to cope",
  "Withdrawal from social activities",
  "Significant personality changes",
];

export default function MoodStressPage() {
  return (
    <Layout>
      <DisclaimerBanner />
      
      <section className="bg-gradient-to-b from-sage-50 to-background py-12">
        <div className="container">
          <Breadcrumb 
            items={[
              { label: "Men's Health", href: "/men" },
              { label: "Mood, Stress & Sleep" }
            ]} 
          />
          
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                <Brain className="h-7 w-7" />
              </div>
              <div>
                <h1 className="font-serif text-3xl sm:text-4xl font-bold">
                  Mood, Stress & Sleep
                </h1>
                <p className="text-muted-foreground mt-1">
                  Understanding the hormonal factors behind stress, anxiety, and burnout
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
              Many men suffer silently with stress, anxiety, burnout, and poor sleep — often dismissing these 
              as "just stress" or "part of life." But chronic stress has real physiological effects. It disrupts 
              cortisol, testosterone, thyroid function, and sleep — creating a vicious cycle.
            </p>
            <p className="text-muted-foreground">
              Understanding the hormonal connections can help you take effective action. Not all anxiety is 
              purely psychological. Not all fatigue is from working too hard. Sometimes, hormones are a 
              significant piece of the puzzle.
            </p>
          </section>

          {/* Crisis Resources */}
          <div className="rounded-lg border border-primary bg-primary/5 p-4">
            <p className="text-sm text-foreground">
              <strong>Need immediate support?</strong> If you're experiencing thoughts of self-harm or suicide, 
              please reach out: <strong>iCall:</strong> 9152987821 | <strong>Vandrevala Foundation:</strong> 1860-2662-345
            </p>
          </div>

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
            title="When to Seek Professional Help"
            flags={redFlags}
          />

          {/* Food Guide */}
          <FoodGuideExpanded 
            title="Nutrition for Mental Health"
            description="What you eat affects neurotransmitters and stress hormones. Good nutrition supports better mood."
            macros={menMoodMacros}
            mealTips={[
              "Stable blood sugar = stable mood — avoid skipping meals",
              "Caffeine after 2pm can worsen anxiety and sleep",
              "Alcohol may seem relaxing but worsens anxiety and sleep quality",
              "Omega-3 fats are especially important for brain health",
            ]}
          />

          {/* Exercise Library */}
          <ExerciseLibrary 
            title="Exercise for Mental Health"
            description="Movement is one of the most powerful tools for mood and stress management."
            categories={menMoodExercises}
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
