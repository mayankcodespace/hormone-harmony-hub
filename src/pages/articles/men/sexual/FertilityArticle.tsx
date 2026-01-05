import { ArticleLayout } from "@/components/shared/ArticleLayout";
import { SourcesAccordion, Citation } from "@/components/shared/CitationSystem";

const citations: Citation[] = [
  {
    id: 1,
    title: "Male infertility: lifestyle factors and reproductive impact",
    source: "Human Reproduction Update, 2020",
    url: "https://academic.oup.com/humupd/article/26/3/269/5785268",
    accessDate: "January 2026",
  },
  {
    id: 2,
    title: "Semen quality and lifestyle factors",
    source: "Fertility and Sterility, 2019",
    url: "https://www.fertstert.org/article/S0015-0282(19)30001-X/fulltext",
    accessDate: "January 2026",
  },
  {
    id: 3,
    title: "Environmental factors affecting male fertility",
    source: "Nature Reviews Urology, 2021",
    url: "https://www.nature.com/articles/s41585-021-00477-5",
    accessDate: "January 2026",
  },
];

export default function FertilityArticle() {
  return (
    <ArticleLayout
      title="Male Fertility: What You Can Control"
      description="Understanding sperm health, lifestyle factors that affect fertility, and evidence-based ways to optimize your reproductive health."
      breadcrumbs={[
        { label: "Men's Health", href: "/men" },
        { label: "Sexual Health", href: "/men/sexual-health" },
        { label: "Fertility" },
      ]}
      backLink={{ label: "Sexual Health Hub", href: "/men/sexual-health" }}
      relatedArticles={[
        { title: "Testosterone & Libido", href: "/men/sexual-health/testosterone-libido" },
        { title: "Sleep & Sexual Health", href: "/men/sexual-health/sleep-impact" },
        { title: "Lifestyle & Testosterone", href: "/men/testosterone/lifestyle" },
      ]}
      lastUpdated="January 2026"
    >
      <div className="article-content">
        <section>
          <h2>Male Fertility Is Not Just "Women's Issue"</h2>
          <p>
            About 40-50% of infertility cases involve male factors. Yet male fertility is often 
            overlooked until couples struggle to conceive. The good news is that many factors 
            affecting sperm health are within your control.
          </p>
          <p>
            Sperm take about 74 days to develop, which means lifestyle changes today can affect 
            sperm quality in 2-3 months.
          </p>
        </section>

        <section>
          <h2>What Affects Sperm Health</h2>
          <p>Sperm quality is measured by:</p>
          <ul>
            <li><strong>Sperm count:</strong> Number of sperm per milliliter</li>
            <li><strong>Motility:</strong> How well sperm swim</li>
            <li><strong>Morphology:</strong> Shape and structure of sperm</li>
            <li><strong>DNA integrity:</strong> Quality of genetic material</li>
          </ul>
          <p>
            All of these can be influenced by lifestyle, environment, and health conditions.
          </p>
        </section>

        <section>
          <h2>Lifestyle Factors That Harm Fertility</h2>
          <ul>
            <li><strong>Smoking:</strong> Significantly reduces sperm count and motility, increases DNA damage</li>
            <li><strong>Excessive alcohol:</strong> Lowers testosterone, affects sperm production</li>
            <li><strong>Obesity:</strong> Associated with lower sperm counts and hormonal imbalances</li>
            <li><strong>Heat exposure:</strong> Hot tubs, saunas, tight underwear, laptop on lap can affect sperm</li>
            <li><strong>Chronic stress:</strong> Elevated cortisol affects reproductive hormones</li>
            <li><strong>Poor sleep:</strong> Disrupts testosterone production</li>
            <li><strong>Anabolic steroids:</strong> Severely suppress natural testosterone and sperm production</li>
          </ul>
        </section>

        <section>
          <h2>Optimizing Fertility Naturally</h2>
          <h3>Diet</h3>
          <ul>
            <li>Eat plenty of antioxidant-rich foods (vegetables, fruits, nuts)</li>
            <li>Include omega-3 fatty acids (fatty fish, walnuts)</li>
            <li>Ensure adequate zinc (meat, pumpkin seeds, legumes)</li>
            <li>Get enough folate (leafy greens, legumes)</li>
            <li>Limit processed foods and trans fats</li>
          </ul>

          <h3>Lifestyle</h3>
          <ul>
            <li><strong>Maintain healthy weight:</strong> BMI 20-25 is optimal for fertility</li>
            <li><strong>Exercise moderately:</strong> Regular exercise helps, but extreme exercise can harm</li>
            <li><strong>Keep cool:</strong> Avoid prolonged heat exposure to testicles</li>
            <li><strong>Manage stress:</strong> Chronic stress affects hormones</li>
            <li><strong>Quality sleep:</strong> 7-8 hours per night</li>
          </ul>

          <h3>Environmental</h3>
          <ul>
            <li>Limit exposure to pesticides and chemicals when possible</li>
            <li>Be mindful of plastics (BPA and phthalates)</li>
            <li>Reduce radiation exposure (don't carry phone in front pocket for extended periods)</li>
          </ul>
        </section>

        <section>
          <h2>Supplements: What Works?</h2>
          <p>Some supplements have evidence for supporting sperm health:</p>
          <ul>
            <li><strong>Zinc:</strong> Essential for testosterone and sperm production</li>
            <li><strong>Selenium:</strong> Important for sperm formation</li>
            <li><strong>CoQ10:</strong> May improve sperm motility</li>
            <li><strong>Vitamin D:</strong> Deficiency linked to lower sperm quality</li>
            <li><strong>Omega-3s:</strong> Support sperm membrane health</li>
          </ul>
          <p>
            <em>Note: Always consult a doctor before starting supplements, especially if trying to conceive.</em>
          </p>
        </section>

        <section>
          <h2>When to See a Specialist</h2>
          <p>Consider seeing a urologist or fertility specialist if:</p>
          <ul>
            <li>You've been trying to conceive for 12+ months without success</li>
            <li>6 months if your partner is over 35</li>
            <li>You have a history of testicular issues, infections, or surgeries</li>
            <li>You've used anabolic steroids</li>
            <li>You have known hormonal issues</li>
          </ul>
          <p>
            A semen analysis is a simple test that can provide valuable information about 
            sperm health and guide next steps.
          </p>
        </section>

        <SourcesAccordion citations={citations} lastUpdated="January 2026" />
      </div>
    </ArticleLayout>
  );
}
