import { Layout } from "@/components/layout/Layout";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { ExternalLink } from "lucide-react";

const sources = [
  {
    category: "International Health Organizations",
    items: [
      {
        name: "World Health Organization (WHO)",
        description: "Global health guidance and fact sheets",
        url: "https://www.who.int/",
      },
      {
        name: "Centers for Disease Control and Prevention (CDC)",
        description: "U.S. public health information",
        url: "https://www.cdc.gov/",
      },
    ],
  },
  {
    category: "Women's Health Organizations",
    items: [
      {
        name: "American College of Obstetricians and Gynecologists (ACOG)",
        description: "Clinical guidance for women's health",
        url: "https://www.acog.org/",
      },
      {
        name: "Office on Women's Health (OASH)",
        description: "U.S. women's health resources",
        url: "https://www.womenshealth.gov/",
      },
      {
        name: "Royal College of Obstetricians and Gynaecologists (RCOG)",
        description: "UK clinical guidelines and patient information",
        url: "https://www.rcog.org.uk/",
      },
    ],
  },
  {
    category: "PCOS Resources",
    items: [
      {
        name: "National Institute of Child Health and Human Development (NICHD)",
        description: "PCOS research and information",
        url: "https://www.nichd.nih.gov/health/topics/pcos",
      },
      {
        name: "PCOS Society of India",
        description: "Indian PCOS guidelines and research",
        url: "https://www.pcossocietyindia.org/",
      },
    ],
  },
  {
    category: "Mental Health Resources",
    items: [
      {
        name: "International Association for Premenstrual Disorders (IAPMD)",
        description: "PMDD information and support",
        url: "https://iapmd.org/",
      },
      {
        name: "National Institute of Mental Health (NIMH)",
        description: "Mental health research and information",
        url: "https://www.nimh.nih.gov/",
      },
    ],
  },
  {
    category: "India-Specific Resources",
    items: [
      {
        name: "Indian Council of Medical Research (ICMR)",
        description: "Indian health research and guidelines",
        url: "https://www.icmr.gov.in/",
      },
      {
        name: "Federation of Obstetric and Gynaecological Societies of India (FOGSI)",
        description: "Indian obstetrics and gynecology guidelines",
        url: "https://www.fogsi.org/",
      },
    ],
  },
];

export default function SourcesPage() {
  return (
    <Layout>
      <section className="bg-gradient-to-b from-sage-50 to-background py-12">
        <div className="container">
          <Breadcrumb items={[{ label: "Our Sources" }]} />
          
          <div className="max-w-3xl mx-auto">
            <h1 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
              Our Sources
            </h1>
            <p className="text-lg text-muted-foreground">
              We cite information from reputable, evidence-based sources. 
              Here are the primary organizations and resources we reference.
            </p>
          </div>
        </div>
      </section>

      <div className="container py-12">
        <div className="max-w-3xl mx-auto space-y-10">
          {sources.map((category) => (
            <section key={category.category}>
              <h2 className="font-serif text-xl font-semibold mb-4">
                {category.category}
              </h2>
              <div className="space-y-3">
                {category.items.map((item) => (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-lg border border-border bg-card p-4 hover:border-primary/50 hover:bg-sage-50/50 transition-colors group"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="font-medium group-hover:text-primary transition-colors">
                          {item.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {item.description}
                        </p>
                      </div>
                      <ExternalLink className="h-4 w-4 text-muted-foreground shrink-0 mt-1" />
                    </div>
                  </a>
                ))}
              </div>
            </section>
          ))}

          <section className="rounded-xl bg-sage-50 border border-sage-200 p-6">
            <h2 className="font-semibold mb-3">About Our Citation Process</h2>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Each article includes inline citations linked to specific sources</li>
              <li>• We prioritize peer-reviewed research and established clinical guidelines</li>
              <li>• Sources are verified for authority and accuracy</li>
              <li>• We avoid single-study claims and look for consensus</li>
              <li>• Content is updated when new guidelines are released</li>
            </ul>
          </section>
        </div>
      </div>
    </Layout>
  );
}
