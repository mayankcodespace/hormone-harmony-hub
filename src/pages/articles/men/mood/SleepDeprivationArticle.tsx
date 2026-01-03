import { ArticleLayout } from "@/components/shared/ArticleLayout";

const relatedArticles = [
  { title: "Sleep & Testosterone", href: "/men/testosterone/sleep" },
  { title: "Sleep & Weight Connection", href: "/men/weight/sleep-weight" },
  { title: "Stress & Male Hormones", href: "/men/mood/stress-hormones" },
];

export default function SleepDeprivationArticle() {
  return (
    <ArticleLayout
      title="Sleep Deprivation: The Full Impact"
      description="How poor sleep wrecks hormones, mood, metabolism, and performance."
      breadcrumbs={[
        { label: "Men's Health", href: "/men" },
        { label: "Mood, Stress & Sleep", href: "/men/mood" },
        { label: "Sleep Deprivation Effects" },
      ]}
      backLink={{ href: "/men/mood", label: "Mood, Stress & Sleep" }}
      relatedArticles={relatedArticles}
      lastUpdated="January 2025"
    >
      <p className="text-muted-foreground text-lg">
        Sleep deprivation is often worn as a badge of honor. But the research is clear: 
        insufficient sleep destroys your hormones, mood, metabolism, and cognitive function.
      </p>

      <h2>Hormonal Effects</h2>
      
      <h3>Testosterone</h3>
      <ul>
        <li>Most testosterone is produced during sleep</li>
        <li>5 hours of sleep = 10-15% lower testosterone</li>
        <li>Equivalent to aging 10-15 years hormonally</li>
        <li>Even one week of poor sleep significantly lowers levels</li>
      </ul>

      <h3>Cortisol</h3>
      <ul>
        <li>Poor sleep raises cortisol</li>
        <li>High cortisol further disrupts sleep (vicious cycle)</li>
        <li>Leads to belly fat storage</li>
        <li>Suppresses testosterone even more</li>
      </ul>

      <h3>Growth Hormone</h3>
      <ul>
        <li>Majority released during deep sleep</li>
        <li>Essential for muscle repair and recovery</li>
        <li>Poor sleep = less muscle growth and slower recovery</li>
      </ul>

      <h3>Hunger Hormones</h3>
      <ul>
        <li>Ghrelin (hunger) increases</li>
        <li>Leptin (satiety) decreases</li>
        <li>Result: Increased appetite, especially for junk food</li>
        <li>Average 300+ extra calories consumed when sleep-deprived</li>
      </ul>

      <h2>Cognitive Effects</h2>
      <ul>
        <li><strong>Reaction time:</strong> Impaired like being drunk</li>
        <li><strong>Decision making:</strong> Poor judgment, increased risk-taking</li>
        <li><strong>Memory:</strong> Consolidation happens during sleep</li>
        <li><strong>Focus:</strong> Attention span significantly reduced</li>
        <li><strong>Creativity:</strong> Problem-solving ability decreases</li>
      </ul>

      <h2>Mood Effects</h2>
      <ul>
        <li>Increased irritability and emotional reactivity</li>
        <li>Higher anxiety levels</li>
        <li>Increased depression risk</li>
        <li>Reduced stress tolerance</li>
        <li>Relationship conflicts more likely</li>
      </ul>

      <h2>Physical Health Effects</h2>
      <ul>
        <li><strong>Immune function:</strong> More likely to get sick</li>
        <li><strong>Inflammation:</strong> Increases with poor sleep</li>
        <li><strong>Blood sugar:</strong> Insulin sensitivity drops</li>
        <li><strong>Blood pressure:</strong> Tends to increase</li>
        <li><strong>Heart disease:</strong> Risk increases with chronic sleep deprivation</li>
        <li><strong>Injury risk:</strong> Higher in gym and at work</li>
      </ul>

      <h2>How Much Sleep Do You Need?</h2>
      <ul>
        <li><strong>Optimal:</strong> 7-9 hours for most adults</li>
        <li><strong>Minimum:</strong> 7 hours (below this, problems increase)</li>
        <li><strong>Athletes/Heavy training:</strong> May need 8-10 hours</li>
        <li>"I only need 5 hours" is usually self-deception</li>
        <li>True short sleepers (genetic) are extremely rare (&lt;3%)</li>
      </ul>

      <h2>Improving Sleep</h2>
      
      <h3>Sleep Hygiene Basics</h3>
      <ul>
        <li>Consistent sleep/wake times (even weekends)</li>
        <li>Dark room (blackout curtains or mask)</li>
        <li>Cool temperature (65-68°F / 18-20°C)</li>
        <li>No screens 1 hour before bed</li>
        <li>No caffeine after 2 PM</li>
        <li>Limit alcohol (disrupts sleep quality)</li>
      </ul>

      <h3>Optimizing Sleep Quality</h3>
      <ul>
        <li>Morning sunlight exposure (regulates circadian rhythm)</li>
        <li>Regular exercise (but not too close to bedtime)</li>
        <li>Wind-down routine before bed</li>
        <li>Magnesium supplement may help</li>
        <li>White noise or quiet environment</li>
      </ul>

      <h3>Addressing Sleep Disorders</h3>
      <ul>
        <li>Sleep apnea is common in men (especially overweight)</li>
        <li>Symptoms: Snoring, gasping, daytime fatigue</li>
        <li>Treatment can transform energy and hormones</li>
        <li>Get a sleep study if suspected</li>
      </ul>

      <div className="rounded-lg border border-sage-200 bg-sage-50 p-4 mt-6">
        <p className="text-sm text-muted-foreground">
          <strong>Key takeaway:</strong> Sleep isn't a luxury — it's a necessity. You can't out-supplement, 
          out-exercise, or out-diet poor sleep. Make 7-9 hours a non-negotiable priority.
        </p>
      </div>
    </ArticleLayout>
  );
}