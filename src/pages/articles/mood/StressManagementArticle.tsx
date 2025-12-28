import { ArticleLayout } from "@/components/shared/ArticleLayout";

const relatedArticles = [
  { title: "Managing Anxiety Around Your Period", href: "/mood-pms/period-anxiety" },
  { title: "Sleep & Hormonal Mood", href: "/mood-pms/sleep-mood" },
  { title: "Natural Remedies for PMS", href: "/mood-pms/natural-remedies" },
];

export default function StressManagementArticle() {
  return (
    <ArticleLayout
      title="Stress Management Techniques"
      description="Practical ways to manage stress and support hormonal balance."
      breadcrumbs={[
        { label: "Mood & PMS", href: "/mood-pms" },
        { label: "Stress Management" },
      ]}
      backLink={{ href: "/mood-pms", label: "Mood & PMS" }}
      relatedArticles={relatedArticles}
      lastUpdated="December 2024"
    >
      <p className="text-muted-foreground text-lg">
        Chronic stress doesn't just feel bad — it directly affects your hormones and 
        worsens PMS symptoms. Here are practical techniques that actually help.
      </p>

      <h2>Why Stress Matters for Hormones</h2>
      <ul>
        <li><strong>Cortisol:</strong> Chronic stress keeps cortisol elevated, affecting other hormones</li>
        <li><strong>Cycle disruption:</strong> Stress can delay ovulation and periods</li>
        <li><strong>PMS amplification:</strong> Stress makes every symptom feel worse</li>
        <li><strong>Insulin:</strong> Stress affects blood sugar regulation</li>
      </ul>

      <h2>Quick Techniques (Under 5 Minutes)</h2>

      <h3>Box Breathing</h3>
      <ul>
        <li>Inhale for 4 counts</li>
        <li>Hold for 4 counts</li>
        <li>Exhale for 4 counts</li>
        <li>Hold for 4 counts</li>
        <li>Repeat 4 times</li>
      </ul>

      <h3>Progressive Muscle Relaxation</h3>
      <ul>
        <li>Start at your feet, tense muscles for 5 seconds</li>
        <li>Release and notice the relaxation</li>
        <li>Move up through your body</li>
      </ul>

      <h3>Grounding</h3>
      <ul>
        <li>Name 5 things you can see</li>
        <li>4 things you can touch</li>
        <li>3 things you can hear</li>
        <li>2 things you can smell</li>
        <li>1 thing you can taste</li>
      </ul>

      <h2>Daily Practices (10-20 Minutes)</h2>

      <h3>Meditation</h3>
      <ul>
        <li>Start with just 5 minutes daily</li>
        <li>Apps like Headspace, Calm, or Insight Timer can guide you</li>
        <li>Consistency matters more than duration</li>
      </ul>

      <h3>Gentle Yoga</h3>
      <ul>
        <li>Focus on restorative or yin yoga</li>
        <li>Child's pose, legs up the wall, gentle stretches</li>
        <li>Many free videos available online</li>
      </ul>

      <h3>Journaling</h3>
      <ul>
        <li>Brain dump: Write everything on your mind</li>
        <li>Gratitude: List 3 things you're grateful for</li>
        <li>Processing: Write about difficult emotions</li>
      </ul>

      <h2>Lifestyle Approaches</h2>

      <h3>Time in Nature</h3>
      <ul>
        <li>Even 20 minutes outdoors reduces cortisol</li>
        <li>Parks, gardens, or just sitting outside</li>
        <li>Combine with walking for double benefit</li>
      </ul>

      <h3>Social Connection</h3>
      <ul>
        <li>Time with supportive people</li>
        <li>Sharing what you're going through</li>
        <li>Laughing together</li>
      </ul>

      <h3>Boundaries</h3>
      <ul>
        <li>Learning to say no</li>
        <li>Reducing commitments where possible</li>
        <li>Protecting rest time</li>
      </ul>

      <h2>Cycle-Specific Stress Management</h2>

      <h3>Luteal Phase (Before Period)</h3>
      <ul>
        <li>Schedule lighter if possible</li>
        <li>Plan extra self-care</li>
        <li>Reduce stimulants (caffeine, alcohol)</li>
        <li>Prioritize sleep</li>
      </ul>

      <h3>Period</h3>
      <ul>
        <li>Gentle movement only</li>
        <li>More rest</li>
        <li>Warmth and comfort</li>
      </ul>

      <h2>What Doesn't Work</h2>
      <ul>
        <li>Trying to "power through" without rest</li>
        <li>Adding more to your plate</li>
        <li>Ignoring stress signals</li>
        <li>Relying only on willpower</li>
      </ul>

      <div className="rounded-lg border border-sage-200 bg-sage-50 p-4 mt-6">
        <p className="text-sm text-muted-foreground">
          <strong>Key insight:</strong> Stress management isn't selfish — it's essential. 
          Finding techniques that work for you and practicing them regularly is one of 
          the most impactful things you can do for hormonal health.
        </p>
      </div>
    </ArticleLayout>
  );
}
