import { ArticleLayout } from "@/components/shared/ArticleLayout";

const relatedArticles = [
  { title: "Stress Management Techniques", href: "/men/mood/stress-management" },
  { title: "Sleep & Testosterone", href: "/men/testosterone/sleep" },
  { title: "Lifestyle & Testosterone", href: "/men/testosterone/lifestyle" },
];

export default function CortisolConnectionArticle() {
  return (
    <ArticleLayout
      title="Cortisol & Testosterone: The Stress Connection"
      description="How chronic stress destroys your testosterone and what to do about it."
      breadcrumbs={[
        { label: "Men's Health", href: "/men" },
        { label: "Testosterone & Energy", href: "/men/testosterone" },
        { label: "Cortisol & Testosterone Connection" },
      ]}
      backLink={{ href: "/men/testosterone", label: "Testosterone & Energy" }}
      relatedArticles={relatedArticles}
      lastUpdated="January 2025"
    >
      <p className="text-muted-foreground text-lg">
        Cortisol and testosterone have an inverse relationship. When one goes up, the other tends to go down. 
        Understanding this connection is crucial for optimizing your hormones.
      </p>

      <h2>The Cortisol-Testosterone Relationship</h2>
      <p>
        Cortisol (the "stress hormone") and testosterone compete for resources:
      </p>
      <ul>
        <li>Both are made from the same precursor (pregnenolone)</li>
        <li>When the body prioritizes cortisol, testosterone production suffers</li>
        <li>High cortisol directly inhibits testosterone production in the testes</li>
        <li>Chronic stress keeps cortisol elevated, suppressing testosterone long-term</li>
      </ul>

      <h2>Signs of High Cortisol</h2>
      <p>
        Chronic high cortisol manifests as:
      </p>
      <ul>
        <li>Belly fat accumulation (even with a lean frame)</li>
        <li>Difficulty losing weight</li>
        <li>Poor sleep despite being tired</li>
        <li>Waking up at 2-4 AM</li>
        <li>Afternoon energy crashes</li>
        <li>Sugar and carb cravings</li>
        <li>Feeling "wired but tired"</li>
        <li>Slow recovery from workouts</li>
        <li>Low libido</li>
      </ul>

      <h2>What Raises Cortisol?</h2>
      <p>
        Many factors contribute to elevated cortisol:
      </p>
      <ul>
        <li><strong>Psychological stress:</strong> Work pressure, relationship issues, financial worries</li>
        <li><strong>Sleep deprivation:</strong> Even one night of poor sleep raises cortisol</li>
        <li><strong>Overtraining:</strong> Excessive exercise without recovery</li>
        <li><strong>Undereating:</strong> Chronic calorie restriction</li>
        <li><strong>Blood sugar swings:</strong> From high-carb, low-protein meals</li>
        <li><strong>Caffeine:</strong> Especially later in the day</li>
        <li><strong>Inflammation:</strong> From poor diet, lack of sleep, or chronic conditions</li>
      </ul>

      <h2>How to Lower Cortisol</h2>
      <p>
        Evidence-based strategies for reducing cortisol:
      </p>
      
      <h3>Sleep (Priority #1)</h3>
      <ul>
        <li>Consistent sleep schedule (even weekends)</li>
        <li>Dark, cool room</li>
        <li>No screens 1 hour before bed</li>
        <li>Treat sleep apnea if present</li>
      </ul>

      <h3>Stress Management</h3>
      <ul>
        <li><strong>Meditation:</strong> Even 10 minutes daily lowers cortisol</li>
        <li><strong>Nature exposure:</strong> 20+ minutes in nature reduces cortisol</li>
        <li><strong>Social connection:</strong> Positive relationships buffer stress</li>
        <li><strong>Breathing exercises:</strong> 4-7-8 breathing, box breathing</li>
      </ul>

      <h3>Exercise (But Not Too Much)</h3>
      <ul>
        <li>Moderate strength training (not to failure every session)</li>
        <li>Walking (doesn't raise cortisol like intense cardio)</li>
        <li>Adequate rest days</li>
        <li>Deload weeks when needed</li>
      </ul>

      <h3>Nutrition</h3>
      <ul>
        <li>Adequate calories (don't chronically undereat)</li>
        <li>Balanced meals with protein, fat, and fiber</li>
        <li>Limit caffeine, especially after noon</li>
        <li>Reduce alcohol (disrupts sleep and raises cortisol)</li>
      </ul>

      <h2>Supplements That May Help</h2>
      <ul>
        <li><strong>Ashwagandha:</strong> Good evidence for cortisol reduction</li>
        <li><strong>Magnesium:</strong> Helps with sleep and stress response</li>
        <li><strong>Phosphatidylserine:</strong> May blunt cortisol response</li>
        <li><strong>Omega-3s:</strong> Anti-inflammatory, may help with stress</li>
      </ul>

      <div className="rounded-lg border border-sage-200 bg-sage-50 p-4 mt-6">
        <p className="text-sm text-muted-foreground">
          <strong>Key takeaway:</strong> You can't optimize testosterone while cortisol is chronically elevated. 
          Address stress and sleep first — they're the foundation everything else rests on.
        </p>
      </div>
    </ArticleLayout>
  );
}