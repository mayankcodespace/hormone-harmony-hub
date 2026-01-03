import { ArticleLayout } from "@/components/shared/ArticleLayout";

const relatedArticles = [
  { title: "Why Men Gain Belly Fat", href: "/men/weight/belly-fat" },
  { title: "Stress Management Techniques", href: "/men/mood/stress-management" },
  { title: "Sleep & Weight Connection", href: "/men/weight/sleep-weight" },
];

export default function CortisolFatArticle() {
  return (
    <ArticleLayout
      title="Cortisol & Fat Storage"
      description="Why chronic stress makes you store fat, especially around the belly."
      breadcrumbs={[
        { label: "Men's Health", href: "/men" },
        { label: "Weight & Metabolism", href: "/men/weight" },
        { label: "Cortisol & Fat Storage" },
      ]}
      backLink={{ href: "/men/weight", label: "Weight & Metabolism" }}
      relatedArticles={relatedArticles}
      lastUpdated="January 2025"
    >
      <p className="text-muted-foreground text-lg">
        "Stress belly" isn't just a phrase — it's a real physiological phenomenon. Chronic stress 
        fundamentally changes how your body stores and burns fat.
      </p>

      <h2>What Cortisol Does</h2>
      <p>
        Cortisol is the body's primary stress hormone. In short bursts, it's helpful:
      </p>
      <ul>
        <li>Mobilizes energy for fight-or-flight situations</li>
        <li>Increases alertness and focus</li>
        <li>Suppresses non-essential functions temporarily</li>
      </ul>
      <p>
        But chronic elevation is destructive:
      </p>
      <ul>
        <li>Promotes fat storage, especially in the abdomen</li>
        <li>Breaks down muscle tissue</li>
        <li>Increases appetite and cravings</li>
        <li>Impairs sleep and recovery</li>
        <li>Suppresses testosterone</li>
      </ul>

      <h2>How Cortisol Causes Belly Fat</h2>
      <p>
        The mechanism is well-understood:
      </p>
      <ul>
        <li>Visceral fat cells have more cortisol receptors than other fat cells</li>
        <li>Cortisol activates an enzyme (11β-HSD1) that stores fat in the belly</li>
        <li>High cortisol increases appetite, especially for high-calorie foods</li>
        <li>It promotes insulin resistance, which further increases fat storage</li>
        <li>It breaks down muscle, lowering your metabolism</li>
      </ul>

      <h2>Signs of Cortisol-Driven Weight Gain</h2>
      <ul>
        <li>Weight concentrated in the belly despite thin arms/legs</li>
        <li>Difficulty losing weight despite eating less</li>
        <li>Intense cravings for sugar, carbs, or comfort food</li>
        <li>Fatigue but wired/unable to relax</li>
        <li>Poor sleep or waking at 2-4 AM</li>
        <li>Feeling worse with intense exercise</li>
        <li>Slow recovery from workouts</li>
      </ul>

      <h2>Common Cortisol Triggers</h2>
      <p>
        Both physical and psychological stressors raise cortisol:
      </p>
      <ul>
        <li><strong>Work stress:</strong> Deadlines, pressure, conflict</li>
        <li><strong>Sleep deprivation:</strong> One of the biggest cortisol elevators</li>
        <li><strong>Over-exercising:</strong> Too much training without recovery</li>
        <li><strong>Undereating:</strong> Chronic calorie restriction</li>
        <li><strong>Financial/relationship stress:</strong> Chronic worry</li>
        <li><strong>Blood sugar swings:</strong> Crash after high-carb meals</li>
        <li><strong>Excessive caffeine:</strong> Especially later in the day</li>
      </ul>

      <h2>Breaking the Cycle</h2>
      
      <h3>Priority #1: Sleep</h3>
      <ul>
        <li>7-9 hours minimum</li>
        <li>Consistent sleep schedule</li>
        <li>Dark, cool room</li>
        <li>No screens 1 hour before bed</li>
      </ul>

      <h3>Stress Management</h3>
      <ul>
        <li>Daily stress-reducing practice (meditation, walking, hobbies)</li>
        <li>Set boundaries at work</li>
        <li>Social connection (buffers stress)</li>
        <li>Time in nature (proven cortisol reducer)</li>
      </ul>

      <h3>Exercise Approach</h3>
      <ul>
        <li>Prioritize strength training over cardio</li>
        <li>Keep sessions under 60 minutes</li>
        <li>Don't train to failure every session</li>
        <li>Walking is your friend (doesn't raise cortisol)</li>
        <li>Take deload weeks</li>
      </ul>

      <h3>Nutrition</h3>
      <ul>
        <li>Don't chronically undereat — moderate deficit only</li>
        <li>Adequate protein protects muscle</li>
        <li>Balanced meals prevent blood sugar crashes</li>
        <li>Limit caffeine, especially after noon</li>
      </ul>

      <h2>The Paradox of Trying Harder</h2>
      <p>
        Counter-intuitively, if cortisol is high:
      </p>
      <ul>
        <li>Eating less can make things worse</li>
        <li>More intense exercise can backfire</li>
        <li>You need to recover, not push harder</li>
        <li>Sometimes eating more and training less initially helps</li>
      </ul>

      <div className="rounded-lg border border-sage-200 bg-sage-50 p-4 mt-6">
        <p className="text-sm text-muted-foreground">
          <strong>Key takeaway:</strong> If you're stressed and not losing belly fat despite your best 
          efforts, the stress itself may be the problem. Sometimes the answer is more rest, not more 
          restriction.
        </p>
      </div>
    </ArticleLayout>
  );
}