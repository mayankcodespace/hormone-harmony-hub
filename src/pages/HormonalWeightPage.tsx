import { Scale, Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { DisclaimerBanner } from "@/components/shared/DisclaimerBanner";
import { RedFlagsBox } from "@/components/shared/RedFlagsBox";
import { FAQSection, FAQItem } from "@/components/shared/FAQSection";
import { SourcesAccordion, Citation, CitationLink } from "@/components/shared/CitationSystem";
import { SectionDivider } from "@/components/shared/SectionDivider";
import { Button } from "@/components/ui/button";
import { FoodGuideExpanded, weightMacros } from "@/components/shared/FoodGuideExpanded";
import { ExerciseLibrary, weightExercises } from "@/components/shared/ExerciseLibrary";

// ✅ hero image as per mapping
import natureWalk from "@/assets/images/nature-walk.jpg";

/* ---------------- DATA ---------------- */

const citations: Citation[] = [
  {
    id: 1,
    title: "Obesity and overweight",
    source: "World Health Organization",
    url: "https://www.who.int/news-room/fact-sheets/detail/obesity-and-overweight",
    accessDate: "December 2024",
  },
  {
    id: 2,
    title: "Insulin Resistance and Prediabetes",
    source: "National Institute of Diabetes and Digestive and Kidney Diseases",
    url: "https://www.niddk.nih.gov/health-information/diabetes/overview/what-is-diabetes/prediabetes-insulin-resistance",
    accessDate: "December 2024",
  },
  {
    id: 3,
    title: "Metabolic Effects of Estrogens and Androgens",
    source: "Endocrine Society",
    url: "https://www.endocrine.org/",
    accessDate: "December 2024",
  },
];

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
  { category: "Hormonal", items: ["Insulin resistance", "Thyroid imbalance", "High cortisol", "Estrogen dominance"] },
  { category: "Lifestyle", items: ["Poor sleep", "Chronic stress", "Sedentary habits", "Irregular meals"] },
  { category: "Diet", items: ["Refined carbs", "Processed foods", "Eating too little", "Nutrient gaps"] },
  { category: "Life stages", items: ["PCOS", "Perimenopause", "Post-pregnancy", "Menopause"] },
];

const safeSteps = [
  "Check thyroid and fasting insulin if needed",
  "Eat protein at every meal",
  "Increase fiber for blood sugar stability",
  "Prioritize sleep",
  "Manage stress actively",
  "Avoid skipping meals",
];

const redFlags = [
  "Rapid unexplained weight gain",
  "Weight gain with fatigue or hair loss",
  "Weight gain with irregular periods",
  "Stretch marks or skin changes",
  "No weight change despite sustained effort",
  "Disordered eating patterns",
];

const faqs: FAQItem[] = [
  {
    question: "Why does belly fat increase first?",
    answer:
      "Belly fat is closely linked to insulin resistance and cortisol. Managing blood sugar and stress helps reduce it.",
  },
  {
    question: "How is insulin resistance linked to weight?",
    answer:
      "High insulin promotes fat storage and blocks fat burning. Improving insulin sensitivity makes weight loss easier.",
  },
  {
    question: "Can I lose weight with PCOS?",
    answer:
      "Yes, but progress may be slower. Blood sugar management works better than extreme calorie cutting.",
  },
  {
    question: "Should I cut carbs completely?",
    answer:
      "No. Focus on quality, pairing carbs with protein/fat, and portion control.",
  },
];

const articles = [
  { title: "Understanding Hormonal Weight Gain", href: "/hormonal-weight/why-weight-changes" },
  { title: "Insulin Resistance Explained", href: "/hormonal-weight/insulin-resistance" },
  { title: "Cortisol & Belly Fat", href: "/hormonal-weight/cortisol-belly-fat" },
  { title: "Thyroid & Weight", href: "/hormonal-weight/thyroid-weight" },
  { title: "Exercise for Hormonal Weight", href: "/hormonal-weight/exercise-guide" },
  { title: "Indian Diet for Blood Sugar", href: "/hormonal-weight/indian-diet" },
];

export default function HormonalWeightPage() {
  return (
    <Layout>

      {/* ✅ UPDATED HERO (same system as Periods & PCOS) */}
      <section className="bg-sage-50 py-16">
        <div className="container">
          <Breadcrumb items={[{ label: "Hormonal Weight" }]} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-8">
            {/* LEFT */}
            <div>
              <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-4">
                Hormonal Weight
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl">
                Understanding weight changes, insulin resistance,
                and sustainable approaches that actually work.
              </p>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden bg-white shadow-sm aspect-[4/3]">
                <img
                  src={natureWalk}
                  alt="Walking in nature for hormonal balance"
                  className="w-full h-full object-contain p-6"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ✅ HERO END */}

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
                  Weight isn't just about calories in vs. calories out. Hormones play a crucial 
                  role in how your body stores and burns fat, regulates hunger, and responds to food.<CitationLink id={1} />
                </p>
                <p>
                  Key hormones involved in weight:
                </p>
                <ul className="space-y-2 list-disc list-inside">
                  <li><strong>Insulin:</strong> The "storage hormone" — high levels promote fat storage</li>
                  <li><strong>Cortisol:</strong> Stress hormone that encourages belly fat storage</li>
                  <li><strong>Thyroid hormones:</strong> Control metabolism speed</li>
                  <li><strong>Estrogen & Progesterone:</strong> Affect fat distribution and water retention</li>
                  <li><strong>Leptin & Ghrelin:</strong> Hunger and fullness signals</li>
                </ul>
                <p>
                  When these hormones are out of balance, weight changes can happen even without 
                  major changes in diet or exercise. This is why "eat less, move more" doesn't 
                  always work.<CitationLink id={2} />
                </p>
              </div>
            </section>

            <SectionDivider />

            {/* Insulin Resistance */}
            <section>
              <h2 className="font-serif text-2xl font-semibold mb-4">Understanding insulin resistance</h2>
              <div className="prose prose-sage max-w-none text-muted-foreground space-y-4">
                <p>
                  Insulin resistance is when your cells don't respond well to insulin. 
                  Your body compensates by making more insulin, which:
                </p>
                <div className="grid sm:grid-cols-2 gap-4 not-prose">
                  <div className="rounded-lg border border-border p-4">
                    <h4 className="font-semibold text-foreground mb-2">Signs of insulin resistance</h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Weight gain, especially around belly</li>
                      <li>• Sugar/carb cravings</li>
                      <li>• Fatigue after meals</li>
                      <li>• Difficulty losing weight</li>
                      <li>• Dark patches on skin (acanthosis)</li>
                    </ul>
                  </div>
                  <div className="rounded-lg border border-border p-4">
                    <h4 className="font-semibold text-foreground mb-2">What helps</h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Protein with every meal</li>
                      <li>• Fiber-rich foods</li>
                      <li>• Strength training</li>
                      <li>• Walking after meals</li>
                      <li>• Adequate sleep</li>
                    </ul>
                  </div>
                </div>
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
              macros={weightMacros}
              description="You don't need to give up Indian food. Focus on balance and blood sugar-friendly eating for sustainable weight management."
              mealTips={[
                "Start meals with sabzi/salad, then protein, then carbs",
                "Eat protein at every meal — it's your satiety secret",
                "Avoid eating large portions of carbs alone",
                "Don't skip meals — it backfires hormonally"
              ]}
            />

            <SectionDivider />

            {/* Exercise Library */}
            <ExerciseLibrary 
              categories={weightExercises}
              description="The right kind of exercise helps insulin sensitivity and hormonal balance. More isn't always better — prioritize strength and daily movement."
            />

            <SectionDivider />

            {/* Red Flags */}
            <section>
              <RedFlagsBox
                items={redFlags}
                urgentNote="If weight changes are sudden or unexplained, please see a doctor for thyroid, hormone, and metabolic testing."
              />
            </section>

            <SectionDivider />

            {/* FAQs */}
            <FAQSection items={faqs} />

            {/* Sources */}
            <SourcesAccordion citations={citations} lastUpdated="December 2024" />
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
                  <Link to="/pcos" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                    → PCOS / PCOD
                  </Link>
                  <Link to="/periods" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                    → Periods & Cycle
                  </Link>
                  <Link to="/mood-pms" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                    → Mood & PMS
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
                  <Link to="/quiz">Find your path</Link>
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </Layout>
  );
}
