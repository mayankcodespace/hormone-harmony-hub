import { ArticleLayout } from "@/components/shared/ArticleLayout";

const relatedArticles = [
  { title: "Cortisol & Testosterone Connection", href: "/men/testosterone/cortisol-connection" },
  { title: "Stress Management Techniques", href: "/men/mood/stress-management" },
  { title: "Burnout & Adrenal Health", href: "/men/mood/burnout" },
];

export default function StressHormonesArticle() {
  return (
    <ArticleLayout
      title="Stress & Male Hormones"
      description="How chronic stress disrupts testosterone, cortisol, and overall health."
      breadcrumbs={[
        { label: "Men's Health", href: "/men" },
        { label: "Mood, Stress & Sleep", href: "/men/mood" },
        { label: "Stress & Male Hormones" },
      ]}
      backLink={{ href: "/men/mood", label: "Mood, Stress & Sleep" }}
      relatedArticles={relatedArticles}
      lastUpdated="January 2025"
    >
      <p className="text-muted-foreground text-lg">
        Stress isn't just psychological — it has profound effects on your hormones, metabolism, 
        and physical health. Understanding this connection is crucial for men's health.
      </p>

      <h2>The Stress Response</h2>
      <p>
        When you're stressed, your body activates the HPA axis:
      </p>
      <ul>
        <li>Hypothalamus signals the pituitary gland</li>
        <li>Pituitary signals the adrenal glands</li>
        <li>Adrenals release cortisol and adrenaline</li>
        <li>This is helpful short-term (fight or flight)</li>
        <li>It's destructive when chronically activated</li>
      </ul>

      <h2>How Stress Affects Testosterone</h2>
      <p>
        Chronic stress tanks testosterone through multiple mechanisms:
      </p>
      <ul>
        <li><strong>Resource competition:</strong> Body prioritizes cortisol over testosterone</li>
        <li><strong>Direct suppression:</strong> High cortisol inhibits LH release</li>
        <li><strong>Sleep disruption:</strong> Stress ruins sleep, where testosterone is made</li>
        <li><strong>Inflammation:</strong> Chronic stress causes inflammation, lowering testosterone</li>
      </ul>

      <h2>Other Hormonal Effects</h2>
      <ul>
        <li><strong>Thyroid:</strong> Stress can suppress thyroid function</li>
        <li><strong>Insulin:</strong> Cortisol impairs insulin sensitivity</li>
        <li><strong>Growth hormone:</strong> Stress disrupts sleep, reducing GH</li>
        <li><strong>DHEA:</strong> Chronic stress depletes this protective hormone</li>
      </ul>

      <h2>Physical Manifestations</h2>
      <p>
        Chronic stress shows up in the body:
      </p>
      <ul>
        <li>Belly fat accumulation</li>
        <li>Muscle loss despite exercise</li>
        <li>Poor recovery from workouts</li>
        <li>Frequent illness (immune suppression)</li>
        <li>Digestive issues</li>
        <li>High blood pressure</li>
        <li>Sleep problems</li>
        <li>Low libido</li>
      </ul>

      <h2>Recognizing Chronic Stress</h2>
      <p>
        Signs you're under chronic stress:
      </p>
      <ul>
        <li>Feeling wired but tired</li>
        <li>Difficulty relaxing even when you have time</li>
        <li>Waking at 2-4 AM and can't fall back asleep</li>
        <li>Needing caffeine to function</li>
        <li>Short temper, irritability</li>
        <li>Feeling overwhelmed by normal tasks</li>
        <li>Difficulty concentrating</li>
        <li>Cravings for sugar, carbs, or alcohol</li>
      </ul>

      <h2>Breaking the Stress Cycle</h2>
      
      <h3>Immediate Relief</h3>
      <ul>
        <li><strong>Breathing exercises:</strong> 4-7-8 breathing, box breathing</li>
        <li><strong>Cold exposure:</strong> Cold shower activates parasympathetic system</li>
        <li><strong>Physical movement:</strong> Even a short walk helps</li>
        <li><strong>Social connection:</strong> Talking to someone you trust</li>
      </ul>

      <h3>Daily Practices</h3>
      <ul>
        <li><strong>Sleep priority:</strong> Non-negotiable 7-9 hours</li>
        <li><strong>Morning sunlight:</strong> Helps regulate cortisol rhythm</li>
        <li><strong>Regular exercise:</strong> But not too intense if already stressed</li>
        <li><strong>Limit caffeine:</strong> Especially after noon</li>
        <li><strong>Time in nature:</strong> Proven cortisol reducer</li>
      </ul>

      <h3>Structural Changes</h3>
      <ul>
        <li>Set work boundaries (no emails after a certain time)</li>
        <li>Reduce commitments if overloaded</li>
        <li>Address relationship issues</li>
        <li>Consider if your job is sustainable</li>
        <li>Build a support system</li>
      </ul>

      <h2>When to Seek Help</h2>
      <p>
        Consider professional support if:
      </p>
      <ul>
        <li>Stress is affecting your work or relationships</li>
        <li>You're using alcohol or substances to cope</li>
        <li>You have physical symptoms that aren't resolving</li>
        <li>You're experiencing anxiety or depression</li>
        <li>You can't break the cycle on your own</li>
      </ul>

      <div className="rounded-lg border border-sage-200 bg-sage-50 p-4 mt-6">
        <p className="text-sm text-muted-foreground">
          <strong>Key takeaway:</strong> Chronic stress isn't just "in your head" — it's physically 
          destructive to your hormones and health. Taking stress management seriously is as important 
          as diet and exercise.
        </p>
      </div>
    </ArticleLayout>
  );
}