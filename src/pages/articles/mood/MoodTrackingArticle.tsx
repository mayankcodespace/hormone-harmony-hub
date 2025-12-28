import { ArticleLayout } from "@/components/shared/ArticleLayout";

const relatedArticles = [
  { title: "PMS vs PMDD: Understanding the Difference", href: "/mood-pms/pms-vs-pmdd-basics" },
  { title: "The Serotonin Connection", href: "/mood-pms/serotonin-hormones" },
  { title: "When to Seek Professional Help", href: "/mood-pms/when-to-seek-help" },
];

export default function MoodTrackingArticle() {
  return (
    <ArticleLayout
      title="Tracking Mood & Your Cycle"
      description="How to identify patterns between your hormones and emotions."
      breadcrumbs={[
        { label: "Mood & PMS", href: "/mood-pms" },
        { label: "Mood Tracking" },
      ]}
      backLink={{ href: "/mood-pms", label: "Mood & PMS" }}
      relatedArticles={relatedArticles}
      lastUpdated="December 2024"
    >
      <p className="text-muted-foreground text-lg">
        Understanding how your mood changes throughout your cycle can be empowering. 
        When you can predict patterns, you can prepare for them.
      </p>

      <h2>Why Track Mood with Your Cycle?</h2>
      <ul>
        <li>Identify if symptoms are cyclical (tied to hormones)</li>
        <li>Prepare for challenging days</li>
        <li>Distinguish hormonal patterns from other mood issues</li>
        <li>Have useful data to share with your doctor</li>
        <li>Stop blaming yourself for predictable patterns</li>
      </ul>

      <h2>What to Track</h2>

      <h3>Daily Tracking</h3>
      <ul>
        <li><strong>Day of cycle:</strong> Day 1 = first day of period</li>
        <li><strong>Mood:</strong> Overall mood rating (1-10 or simple: good/neutral/bad)</li>
        <li><strong>Energy:</strong> Energy level rating</li>
        <li><strong>Anxiety:</strong> Note if present and severity</li>
        <li><strong>Irritability:</strong> Note if present</li>
        <li><strong>Sleep:</strong> Quality and hours</li>
        <li><strong>Physical symptoms:</strong> Cramps, bloating, headaches, etc.</li>
      </ul>

      <h3>Weekly Notes</h3>
      <ul>
        <li>Any major stressors or life events</li>
        <li>How symptoms affected daily function</li>
        <li>What helped or made things worse</li>
      </ul>

      <h2>How to Track</h2>

      <h3>Apps</h3>
      <ul>
        <li>Clue, Flo, or other period trackers with mood features</li>
        <li>General mood tracking apps</li>
        <li>Me v PMDD (specifically designed for PMDD)</li>
      </ul>

      <h3>Simple Method</h3>
      <ul>
        <li>Calendar with color-coded days (green = good, yellow = okay, red = hard)</li>
        <li>Notebook with daily brief notes</li>
        <li>Spreadsheet if you prefer structure</li>
      </ul>

      <h2>How Long to Track</h2>
      <p>
        Track for at least 2-3 cycles to see patterns. The more data you have, 
        the clearer patterns become.
      </p>

      <h2>What Patterns to Look For</h2>

      <h3>Typical Hormonal Mood Patterns</h3>
      <ul>
        <li><strong>Days 1-5 (period):</strong> Low mood may lift as period progresses</li>
        <li><strong>Days 6-12 (follicular):</strong> Rising estrogen often brings better mood</li>
        <li><strong>Days 13-15 (ovulation):</strong> Many feel best around ovulation</li>
        <li><strong>Days 16-28 (luteal):</strong> Gradual decline, PMS symptoms in last week</li>
      </ul>

      <h3>Red Flags to Note</h3>
      <ul>
        <li>Symptoms that are severe every cycle</li>
        <li>No symptom-free weeks at all</li>
        <li>Suicidal thoughts during any phase</li>
        <li>Symptoms that don't follow a pattern (may not be hormonal)</li>
      </ul>

      <h2>Using Your Data</h2>
      <ul>
        <li>Plan demanding activities during high-energy phases</li>
        <li>Schedule lighter commitments during vulnerable phases</li>
        <li>Prepare coping strategies before predictable hard days</li>
        <li>Share data with your healthcare provider</li>
      </ul>

      <div className="rounded-lg border border-sage-200 bg-sage-50 p-4 mt-6">
        <p className="text-sm text-muted-foreground">
          <strong>Pro tip:</strong> Don't overcomplicate tracking. Even simple daily mood 
          ratings (happy face/neutral face/sad face) can reveal powerful patterns over time.
        </p>
      </div>
    </ArticleLayout>
  );
}
