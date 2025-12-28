import { ArticleLayout } from "@/components/shared/ArticleLayout";

const relatedArticles = [
  { title: "PCOS Basics: What You Need to Know", href: "/pcos/pcos-basics" },
  { title: "Understanding Insulin Resistance", href: "/pcos/insulin-resistance-simple" },
  { title: "Managing PCOS Long-Term", href: "/pcos/long-term-management" },
];

export default function FertilityArticle() {
  return (
    <ArticleLayout
      title="PCOS & Fertility: What to Know"
      description="Understanding how PCOS affects fertility and what options exist."
      breadcrumbs={[
        { label: "PCOS / PCOD", href: "/pcos" },
        { label: "Fertility" },
      ]}
      backLink={{ href: "/pcos", label: "PCOS / PCOD" }}
      relatedArticles={relatedArticles}
      lastUpdated="December 2024"
    >
      <p className="text-muted-foreground text-lg">
        PCOS is one of the most common causes of fertility challenges — but it's also 
        one of the most treatable. Many women with PCOS conceive naturally or with help.
      </p>

      <h2>How PCOS Affects Fertility</h2>
      <p>
        The main issue is irregular or absent ovulation. Without releasing an egg regularly, 
        conception becomes unpredictable or difficult.
      </p>
      <ul>
        <li>Irregular cycles mean unpredictable ovulation</li>
        <li>Some women with PCOS don't ovulate at all (anovulation)</li>
        <li>Hormonal imbalances can affect egg quality</li>
        <li>Higher miscarriage rates are sometimes seen</li>
      </ul>

      <h2>The Good News</h2>
      <ul>
        <li>Many women with PCOS conceive naturally, especially with lifestyle changes</li>
        <li>PCOS-related infertility is very treatable</li>
        <li>Multiple effective treatment options exist</li>
        <li>Success rates are generally good</li>
      </ul>

      <h2>First Steps If You Want to Conceive</h2>

      <h3>1. Work on Lifestyle Factors</h3>
      <ul>
        <li>Even 5-10% weight loss (if overweight) can restore ovulation for some</li>
        <li>Address insulin resistance through diet and exercise</li>
        <li>Reduce stress where possible</li>
        <li>Optimize sleep</li>
      </ul>

      <h3>2. Track Your Cycle</h3>
      <ul>
        <li>Use ovulation predictor kits (OPKs)</li>
        <li>Track basal body temperature</li>
        <li>Monitor cervical mucus changes</li>
        <li>Note cycle length patterns</li>
      </ul>

      <h3>3. See a Specialist</h3>
      <p>
        If you've been trying for 6-12 months without success, or if your periods are 
        very irregular, consult a reproductive endocrinologist or fertility specialist.
      </p>

      <h2>Medical Treatment Options</h2>
      <p>
        (These require doctor supervision — mentioned for awareness only)
      </p>
      <ul>
        <li><strong>Ovulation induction:</strong> Medications to stimulate ovulation</li>
        <li><strong>Metformin:</strong> Can help restore ovulation by improving insulin</li>
        <li><strong>Letrozole/Clomid:</strong> Common first-line fertility medications</li>
        <li><strong>IUI:</strong> Intrauterine insemination</li>
        <li><strong>IVF:</strong> In vitro fertilization (usually not first-line for PCOS)</li>
      </ul>

      <h2>Important Considerations</h2>
      <ul>
        <li>Start conversations early if you know you want children</li>
        <li>Age still matters — don't delay too long</li>
        <li>Both partners should be evaluated</li>
        <li>Emotional support is important through this journey</li>
      </ul>

      <div className="rounded-lg border border-sage-200 bg-sage-50 p-4 mt-6">
        <p className="text-sm text-muted-foreground">
          <strong>Remember:</strong> PCOS doesn't mean you can't have children. It may 
          mean you need some extra help. Work with specialists who understand PCOS.
        </p>
      </div>
    </ArticleLayout>
  );
}
