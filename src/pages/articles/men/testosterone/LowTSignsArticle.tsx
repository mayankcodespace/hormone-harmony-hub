import { ArticleLayout } from "@/components/shared/ArticleLayout";

const relatedArticles = [
  { title: "Understanding Testosterone", href: "/men/testosterone/basics" },
  { title: "Testosterone Testing", href: "/men/testosterone/testing" },
  { title: "Lifestyle & Testosterone", href: "/men/testosterone/lifestyle" },
];

export default function LowTSignsArticle() {
  return (
    <ArticleLayout
      title="Signs of Low Testosterone: What to Watch For"
      description="Common symptoms of low testosterone and when to get tested."
      breadcrumbs={[
        { label: "Men's Health", href: "/men" },
        { label: "Testosterone & Energy", href: "/men/testosterone" },
        { label: "Signs of Low Testosterone" },
      ]}
      backLink={{ href: "/men/testosterone", label: "Testosterone & Energy" }}
      relatedArticles={relatedArticles}
      lastUpdated="January 2025"
    >
      <p className="text-muted-foreground text-lg">
        Low testosterone (hypogonadism) affects an estimated 20-40% of older men. But symptoms 
        can be vague and overlap with other conditions, making it tricky to identify.
      </p>

      <h2>Common Symptoms of Low Testosterone</h2>
      <p>
        Low testosterone can manifest in various ways:
      </p>
      
      <h3>Physical Symptoms</h3>
      <ul>
        <li><strong>Fatigue:</strong> Persistent tiredness despite adequate sleep</li>
        <li><strong>Reduced muscle mass:</strong> Difficulty building or maintaining muscle</li>
        <li><strong>Increased body fat:</strong> Especially around the belly</li>
        <li><strong>Decreased bone density:</strong> Increased fracture risk</li>
        <li><strong>Breast tissue growth:</strong> Gynecomastia (enlarged breast tissue)</li>
        <li><strong>Hair loss:</strong> Decreased facial and body hair</li>
        <li><strong>Hot flashes:</strong> Less common but can occur</li>
      </ul>

      <h3>Sexual Symptoms</h3>
      <ul>
        <li><strong>Low libido:</strong> Reduced interest in sex</li>
        <li><strong>Erectile dysfunction:</strong> Difficulty achieving or maintaining erections</li>
        <li><strong>Reduced semen volume:</strong> Less fluid during ejaculation</li>
        <li><strong>Infertility:</strong> Low sperm count</li>
      </ul>

      <h3>Mental & Emotional Symptoms</h3>
      <ul>
        <li><strong>Depression:</strong> Low mood, sadness, hopelessness</li>
        <li><strong>Irritability:</strong> Increased frustration or anger</li>
        <li><strong>Difficulty concentrating:</strong> Brain fog, poor memory</li>
        <li><strong>Reduced motivation:</strong> Lack of drive or ambition</li>
        <li><strong>Sleep disturbances:</strong> Insomnia or poor sleep quality</li>
      </ul>

      <h2>What Else Could It Be?</h2>
      <p>
        Many conditions share symptoms with low testosterone:
      </p>
      <ul>
        <li><strong>Depression:</strong> Can cause fatigue, low libido, and poor concentration</li>
        <li><strong>Thyroid disorders:</strong> Affect energy, weight, and mood</li>
        <li><strong>Sleep apnea:</strong> Causes fatigue and can lower testosterone</li>
        <li><strong>Diabetes:</strong> Associated with fatigue, ED, and low testosterone</li>
        <li><strong>Chronic stress:</strong> Depletes energy and affects hormones</li>
        <li><strong>Vitamin D deficiency:</strong> Common and causes similar symptoms</li>
      </ul>

      <h2>When to Get Tested</h2>
      <p>
        Consider testing if you have multiple persistent symptoms, especially:
      </p>
      <ul>
        <li>Persistent fatigue that doesn't improve with rest</li>
        <li>Significant loss of libido (not just occasional)</li>
        <li>Erectile dysfunction (especially if gradual onset)</li>
        <li>Depression along with physical symptoms</li>
        <li>Unexplained muscle loss or increased belly fat</li>
      </ul>

      <h2>The Testing Process</h2>
      <p>
        If you suspect low testosterone:
      </p>
      <ol>
        <li>Get tested in the morning (levels are highest then)</li>
        <li>Get both total and free testosterone measured</li>
        <li>If the first test is low, repeat it to confirm</li>
        <li>Consider additional tests: LH, FSH, prolactin, thyroid</li>
      </ol>

      <div className="rounded-lg border border-sage-200 bg-sage-50 p-4 mt-6">
        <p className="text-sm text-muted-foreground">
          <strong>Key takeaway:</strong> Don't self-diagnose based on symptoms alone. Many conditions 
          mimic low testosterone. Get proper testing and work with a doctor who will look at the 
          full picture, not just prescribe treatment based on symptoms.
        </p>
      </div>
    </ArticleLayout>
  );
}