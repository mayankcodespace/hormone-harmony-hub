import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { DisclaimerBanner } from "@/components/shared/DisclaimerBanner";
import { Button } from "@/components/ui/button";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface RelatedArticle {
  title: string;
  href: string;
}

interface ArticleLayoutProps {
  title: string;
  description?: string;
  breadcrumbs: BreadcrumbItem[];
  backLink: { href: string; label: string };
  relatedArticles?: RelatedArticle[];
  lastUpdated?: string;
  children: ReactNode;
}

export function ArticleLayout({
  title,
  description,
  breadcrumbs,
  backLink,
  relatedArticles,
  lastUpdated,
  children,
}: ArticleLayoutProps) {
  return (
    <Layout>
      <section className="bg-gradient-to-b from-sage-50 to-background py-8">
        <div className="container">
          <Breadcrumb items={breadcrumbs} />
          
          <Link
            to={backLink.href}
            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors mb-4"
          >
            <ArrowLeft className="h-4 w-4" />
            {backLink.label}
          </Link>

          <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold mb-3">
            {title}
          </h1>
          
          {description && (
            <p className="text-lg text-muted-foreground max-w-2xl">
              {description}
            </p>
          )}
          
          {lastUpdated && (
            <p className="text-sm text-muted-foreground mt-4">
              Last updated: {lastUpdated}
            </p>
          )}
        </div>
      </section>

      <div className="container py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <DisclaimerBanner variant="inline" className="mb-8" />
            
            <article className="prose prose-sage max-w-none">
              {children}
            </article>

            {/* Back to hub */}
            <div className="mt-12 pt-8 border-t border-border">
              <Button variant="outline" asChild>
                <Link to={backLink.href}>
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to {backLink.label}
                </Link>
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {relatedArticles && relatedArticles.length > 0 && (
                <div className="rounded-xl border border-border bg-card p-5">
                  <h3 className="font-semibold mb-4">Related articles</h3>
                  <ul className="space-y-2">
                    {relatedArticles.map((article) => (
                      <li key={article.href}>
                        <Link
                          to={article.href}
                          className="text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          → {article.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="rounded-xl bg-gradient-to-br from-sage-100 to-terracotta-50 p-5 border border-sage-200">
                <h3 className="font-semibold mb-2">Need personalized help?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  This is educational content. For personal advice, consult a healthcare provider.
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
