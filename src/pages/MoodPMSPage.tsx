import { Brain, Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { DisclaimerBanner } from "@/components/shared/DisclaimerBanner";
import { RedFlagsBox } from "@/components/shared/RedFlagsBox";
import { FAQSection, FAQItem } from "@/components/shared/FAQSection";
import { SourcesAccordion, Citation, CitationLink } from "@/components/shared/CitationSystem";
import { SectionDivider } from "@/components/shared/SectionDivider";
import { Button } from "@/components/ui/button";
import { FoodGuideExpanded, moodMacros } from "@/components/shared/FoodGuideExpanded";
import { ExerciseLibrary, moodExercises } from "@/components/shared/ExerciseLibrary";

// ✅ hero image as per mapping
import peacefulSleep from "@/assets/images/peaceful-sleep.jpg";

/* ---------------- DATA ---------------- */

const citations: Citation[] = [
  {
    id: 1,
    title: "Premenstrual Syndrome (PMS)",
    source: "Office on Women's Health, U.S. Department of Health and Human Services",
    url: "https://www.womenshealth.gov/menstrual-cycle/premenstrual-syndrome",
    accessDate: "December 2024",
  },
  {
    id: 2,
    title: "Premenstrual Dysphoric Disorder (PMDD)",
    source: "American College of Obstetricians and Gynecologists",
    url: "https://www.acog.org/womens-health/faqs/premenstrual-syndrome",
    accessDate: "December 2024",
  },
  {
    id: 3,
    title: "The menstrual cycle and mood disorders",
    source: "International Association for Premenstrual Disorders",
    url: "https://iapmd.org/",
    accessDate: "December 2024",
  },
];

const myths = [
  {
    myth: "PMS is just 'being moody' or an excuse",
    fact: "PMS is caused by real hormonal changes and affects the majority of menstruating women.",
  },
  {
    myth: "You should just push through mood symptoms",
    fact: "Ignoring symptoms prevents proper support and solutions.",
  },
  {
    myth: "Severe PMS is normal",
    fact: "Severe symptoms may indicate PMDD, which needs medical care.",
  },
  {
    myth: "Mood swings only happen before periods",
    fact: "Hormonal mood changes can happen at multiple cycle points.",
  },
];

const triggers = [
  { category: "Hormonal", items: ["Estrogen/progesterone shifts", "Serotonin sensitivity", "Thyroid issues", "PCOS"] },
  { category: "Lifestyle", items: ["Poor sleep", "High stress", "Low activity", "Irregular meals"] },
  { category: "Nutritional", items: ["Low B vitamins", "Low magnesium", "High caffeine", "Blood sugar swings"] },
  { category: "External", items: ["Life stress", "Relationship strain", "Work pressure", "Seasonal changes"] },
];

const safeSteps = [
  "Track mood with your cycle for 3+ months",
  "Prioritize sleep in the luteal phase",
  "Reduce caffeine and alcohol before periods",
  "Eat magnesium-rich foods regularly",
  "Move gently — walking or yoga helps",
  "Practice stress regulation techniques",
];

const pmsVsPmdd = [
  { aspect: "Severity", pms: "Mild to moderate", pmdd: "Severe, disabling" },
  { aspect: "Timing", pms: "Before period", pmdd: "Before period, resolves with bleeding" },
  { aspect: "Symptoms", pms: "Mood swings, bloating", pmdd: "Depression, rage, anxiety" },
  { aspect: "Function", pms: "Mostly functional", pmdd: "Daily life impaired" },
  { aspect: "Prevalence", pms: "~75%", pmdd: "~3–8%" },
];

const redFlags = [
  "Suicidal thoughts or self-harm urges",
  "Inability to function at work/school",
  "Symptoms all month long",
  "Rage episodes or loss of control",
  "Symptoms worsening every cycle",
  "Depression not improving after period",
];

const faqs: FAQItem[] = [
  {
    question: "What's the difference between PMS and PMDD?",
    answer:
      "PMDD involves severe emotional symptoms that significantly disrupt daily life, unlike PMS.",
  },
  {
    question: "Why do sugar cravings increase before periods?",
    answer:
      "Hormonal changes affect serotonin, increasing carb cravings. Choose complex carbs instead.",
  },
  {
    question: "Can supplements help?",
    answer:
      "Magnesium, B6, and calcium may help some people. Consult a doctor before supplements.",
  },
  {
    question: "When should I see a doctor?",
    answer:
      "If symptoms disrupt life, involve self-harm thoughts, or don’t improve with lifestyle changes.",
  },
];

const articles = [
  { title: "PMS vs PMDD", href: "/mood-pms/pms-vs-pmdd-basics" },
  { title: "Mood Tracking Guide", href: "/mood-pms/mood-tracking" },
  { title: "Serotonin & Hormones", href: "/mood-pms/serotonin-hormones" },
  { title: "Period Anxiety", href: "/mood-pms/period-anxiety" },
  { title: "Sleep & Mood", href: "/mood-pms/sleep-mood" },
  { title: "Natural PMS Remedies", href: "/mood-pms/natural-remedies" },
  { title: "When to Seek Help", href: "/mood-pms/when-to-seek-help" },
];

export default function MoodPMSPage() {
  return (
    <Layout>

      {/* ✅ UPDATED HERO (unified system) */}
      <section className="bg-sage-50 py-16">
        <div className="container">
          <Breadcrumb items={[{ label: "Mood & PMS" }]} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-8">
            {/* LEFT */}
            <div>
              <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-4">
                Mood & PMS
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl">
                Understanding hormonal mood patterns, PMS, PMDD,
                and when to seek support.
              </p>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden bg-white shadow-sm aspect-[4/3]">
                <img
                  src={peacefulSleep}
                  alt="Peaceful sleep and emotional balance"
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
              <h2 className="font-serif text-2xl font-semibold mb-4">Why hormones affect mood</h2>
              <div className="prose prose-sage max-w-none text-muted-foreground space-y-4">
                <p>
                  Your mood is deeply connected to your hormonal cycle. Estrogen and progesterone 
                  directly influence brain chemicals like serotonin, dopamine, and GABA — 
                  all of which affect how you feel.<CitationLink id={1} />
                </p>
                <p>
                  Here's what happens during your cycle:
                </p>
                <ul className="space-y-2 list-disc list-inside">
                  <li><strong>Follicular phase (after period):</strong> Rising estrogen often brings better mood, energy, and confidence</li>
                  <li><strong>Ovulation:</strong> Peak estrogen — many women feel their best</li>
                  <li><strong>Luteal phase (before period):</strong> Progesterone rises, estrogen drops — this is when PMS symptoms appear</li>
                  <li><strong>Just before period:</strong> Both hormones drop sharply — often the lowest mood point</li>
                </ul>
                <p>
                  Understanding this pattern helps you plan, prepare, and be gentler 
                  with yourself during vulnerable phases.<CitationLink id={2} />
                </p>
              </div>
            </section>

            <SectionDivider />

            {/* PMS vs PMDD */}
            <section>
              <h2 className="font-serif text-2xl font-semibold mb-4">PMS vs PMDD</h2>
              <p className="text-muted-foreground mb-4">
                Understanding the difference helps you know when to seek additional support.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="py-3 px-4 text-left font-semibold">Aspect</th>
                      <th className="py-3 px-4 text-left font-semibold text-primary">PMS</th>
                      <th className="py-3 px-4 text-left font-semibold text-destructive">PMDD</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pmsVsPmdd.map((row, index) => (
                      <tr key={index} className="border-b border-border">
                        <td className="py-3 px-4 font-medium">{row.aspect}</td>
                        <td className="py-3 px-4 text-muted-foreground">{row.pms}</td>
                        <td className="py-3 px-4 text-muted-foreground">{row.pmdd}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                <strong>Important:</strong> PMDD is a recognized medical condition that can be treated. 
                If you suspect PMDD, please consult a healthcare provider.<CitationLink id={3} />
              </p>
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
              <h2 className="font-serif text-2xl font-semibold mb-4">What worsens hormonal mood symptoms</h2>
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
                These are gentle steps that can help manage mild to moderate mood symptoms. 
                They're not treatments for severe conditions.
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
              macros={moodMacros}
              description="What you eat directly affects brain chemistry and mood. Focus on foods that support stable blood sugar and brain-friendly nutrients."
              mealTips={[
                "Eat complex carbs — they help produce serotonin",
                "Don't skip meals — blood sugar crashes worsen mood",
                "Include magnesium-rich foods daily",
                "Limit caffeine and alcohol, especially before periods"
              ]}
            />

            <SectionDivider />

            {/* Exercise Library */}
            <ExerciseLibrary 
              categories={moodExercises}
              description="Exercise releases endorphins and can significantly improve mood. But listen to your body — don't push too hard when you're already depleted."
            />

            <SectionDivider />

            {/* Red Flags */}
            <section>
              <RedFlagsBox
                title="Seek help if you experience"
                items={redFlags}
                urgentNote="If you're having thoughts of self-harm or suicide, please reach out to a crisis helpline or go to an emergency room immediately. iCall: 9152987821 | Vandrevala Foundation: 1860-2662-345"
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
                  <Link to="/pcos" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                    → PCOS / PCOD
                  </Link>
                  <Link to="/hormonal-weight" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                    → Hormonal Weight
                  </Link>
                </div>
              </div>

              {/* Crisis Resources */}
              <div className="rounded-xl bg-rose-50 border border-rose-200 p-5">
                <h3 className="font-semibold mb-2 text-destructive">Need support?</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Mental health helplines in India:
                </p>
                <ul className="text-sm space-y-2">
                  <li><strong>iCall:</strong> 9152987821</li>
                  <li><strong>Vandrevala:</strong> 1860-2662-345</li>
                  <li><strong>NIMHANS:</strong> 080-46110007</li>
                </ul>
              </div>

              {/* CTA */}
              <div className="rounded-xl bg-gradient-to-br from-sage-100 to-terracotta-50 p-5 border border-sage-200">
                <h3 className="font-semibold mb-2">Track your patterns</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Understanding your cycle patterns is the first step to managing mood symptoms.
                </p>
                <Button variant="hub" className="w-full" asChild>
                  <Link to="/resources">View resources</Link>
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </Layout>
  );
}
