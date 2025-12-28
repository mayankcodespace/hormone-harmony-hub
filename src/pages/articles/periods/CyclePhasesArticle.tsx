import { ArticleLayout } from "@/components/shared/ArticleLayout";

const relatedArticles = [
  { title: "What Causes Severe Cramps?", href: "/periods/cramps-what-helps" },
  { title: "Irregular Periods: Causes & When to Worry", href: "/periods/irregular-periods-causes" },
  { title: "Period Tracking: A Beginner's Guide", href: "/periods/tracking-guide" },
];

export default function CyclePhasesArticle() {
  return (
    <ArticleLayout
      title="Understanding Your Menstrual Cycle Phases"
      description="Learn what happens in your body during each phase of your cycle — and why it matters."
      breadcrumbs={[
        { label: "Periods & Cycle", href: "/periods" },
        { label: "Cycle Phases" },
      ]}
      backLink={{ href: "/periods", label: "Periods & Cycle" }}
      relatedArticles={relatedArticles}
      lastUpdated="December 2024"
    >
      <p className="text-muted-foreground text-lg">
        Your menstrual cycle is more than just your period. It's a monthly rhythm of hormonal 
        changes that affect your energy, mood, skin, and more. Understanding these phases can 
        help you work with your body, not against it.
      </p>

      <h2>The Four Phases</h2>
      
      <h3>1. Menstruation (Days 1-5)</h3>
      <p>
        This is your period — when the uterine lining sheds. Day 1 is the first day of bleeding.
      </p>
      <ul>
        <li><strong>Hormones:</strong> Estrogen and progesterone are at their lowest</li>
        <li><strong>Energy:</strong> Often lower. Many women feel tired or need more rest</li>
        <li><strong>What helps:</strong> Gentle movement, iron-rich foods, adequate sleep</li>
      </ul>

      <h3>2. Follicular Phase (Days 1-13)</h3>
      <p>
        Overlaps with menstruation and continues after. An egg starts maturing in the ovary.
      </p>
      <ul>
        <li><strong>Hormones:</strong> Estrogen starts rising gradually</li>
        <li><strong>Energy:</strong> Increases as estrogen rises. Many feel more motivated</li>
        <li><strong>What helps:</strong> Good time for starting new projects, trying harder workouts</li>
      </ul>

      <h3>3. Ovulation (Around Day 14)</h3>
      <p>
        The mature egg is released from the ovary. This is your fertile window.
      </p>
      <ul>
        <li><strong>Hormones:</strong> Estrogen peaks, then drops. A small testosterone spike</li>
        <li><strong>Energy:</strong> Often highest. Many women feel most confident</li>
        <li><strong>Signs:</strong> Some notice mild lower abdominal twinge, clear stretchy discharge</li>
      </ul>

      <h3>4. Luteal Phase (Days 15-28)</h3>
      <p>
        After ovulation, progesterone rises. If no pregnancy occurs, hormones drop and the cycle restarts.
      </p>
      <ul>
        <li><strong>Hormones:</strong> Progesterone dominates, then both hormones drop before period</li>
        <li><strong>Energy:</strong> May decrease. PMS symptoms often appear in the last week</li>
        <li><strong>What helps:</strong> Extra sleep, stress management, gentle exercise, magnesium-rich foods</li>
      </ul>

      <h2>Why Does This Matter?</h2>
      <p>
        Understanding your cycle can help you:
      </p>
      <ul>
        <li>Plan demanding activities during high-energy phases</li>
        <li>Be gentler with yourself during low-energy phases</li>
        <li>Recognize when symptoms are cycle-related vs. something else</li>
        <li>Track patterns to share with your doctor if needed</li>
      </ul>

      <h2>A Note on Cycle Length</h2>
      <p>
        The "textbook" 28-day cycle is just an average. Cycles between 21-35 days are considered 
        normal. Your phases may be shorter or longer than the days listed above.
      </p>
      <p>
        If your cycles are consistently outside this range, very irregular, or you have 
        concerning symptoms, please consult a gynecologist.
      </p>

      <div className="rounded-lg border border-sage-200 bg-sage-50 p-4 mt-6">
        <p className="text-sm text-muted-foreground">
          <strong>Tracking tip:</strong> Use an app or simple calendar to note your period dates, 
          energy levels, and symptoms. After 3 cycles, you'll start seeing your unique patterns.
        </p>
      </div>
    </ArticleLayout>
  );
}
