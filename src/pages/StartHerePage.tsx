import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { Button } from "@/components/ui/button";
import { DisclaimerBanner } from "@/components/shared/DisclaimerBanner";
import { HubCard } from "@/components/shared/HubCard";
import { ArrowRight, Calendar, Heart, Scale, Brain, BookOpen } from "lucide-react";

const hubTopics = [
  {
    title: "Periods & Menstrual Cycle",
    description: "Understand your cycle, manage cramps, and learn what irregular periods might mean.",
    href: "/periods",
    icon: Calendar,
  },
  {
    title: "PCOS / PCOD",
    description: "Clear, practical information about polycystic ovary syndrome.",
    href: "/pcos",
    icon: Heart,
  },
  {
    title: "Hormonal Weight",
    description: "Why weight changes with hormones and sustainable approaches.",
    href: "/hormonal-weight",
    icon: Scale,
  },
  {
    title: "Mood & PMS",
    description: "PMS, PMDD, hormonal mood swings — understand patterns.",
    href: "/mood-pms",
    icon: Brain,
  },
];

export default function StartHerePage() {
  return (
    <Layout>
      <section className="bg-gradient-to-b from-sage-50 to-background py-12">
        <div className="container">
          <Breadcrumb items={[{ label: "Start Here" }]} />
          
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground mx-auto mb-6">
              <BookOpen className="h-7 w-7" />
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
              Welcome to HormoneClarity
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
              Many common symptoms — irregular periods, weight gain, mood swings, acne, fatigue — 
              can be connected through hormonal patterns. You're not imagining things, and you're 
              not alone.
            </p>
            <div className="rounded-lg border border-border bg-card p-4">
              <h3 className="font-medium mb-2">Key hormones to know:</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• <strong>Estrogen & Progesterone:</strong> Drive your menstrual cycle</li>
                <li>• <strong>Insulin:</strong> Affects weight and energy</li>
                <li>• <strong>Cortisol:</strong> Your stress hormone</li>
                <li>• <strong>Androgens:</strong> Can cause acne and excess hair</li>
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
              <Link to="/quiz">
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
              <h2 className="font-serif text-xl font-semibold">Start tracking</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              One of the most powerful things you can do is track your cycle and symptoms 
              for at least 3 months. This helps you:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 mb-4">
              <li>Identify patterns you might not notice otherwise</li>
              <li>Prepare for challenging days</li>
              <li>Have useful data to share with your doctor</li>
            </ul>
            <p className="text-sm text-muted-foreground">
              You can use a simple calendar or apps like Clue, Flo, or any period tracker.
            </p>
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
              While lifestyle changes can help many symptoms, some situations need 
              professional evaluation. Please see a doctor if:
            </p>
            <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-4">
              <ul className="text-sm space-y-2">
                <li>• No period for 3+ months (and not pregnant)</li>
                <li>• Very heavy bleeding (soaking through pads every hour)</li>
                <li>• Severe pain that disrupts daily life</li>
                <li>• Rapid, unexplained weight changes</li>
                <li>• Symptoms of depression or anxiety</li>
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
                <Link to="/quiz">Take the quiz</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/resources">Browse all resources</Link>
              </Button>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
