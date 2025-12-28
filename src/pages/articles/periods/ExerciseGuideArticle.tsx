import { ArticleLayout } from "@/components/shared/ArticleLayout";

const relatedArticles = [
  { title: "Understanding Your Cycle Phases", href: "/periods/cycle-phases" },
  { title: "Period Pain Management", href: "/periods/pain-management" },
  { title: "PMS vs Normal Cycle Changes", href: "/periods/pms-basics" },
];

export default function ExerciseGuideArticle() {
  return (
    <ArticleLayout
      title="Periods & Exercise"
      description="How to adapt your workouts to your cycle for better results and comfort."
      breadcrumbs={[
        { label: "Periods & Cycle", href: "/periods" },
        { label: "Exercise Guide" },
      ]}
      backLink={{ href: "/periods", label: "Periods & Cycle" }}
      relatedArticles={relatedArticles}
      lastUpdated="December 2024"
    >
      <p className="text-muted-foreground text-lg">
        Should you exercise during your period? Short answer: Yes, if you feel up to it. 
        But the type and intensity can be adapted to work with your hormones, not against them.
      </p>

      <h2>Exercise During Your Period (Days 1-5)</h2>
      <p>
        Hormones are at their lowest. Energy may be lower. Listen to your body.
      </p>
      <ul>
        <li><strong>Best:</strong> Gentle yoga, walking, stretching, swimming</li>
        <li><strong>Skip if:</strong> Heavy bleeding, severe cramps, feeling exhausted</li>
        <li><strong>Benefits:</strong> Can actually reduce cramps, improve mood</li>
        <li><strong>Watch for:</strong> Don't push through if something feels wrong</li>
      </ul>

      <h2>Follicular Phase (Days 6-14)</h2>
      <p>
        Estrogen is rising. Many women feel their best during this phase.
      </p>
      <ul>
        <li><strong>Best:</strong> Challenging workouts, HIIT, strength training, trying new things</li>
        <li><strong>Take advantage:</strong> Energy, motivation, and recovery are often optimal</li>
        <li><strong>Benefits:</strong> Good time to build muscle, push for PRs</li>
      </ul>

      <h2>Ovulation (Around Day 14)</h2>
      <p>
        Peak estrogen, small testosterone spike. Often the highest energy point.
      </p>
      <ul>
        <li><strong>Best:</strong> High-intensity, competition, social workouts</li>
        <li><strong>Watch for:</strong> Some studies suggest higher injury risk — warm up well</li>
      </ul>

      <h2>Luteal Phase (Days 15-28)</h2>
      <p>
        Progesterone rises, then both hormones drop. PMS symptoms may appear.
      </p>
      <ul>
        <li><strong>Early luteal:</strong> Energy still decent, continue regular workouts</li>
        <li><strong>Late luteal:</strong> May need to scale back, focus on steady-state cardio</li>
        <li><strong>Best:</strong> Yoga, walking, moderate strength, swimming</li>
        <li><strong>Benefits:</strong> Exercise can reduce PMS symptoms</li>
      </ul>

      <h2>Practical Tips</h2>
      <ul>
        <li><strong>Don't force it:</strong> Rest days are okay, especially during period</li>
        <li><strong>Stay hydrated:</strong> You may need more water during menstruation</li>
        <li><strong>Wear comfortable gear:</strong> Dark colors, secure fit during period</li>
        <li><strong>Track it:</strong> Note workouts alongside cycle to find your patterns</li>
        <li><strong>Adjust expectations:</strong> You won't perform the same every day</li>
      </ul>

      <h2>What Research Says</h2>
      <p>
        Studies show that exercise can:
      </p>
      <ul>
        <li>Reduce period pain intensity</li>
        <li>Decrease PMS symptoms</li>
        <li>Improve mood throughout cycle</li>
        <li>Help regulate cycles over time</li>
      </ul>

      <div className="rounded-lg border border-sage-200 bg-sage-50 p-4 mt-6">
        <p className="text-sm text-muted-foreground">
          <strong>Remember:</strong> These are guidelines, not rules. Every body is different. 
          Some people feel great exercising on day 1 of their period; others need complete rest. 
          Listen to your body.
        </p>
      </div>
    </ArticleLayout>
  );
}
