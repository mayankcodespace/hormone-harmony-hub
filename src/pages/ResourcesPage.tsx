import { Layout } from "@/components/layout/Layout";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { HubCard } from "@/components/shared/HubCard";
import { PDFResourceSection } from "@/components/shared/PDFResourceSection";
import { Calendar, Heart, Scale, Brain, Book, FileText, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

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

const externalResources = [
  {
    name: "WHO PCOS Fact Sheet",
    url: "https://www.who.int/news-room/fact-sheets/detail/polycystic-ovary-syndrome",
  },
  {
    name: "ACOG Patient FAQs",
    url: "https://www.acog.org/womens-health",
  },
  {
    name: "Women's Health (OASH)",
    url: "https://www.womenshealth.gov/",
  },
];

export default function ResourcesPage() {
  return (
    <Layout>
      <section className="bg-gradient-to-b from-sage-50 to-background py-12">
        <div className="container">
          <Breadcrumb items={[{ label: "Resources" }]} />
          
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
              Resources
            </h1>
            <p className="text-lg text-muted-foreground">
              Everything you need to learn about hormonal health, all in one place.
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
                to="/start-here"
                className="rounded-lg border border-border bg-card p-4 hover:border-primary/50 hover:bg-sage-50/50 transition-colors"
              >
                <Book className="h-5 w-5 text-primary mb-2" />
                <h3 className="font-medium">Start Here</h3>
                <p className="text-sm text-muted-foreground">New? Begin your journey</p>
              </Link>
              <Link 
                to="/quiz"
                className="rounded-lg border border-border bg-card p-4 hover:border-primary/50 hover:bg-sage-50/50 transition-colors"
              >
                <FileText className="h-5 w-5 text-primary mb-2" />
                <h3 className="font-medium">Find Your Path Quiz</h3>
                <p className="text-sm text-muted-foreground">Get personalized guidance</p>
              </Link>
              <Link 
                to="/sources"
                className="rounded-lg border border-border bg-card p-4 hover:border-primary/50 hover:bg-sage-50/50 transition-colors"
              >
                <ExternalLink className="h-5 w-5 text-primary mb-2" />
                <h3 className="font-medium">Our Sources</h3>
                <p className="text-sm text-muted-foreground">Where we get our info</p>
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
