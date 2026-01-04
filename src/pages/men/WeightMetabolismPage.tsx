import { Scale, Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { DisclaimerBanner } from "@/components/shared/DisclaimerBanner";
import { RedFlagsBox } from "@/components/shared/RedFlagsBox";
import { FAQSection, FAQItem } from "@/components/shared/FAQSection";
import { SectionDivider } from "@/components/shared/SectionDivider";
import { Button } from "@/components/ui/button";
import { FoodGuideExpanded, menWeightMacros } from "@/components/shared/FoodGuideExpanded";
import { ExerciseLibrary, menWeightExercises } from "@/components/shared/ExerciseLibrary";
import healthyFoodIndian from "@/assets/images/healthy-food-indian.jpg";

const myths = [
  {
    myth: "If you can't lose weight, you're just not trying hard enough",
    fact: "Hormonal imbalances can genuinely make weight loss harder. It's not always about willpower.",
  },
  {
    myth: "Extreme dieting is the best solution",
    fact: "Very low-calorie diets can worsen hormonal balance. Sustainable changes work better.",
  },
  {
    myth: "All calories affect the body the same way",
    fact: "Hormones influence how food is processed. Blood sugar response matters.",
  },
  {
    myth: "You just need more cardio",
    fact: "Excessive cardio can increase cortisol. Strength + balance works better.",
  },
];

const triggers = [
  { category: "Hormonal", items: ["Low testosterone", "Insulin resistance", "High cortisol", "Thyroid issues"] },
  { category: "Lifestyle", items: ["Poor sleep", "Chronic stress", "Sedentary work", "Irregular meals"] },
  { category: "Diet", items: ["Refined carbs", "Processed foods", "Eating too little", "Protein deficiency"] },
  { category: "Age-related", items: ["Metabolism slowdown", "Muscle loss", "Hormonal decline", "Activity reduction"] },
];

const safeSteps = [
  "Check testosterone and thyroid if struggling",
  "Eat protein at every meal (1.6-2.2g/kg body weight)",
  "Strength train at least 3x per week",
  "Walk 8,000-10,000 steps daily",
  "Prioritize 7-8 hours of quality sleep",
  "Manage stress actively — cortisol promotes belly fat",
];

const redFlags = [
  "Rapid unexplained weight gain",
  "Weight gain with severe fatigue or cold intolerance",
  "Skin changes (dark patches, stretch marks)",
  "Weight gain with facial puffiness",
  "Difficulty losing weight despite significant lifestyle changes",
  "Weight gain with mood changes or depression",
];

const faqs: FAQItem[] = [
  {
    question: "Why is belly fat so hard to lose?",
    answer: "Belly fat (visceral fat) is metabolically active and strongly influenced by cortisol and insulin. High stress and poor sleep make it worse. It's often the last to go because it's driven by hormonal factors.",
  },
  {
    question: "Should I do cardio or weights for fat loss?",
    answer: "Both help, but strength training is underrated. Muscle increases resting metabolism. Do strength training 3x/week minimum, add cardio for heart health, and prioritize daily walking.",
  },
  {
    question: "Are low-carb diets best for men?",
    answer: "Not necessarily. What matters is: adequate protein, calorie control, and sustainability. Low-carb can help with blood sugar issues, but extreme restriction isn't necessary for most.",
  },
  {
    question: "How much protein do I need?",
    answer: "For fat loss while preserving muscle, aim for 1.6-2.2g protein per kg body weight. Distribute across meals. This is higher than typical Indian diets.",
  },
];

const articles = [
  { title: "Why Men Gain Belly Fat", href: "/men/weight/belly-fat" },
  { title: "Insulin Resistance Explained", href: "/men/weight/insulin-resistance" },
  { title: "Cortisol & Fat Storage", href: "/men/weight/cortisol-fat" },
  { title: "Sleep & Weight Connection", href: "/men/weight/sleep-weight" },
  { title: "Sustainable Fat Loss", href: "/men/weight/sustainable-approach" },
  { title: "Exercise for Fat Loss", href: "/men/weight/exercise-guide" },
  { title: "Indian Diet for Weight Loss", href: "/men/weight/indian-diet" },
  { title: "Thyroid & Metabolism", href: "/men/weight/thyroid" },
];

export default function WeightMetabolismPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-sage-50 py-16">
        <div className="container">
          <Breadcrumb items={[
            { label: "Men's Health", href: "/men" },
            { label: "Weight & Metabolism" }
          ]} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-8">
            <div>
              <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-4">
                Weight & Metabolism
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl">
                Understanding why stubborn weight happens, the insulin-cortisol connection, 
                and sustainable approaches that actually work.
              </p>
            </div>

            <div className="relative">
              <div className="rounded-3xl overflow-hidden bg-white shadow-sm aspect-[4/3]">
                <img
                  src={healthyFoodIndian}
                  alt="Healthy Indian food for weight management"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container py-8">
        <DisclaimerBanner variant="inline" className="mb-8" />

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* What's Happening */}
            <section>
              <h2 className="font-serif text-2xl font-semibold mb-4">Why hormones affect weight</h2>
              <div className="prose prose-sage max-w-none text-muted-foreground space-y-4">
                <p>
                  Many men struggle with stubborn belly fat, weight gain despite "eating less," or difficulty 
                  losing weight even with exercise. The common advice of "eat less, move more" often fails because 
                  it ignores the hormonal factors at play.
                </p>
                <p>Key hormones involved in weight:</p>
                <ul className="space-y-2 list-disc list-inside">
                  <li><strong>Insulin:</strong> The "storage hormone" — high levels promote fat storage</li>
                  <li><strong>Cortisol:</strong> Stress hormone that encourages belly fat storage</li>
                  <li><strong>Testosterone:</strong> Low levels linked to increased body fat</li>
                  <li><strong>Thyroid hormones:</strong> Control metabolism speed</li>
                  <li><strong>Leptin & Ghrelin:</strong> Hunger and fullness signals</li>
                </ul>
              </div>
            </section>

            <SectionDivider />

            {/* Common Myths */}
            <section>
              <h2 className="font-serif text-2xl font-semibold mb-4">Common myths — and the facts</h2>
              <div className="space-y-4">
                {myths.map((item, index) => (
                  <div key={index} className="myth-box">
                    <p className="text-sm font-medium text-destructive mb-2">
                      ❌ Myth: "{item.myth}"
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <Check className="inline h-4 w-4 text-primary mr-1" />
                      <strong className="text-foreground">Fact:</strong> {item.fact}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <SectionDivider />

            {/* Common Triggers */}
            <section>
              <h2 className="font-serif text-2xl font-semibold mb-4">What contributes to hormonal weight</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {triggers.map((group) => (
                  <div key={group.category} className="rounded-lg border border-border p-4">
                    <h3 className="font-semibold mb-2">{group.category}</h3>
                    <ul className="space-y-1">
                      {group.items.map((item, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-sage-400">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <SectionDivider />

            {/* Start Safe Routine */}
            <section>
              <h2 className="font-serif text-2xl font-semibold mb-4">"Start-safe" routine</h2>
              <p className="text-muted-foreground mb-4">
                These are sustainable starting points — not a quick-fix diet. 
                Focus on consistency over perfection.
              </p>
              <div className="safe-start-box">
                <ul className="space-y-3">
                  {safeSteps.map((step, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-medium">
                        {index + 1}
                      </div>
                      <span className="text-sm">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <SectionDivider />

            {/* Food Guide */}
            <FoodGuideExpanded 
              macros={menWeightMacros}
              description="Sustainable fat loss isn't about extreme diets — it's about smart choices you can maintain."
              mealTips={[
                "Prioritize protein at every meal — it's the most satiating macronutrient",
                "Eat vegetables first to help with portion control",
                "Don't drink your calories — avoid sugary drinks and limit alcohol",
                "Post-meal walks significantly help blood sugar control",
              ]}
            />

            <SectionDivider />

            {/* Exercise Library */}
            <ExerciseLibrary 
              categories={menWeightExercises}
              description="Strength training and daily movement are your biggest levers for fat loss."
            />

            <SectionDivider />

            {/* Red Flags */}
            <section>
              <RedFlagsBox
                items={redFlags}
                urgentNote="If weight changes are sudden or unexplained, please see a doctor for hormone and metabolic testing."
              />
            </section>

            <SectionDivider />

            {/* FAQs */}
            <FAQSection items={faqs} />
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Articles List */}
              <div className="rounded-xl border border-border bg-card p-5">
                <h3 className="font-semibold mb-4">Related articles</h3>
                <ul className="space-y-2">
                  {articles.map((article) => (
                    <li key={article.href}>
                      <Link 
                        to={article.href}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                      >
                        <ArrowRight className="h-3 w-3" />
                        {article.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Related Hubs */}
              <div className="rounded-xl border border-border bg-card p-5">
                <h3 className="font-semibold mb-4">Related topics</h3>
                <div className="space-y-3">
                  <Link to="/men/testosterone" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                    → Testosterone & Energy
                  </Link>
                  <Link to="/men/mood-stress" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                    → Mood, Stress & Sleep
                  </Link>
                  <Link to="/men/sexual-health" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                    → Sexual Health & Energy
                  </Link>
                </div>
              </div>

              {/* CTA */}
              <div className="rounded-xl bg-gradient-to-br from-sage-100 to-terracotta-50 p-5 border border-sage-200">
                <h3 className="font-semibold mb-2">Struggling with weight?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Consider getting hormone, thyroid, and insulin levels checked by a doctor.
                </p>
                <Button variant="hub" className="w-full" asChild>
                  <Link to="/men/quiz">Find your path</Link>
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </Layout>
  );
}