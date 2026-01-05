import { Brain, Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { DisclaimerBanner } from "@/components/shared/DisclaimerBanner";
import { RedFlagsBox } from "@/components/shared/RedFlagsBox";
import { FAQSection, FAQItem } from "@/components/shared/FAQSection";
import { SectionDivider } from "@/components/shared/SectionDivider";
import { Button } from "@/components/ui/button";
import { FoodGuideExpanded, menMoodMacros } from "@/components/shared/FoodGuideExpanded";
import { ExerciseLibrary, menMoodExercises } from "@/components/shared/ExerciseLibrary";
import { SourcesAccordion, Citation } from "@/components/shared/CitationSystem";
import menMeditation from "@/assets/images/men-meditation.jpg";

const citations: Citation[] = [
  {
    id: 1,
    title: "Testosterone and depression in men",
    source: "JAMA Psychiatry, 2019",
    url: "https://jamanetwork.com/journals/jamapsychiatry/fullarticle/2736594",
    accessDate: "January 2026",
  },
  {
    id: 2,
    title: "Chronic stress and hormonal dysregulation",
    source: "Psychoneuroendocrinology, 2020",
    url: "https://pubmed.ncbi.nlm.nih.gov/32240951/",
    accessDate: "January 2026",
  },
  {
    id: 3,
    title: "Sleep and mental health in men",
    source: "Sleep Medicine Reviews, 2021",
    url: "https://pubmed.ncbi.nlm.nih.gov/33714872/",
    accessDate: "January 2026",
  },
  {
    id: 4,
    title: "Exercise as treatment for depression",
    source: "British Journal of Sports Medicine, 2023",
    url: "https://bjsm.bmj.com/content/57/18/1203",
    accessDate: "January 2026",
  },
];

const myths = [
  {
    myth: "Real men don't talk about mental health",
    fact: "Seeking help is a sign of responsibility, not weakness. Men who get support have better outcomes.",
  },
  {
    myth: "Stress is just part of life — deal with it",
    fact: "Chronic stress has real physiological effects on hormones and health. Managing it matters.",
  },
  {
    myth: "Anxiety is all in your head",
    fact: "Anxiety can have hormonal components — thyroid, blood sugar, cortisol all play roles.",
  },
  {
    myth: "You just need to toughen up",
    fact: "Suppressing emotions leads to worse outcomes. Processing them properly is healthier.",
  },
];

const triggers = [
  { category: "Hormonal", items: ["Low testosterone", "High cortisol", "Thyroid issues", "Blood sugar swings"] },
  { category: "Lifestyle", items: ["Poor sleep", "Overwork", "Lack of exercise", "Social isolation"] },
  { category: "Nutritional", items: ["Nutrient deficiencies", "High caffeine", "Alcohol use", "Processed diet"] },
  { category: "External", items: ["Work pressure", "Financial stress", "Relationship issues", "Life transitions"] },
];

const safeSteps = [
  "Prioritize 7-9 hours of quality sleep",
  "Exercise regularly — it's as effective as medication for mild-moderate depression",
  "Limit caffeine, especially after noon",
  "Practice stress management techniques daily",
  "Maintain social connections — isolation worsens mental health",
  "Consider professional support if symptoms persist",
];

const redFlags = [
  "Persistent thoughts of self-harm or suicide (seek immediate help)",
  "Anxiety or depression affecting work and relationships",
  "Panic attacks or severe anxiety",
  "Insomnia lasting more than a few weeks",
  "Using alcohol or substances to cope",
  "Significant personality changes",
];

const faqs: FAQItem[] = [
  {
    question: "Can low testosterone cause depression?",
    answer: "Yes, there's a bidirectional relationship. Low testosterone can contribute to depressive symptoms, and depression can lower testosterone. If you have persistent low mood with other symptoms, getting hormones checked is reasonable.",
  },
  {
    question: "Why do I feel burnt out all the time?",
    answer: "Chronic stress leads to sustained high cortisol, which eventually leads to burnout. This affects testosterone, thyroid, sleep, and energy. Recovery requires addressing root causes.",
  },
  {
    question: "How does sleep affect mood?",
    answer: "Profoundly. Poor sleep increases cortisol, reduces testosterone, disrupts neurotransmitters, and impairs emotional regulation. Many men underestimate how much their mood issues are sleep-related.",
  },
  {
    question: "Should men talk about mental health?",
    answer: "Absolutely. Men are often socialized to suppress emotions, which leads to worse outcomes. Seeking help is a sign of responsibility, not weakness.",
  },
];

const articles = [
  { title: "Stress & Male Hormones", href: "/men/mood/stress-hormones" },
  { title: "Anxiety: Hormonal Causes", href: "/men/mood/anxiety-hormones" },
  { title: "Sleep Deprivation Effects", href: "/men/mood/sleep-deprivation" },
  { title: "Burnout & Adrenal Health", href: "/men/mood/burnout" },
  { title: "Mood & Low Testosterone", href: "/men/mood/testosterone-mood" },
  { title: "Stress Management Techniques", href: "/men/mood/stress-management" },
  { title: "When to Seek Help", href: "/men/mood/when-to-seek-help" },
  { title: "Nutrition for Mental Health", href: "/men/mood/nutrition-mental-health" },
];

export default function MoodStressPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-sage-50 py-16">
        <div className="container">
          <Breadcrumb items={[
            { label: "Men's Health", href: "/men" },
            { label: "Mood, Stress & Sleep" }
          ]} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-8">
            <div>
              <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-4">
                Mood, Stress & Sleep
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl">
                Understanding the hormonal factors behind stress, anxiety, burnout, 
                and when to seek support.
              </p>
            </div>

            <div className="relative">
              <div className="rounded-3xl overflow-hidden bg-white shadow-sm aspect-[4/3]">
                <img
                  src={menMeditation}
                  alt="Man practicing meditation for mental wellness"
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
            {/* Crisis Resources */}
            <div className="rounded-lg border border-primary bg-primary/5 p-4">
              <p className="text-sm text-foreground">
                <strong>Need immediate support?</strong> If you're experiencing thoughts of self-harm or suicide, 
                please reach out: <strong>iCall:</strong> 9152987821 | <strong>Vandrevala Foundation:</strong> 1860-2662-345
              </p>
            </div>

            {/* What's Happening */}
            <section>
              <h2 className="font-serif text-2xl font-semibold mb-4">Why hormones affect mood</h2>
              <div className="prose prose-sage max-w-none text-muted-foreground space-y-4">
                <p>
                  Many men suffer silently with stress, anxiety, burnout, and poor sleep — often dismissing these 
                  as "just stress" or "part of life." But chronic stress has real physiological effects. It disrupts 
                  cortisol, testosterone, thyroid function, and sleep — creating a vicious cycle.
                </p>
                <p>Key hormonal connections:</p>
                <ul className="space-y-2 list-disc list-inside">
                  <li><strong>Cortisol:</strong> Chronic high levels lead to anxiety, poor sleep, and burnout</li>
                  <li><strong>Testosterone:</strong> Low levels linked to depression and low motivation</li>
                  <li><strong>Thyroid:</strong> Imbalances cause anxiety, depression, or fatigue</li>
                  <li><strong>Blood sugar:</strong> Swings cause mood swings and irritability</li>
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
              <h2 className="font-serif text-2xl font-semibold mb-4">What worsens mood symptoms</h2>
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
                These are evidence-based steps that can help manage mild to moderate symptoms. 
                They're not replacements for professional help when needed.
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
              macros={menMoodMacros}
              description="What you eat affects neurotransmitters and stress hormones. Good nutrition supports better mood."
              mealTips={[
                "Stable blood sugar = stable mood — avoid skipping meals",
                "Caffeine after 2pm can worsen anxiety and sleep",
                "Alcohol may seem relaxing but worsens anxiety and sleep quality",
                "Omega-3 fats are especially important for brain health",
              ]}
            />

            <SectionDivider />

            {/* Exercise Library */}
            <ExerciseLibrary 
              categories={menMoodExercises}
              description="Movement is one of the most powerful tools for mood and stress management."
            />

            <SectionDivider />

            {/* Red Flags */}
            <section>
              <RedFlagsBox
                title="Seek help if you experience"
                items={redFlags}
                urgentNote="If you're having thoughts of self-harm or suicide, please reach out to a crisis helpline immediately. iCall: 9152987821 | Vandrevala Foundation: 1860-2662-345"
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
                  <Link to="/men/sexual-health" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                    → Sexual Health & Energy
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
                <h3 className="font-semibold mb-2">Not sure where to start?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Take our quick assessment to find your focus area.
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