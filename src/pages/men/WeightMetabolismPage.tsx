import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { DisclaimerBanner } from "@/components/shared/DisclaimerBanner";
import { RedFlagsBox } from "@/components/shared/RedFlagsBox";
import { FAQSection } from "@/components/shared/FAQSection";
import { FoodGuideExpanded, menWeightMacros } from "@/components/shared/FoodGuideExpanded";
import { ExerciseLibrary, menWeightExercises } from "@/components/shared/ExerciseLibrary";
import { Scale, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const articles = [
  {
    title: "Why Men Gain Belly Fat",
    description: "The cortisol-insulin connection and why willpower isn't enough.",
    href: "/men/weight/belly-fat",
  },
  {
    title: "Insulin Resistance Explained",
    description: "How blood sugar issues drive weight gain and fatigue.",
    href: "/men/weight/insulin-resistance",
  },
  {
    title: "Cortisol & Fat Storage",
    description: "Why chronic stress makes you store fat, especially around the belly.",
    href: "/men/weight/cortisol-fat",
  },
  {
    title: "Sleep & Weight Connection",
    description: "Poor sleep disrupts hormones that control hunger and metabolism.",
    href: "/men/weight/sleep-weight",
  },
  {
    title: "Sustainable Fat Loss",
    description: "Evidence-based approaches that actually work long-term.",
    href: "/men/weight/sustainable-approach",
  },
  {
    title: "Exercise for Fat Loss",
    description: "Strength training, cardio, and why movement matters most.",
    href: "/men/weight/exercise-guide",
  },
  {
    title: "Indian Diet for Weight Loss",
    description: "Practical nutrition guidance with Indian food examples.",
    href: "/men/weight/indian-diet",
  },
  {
    title: "Thyroid & Metabolism",
    description: "How thyroid issues affect weight in men.",
    href: "/men/weight/thyroid",
  },
];

const faqs = [
  {
    question: "Why is belly fat so hard to lose?",
    answer: "Belly fat (visceral fat) is metabolically active and strongly influenced by cortisol and insulin. High stress and poor sleep make it worse. It's often the last to go because it's driven by hormonal factors, not just calories."
  },
  {
    question: "Should I do cardio or weights for fat loss?",
    answer: "Both help, but strength training is underrated. Muscle increases resting metabolism. Do strength training 3x/week minimum, add cardio for heart health, and prioritize daily walking (most underrated tool)."
  },
  {
    question: "Are low-carb diets best for men?",
    answer: "Not necessarily. What matters is: adequate protein, calorie control, and sustainability. Low-carb can help with blood sugar issues, but extreme restriction isn't necessary for most. Find what you can stick to."
  },
  {
    question: "Can hormones prevent weight loss?",
    answer: "Yes. Low testosterone, high cortisol, insulin resistance, and thyroid issues can all make fat loss harder. If you're doing everything right but not seeing results, get your hormones checked."
  },
  {
    question: "How much protein do I need?",
    answer: "For fat loss while preserving muscle, aim for 1.6-2.2g protein per kg body weight. Distribute across meals. This is higher than typical Indian diets, so you may need to intentionally increase protein."
  },
];

const redFlags = [
  "Rapid, unexplained weight gain (5+ kg in weeks)",
  "Weight gain with severe fatigue and cold intolerance",
  "Skin changes (dark patches, stretch marks)",
  "Weight gain with facial puffiness",
  "Difficulty losing weight despite significant lifestyle changes",
  "Weight gain with mood changes or depression",
];

export default function WeightMetabolismPage() {
  return (
    <Layout>
      <DisclaimerBanner />
      
      <section className="bg-gradient-to-b from-sage-50 to-background py-12">
        <div className="container">
          <Breadcrumb 
            items={[
              { label: "Men's Health", href: "/men" },
              { label: "Weight & Metabolism" }
            ]} 
          />
          
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                <Scale className="h-7 w-7" />
              </div>
              <div>
                <h1 className="font-serif text-3xl sm:text-4xl font-bold">
                  Weight & Metabolism
                </h1>
                <p className="text-muted-foreground mt-1">
                  Understanding the hormonal factors behind stubborn weight
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
              Many men struggle with stubborn belly fat, weight gain despite "eating less," or difficulty 
              losing weight even with exercise. The common advice of "eat less, move more" often fails because 
              it ignores the hormonal factors at play.
            </p>
            <p className="text-muted-foreground">
              Cortisol (stress hormone), insulin (blood sugar hormone), testosterone, and thyroid hormones 
              all influence how your body stores and burns fat. Understanding these connections can help you 
              take a smarter approach to weight management.
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
            title="Nutrition for Weight Management"
            description="Sustainable fat loss isn't about extreme diets — it's about smart choices you can maintain."
            macros={menWeightMacros}
            mealTips={[
              "Prioritize protein at every meal — it's the most satiating macronutrient",
              "Eat vegetables first to help with portion control",
              "Don't drink your calories — avoid sugary drinks and limit alcohol",
              "Post-meal walks significantly help blood sugar control",
            ]}
          />

          {/* Exercise Library */}
          <ExerciseLibrary 
            title="Exercise for Weight Management"
            description="Strength training and daily movement are your biggest levers for fat loss."
            categories={menWeightExercises}
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
