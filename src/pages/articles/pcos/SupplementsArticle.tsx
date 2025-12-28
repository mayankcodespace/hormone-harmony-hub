import { ArticleLayout } from "@/components/shared/ArticleLayout";

const relatedArticles = [
  { title: "Understanding Insulin Resistance", href: "/pcos/insulin-resistance-simple" },
  { title: "PCOS Diet Guide for Indians", href: "/pcos/indian-diet-guide" },
  { title: "Managing PCOS Long-Term", href: "/pcos/long-term-management" },
];

export default function SupplementsArticle() {
  return (
    <ArticleLayout
      title="Supplements for PCOS: Evidence Review"
      description="What the research says about common PCOS supplements."
      breadcrumbs={[
        { label: "PCOS / PCOD", href: "/pcos" },
        { label: "Supplements Review" },
      ]}
      backLink={{ href: "/pcos", label: "PCOS / PCOD" }}
      relatedArticles={relatedArticles}
      lastUpdated="December 2024"
    >
      <p className="text-muted-foreground text-lg">
        Many supplements are marketed for PCOS. Here's an evidence-based look at what 
        research actually shows — no hype, just facts.
      </p>

      <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-4 mb-6">
        <p className="text-sm">
          <strong>Important:</strong> This is educational information only. Do NOT start 
          supplements without consulting your doctor, especially if you're on medications 
          or trying to conceive. Supplements can interact with medications.
        </p>
      </div>

      <h2>Supplements with Some Evidence</h2>

      <h3>Inositol</h3>
      <ul>
        <li><strong>What it is:</strong> A type of sugar alcohol, often myo-inositol or D-chiro-inositol</li>
        <li><strong>Evidence:</strong> Good evidence for improving insulin sensitivity and ovulation</li>
        <li><strong>Notes:</strong> Often used in 40:1 ratio (myo:D-chiro)</li>
      </ul>

      <h3>Vitamin D</h3>
      <ul>
        <li><strong>What it is:</strong> A vitamin many Indians are deficient in</li>
        <li><strong>Evidence:</strong> Deficiency is common in PCOS; correcting it may help insulin and mood</li>
        <li><strong>Notes:</strong> Get tested first — don't mega-dose blindly</li>
      </ul>

      <h3>Omega-3 Fatty Acids</h3>
      <ul>
        <li><strong>What it is:</strong> Fish oil or algae-based omega-3s</li>
        <li><strong>Evidence:</strong> May help with inflammation and triglycerides</li>
        <li><strong>Notes:</strong> Food sources (fatty fish, flaxseed) are good too</li>
      </ul>

      <h2>Supplements with Mixed Evidence</h2>

      <h3>Berberine</h3>
      <ul>
        <li><strong>What it is:</strong> Plant compound</li>
        <li><strong>Evidence:</strong> Some studies show effects similar to metformin</li>
        <li><strong>Notes:</strong> Can interact with medications; not for everyone</li>
      </ul>

      <h3>Spearmint Tea</h3>
      <ul>
        <li><strong>What it is:</strong> Herbal tea</li>
        <li><strong>Evidence:</strong> Small studies suggest it may reduce androgens</li>
        <li><strong>Notes:</strong> Likely safe in moderation; evidence is limited</li>
      </ul>

      <h2>What to Be Cautious About</h2>
      <ul>
        <li>Products with "proprietary blends" that don't list amounts</li>
        <li>Claims of "curing" PCOS</li>
        <li>Very expensive supplement "protocols"</li>
        <li>Supplements replacing proper medical care</li>
      </ul>

      <h2>Bottom Line</h2>
      <ul>
        <li>Lifestyle changes (diet, exercise, sleep, stress) come first</li>
        <li>Some supplements have reasonable evidence, but none are magic</li>
        <li>Get tested for deficiencies before supplementing</li>
        <li>Quality matters — buy from reputable sources</li>
        <li>Always inform your doctor about what you're taking</li>
      </ul>

      <div className="rounded-lg border border-sage-200 bg-sage-50 p-4 mt-6">
        <p className="text-sm text-muted-foreground">
          <strong>Key takeaway:</strong> Supplements can be helpful additions but aren't 
          replacements for lifestyle changes or medical treatment. Focus on foundations first.
        </p>
      </div>
    </ArticleLayout>
  );
}
