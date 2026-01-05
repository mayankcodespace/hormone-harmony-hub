import { Heart, Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { DisclaimerBanner } from "@/components/shared/DisclaimerBanner";
import { RedFlagsBox } from "@/components/shared/RedFlagsBox";
import { FAQSection, FAQItem } from "@/components/shared/FAQSection";
import { SectionDivider } from "@/components/shared/SectionDivider";
import { Button } from "@/components/ui/button";
import { FoodGuideExpanded, menSexualHealthMacros } from "@/components/shared/FoodGuideExpanded";
import { ExerciseLibrary, menSexualHealthExercises } from "@/components/shared/ExerciseLibrary";
import { SourcesAccordion, Citation } from "@/components/shared/CitationSystem";
import menRelationship from "@/assets/images/men-relationship.jpg";

const citations: Citation[] = [
  {
    id: 1,
    title: "Testosterone and male sexual function",
    source: "Journal of Clinical Endocrinology & Metabolism, 2019",
    url: "https://academic.oup.com/jcem/article/104/7/2602/5335218",
    accessDate: "January 2026",
  },
  {
    id: 2,
    title: "Erectile dysfunction and cardiovascular disease",
    source: "European Heart Journal, 2020",
    url: "https://academic.oup.com/eurheartj/article/41/24/2267/5823647",
    accessDate: "January 2026",
  },
  {
    id: 3,
    title: "Lifestyle factors and male sexual health",
    source: "Andrology, 2021",
    url: "https://pubmed.ncbi.nlm.nih.gov/33067929/",
    accessDate: "January 2026",
  },
  {
    id: 4,
    title: "Psychological factors in sexual dysfunction",
    source: "Sexual Medicine Reviews, 2020",
    url: "https://pubmed.ncbi.nlm.nih.gov/31928919/",
    accessDate: "January 2026",
  },
];

const myths = [
  {
    myth: "Sexual issues are just psychological",
    fact: "Many have physical/hormonal causes — testosterone, blood flow, medications, and stress all play roles.",
  },
  {
    myth: "ED only happens to older men",
    fact: "ED can occur at any age. Lifestyle factors, stress, and health conditions affect men of all ages.",
  },
  {
    myth: "Low libido means something is wrong with you",
    fact: "Libido naturally varies. Stress, sleep, hormones, and relationship factors all influence desire.",
  },
  {
    myth: "Supplements can fix everything",
    fact: "Most supplements have little evidence. Address root causes — sleep, stress, hormones, cardiovascular health.",
  },
];

const triggers = [
  { category: "Hormonal", items: ["Low testosterone", "High cortisol", "Thyroid issues", "Elevated prolactin"] },
  { category: "Lifestyle", items: ["Poor sleep", "Chronic stress", "Sedentary lifestyle", "Excess alcohol"] },
  { category: "Physical", items: ["Cardiovascular issues", "Obesity", "Diabetes", "Medications"] },
  { category: "Psychological", items: ["Stress/anxiety", "Depression", "Relationship issues", "Performance anxiety"] },
];

const safeSteps = [
  "Prioritize cardiovascular health — heart health = sexual health",
  "Get quality sleep — testosterone is produced during sleep",
  "Manage stress actively — cortisol suppresses testosterone",
  "Exercise regularly — especially strength training",
  "Limit alcohol — it impairs function despite lowering inhibition",
  "Address underlying health conditions",
];

const redFlags = [
  "Persistent erectile dysfunction (not occasional)",
  "Complete loss of libido",
  "Pain during intercourse or ejaculation",
  "Blood in semen or urine",
  "Testicular pain or lumps",
  "ED with chest pain or shortness of breath (cardiovascular warning)",
];

const faqs: FAQItem[] = [
  {
    question: "Is low libido normal as I age?",
    answer: "Some decline is normal, but significant loss of interest may indicate hormonal issues, health conditions, or stress. It's worth investigating rather than accepting as inevitable.",
  },
  {
    question: "Can stress really affect sexual function?",
    answer: "Absolutely. Stress raises cortisol, which suppresses testosterone and affects blood flow. Many men find that addressing stress significantly improves sexual health.",
  },
  {
    question: "Does exercise improve sexual health?",
    answer: "Yes. Regular exercise improves cardiovascular health, testosterone levels, mood, and body confidence — all of which support sexual health.",
  },
  {
    question: "When should I see a doctor for ED?",
    answer: "If erectile issues are persistent, affecting your relationship, or accompanied by other symptoms. ED can be an early warning sign of cardiovascular problems.",
  },
];

const articles = [
  { title: "Testosterone & Libido", href: "/men/sexual-health/testosterone-libido" },
  { title: "Erectile Function Basics", href: "/men/sexual-health/erectile-function" },
  { title: "Stress & Sexual Health", href: "/men/sexual-health/stress-impact" },
  { title: "Sleep & Sexual Health", href: "/men/sexual-health/sleep-impact" },
  { title: "Heart Health Connection", href: "/men/sexual-health/cardiovascular" },
  { title: "Male Fertility", href: "/men/sexual-health/fertility" },
  { title: "Dopamine & Desire", href: "/men/sexual-health/dopamine-desire" },
];

export default function SexualHealthPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-sage-50 py-16">
        <div className="container">
          <Breadcrumb items={[
            { label: "Men's Health", href: "/men" },
            { label: "Sexual Health & Energy" }
          ]} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-8">
            <div>
              <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-4">
                Sexual Health & Energy
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl">
                Understanding libido, vitality, and the hormonal connections — 
                with no shame, no judgment, just clarity.
              </p>
            </div>

            <div className="relative">
              <div className="rounded-3xl overflow-hidden bg-white shadow-sm aspect-[4/3]">
                <img
                  src={menRelationship}
                  alt="Couple wellness and vitality"
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
              <h2 className="font-serif text-2xl font-semibold mb-4">Why hormones affect sexual health</h2>
              <div className="prose prose-sage max-w-none text-muted-foreground space-y-4">
                <p>
                  Sexual health is often a taboo topic, but it's an important aspect of overall wellbeing. 
                  Libido, energy, and sexual function are influenced by hormones (testosterone, cortisol), 
                  cardiovascular health, mental health, sleep, and lifestyle factors.
                </p>
                <p>Key factors at play:</p>
                <ul className="space-y-2 list-disc list-inside">
                  <li><strong>Testosterone:</strong> Primary driver of libido and sexual function</li>
                  <li><strong>Cortisol:</strong> High levels suppress testosterone and desire</li>
                  <li><strong>Cardiovascular health:</strong> Blood flow is essential for function</li>
                  <li><strong>Sleep:</strong> Testosterone is produced during sleep</li>
                  <li><strong>Mental health:</strong> Stress and anxiety significantly impact desire</li>
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
              <h2 className="font-serif text-2xl font-semibold mb-4">What affects sexual health</h2>
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
                These are evidence-based lifestyle factors that support sexual health. 
                Address these before looking for quick fixes.
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
              macros={menSexualHealthMacros}
              description="Good nutrition supports hormone production, blood flow, and overall vitality."
              mealTips={[
                "Cardiovascular health = sexual health — eat heart-healthy foods",
                "Limit processed foods and excess sugar",
                "Stay hydrated — dehydration affects energy and performance",
                "Moderate alcohol — it may reduce inhibition but impairs function",
              ]}
            />

            <SectionDivider />

            {/* Exercise Library */}
            <ExerciseLibrary 
              categories={menSexualHealthExercises}
              description="Cardiovascular fitness and strength both support sexual health."
            />

            <SectionDivider />

            {/* Red Flags */}
            <section>
              <RedFlagsBox
                items={redFlags}
                urgentNote="If you experience any of these, please consult a urologist or your doctor."
              />
            </section>

            <SectionDivider />

            {/* FAQs */}
            <FAQSection items={faqs} />

            {/* Sources & References */}
            <SourcesAccordion citations={citations} lastUpdated="January 2026" />
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
                  <Link to="/men/weight-metabolism" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                    → Weight & Metabolism
                  </Link>
                  <Link to="/men/mood-stress" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                    → Mood, Stress & Sleep
                  </Link>
                </div>
              </div>

              {/* CTA */}
              <div className="rounded-xl bg-gradient-to-br from-sage-100 to-terracotta-50 p-5 border border-sage-200">
                <h3 className="font-semibold mb-2">Not sure where to start?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Take our short quiz to find your focus area.
                </p>
                <Button variant="hub" className="w-full" asChild>
                  <Link to="/men/quiz">Take the quiz</Link>
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </Layout>
  );
}