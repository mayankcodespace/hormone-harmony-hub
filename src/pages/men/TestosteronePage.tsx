import { Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { DisclaimerBanner } from "@/components/shared/DisclaimerBanner";
import { RedFlagsBox } from "@/components/shared/RedFlagsBox";
import { FAQSection, FAQItem } from "@/components/shared/FAQSection";
import { SectionDivider } from "@/components/shared/SectionDivider";
import { Button } from "@/components/ui/button";
import { FoodGuideExpanded, menTestosteroneMacros } from "@/components/shared/FoodGuideExpanded";
import { ExerciseLibrary, menTestosteroneExercises } from "@/components/shared/ExerciseLibrary";
import { SourcesAccordion, Citation } from "@/components/shared/CitationSystem";
import menFitness from "@/assets/images/men-fitness.jpg";

const citations: Citation[] = [
  {
    id: 1,
    title: "Testosterone and aging: clinical research directions",
    source: "National Academy of Sciences, 2004",
    url: "https://www.ncbi.nlm.nih.gov/books/NBK216171/",
    accessDate: "January 2026",
  },
  {
    id: 2,
    title: "Sleep, sex steroid hormones, sexual activities, and aging in Asian men",
    source: "Journal of Andrology, 2010",
    url: "https://pubmed.ncbi.nlm.nih.gov/20467048/",
    accessDate: "January 2026",
  },
  {
    id: 3,
    title: "Resistance training and testosterone levels in men",
    source: "Sports Medicine, 2018",
    url: "https://pubmed.ncbi.nlm.nih.gov/29063453/",
    accessDate: "January 2026",
  },
  {
    id: 4,
    title: "Effect of vitamin D supplementation on testosterone levels",
    source: "Hormone and Metabolic Research, 2011",
    url: "https://pubmed.ncbi.nlm.nih.gov/21154195/",
    accessDate: "January 2026",
  },
];

const faqs: FAQItem[] = [
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
];

const redFlags = [
  "Sudden, severe loss of libido",
  "Erectile dysfunction that doesn't respond to lifestyle changes",
  "Breast tissue growth or tenderness",
  "Testicular pain or lumps",
  "Depression with physical symptoms",
  "Unexplained significant muscle loss",
];

const articles = [
  { title: "Understanding Testosterone", href: "/men/testosterone/basics" },
  { title: "Signs of Low Testosterone", href: "/men/testosterone/low-t-signs" },
  { title: "Lifestyle & Testosterone", href: "/men/testosterone/lifestyle" },
  { title: "Testosterone Testing", href: "/men/testosterone/testing" },
  { title: "Cortisol & Testosterone Connection", href: "/men/testosterone/cortisol-connection" },
  { title: "Sleep & Testosterone", href: "/men/testosterone/sleep" },
  { title: "Exercise for Testosterone", href: "/men/testosterone/exercise" },
  { title: "TRT: What You Should Know", href: "/men/testosterone/trt-facts" },
];

export default function TestosteronePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-sage-50 py-16">
        <div className="container">
          <Breadcrumb items={[
            { label: "Men's Health", href: "/men" },
            { label: "Testosterone & Energy" }
          ]} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-8">
            <div>
              <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-4">
                Testosterone & Energy
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl">
                Understanding the hormone that affects energy, mood, muscle, and vitality — 
                with evidence-based approaches.
              </p>
            </div>

            <div className="relative">
              <div className="rounded-3xl overflow-hidden bg-white shadow-sm aspect-[4/3]">
                <img
                  src={menFitness}
                  alt="Active man focusing on health and fitness"
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
              <h2 className="font-serif text-2xl font-semibold mb-4">What testosterone does</h2>
              <div className="prose prose-sage max-w-none text-muted-foreground space-y-4">
                <p>
                  Testosterone is often called the "male hormone," but it's more accurate to say it's a hormone that 
                  men have in higher amounts. It influences energy, mood, muscle mass, fat distribution, libido, 
                  and mental clarity.
                </p>
                <p>
                  Many men struggle with low energy, motivation, or vitality without realizing that testosterone 
                  (or factors affecting it, like cortisol and sleep) may be involved. This isn't about chasing 
                  unnaturally high levels — it's about understanding what's normal and what you can actually do.
                </p>
                <ul className="space-y-2 list-disc list-inside">
                  <li><strong>Energy & motivation:</strong> Testosterone affects drive and mental clarity</li>
                  <li><strong>Muscle & strength:</strong> Essential for building and maintaining muscle</li>
                  <li><strong>Fat distribution:</strong> Low T often leads to increased belly fat</li>
                  <li><strong>Mood:</strong> Low levels linked to irritability, depression</li>
                  <li><strong>Libido:</strong> Primary driver of sexual desire</li>
                </ul>
              </div>
            </section>

            <SectionDivider />

            {/* Food Guide */}
            <FoodGuideExpanded 
              macros={menTestosteroneMacros}
              description="While no food will magically boost testosterone, certain nutrients are essential for hormone production."
              mealTips={[
                "Don't fear cholesterol — your body needs it to make testosterone",
                "Avoid severe calorie restriction — it tanks testosterone",
                "Minimize processed foods and excess alcohol",
                "Eat adequate protein distributed across meals",
              ]}
            />

            <SectionDivider />

            {/* Exercise Library */}
            <ExerciseLibrary 
              categories={menTestosteroneExercises}
              description="Strength training is the most evidence-based way to support testosterone through exercise."
            />

            <SectionDivider />

            {/* Red Flags */}
            <section>
              <RedFlagsBox
                items={redFlags}
                urgentNote="If you experience any of these, please consult an endocrinologist or urologist."
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
                  <Link to="/men/weight-metabolism" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                    → Weight & Metabolism
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
                <h3 className="font-semibold mb-2">Not sure where to start?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Take our short quiz to find the most relevant topics for you.
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