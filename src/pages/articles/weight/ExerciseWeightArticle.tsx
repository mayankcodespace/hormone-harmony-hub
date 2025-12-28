import { ArticleLayout } from "@/components/shared/ArticleLayout";

const relatedArticles = [
  { title: "Sustainable Weight Management", href: "/hormonal-weight/sustainable-approach" },
  { title: "Cortisol, Stress & Belly Fat", href: "/hormonal-weight/cortisol-belly-fat" },
  { title: "Insulin Resistance Explained Simply", href: "/hormonal-weight/insulin-resistance" },
];

export default function ExerciseWeightArticle() {
  return (
    <ArticleLayout
      title="Exercise for Hormonal Weight"
      description="The right types of movement for metabolic health."
      breadcrumbs={[
        { label: "Hormonal Weight", href: "/hormonal-weight" },
        { label: "Exercise Guide" },
      ]}
      backLink={{ href: "/hormonal-weight", label: "Hormonal Weight" }}
      relatedArticles={relatedArticles}
      lastUpdated="December 2024"
    >
      <p className="text-muted-foreground text-lg">
        When it comes to hormonal weight, more exercise isn't always better. 
        The type and balance of movement matters.
      </p>

      <h2>Why Strength Training Matters</h2>
      <p>
        Strength training is often the most effective exercise for hormonal weight because:
      </p>
      <ul>
        <li><strong>Builds muscle:</strong> Muscle burns more calories at rest</li>
        <li><strong>Improves insulin sensitivity:</strong> Muscles use glucose better</li>
        <li><strong>Boosts metabolism:</strong> Long-term metabolic benefits</li>
        <li><strong>Doesn't spike cortisol:</strong> Unlike excessive cardio</li>
      </ul>

      <h3>Getting Started with Strength Training</h3>
      <ul>
        <li>Start with bodyweight exercises (squats, lunges, push-ups)</li>
        <li>Progress to weights as you get comfortable</li>
        <li>Aim for 2-3 sessions per week</li>
        <li>Focus on compound movements (work multiple muscles)</li>
        <li>Consider a trainer initially for proper form</li>
      </ul>

      <h2>The Power of Walking</h2>
      <p>
        Walking is underrated for hormonal weight management:
      </p>
      <ul>
        <li>Gentle enough to not spike cortisol</li>
        <li>Walking after meals helps blood sugar</li>
        <li>Sustainable and accessible</li>
        <li>Good for mental health too</li>
      </ul>

      <h3>Walking Tips</h3>
      <ul>
        <li>10-15 minute walk after main meals</li>
        <li>Daily step goal (start where you are, build gradually)</li>
        <li>Brisk pace for cardiovascular benefit</li>
      </ul>

      <h2>When Cardio Can Backfire</h2>
      <p>
        Excessive cardio (especially long-duration) can:
      </p>
      <ul>
        <li>Raise cortisol chronically</li>
        <li>Increase hunger significantly</li>
        <li>Lead to muscle loss</li>
        <li>Create burnout and exercise resistance</li>
      </ul>

      <h3>Balanced Cardio Approach</h3>
      <ul>
        <li>Moderate amounts (not daily intense sessions)</li>
        <li>Mix of low and moderate intensity</li>
        <li>Activities you enjoy</li>
        <li>Recovery days between intense sessions</li>
      </ul>

      <h2>Sample Weekly Plan</h2>
      <ul>
        <li><strong>Monday:</strong> Strength training (30-40 min)</li>
        <li><strong>Tuesday:</strong> Walking + stretching</li>
        <li><strong>Wednesday:</strong> Strength training</li>
        <li><strong>Thursday:</strong> Walking or yoga</li>
        <li><strong>Friday:</strong> Strength training</li>
        <li><strong>Weekend:</strong> Active recreation (whatever you enjoy)</li>
      </ul>

      <h2>Listen to Your Body</h2>
      <ul>
        <li>Rest when genuinely tired</li>
        <li>Don't push through pain</li>
        <li>Adjust around your menstrual cycle</li>
        <li>Exercise should energize, not exhaust</li>
      </ul>

      <div className="rounded-lg border border-sage-200 bg-sage-50 p-4 mt-6">
        <p className="text-sm text-muted-foreground">
          <strong>Key insight:</strong> The best exercise is one you'll actually do 
          consistently. Find movement you enjoy and can sustain.
        </p>
      </div>
    </ArticleLayout>
  );
}
