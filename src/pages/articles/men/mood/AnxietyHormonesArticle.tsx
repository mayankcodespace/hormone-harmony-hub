import { ArticleLayout } from "@/components/shared/ArticleLayout";

const relatedArticles = [
  { title: "Stress & Male Hormones", href: "/men/mood/stress-hormones" },
  { title: "When to Seek Help", href: "/men/mood/when-to-seek-help" },
  { title: "Thyroid & Metabolism", href: "/men/weight/thyroid" },
];

export default function AnxietyHormonesArticle() {
  return (
    <ArticleLayout
      title="Anxiety: The Hormonal Component"
      description="When anxiety isn't just psychological — understanding the hormone connection."
      breadcrumbs={[
        { label: "Men's Health", href: "/men" },
        { label: "Mood, Stress & Sleep", href: "/men/mood" },
        { label: "Anxiety & Hormones" },
      ]}
      backLink={{ href: "/men/mood", label: "Mood, Stress & Sleep" }}
      relatedArticles={relatedArticles}
      lastUpdated="January 2025"
    >
      <p className="text-muted-foreground text-lg">
        Anxiety is often treated as purely a psychological issue. But hormonal imbalances, blood 
        sugar problems, and physical factors can cause or worsen anxiety symptoms.
      </p>

      <h2>Hormones That Affect Anxiety</h2>
      
      <h3>Cortisol</h3>
      <ul>
        <li>High cortisol creates a state of chronic vigilance</li>
        <li>Activates the amygdala (fear center)</li>
        <li>Makes you more reactive to perceived threats</li>
        <li>Can cause physical symptoms: racing heart, sweating, tension</li>
      </ul>

      <h3>Thyroid</h3>
      <ul>
        <li>Hyperthyroidism (overactive) classically causes anxiety</li>
        <li>Racing heart, tremors, irritability, trouble sleeping</li>
        <li>Often mistaken for panic disorder</li>
        <li>Simple blood test can check</li>
      </ul>

      <h3>Testosterone</h3>
      <ul>
        <li>Low testosterone is associated with increased anxiety</li>
        <li>Testosterone has anti-anxiety effects in the brain</li>
        <li>Low T also causes fatigue and brain fog, worsening coping</li>
      </ul>

      <h3>Blood Sugar</h3>
      <ul>
        <li>Blood sugar crashes mimic panic attacks</li>
        <li>Racing heart, sweating, shakiness, anxiety</li>
        <li>Reactive hypoglycemia is common and underdiagnosed</li>
        <li>Often happens 2-4 hours after high-carb meals</li>
      </ul>

      <h2>Physical Causes of Anxiety</h2>
      <p>
        Other physical factors to rule out:
      </p>
      <ul>
        <li><strong>Caffeine:</strong> Can trigger or worsen anxiety</li>
        <li><strong>Sleep deprivation:</strong> Dramatically worsens anxiety</li>
        <li><strong>Vitamin deficiencies:</strong> B vitamins, magnesium, vitamin D</li>
        <li><strong>Gut issues:</strong> The gut-brain connection is real</li>
        <li><strong>Medications:</strong> Some cause anxiety as a side effect</li>
        <li><strong>Alcohol withdrawal:</strong> Even "mild" withdrawal can cause anxiety</li>
      </ul>

      <h2>Signs It May Be Physical</h2>
      <p>
        Consider a physical component if:
      </p>
      <ul>
        <li>Anxiety appeared suddenly without clear trigger</li>
        <li>It's accompanied by other physical symptoms</li>
        <li>It doesn't respond well to typical anxiety treatments</li>
        <li>It correlates with eating patterns (blood sugar)</li>
        <li>It's worse at certain times of day</li>
        <li>You have family history of thyroid or hormonal issues</li>
      </ul>

      <h2>Testing to Consider</h2>
      <ul>
        <li><strong>Thyroid panel:</strong> TSH, Free T4, Free T3</li>
        <li><strong>Testosterone:</strong> Total and free</li>
        <li><strong>Fasting glucose and insulin:</strong> Blood sugar issues</li>
        <li><strong>Vitamin D, B12, magnesium:</strong> Common deficiencies</li>
        <li><strong>Cortisol:</strong> Morning cortisol or saliva test</li>
      </ul>

      <h2>Managing Anxiety Holistically</h2>
      
      <h3>Lifestyle Foundations</h3>
      <ul>
        <li>Prioritize sleep (7-9 hours)</li>
        <li>Limit or eliminate caffeine</li>
        <li>Stabilize blood sugar (protein with meals, avoid sugar spikes)</li>
        <li>Regular exercise (but not too intense when stressed)</li>
        <li>Limit alcohol (worsens anxiety in the long run)</li>
      </ul>

      <h3>Stress Management</h3>
      <ul>
        <li>Daily meditation or breathing exercises</li>
        <li>Time in nature</li>
        <li>Social connection</li>
        <li>Limiting news and social media</li>
      </ul>

      <h3>Supplements That May Help</h3>
      <ul>
        <li><strong>Magnesium:</strong> Calming, often deficient</li>
        <li><strong>L-theanine:</strong> From tea, promotes calm focus</li>
        <li><strong>Ashwagandha:</strong> Adaptogen that may reduce anxiety</li>
        <li><strong>Omega-3s:</strong> May reduce inflammation and anxiety</li>
      </ul>

      <h2>When to Seek Professional Help</h2>
      <p>
        Get help if:
      </p>
      <ul>
        <li>Anxiety is interfering with work or relationships</li>
        <li>You're having panic attacks</li>
        <li>Physical symptoms are severe</li>
        <li>You're using substances to cope</li>
        <li>Self-help strategies aren't working</li>
      </ul>

      <div className="rounded-lg border border-sage-200 bg-sage-50 p-4 mt-6">
        <p className="text-sm text-muted-foreground">
          <strong>Key takeaway:</strong> Anxiety isn't always "just in your head." Physical and 
          hormonal factors can cause or worsen it. A comprehensive approach that addresses both 
          psychological and physical factors works best.
        </p>
      </div>
    </ArticleLayout>
  );
}