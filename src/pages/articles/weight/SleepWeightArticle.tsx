import { ArticleLayout } from "@/components/shared/ArticleLayout";

const relatedArticles = [
  { title: "Cortisol, Stress & Belly Fat", href: "/hormonal-weight/cortisol-belly-fat" },
  { title: "Insulin Resistance Explained Simply", href: "/hormonal-weight/insulin-resistance" },
  { title: "Sustainable Weight Management", href: "/hormonal-weight/sustainable-approach" },
];

export default function SleepWeightArticle() {
  return (
    <ArticleLayout
      title="Sleep & Weight Connection"
      description="Why sleep might be the missing piece in your weight journey."
      breadcrumbs={[
        { label: "Hormonal Weight", href: "/hormonal-weight" },
        { label: "Sleep & Weight" },
      ]}
      backLink={{ href: "/hormonal-weight", label: "Hormonal Weight" }}
      relatedArticles={relatedArticles}
      lastUpdated="December 2024"
    >
      <p className="text-muted-foreground text-lg">
        You might be eating well and exercising, but if you're not sleeping well, 
        your weight may not budge. Here's why sleep matters so much.
      </p>

      <h2>How Sleep Affects Weight</h2>

      <h3>Hunger Hormones</h3>
      <ul>
        <li><strong>Leptin drops:</strong> The hormone that tells you you're full decreases</li>
        <li><strong>Ghrelin rises:</strong> The hunger hormone increases</li>
        <li><strong>Result:</strong> You feel hungrier and less satisfied after eating</li>
      </ul>

      <h3>Insulin Sensitivity</h3>
      <ul>
        <li>Even one night of poor sleep reduces insulin sensitivity</li>
        <li>Chronic poor sleep worsens insulin resistance</li>
        <li>This promotes fat storage, especially around the belly</li>
      </ul>

      <h3>Cortisol</h3>
      <ul>
        <li>Poor sleep elevates cortisol</li>
        <li>High cortisol promotes belly fat storage</li>
        <li>Creates a vicious cycle (cortisol also disrupts sleep)</li>
      </ul>

      <h3>Cravings</h3>
      <ul>
        <li>Poor sleep increases cravings for high-calorie foods</li>
        <li>Decision-making and willpower are impaired</li>
        <li>You're more likely to reach for quick energy fixes</li>
      </ul>

      <h2>How Much Sleep Do You Need?</h2>
      <p>
        Most adults need 7-9 hours. If you're consistently getting less than 7, 
        it's likely affecting your hormones and weight.
      </p>

      <h2>Improving Sleep Quality</h2>

      <h3>Sleep Hygiene Basics</h3>
      <ul>
        <li>Consistent sleep and wake times (even weekends)</li>
        <li>Cool, dark, quiet bedroom</li>
        <li>Limit screens 1 hour before bed</li>
        <li>No caffeine after 2pm</li>
        <li>Avoid heavy meals close to bedtime</li>
      </ul>

      <h3>Wind-Down Routine</h3>
      <ul>
        <li>Same pre-bed routine each night (signals your body it's time to sleep)</li>
        <li>Dim lights in the evening</li>
        <li>Relaxation activities: reading, gentle stretching, warm bath</li>
        <li>Journaling to clear your mind</li>
      </ul>

      <h3>During the Day</h3>
      <ul>
        <li>Morning light exposure helps regulate circadian rhythm</li>
        <li>Regular exercise (but not too close to bedtime)</li>
        <li>Limit long naps (can disrupt nighttime sleep)</li>
      </ul>

      <h2>Sleep and Your Menstrual Cycle</h2>
      <ul>
        <li>Sleep can be harder in the luteal phase (before your period)</li>
        <li>Progesterone affects body temperature and sleep</li>
        <li>You may need more rest during this time</li>
      </ul>

      <div className="rounded-lg border border-sage-200 bg-sage-50 p-4 mt-6">
        <p className="text-sm text-muted-foreground">
          <strong>Key insight:</strong> If you're struggling with weight despite doing 
          "everything right," look at your sleep. It might be the missing piece.
        </p>
      </div>
    </ArticleLayout>
  );
}
