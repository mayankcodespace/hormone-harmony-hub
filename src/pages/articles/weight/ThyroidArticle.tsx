import { ArticleLayout } from "@/components/shared/ArticleLayout";

const relatedArticles = [
  { title: "Understanding Hormonal Weight Gain", href: "/hormonal-weight/why-weight-changes" },
  { title: "Insulin Resistance Explained Simply", href: "/hormonal-weight/insulin-resistance" },
  { title: "Sustainable Weight Management", href: "/hormonal-weight/sustainable-approach" },
];

export default function ThyroidArticle() {
  return (
    <ArticleLayout
      title="Thyroid & Weight: The Connection"
      description="How your thyroid affects metabolism and weight."
      breadcrumbs={[
        { label: "Hormonal Weight", href: "/hormonal-weight" },
        { label: "Thyroid & Weight" },
      ]}
      backLink={{ href: "/hormonal-weight", label: "Hormonal Weight" }}
      relatedArticles={relatedArticles}
      lastUpdated="December 2024"
    >
      <p className="text-muted-foreground text-lg">
        Your thyroid is a small butterfly-shaped gland in your neck, but it has a huge 
        impact on your metabolism and weight.
      </p>

      <h2>What Does the Thyroid Do?</h2>
      <p>
        Your thyroid produces hormones (T3 and T4) that control how fast your body 
        burns calories — your metabolic rate. It affects:
      </p>
      <ul>
        <li>Energy levels</li>
        <li>Body temperature</li>
        <li>Heart rate</li>
        <li>Weight</li>
        <li>Mood</li>
        <li>Menstrual cycles</li>
      </ul>

      <h2>Hypothyroidism (Underactive Thyroid)</h2>
      <p>
        When your thyroid produces too little hormone, everything slows down.
      </p>
      
      <h3>Symptoms</h3>
      <ul>
        <li>Weight gain or difficulty losing weight</li>
        <li>Fatigue and low energy</li>
        <li>Feeling cold when others are comfortable</li>
        <li>Dry skin and hair</li>
        <li>Hair loss</li>
        <li>Constipation</li>
        <li>Brain fog</li>
        <li>Depression</li>
        <li>Irregular or heavy periods</li>
      </ul>

      <h2>Hyperthyroidism (Overactive Thyroid)</h2>
      <p>
        When your thyroid produces too much hormone, everything speeds up.
      </p>
      
      <h3>Symptoms</h3>
      <ul>
        <li>Unexplained weight loss</li>
        <li>Rapid heartbeat, palpitations</li>
        <li>Anxiety, nervousness</li>
        <li>Trembling hands</li>
        <li>Feeling hot, excessive sweating</li>
        <li>Difficulty sleeping</li>
        <li>Light or absent periods</li>
      </ul>

      <h2>Getting Tested</h2>
      <p>
        If you suspect thyroid issues, ask your doctor for:
      </p>
      <ul>
        <li><strong>TSH:</strong> The main screening test</li>
        <li><strong>Free T4:</strong> Active thyroid hormone</li>
        <li><strong>Free T3:</strong> Another active hormone</li>
        <li><strong>Thyroid antibodies:</strong> To check for autoimmune thyroid disease</li>
      </ul>

      <h2>Thyroid and PCOS</h2>
      <p>
        Thyroid disorders are more common in women with PCOS. If you have PCOS and 
        unexplained symptoms, getting your thyroid checked is wise.
      </p>

      <h2>Supporting Thyroid Health</h2>
      <ul>
        <li><strong>Iodine:</strong> Found in iodized salt, dairy, seafood</li>
        <li><strong>Selenium:</strong> Brazil nuts, fish, eggs</li>
        <li><strong>Zinc:</strong> Nuts, seeds, legumes</li>
        <li><strong>Avoid extreme diets:</strong> Very low calorie diets can suppress thyroid</li>
        <li><strong>Manage stress:</strong> Chronic stress affects thyroid function</li>
      </ul>

      <div className="rounded-lg border border-sage-200 bg-sage-50 p-4 mt-6">
        <p className="text-sm text-muted-foreground">
          <strong>Important:</strong> If you're diagnosed with a thyroid condition, 
          medication can make a significant difference. Work with your doctor on 
          proper treatment and monitoring.
        </p>
      </div>
    </ArticleLayout>
  );
}
