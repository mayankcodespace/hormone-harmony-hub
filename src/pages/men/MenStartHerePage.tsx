import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { Button } from "@/components/ui/button";
import { DisclaimerBanner } from "@/components/shared/DisclaimerBanner";
import { HubCard } from "@/components/shared/HubCard";
import { ArrowRight, Zap, Scale, Brain, Heart, BookOpen } from "lucide-react";

const hubTopics = [
  {
    title: "Testosterone & Energy",
    description: "Understand testosterone, what affects it, and evidence-based support.",
    href: "/men/testosterone",
    icon: Zap,
  },
  {
    title: "Weight & Metabolism",
    description: "Why men gain belly fat and sustainable approaches to fat loss.",
    href: "/men/weight-metabolism",
    icon: Scale,
  },
  {
    title: "Mood, Stress & Sleep",
    description: "Stress, anxiety, burnout — understand the hormonal connections.",
    href: "/men/mood-stress",
    icon: Brain,
  },
  {
    title: "Sexual Health & Energy",
    description: "Libido, energy, and vitality — what hormones have to do with it.",
    href: "/men/sexual-health",
    icon: Heart,
  },
];

export default function MenStartHerePage() {
  return (
    <Layout>
      <section className="bg-gradient-to-b from-sage-50 to-background py-12">
        <div className="container">
          <Breadcrumb items={[{ label: "Men's Health", href: "/men" }, { label: "Start Here" }]} />
          
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground mx-auto mb-6">
              <BookOpen className="h-7 w-7" />
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
              Welcome to Hormone Clarity for Men
            </h1>
            <p className="text-lg text-muted-foreground">
              New here? This quick guide will help you get started on understanding 
              your hormonal health.
            </p>
          </div>
        </div>
      </section>

      <div className="container py-12">
        <div className="max-w-3xl mx-auto">
          <DisclaimerBanner variant="inline" className="mb-12" />

          {/* Step 1 */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold">
                1
              </div>
              <h2 className="font-serif text-xl font-semibold">Understand the basics</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              Many common symptoms — fatigue, belly fat, low motivation, poor sleep, reduced libido — 
              can be connected through hormonal patterns. You're not imagining things, and it's not 
              just "getting older."
            </p>
            <div className="rounded-lg border border-border bg-card p-4">
              <h3 className="font-medium mb-2">Key hormones to know:</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• <strong>Testosterone:</strong> Energy, motivation, muscle, libido</li>
                <li>• <strong>Cortisol:</strong> Your stress hormone — affects everything</li>
                <li>• <strong>Insulin:</strong> Blood sugar, weight, energy</li>
                <li>• <strong>Thyroid hormones:</strong> Metabolism and energy regulation</li>
              </ul>
            </div>
          </section>

          {/* Step 2 */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold">
                2
              </div>
              <h2 className="font-serif text-xl font-semibold">Find your focus area</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              Not sure where to start? Take our quick quiz or explore the topic that 
              resonates most with you.
            </p>
            <Button variant="hero" asChild className="mb-6">
              <Link to="/men/quiz">
                Take the quiz
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <p className="text-sm text-muted-foreground mb-4">Or explore topics directly:</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {hubTopics.map((topic) => (
                <HubCard key={topic.href} {...topic} />
              ))}
            </div>
          </section>

          {/* Step 3 */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold">
                3
              </div>
              <h2 className="font-serif text-xl font-semibold">Start with the fundamentals</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              Before supplements, tests, or treatments, focus on the foundations that affect all hormones:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 mb-4">
              <li><strong>Sleep:</strong> 7-9 hours of quality sleep is non-negotiable</li>
              <li><strong>Stress management:</strong> Chronic stress disrupts every hormone</li>
              <li><strong>Movement:</strong> Strength training + daily walking</li>
              <li><strong>Nutrition:</strong> Adequate protein, whole foods, limited processed foods</li>
            </ul>
          </section>

          {/* Step 4 */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold">
                4
              </div>
              <h2 className="font-serif text-xl font-semibold">Know when to seek help</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              While lifestyle changes can help many issues, some situations need 
              professional evaluation. Please see a doctor if:
            </p>
            <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-4">
              <ul className="text-sm space-y-2">
                <li>• Persistent symptoms that don't improve with lifestyle changes</li>
                <li>• Significant, unexplained fatigue lasting months</li>
                <li>• Erectile dysfunction or complete loss of libido</li>
                <li>• Rapid weight changes without explanation</li>
                <li>• Depression, anxiety, or thoughts of self-harm</li>
                <li>• Any symptoms that worry you</li>
              </ul>
            </div>
          </section>

          {/* Final CTA */}
          <section className="rounded-xl bg-gradient-to-br from-sage-50 to-terracotta-50 border border-sage-200 p-8 text-center">
            <h2 className="font-serif text-xl font-semibold mb-3">
              Ready to learn more?
            </h2>
            <p className="text-muted-foreground mb-6">
              Explore our topic guides for in-depth information on each area.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" asChild>
                <Link to="/men/quiz">Take the quiz</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/men/resources">Browse all resources</Link>
              </Button>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
