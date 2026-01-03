import { ArticleLayout } from "@/components/shared/ArticleLayout";

const relatedArticles = [
  { title: "Cortisol & Fat Storage", href: "/men/weight/cortisol-fat" },
  { title: "Sleep & Testosterone", href: "/men/testosterone/sleep" },
  { title: "Why Men Gain Belly Fat", href: "/men/weight/belly-fat" },
];

export default function SleepWeightMenArticle() {
  return (
    <ArticleLayout
      title="Sleep & Weight: The Hidden Connection"
      description="Poor sleep disrupts hormones that control hunger, metabolism, and fat storage."
      breadcrumbs={[
        { label: "Men's Health", href: "/men" },
        { label: "Weight & Metabolism", href: "/men/weight" },
        { label: "Sleep & Weight Connection" },
      ]}
      backLink={{ href: "/men/weight", label: "Weight & Metabolism" }}
      relatedArticles={relatedArticles}
      lastUpdated="January 2025"
    >
      <p className="text-muted-foreground text-lg">
        You can have perfect diet and exercise, but if you're not sleeping well, you're fighting 
        an uphill battle with weight loss. Sleep affects nearly every hormone related to body composition.
      </p>

      <h2>How Sleep Affects Weight</h2>
      
      <h3>Hunger Hormones</h3>
      <ul>
        <li><strong>Ghrelin (hunger hormone):</strong> Increases with poor sleep</li>
        <li><strong>Leptin (satiety hormone):</strong> Decreases with poor sleep</li>
        <li>Result: You're hungrier and don't feel full</li>
        <li>Studies show 24% more hunger after sleep deprivation</li>
      </ul>

      <h3>Cortisol</h3>
      <ul>
        <li>Poor sleep raises cortisol</li>
        <li>High cortisol promotes belly fat storage</li>
        <li>Increases cravings for high-calorie foods</li>
      </ul>

      <h3>Testosterone</h3>
      <ul>
        <li>Most testosterone is produced during sleep</li>
        <li>Low testosterone = more fat, less muscle</li>
        <li>5 hours of sleep = 10-15% lower testosterone</li>
      </ul>

      <h3>Insulin Sensitivity</h3>
      <ul>
        <li>Just one night of poor sleep reduces insulin sensitivity</li>
        <li>Chronic poor sleep promotes insulin resistance</li>
        <li>This makes fat loss much harder</li>
      </ul>

      <h2>The Research</h2>
      <p>
        Studies consistently show:
      </p>
      <ul>
        <li>People who sleep less tend to weigh more</li>
        <li>Short sleepers lose more muscle (not fat) when dieting</li>
        <li>Sleep-deprived people eat an average of 300+ extra calories daily</li>
        <li>They specifically crave high-carb, high-fat foods</li>
        <li>Decision-making and willpower are impaired</li>
      </ul>

      <h2>Signs Sleep Is Affecting Your Weight</h2>
      <ul>
        <li>Intense cravings, especially in the evening</li>
        <li>Difficulty sticking to your diet despite trying</li>
        <li>Plateau in weight loss despite consistent effort</li>
        <li>Losing muscle instead of fat when dieting</li>
        <li>Afternoon energy crashes</li>
        <li>Needing caffeine to function</li>
        <li>Low morning energy (should be your peak)</li>
      </ul>

      <h2>Optimizing Sleep for Weight Loss</h2>
      
      <h3>Duration</h3>
      <ul>
        <li>Aim for 7-9 hours</li>
        <li>Consistent timing is crucial (same bedtime/wake time)</li>
        <li>Weekend "catch-up" doesn't fully compensate</li>
      </ul>

      <h3>Quality</h3>
      <ul>
        <li>Dark room (melatonin production)</li>
        <li>Cool temperature (65-68°F / 18-20°C)</li>
        <li>No screens 1 hour before bed</li>
        <li>Limit alcohol (disrupts sleep architecture)</li>
        <li>No caffeine after 2 PM</li>
        <li>Don't eat large meals close to bedtime</li>
      </ul>

      <h3>Address Sleep Disorders</h3>
      <ul>
        <li>Sleep apnea is common in overweight men and wrecks hormones</li>
        <li>Warning signs: snoring, gasping, daytime fatigue</li>
        <li>Treatment often leads to significant weight loss</li>
      </ul>

      <h2>Practical Tips</h2>
      <ul>
        <li>Morning sunlight exposure helps regulate sleep hormones</li>
        <li>Regular exercise improves sleep (but not too close to bedtime)</li>
        <li>Magnesium before bed may help sleep quality</li>
        <li>Wind-down routine signals your body it's time to sleep</li>
        <li>If you can't sleep after 20 minutes, get up and do something calming</li>
      </ul>

      <div className="rounded-lg border border-sage-200 bg-sage-50 p-4 mt-6">
        <p className="text-sm text-muted-foreground">
          <strong>Key takeaway:</strong> Trying to lose weight while sleep-deprived is like trying to 
          drive with the parking brake on. Prioritize sleep as part of your fat loss strategy, not 
          an afterthought.
        </p>
      </div>
    </ArticleLayout>
  );
}