import { ArticleLayout } from "@/components/shared/ArticleLayout";

const relatedArticles = [
  { title: "Insulin Resistance Explained Simply", href: "/hormonal-weight/insulin-resistance" },
  { title: "Cortisol, Stress & Belly Fat", href: "/hormonal-weight/cortisol-belly-fat" },
  { title: "Thyroid & Weight: The Connection", href: "/hormonal-weight/thyroid-weight" },
];

export default function WhyWeightChangesArticle() {
  return (
    <ArticleLayout
      title="Understanding Hormonal Weight Gain"
      description="Why weight changes with hormones and what's really going on."
      breadcrumbs={[
        { label: "Hormonal Weight", href: "/hormonal-weight" },
        { label: "Why Weight Changes" },
      ]}
      backLink={{ href: "/hormonal-weight", label: "Hormonal Weight" }}
      relatedArticles={relatedArticles}
      lastUpdated="December 2024"
    >
      <p className="text-muted-foreground text-lg">
        If you've gained weight without changing your habits, or can't lose weight despite 
        genuine effort, hormones may be playing a role. Here's how.
      </p>

      <h2>It's Not Just Calories</h2>
      <p>
        The "eat less, move more" advice assumes all bodies work the same way. They don't. 
        Hormones affect:
      </p>
      <ul>
        <li>How hungry you feel</li>
        <li>How satisfied you feel after eating</li>
        <li>Where you store fat</li>
        <li>How easily you burn fat</li>
        <li>Your metabolic rate</li>
      </ul>

      <h2>Key Hormones That Affect Weight</h2>

      <h3>Insulin</h3>
      <p>
        The "storage hormone." High insulin (common with insulin resistance) promotes fat 
        storage and makes fat burning difficult.
      </p>

      <h3>Cortisol</h3>
      <p>
        The stress hormone. Chronically high cortisol promotes belly fat storage and 
        increases cravings.
      </p>

      <h3>Thyroid Hormones</h3>
      <p>
        Control your metabolism. Low thyroid (hypothyroidism) slows everything down, 
        including calorie burning.
      </p>

      <h3>Estrogen & Progesterone</h3>
      <p>
        Affect fat distribution. Changes during perimenopause often shift fat toward 
        the abdomen.
      </p>

      <h3>Leptin & Ghrelin</h3>
      <p>
        Hunger and fullness hormones. Imbalances (often from poor sleep or insulin issues) 
        increase appetite.
      </p>

      <h2>Common Hormonal Weight Patterns</h2>

      <h3>Belly-Focused Weight Gain</h3>
      <p>Often linked to insulin resistance and/or high cortisol.</p>

      <h3>All-Over Weight Gain with Fatigue</h3>
      <p>May suggest thyroid issues — worth testing.</p>

      <h3>Difficulty Losing Despite Effort</h3>
      <p>Suggests metabolic adaptation or hormonal factors at play.</p>

      <h3>Weight Gain After Life Changes</h3>
      <p>Stress, sleep changes, menopause, PCOS can all trigger hormonal weight shifts.</p>

      <h2>What You Can Do</h2>
      <ul>
        <li>Get tested: thyroid, fasting insulin, fasting glucose</li>
        <li>Address insulin resistance through diet and movement</li>
        <li>Manage stress and prioritize sleep</li>
        <li>Don't over-restrict calories (can backfire hormonally)</li>
        <li>Focus on metabolic health, not just the scale</li>
      </ul>

      <div className="rounded-lg border border-sage-200 bg-sage-50 p-4 mt-6">
        <p className="text-sm text-muted-foreground">
          <strong>Key insight:</strong> If weight won't budge despite your best efforts, 
          it's not a character flaw. Get your hormones checked and work with your body, 
          not against it.
        </p>
      </div>
    </ArticleLayout>
  );
}
