import { Heart, Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { DisclaimerBanner } from "@/components/shared/DisclaimerBanner";
import { RedFlagsBox } from "@/components/shared/RedFlagsBox";
import { FAQSection, FAQItem } from "@/components/shared/FAQSection";
import { SourcesAccordion, Citation, CitationLink } from "@/components/shared/CitationSystem";
import { SectionDivider } from "@/components/shared/SectionDivider";
import { Button } from "@/components/ui/button";
import { FoodGuideExpanded, pcosMacros } from "@/components/shared/FoodGuideExpanded";
import { ExerciseLibrary, pcosExercises } from "@/components/shared/ExerciseLibrary";

// ✅ correct hero image as per mapping
import healthyFoodIndian from "@/assets/images/gentle-yoga.jpg";

/* ---------------- DATA ---------------- */

const citations: Citation[] = [
  {
    id: 1,
    title: "Polycystic ovary syndrome",
    source: "World Health Organization",
    url: "https://www.who.int/news-room/fact-sheets/detail/polycystic-ovary-syndrome",
    accessDate: "December 2024",
  },
  {
    id: 2,
    title: "Polycystic Ovary Syndrome (PCOS): FAQs",
    source: "American College of Obstetricians and Gynecologists",
    url: "https://www.acog.org/womens-health/faqs/polycystic-ovary-syndrome-pcos",
    accessDate: "December 2024",
  },
  {
    id: 3,
    title: "Polycystic Ovary Syndrome (PCOS)",
    source: "National Institute of Child Health and Human Development",
    url: "https://www.nichd.nih.gov/health/topics/pcos",
    accessDate: "December 2024",
  },
  {
    id: 4,
    title: "2023 International Evidence-Based Guideline for PCOS",
    source: "American Society for Reproductive Medicine",
    url: "https://www.asrm.org/practice-guidance/guidelines/",
    accessDate: "December 2024",
  },
];

const myths = [
  {
    myth: "You must have cysts on your ovaries to have PCOS",
    fact: "Despite the name, ovarian cysts are not required for diagnosis. Many women with PCOS have normal-looking ovaries.",
  },
  {
    myth: "PCOS only affects overweight women",
    fact: "PCOS can affect women of all body types. Lean PCOS exists and is often underdiagnosed.",
  },
  {
    myth: "You can't get pregnant if you have PCOS",
    fact: "PCOS can make conception harder but many women with PCOS conceive naturally or with help.",
  },
  {
    myth: "PCOS can be cured completely",
    fact: "PCOS is a chronic condition that can be managed effectively, but there's no permanent cure.",
  },
];

const triggers = [
  { category: "Genetic", items: ["Family history of PCOS", "Family history of diabetes", "Ethnic predisposition"] },
  { category: "Metabolic", items: ["Insulin resistance", "High insulin levels", "Central obesity"] },
  { category: "Lifestyle", items: ["Sedentary lifestyle", "High-sugar/refined carb diet", "Chronic stress"] },
  { category: "Hormonal", items: ["Elevated androgens", "Irregular ovulation", "Thyroid imbalances"] },
];

const safeSteps = [
  "Get properly diagnosed using Rotterdam criteria",
  "Track your cycles and symptoms",
  "Focus on balanced meals with protein, fiber, and healthy fats",
  "Include 150 minutes/week of moderate activity",
  "Prioritize sleep and stress management",
  "Monitor labs with your doctor regularly",
];

const redFlags = [
  "No periods for 3+ months (not pregnant)",
  "Very heavy or prolonged bleeding",
  "Rapid hair loss or excess facial/body hair",
  "Signs of diabetes (excess thirst, urination)",
  "Severe pelvic pain",
  "Depression or severe mood changes",
];

const faqs: FAQItem[] = [
  {
    question: "What's the difference between PCOS and PCOD?",
    answer:
      "PCOS is the medically accurate term. PCOD is an older, informal term often used in India. Both refer to the same condition.",
  },
  {
    question: "How is PCOS diagnosed?",
    answer:
      "Using Rotterdam criteria: any 2 of 3 — irregular periods, high androgens, or polycystic ovaries on ultrasound.",
  },
  {
    question: "Is PCOS linked to insulin resistance?",
    answer:
      "Yes. Most women with PCOS have some degree of insulin resistance, which worsens hormonal imbalance.",
  },
  {
    question: "Can PCOS go away?",
    answer:
      "PCOS is lifelong, but symptoms can significantly improve with correct lifestyle and medical support.",
  },
];

const articles = [
  { title: "PCOS Basics", href: "/pcos/pcos-basics" },
  { title: "Insulin Resistance Explained", href: "/pcos/insulin-resistance-simple" },
  { title: "PCOS & Acne / Hair", href: "/pcos/pcos-acne-hair" },
  { title: "Safe Weight Management", href: "/pcos/pcos-weight-loss-safe" },
  { title: "PCOS & Fertility", href: "/pcos/pcos-fertility" },
  { title: "Indian PCOS Diet Guide", href: "/pcos/indian-diet-guide" },
];

export default function PCOSPage() {
  return (
    <Layout>

      {/* ✅ UPDATED HERO (same as Periods, mapped image) */}
      <section className="bg-sage-50 py-16">
        <div className="container">
          <Breadcrumb items={[{ label: "PCOS / PCOD" }]} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-8">
            {/* LEFT */}
            <div>
              <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-4">
                PCOS / PCOD
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl">
                Clear, evidence-based information to understand, manage,
                and live well with PCOS.
              </p>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden bg-white shadow-sm aspect-[4/3]">
                <img
                  src={healthyFoodIndian}
                  alt="Healthy Indian food for PCOS management"
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
              <h2 className="font-serif text-2xl font-semibold mb-4">What is PCOS?</h2>
              <div className="prose prose-sage max-w-none text-muted-foreground space-y-4">
                <p>
                  PCOS (Polycystic Ovary Syndrome) is one of the most common hormonal disorders 
                  affecting women of reproductive age — up to 1 in 5 Indian women may have it.<CitationLink id={1} />
                </p>
                <p>
                  Despite the name, PCOS isn't just about ovarian cysts. It's a metabolic and 
                  hormonal condition that affects many body systems.<CitationLink id={2} />
                </p>
                <p>
                  The core features include:
                </p>
                <ul className="space-y-2 list-disc list-inside">
                  <li><strong>Irregular or absent periods</strong> — due to irregular ovulation</li>
                  <li><strong>Higher androgens</strong> — can cause acne, excess hair growth, hair thinning</li>
                  <li><strong>Insulin resistance</strong> — affects weight, energy, and blood sugar</li>
                  <li><strong>Polycystic ovaries</strong> — multiple small follicles (not dangerous cysts)</li>
                </ul>
                <p>
                  PCOS is highly variable — two women with PCOS can have very different symptoms.<CitationLink id={3} />
                </p>
              </div>
            </section>

            <SectionDivider />

            {/* Diagnosis */}
            <section>
              <h2 className="font-serif text-2xl font-semibold mb-4">How PCOS is diagnosed</h2>
              <div className="prose prose-sage max-w-none text-muted-foreground space-y-4">
                <p>
                  The most widely used diagnostic standard is the Rotterdam criteria.<CitationLink id={4} /> 
                  You need 2 out of 3:
                </p>
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="rounded-lg border border-border p-4 text-center">
                    <div className="text-2xl font-bold text-primary mb-2">1</div>
                    <p className="text-sm">Irregular or absent periods</p>
                  </div>
                  <div className="rounded-lg border border-border p-4 text-center">
                    <div className="text-2xl font-bold text-primary mb-2">2</div>
                    <p className="text-sm">Signs of high androgens (clinical or blood test)</p>
                  </div>
                  <div className="rounded-lg border border-border p-4 text-center">
                    <div className="text-2xl font-bold text-primary mb-2">3</div>
                    <p className="text-sm">Polycystic ovaries on ultrasound</p>
                  </div>
                </div>
                <p className="mt-4">
                  Your doctor will also rule out other conditions (thyroid issues, 
                  elevated prolactin, etc.) before confirming PCOS.
                </p>
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
              <h2 className="font-serif text-2xl font-semibold mb-4">What contributes to PCOS?</h2>
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
                These are evidence-based first steps. PCOS management is highly individual — 
                work with your healthcare team for personalized guidance.
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
              macros={pcosMacros}
              description="PCOS management benefits from blood sugar-friendly eating. You don't need extreme diets — focus on balance and insulin-friendly choices."
              mealTips={[
                "Pair carbs with protein/fat (e.g., roti with dal and sabzi)",
                "Eat vegetables first, then protein, then carbs",
                "Avoid skipping meals — it can worsen insulin spikes",
                "Consider eating larger meals earlier in the day"
              ]}
            />

            <SectionDivider />

            {/* Exercise Library */}
            <ExerciseLibrary 
              categories={pcosExercises}
              description="Exercise helps with insulin sensitivity, weight management, and mood — all important for PCOS. Aim for consistency over intensity."
            />

            <SectionDivider />

            {/* Red Flags */}
            <section>
              <RedFlagsBox
                items={redFlags}
                urgentNote="Please consult a gynecologist or endocrinologist for proper evaluation."
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
                  <Link to="/periods" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                    → Periods & Cycle
                  </Link>
                  <Link to="/hormonal-weight" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                    → Hormonal Weight & Insulin
                  </Link>
                  <Link to="/mood-pms" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                    → Mood & PMS
                  </Link>
                </div>
              </div>

              {/* CTA */}
              <div className="rounded-xl bg-gradient-to-br from-sage-100 to-terracotta-50 p-5 border border-sage-200">
                <h3 className="font-semibold mb-2">Need personalized guidance?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  PCOS management is individual. Consider consulting a gynecologist or endocrinologist.
                </p>
                <Button variant="hub" className="w-full" asChild>
                  <Link to="/resources">Find resources</Link>
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </Layout>
  );
}
