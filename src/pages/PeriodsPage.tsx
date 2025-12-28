import { Calendar, Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { DisclaimerBanner } from "@/components/shared/DisclaimerBanner";
import { RedFlagsBox } from "@/components/shared/RedFlagsBox";
import { FAQSection, FAQItem } from "@/components/shared/FAQSection";
import { SourcesAccordion, Citation, CitationLink } from "@/components/shared/CitationSystem";
import { SectionDivider } from "@/components/shared/SectionDivider";
import { Button } from "@/components/ui/button";
import { FoodGuideExpanded, periodsMacros } from "@/components/shared/FoodGuideExpanded";
import { ExerciseLibrary, periodsExercises } from "@/components/shared/ExerciseLibrary";
import { PDFResourceSection } from "@/components/shared/PDFResourceSection";

import cyclePhases from "@/assets/images/cycle-phases.jpg";
import gentleYoga from "@/assets/images/gentle-yoga.jpg";

// 👉 alias so new hero works without breaking anything
const cycleImage = cyclePhases;

/* ---------------- DATA ---------------- */

const citations: Citation[] = [
  {
    id: 1,
    title: "Menstrual cycle disorders",
    source: "World Health Organization",
    url: "https://www.who.int/news-room/fact-sheets/detail/menstrual-health",
    accessDate: "December 2024",
  },
  {
    id: 2,
    title: "Menstruation and the Menstrual Cycle",
    source: "Office on Women's Health, U.S. Department of Health and Human Services",
    url: "https://www.womenshealth.gov/menstrual-cycle",
    accessDate: "December 2024",
  },
  {
    id: 3,
    title: "Dysmenorrhea: Painful Periods",
    source: "American College of Obstetricians and Gynecologists",
    url: "https://www.acog.org/womens-health/faqs/dysmenorrhea-painful-periods",
    accessDate: "December 2024",
  },
];

const myths = [
  {
    myth: "Period pain is always normal and you just have to bear it",
    fact: "Mild cramps are common, but severe pain that disrupts daily life may indicate conditions like endometriosis or adenomyosis that deserve medical attention.",
  },
  {
    myth: "You should avoid exercise during your period",
    fact: "Gentle movement can actually help reduce cramps and improve mood. Listen to your body.",
  },
  {
    myth: "PMS is just 'in your head'",
    fact: "PMS is caused by real hormonal changes. Symptoms vary widely and are valid experiences.",
  },
  {
    myth: "Irregular periods always mean something is wrong",
    fact: "Some irregularity is normal, especially during teen years and perimenopause. Consistent irregularity warrants a check-up.",
  },
];

const triggers = [
  { category: "Stress", items: ["Chronic work/life stress", "Sleep deprivation", "Over-exercising"] },
  { category: "Diet", items: ["Restrictive eating", "High sugar intake", "Nutrient deficiencies (iron, B12)"] },
  { category: "Lifestyle", items: ["Drastic weight changes", "Travel/time zone shifts", "New medications"] },
  { category: "Health", items: ["Thyroid disorders", "PCOS/PCOD", "Uterine fibroids"] },
];

const safeSteps = [
  "Track your cycle for 3+ months using an app or calendar",
  "Prioritize 7-8 hours of sleep, especially in the luteal phase",
  "Include iron-rich foods: spinach, chana, dates, poha",
  "Stay hydrated and reduce caffeine before periods",
  "Try gentle yoga or walking during cramps",
  "Use a hot water bottle or heating pad for pain relief",
];

const redFlags = [
  "Bleeding through a pad/tampon every hour for several hours",
  "Periods lasting more than 7 days consistently",
  "Severe pain that doesn't respond to OTC painkillers",
  "Bleeding between periods or after menopause",
  "No period for 3+ months (if not pregnant)",
  "Fainting or severe weakness during periods",
];

const faqs: FAQItem[] = [
  {
    question: "What is considered a 'normal' period cycle?",
    answer:
      "A typical cycle ranges from 21-35 days. Bleeding usually lasts 2-7 days. Some variation is normal, but consistently irregular cycles are worth discussing with a doctor.",
  },
  {
    question: "Why are my periods so painful?",
    answer:
      "Mild cramps are common. Severe pain could be due to conditions like endometriosis or fibroids. If it disrupts daily life, consult a gynecologist.",
  },
  {
    question: "Can stress really delay my period?",
    answer:
      "Yes. Stress impacts hormone regulation and can delay ovulation, leading to late or missed periods.",
  },
  {
    question: "Is it normal to have clots during periods?",
    answer:
      "Small clots are normal. Large clots or very heavy bleeding should be discussed with a doctor.",
  },
];

const articles = [
  { title: "Understanding Your Menstrual Cycle Phases", href: "/periods/cycle-phases" },
  { title: "What Causes Severe Cramps?", href: "/periods/cramps-what-helps" },
  { title: "Irregular Periods: Causes & When to Worry", href: "/periods/irregular-periods-causes" },
  { title: "PMS vs Normal Cycle Changes", href: "/periods/pms-basics" },
  { title: "Period Tracking: A Beginner's Guide", href: "/periods/tracking-guide" },
  { title: "Heavy Periods: What's Normal?", href: "/periods/heavy-bleeding" },
  { title: "Period Pain Management", href: "/periods/pain-management" },
  { title: "Periods & Exercise", href: "/periods/exercise-guide" },
];

export default function PeriodsPage() {
  return (
    <Layout>

      {/* ✅ UPDATED HERO — ONLY THIS PART CHANGED */}
      <section className="bg-sage-50 py-16">
        <div className="container">
          <Breadcrumb items={[{ label: "Periods & Cycle" }]} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-8">
            {/* LEFT CONTENT */}
            <div>
              <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-4">
                Periods & Menstrual Cycle
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl">
                Understanding your cycle, managing symptoms, and knowing when
                to seek help — explained gently and clearly.
              </p>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden bg-white shadow-sm aspect-[4/3]">
                <img
                  src={cycleImage}
                  alt="Menstrual cycle phases illustration"
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
          {/* MAIN CONTENT */}
          <div className="lg:col-span-2 space-y-12">
            {/* What's Happening */}
            <section>
              <h2 className="font-serif text-2xl font-semibold mb-4">What's happening in your body</h2>
              <div className="prose prose-sage max-w-none text-muted-foreground space-y-4">
                <p>
                  Your menstrual cycle is a monthly process where your body prepares for potential pregnancy.<CitationLink id={1} /> 
                  It's controlled by a delicate balance of hormones — primarily estrogen and progesterone — 
                  working together in a predictable rhythm.
                </p>
                <p>
                  A typical cycle has four phases:<CitationLink id={2} />
                </p>
                <ol className="space-y-2 list-decimal list-inside">
                  <li><strong>Menstruation (Days 1-5):</strong> The uterine lining sheds — this is your period.</li>
                  <li><strong>Follicular phase (Days 1-13):</strong> Estrogen rises, an egg matures in the ovary.</li>
                  <li><strong>Ovulation (Day 14):</strong> The mature egg is released.</li>
                  <li><strong>Luteal phase (Days 15-28):</strong> Progesterone rises, preparing for possible pregnancy.</li>
                </ol>
                <p>
                  If pregnancy doesn't occur, hormone levels drop, triggering the next period. 
                  This is why hormonal imbalances can cause irregular cycles, heavy bleeding, or severe PMS.
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
              <h2 className="font-serif text-2xl font-semibold mb-4">Common triggers for cycle issues</h2>
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
                These are gentle steps that are generally safe for most people. They're not medical treatments — 
                just practical habits that support overall cycle health.
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
              macros={periodsMacros}
              description="During your period and throughout your cycle, focus on nutrients that support energy, reduce inflammation, and replenish what your body loses."
              mealTips={[
                "Eat iron-rich foods with vitamin C for better absorption",
                "Stay hydrated — drink warm water or herbal teas",
                "Have smaller, frequent meals if bloating is an issue",
                "Avoid very cold foods during menstruation (as per traditional practices)"
              ]}
            />

            <SectionDivider />

            {/* Exercise Library */}
            <ExerciseLibrary 
              categories={periodsExercises}
              description="Gentle movement can help with cramps and mood. Listen to your body — rest if you need to."
            />

            <SectionDivider />

            {/* Red Flags */}
            <section>
              <RedFlagsBox
                items={redFlags}
                urgentNote="If you experience any of these, please consult a gynecologist. Don't wait."
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
                  <Link to="/mood-pms" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                    → Mood & PMS
                  </Link>
                  <Link to="/hormonal-weight" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                    → Hormonal Weight
                  </Link>
                </div>
              </div>

              {/* CTA */}
              <div className="rounded-xl bg-gradient-to-br from-sage-100 to-terracotta-50 p-5 border border-sage-200">
                <h3 className="font-semibold mb-2">Not sure where to start?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Take our short quiz to find the most relevant topics for you.
                </p>
                <Button variant="hub" className="w-full" asChild>
                  <Link to="/quiz">Take the quiz</Link>
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </Layout>
  );
}
