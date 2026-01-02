import { Layout } from "@/components/layout/Layout";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { HubCard } from "@/components/shared/HubCard";
import { PDFResourceSection } from "@/components/shared/PDFResourceSection";
import { Zap, Scale, Brain, Heart, Book, FileText, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

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

const externalResources = [
  {
    name: "WHO Men's Health",
    url: "https://www.who.int/health-topics/men-s-health",
  },
  {
    name: "American Urological Association",
    url: "https://www.auanet.org/",
  },
  {
    name: "Endocrine Society",
    url: "https://www.endocrine.org/",
  },
];

export default function MenResourcesPage() {
  return (
    <Layout>
      <section className="bg-gradient-to-b from-sage-50 to-background py-12">
        <div className="container">
          <Breadcrumb items={[{ label: "Men's Health", href: "/men" }, { label: "Resources" }]} />
          
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
              Resources
            </h1>
            <p className="text-lg text-muted-foreground">
              Everything you need to learn about men's hormonal health, all in one place.
            </p>
          </div>
        </div>
      </section>

      <div className="container py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Topic Hubs */}
          <section>
            <h2 className="font-serif text-2xl font-semibold mb-6">Topic Guides</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {hubTopics.map((topic) => (
                <HubCard key={topic.href} {...topic} />
              ))}
            </div>
          </section>

          {/* Quick Links */}
          <section>
            <h2 className="font-serif text-2xl font-semibold mb-6">Quick Links</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link 
                to="/men/start-here"
                className="rounded-lg border border-border bg-card p-4 hover:border-primary/50 hover:bg-sage-50/50 transition-colors"
              >
                <Book className="h-5 w-5 text-primary mb-2" />
                <h3 className="font-medium">Start Here</h3>
                <p className="text-sm text-muted-foreground">New? Begin your journey</p>
              </Link>
              <Link 
                to="/men/quiz"
                className="rounded-lg border border-border bg-card p-4 hover:border-primary/50 hover:bg-sage-50/50 transition-colors"
              >
                <FileText className="h-5 w-5 text-primary mb-2" />
                <h3 className="font-medium">Find Your Path Quiz</h3>
                <p className="text-sm text-muted-foreground">Get personalized guidance</p>
              </Link>
              <Link 
                to="/men/find-doctor"
                className="rounded-lg border border-border bg-card p-4 hover:border-primary/50 hover:bg-sage-50/50 transition-colors"
              >
                <ExternalLink className="h-5 w-5 text-primary mb-2" />
                <h3 className="font-medium">Find a Doctor</h3>
                <p className="text-sm text-muted-foreground">Get professional help</p>
              </Link>
            </div>
          </section>

          {/* External Resources */}
          <section>
            <h2 className="font-serif text-2xl font-semibold mb-6">Trusted External Resources</h2>
            <div className="space-y-3">
              {externalResources.map((resource) => (
                <a
                  key={resource.name}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-lg border border-border bg-card p-4 hover:border-primary/50 hover:bg-sage-50/50 transition-colors group"
                >
                  <span className="font-medium group-hover:text-primary transition-colors">
                    {resource.name}
                  </span>
                  <ExternalLink className="h-4 w-4 text-muted-foreground" />
                </a>
              ))}
            </div>
          </section>

          {/* PDF Resource */}
          <PDFResourceSection />
        </div>
      </div>
    </Layout>
  );
}
