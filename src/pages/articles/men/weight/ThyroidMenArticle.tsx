import { ArticleLayout } from "@/components/shared/ArticleLayout";

const relatedArticles = [
  { title: "Why Men Gain Belly Fat", href: "/men/weight/belly-fat" },
  { title: "Sustainable Fat Loss", href: "/men/weight/sustainable-approach" },
  { title: "Signs of Low Testosterone", href: "/men/testosterone/low-t-signs" },
];

export default function ThyroidMenArticle() {
  return (
    <ArticleLayout
      title="Thyroid & Metabolism in Men"
      description="How thyroid issues affect weight, energy, and metabolism in men."
      breadcrumbs={[
        { label: "Men's Health", href: "/men" },
        { label: "Weight & Metabolism", href: "/men/weight" },
        { label: "Thyroid & Metabolism" },
      ]}
      backLink={{ href: "/men/weight", label: "Weight & Metabolism" }}
      relatedArticles={relatedArticles}
      lastUpdated="January 2025"
    >
      <p className="text-muted-foreground text-lg">
        Thyroid issues are often thought of as "women's problems," but they affect men too. 
        An underactive thyroid can make weight loss nearly impossible and cause symptoms that 
        overlap with low testosterone.
      </p>

      <h2>What the Thyroid Does</h2>
      <p>
        Your thyroid is the body's metabolic thermostat:
      </p>
      <ul>
        <li>Produces hormones that control metabolism</li>
        <li>Affects how fast you burn calories</li>
        <li>Influences energy levels, body temperature, heart rate</li>
        <li>Impacts mood, cognitive function, and libido</li>
      </ul>

      <h2>Hypothyroidism in Men</h2>
      <p>
        Underactive thyroid symptoms:
      </p>
      <ul>
        <li>Unexplained weight gain or difficulty losing weight</li>
        <li>Fatigue and low energy</li>
        <li>Feeling cold when others are comfortable</li>
        <li>Constipation</li>
        <li>Dry skin and hair</li>
        <li>Brain fog and poor concentration</li>
        <li>Depression and low mood</li>
        <li>Low libido</li>
        <li>Muscle weakness</li>
        <li>High cholesterol</li>
      </ul>

      <h2>Thyroid vs. Low Testosterone</h2>
      <p>
        The symptoms overlap significantly:
      </p>
      <ul>
        <li>Both cause fatigue and low energy</li>
        <li>Both affect libido and mood</li>
        <li>Both can cause weight gain</li>
        <li>Both cause brain fog</li>
        <li>Thyroid issues can actually lower testosterone</li>
        <li><strong>Bottom line:</strong> Test both if you have these symptoms</li>
      </ul>

      <h2>Testing Thyroid Function</h2>
      <p>
        Essential tests to request:
      </p>
      <ul>
        <li><strong>TSH:</strong> Primary screening test (high TSH = underactive thyroid)</li>
        <li><strong>Free T4:</strong> The main thyroid hormone</li>
        <li><strong>Free T3:</strong> The active hormone (sometimes missed)</li>
        <li><strong>TPO antibodies:</strong> Tests for autoimmune thyroid disease</li>
      </ul>

      <h3>Understanding Results</h3>
      <ul>
        <li><strong>TSH:</strong> Optimal is 0.5-2.5 mIU/L (not just "normal")</li>
        <li>High TSH with low T4 = overt hypothyroidism</li>
        <li>High TSH with normal T4 = subclinical hypothyroidism</li>
        <li>"Normal" lab ranges may not be optimal</li>
      </ul>

      <h2>Treatment Options</h2>
      <p>
        If diagnosed with hypothyroidism:
      </p>
      <ul>
        <li><strong>Levothyroxine:</strong> Standard treatment, synthetic T4</li>
        <li>Usually lifelong treatment</li>
        <li>Dosing requires regular monitoring</li>
        <li>Takes 6-8 weeks to see full effect</li>
        <li>Proper treatment can make weight loss much easier</li>
      </ul>

      <h2>Lifestyle Factors</h2>
      <p>
        Supporting thyroid health:
      </p>
      <ul>
        <li><strong>Selenium:</strong> Important for thyroid function (Brazil nuts, fish)</li>
        <li><strong>Zinc:</strong> Supports thyroid hormone production</li>
        <li><strong>Iodine:</strong> Essential, but most get enough from salt</li>
        <li><strong>Reduce stress:</strong> High cortisol impairs thyroid function</li>
        <li><strong>Adequate sleep:</strong> Thyroid function is affected by sleep</li>
        <li><strong>Avoid extreme dieting:</strong> Severe restriction lowers thyroid hormones</li>
      </ul>

      <h2>When to Suspect Thyroid Issues</h2>
      <p>
        Consider testing if:
      </p>
      <ul>
        <li>Weight gain despite unchanged habits</li>
        <li>Can't lose weight despite significant effort</li>
        <li>Persistent fatigue not explained by sleep</li>
        <li>Family history of thyroid disease</li>
        <li>Low testosterone treatment isn't helping symptoms</li>
        <li>Symptoms that don't fit a clear pattern</li>
      </ul>

      <div className="rounded-lg border border-sage-200 bg-sage-50 p-4 mt-6">
        <p className="text-sm text-muted-foreground">
          <strong>Key takeaway:</strong> Thyroid issues are underdiagnosed in men because they're 
          seen as "female problems." If you have unexplained weight gain, fatigue, and cold intolerance, 
          get your thyroid checked — it could be the missing piece.
        </p>
      </div>
    </ArticleLayout>
  );
}