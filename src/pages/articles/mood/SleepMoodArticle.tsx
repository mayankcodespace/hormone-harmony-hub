import { ArticleLayout } from "@/components/shared/ArticleLayout";

const relatedArticles = [
  { title: "The Serotonin Connection", href: "/mood-pms/serotonin-hormones" },
  { title: "Managing Anxiety Around Your Period", href: "/mood-pms/period-anxiety" },
  { title: "Natural Remedies for PMS", href: "/mood-pms/natural-remedies" },
];

export default function SleepMoodArticle() {
  return (
    <ArticleLayout
      title="Sleep & Hormonal Mood"
      description="Why sleep is essential for managing mood symptoms."
      breadcrumbs={[
        { label: "Mood & PMS", href: "/mood-pms" },
        { label: "Sleep & Mood" },
      ]}
      backLink={{ href: "/mood-pms", label: "Mood & PMS" }}
      relatedArticles={relatedArticles}
      lastUpdated="December 2024"
    >
      <p className="text-muted-foreground text-lg">
        Poor sleep doesn't just make you tired — it significantly worsens hormonal 
        mood symptoms. Here's why sleep is foundational for emotional wellbeing.
      </p>

      <h2>Sleep and Mood: The Connection</h2>
      <ul>
        <li><strong>Emotion regulation:</strong> Sleep is when your brain processes emotions</li>
        <li><strong>Serotonin:</strong> Sleep deprivation depletes serotonin</li>
        <li><strong>Cortisol:</strong> Poor sleep elevates stress hormones</li>
        <li><strong>Irritability:</strong> Even mild sleep loss increases reactivity</li>
        <li><strong>Resilience:</strong> Well-rested = better able to cope with challenges</li>
      </ul>

      <h2>How Your Cycle Affects Sleep</h2>
      
      <h3>Follicular Phase (After Period)</h3>
      <p>Sleep is often easier. Rising estrogen promotes better sleep quality.</p>
      
      <h3>Luteal Phase (Before Period)</h3>
      <ul>
        <li>Progesterone rises, which can make you sleepy during the day</li>
        <li>Body temperature increases slightly, which can disrupt sleep</li>
        <li>Sleep may be lighter and more fragmented</li>
        <li>You may need more sleep during this phase</li>
      </ul>

      <h2>Tips for Better Sleep</h2>

      <h3>Sleep Hygiene Basics</h3>
      <ul>
        <li>Consistent sleep and wake times (even on weekends)</li>
        <li>Cool bedroom (the temperature rise in luteal phase makes this extra important)</li>
        <li>Dark room (use blackout curtains or an eye mask)</li>
        <li>No screens 1 hour before bed</li>
        <li>Limit caffeine after 2pm</li>
      </ul>

      <h3>Luteal Phase Specific</h3>
      <ul>
        <li>Go to bed earlier if you're tired</li>
        <li>Keep the room extra cool</li>
        <li>Consider a lighter blanket</li>
        <li>Magnesium before bed may help</li>
        <li>Allow yourself more rest</li>
      </ul>

      <h3>Calming Pre-Sleep Routine</h3>
      <ul>
        <li>Warm bath or shower (helps lower body temperature after)</li>
        <li>Gentle stretching or yoga</li>
        <li>Reading (physical book, not screen)</li>
        <li>Journaling to clear your mind</li>
        <li>Breathing exercises</li>
      </ul>

      <h2>When Sleep Problems Persist</h2>
      <p>
        See a doctor if you consistently:
      </p>
      <ul>
        <li>Can't fall asleep for 30+ minutes</li>
        <li>Wake multiple times and can't get back to sleep</li>
        <li>Wake feeling unrefreshed despite 7-8 hours in bed</li>
        <li>Experience daytime sleepiness that affects function</li>
      </ul>

      <div className="rounded-lg border border-sage-200 bg-sage-50 p-4 mt-6">
        <p className="text-sm text-muted-foreground">
          <strong>Key insight:</strong> If you're working on managing hormonal mood 
          symptoms, prioritize sleep. It's not a luxury — it's foundational to 
          emotional stability.
        </p>
      </div>
    </ArticleLayout>
  );
}
