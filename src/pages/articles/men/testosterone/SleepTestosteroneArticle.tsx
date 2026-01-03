import { ArticleLayout } from "@/components/shared/ArticleLayout";

const relatedArticles = [
  { title: "Cortisol & Testosterone Connection", href: "/men/testosterone/cortisol-connection" },
  { title: "Lifestyle & Testosterone", href: "/men/testosterone/lifestyle" },
  { title: "Sleep & Weight Connection", href: "/men/weight/sleep-weight" },
];

export default function SleepTestosteroneArticle() {
  return (
    <ArticleLayout
      title="Sleep & Testosterone: Why Rest Matters"
      description="How sleep affects testosterone production and what to do about it."
      breadcrumbs={[
        { label: "Men's Health", href: "/men" },
        { label: "Testosterone & Energy", href: "/men/testosterone" },
        { label: "Sleep & Testosterone" },
      ]}
      backLink={{ href: "/men/testosterone", label: "Testosterone & Energy" }}
      relatedArticles={relatedArticles}
      lastUpdated="January 2025"
    >
      <p className="text-muted-foreground text-lg">
        Sleep is perhaps the single most important factor for testosterone production. 
        Most men don't realize how much their sleep habits affect their hormones.
      </p>

      <h2>How Sleep Affects Testosterone</h2>
      <p>
        The relationship between sleep and testosterone is profound:
      </p>
      <ul>
        <li>The majority of testosterone is released during sleep</li>
        <li>Production peaks during REM sleep (the deep, restorative phase)</li>
        <li>Sleep deprivation directly suppresses testosterone production</li>
        <li>Even one week of poor sleep can drop testosterone by 10-15%</li>
      </ul>

      <h2>The Research</h2>
      <p>
        Studies show dramatic effects:
      </p>
      <ul>
        <li>Men sleeping 5 hours had 10-15% lower testosterone than those sleeping 8 hours</li>
        <li>Each hour of sleep lost correlated with lower testosterone</li>
        <li>Sleep restriction for just 1 week mimicked 10-15 years of aging in testosterone levels</li>
        <li>Sleep apnea is strongly associated with low testosterone</li>
      </ul>

      <h2>Signs Your Sleep Is Affecting Hormones</h2>
      <ul>
        <li>Waking up tired despite enough hours in bed</li>
        <li>Low morning energy (testosterone should peak in the morning)</li>
        <li>Needing caffeine to function</li>
        <li>Irritability and poor concentration</li>
        <li>Low libido, especially in the morning</li>
        <li>Difficulty building muscle despite good training</li>
      </ul>

      <h2>Sleep Apnea: A Major Testosterone Killer</h2>
      <p>
        Sleep apnea is extremely common in men and destroys testosterone:
      </p>
      <ul>
        <li>Interrupted breathing prevents reaching deep sleep</li>
        <li>Raises cortisol, which suppresses testosterone</li>
        <li>Associated with 50% lower testosterone in some studies</li>
        <li>Often undiagnosed — many men don't know they have it</li>
        <li><strong>Warning signs:</strong> Snoring, waking gasping, daytime fatigue, partner reports breathing stops</li>
      </ul>

      <h2>How to Optimize Sleep for Testosterone</h2>
      
      <h3>Sleep Duration</h3>
      <ul>
        <li>Aim for 7-9 hours per night</li>
        <li>Consistency matters — same bedtime/wake time</li>
        <li>Don't try to "catch up" on weekends</li>
      </ul>

      <h3>Sleep Quality</h3>
      <ul>
        <li><strong>Dark room:</strong> Use blackout curtains or an eye mask</li>
        <li><strong>Cool temperature:</strong> 65-68°F (18-20°C) is optimal</li>
        <li><strong>No screens:</strong> Blue light suppresses melatonin</li>
        <li><strong>Limit alcohol:</strong> It disrupts REM sleep despite helping you fall asleep</li>
        <li><strong>No caffeine after 2 PM:</strong> Half-life is 5-6 hours</li>
      </ul>

      <h3>Sleep Timing</h3>
      <ul>
        <li>Earlier bedtime generally better for testosterone</li>
        <li>Sleep aligned with your natural rhythm (chronotype)</li>
        <li>Morning sunlight helps regulate sleep hormones</li>
      </ul>

      <h2>When to See a Doctor</h2>
      <p>
        Consider a sleep study if:
      </p>
      <ul>
        <li>You snore loudly or have been told you stop breathing</li>
        <li>You wake up frequently at night</li>
        <li>You're always tired despite sleeping enough hours</li>
        <li>You have low testosterone and no obvious cause</li>
      </ul>

      <div className="rounded-lg border border-sage-200 bg-sage-50 p-4 mt-6">
        <p className="text-sm text-muted-foreground">
          <strong>Key takeaway:</strong> Optimizing testosterone while sleeping poorly is like trying to fill a 
          bucket with a hole in it. Fix sleep first — it's the foundation everything else rests on.
        </p>
      </div>
    </ArticleLayout>
  );
}