import { ArticleLayout } from "@/components/shared/ArticleLayout";

const relatedArticles = [
  { title: "Lifestyle & Testosterone", href: "/men/testosterone/lifestyle" },
  { title: "Exercise for Fat Loss", href: "/men/weight/exercise-guide" },
  { title: "Cortisol & Testosterone Connection", href: "/men/testosterone/cortisol-connection" },
];

export default function ExerciseTestosteroneArticle() {
  return (
    <ArticleLayout
      title="Exercise for Testosterone: What Actually Works"
      description="The right type of exercise can boost testosterone. The wrong type can lower it."
      breadcrumbs={[
        { label: "Men's Health", href: "/men" },
        { label: "Testosterone & Energy", href: "/men/testosterone" },
        { label: "Exercise for Testosterone" },
      ]}
      backLink={{ href: "/men/testosterone", label: "Testosterone & Energy" }}
      relatedArticles={relatedArticles}
      lastUpdated="January 2025"
    >
      <p className="text-muted-foreground text-lg">
        Exercise can significantly impact testosterone levels — but the type, intensity, and recovery 
        all matter. Here's what the research shows.
      </p>

      <h2>Strength Training: The Clear Winner</h2>
      <p>
        Resistance training is the most effective exercise for testosterone:
      </p>
      <ul>
        <li>Compound movements (squats, deadlifts, bench press) have the biggest impact</li>
        <li>Moderate-high intensity (70-85% of max) is optimal</li>
        <li>Multiple sets (3-5) of moderate reps (6-12) work well</li>
        <li>Testosterone spikes acutely after training</li>
        <li>Over time, baseline testosterone improves</li>
      </ul>

      <h2>Best Exercises for Testosterone</h2>
      <p>
        Focus on large compound movements:
      </p>
      <ul>
        <li><strong>Squats:</strong> The king of testosterone-boosting exercises</li>
        <li><strong>Deadlifts:</strong> Full-body, high testosterone response</li>
        <li><strong>Bench press:</strong> Upper body compound</li>
        <li><strong>Rows:</strong> Back development</li>
        <li><strong>Overhead press:</strong> Shoulders and core</li>
        <li><strong>Pull-ups:</strong> Bodyweight compound</li>
      </ul>

      <h2>Cardio: The Nuanced Answer</h2>
      <p>
        Cardio's effect on testosterone depends on type and amount:
      </p>
      <ul>
        <li><strong>Walking:</strong> No negative impact, may slightly help</li>
        <li><strong>Moderate cardio:</strong> Generally neutral if not excessive</li>
        <li><strong>HIIT:</strong> Can acutely boost testosterone, but recovery is key</li>
        <li><strong>Endurance training:</strong> Chronic long-duration cardio can lower testosterone</li>
        <li><strong>Overtraining:</strong> Any excess exercise without recovery lowers testosterone</li>
      </ul>

      <h2>The Overtraining Trap</h2>
      <p>
        More is not always better:
      </p>
      <ul>
        <li>Excessive training raises cortisol, which suppresses testosterone</li>
        <li>Training to failure every session impairs recovery</li>
        <li>Inadequate rest between sessions compounds the problem</li>
        <li>Signs of overtraining: declining performance, fatigue, poor sleep, low libido</li>
      </ul>

      <h2>Optimal Training for Testosterone</h2>
      <p>
        Evidence-based recommendations:
      </p>
      <ul>
        <li><strong>Frequency:</strong> 3-4 strength sessions per week</li>
        <li><strong>Duration:</strong> 45-60 minutes per session</li>
        <li><strong>Intensity:</strong> Challenging but leaving 1-2 reps in reserve</li>
        <li><strong>Rest:</strong> 1-2 days between training same muscle group</li>
        <li><strong>Deloads:</strong> Every 4-6 weeks, reduce volume by 40-50%</li>
        <li><strong>Walking:</strong> Daily (doesn't count as "cardio stress")</li>
      </ul>

      <h2>Sample Weekly Schedule</h2>
      <ul>
        <li><strong>Monday:</strong> Lower body strength (squats, deadlifts)</li>
        <li><strong>Tuesday:</strong> Upper body strength (bench, rows)</li>
        <li><strong>Wednesday:</strong> Rest or light walking</li>
        <li><strong>Thursday:</strong> Lower body strength</li>
        <li><strong>Friday:</strong> Upper body strength</li>
        <li><strong>Weekend:</strong> Active recovery, walking, mobility</li>
      </ul>

      <h2>Beginner Tips</h2>
      <p>
        If you're new to strength training:
      </p>
      <ul>
        <li>Start with lighter weights and learn proper form</li>
        <li>Progress gradually — add weight week over week</li>
        <li>Don't train to failure initially</li>
        <li>Consider working with a trainer to learn movements</li>
        <li>Be patient — results take months, not weeks</li>
      </ul>

      <div className="rounded-lg border border-sage-200 bg-sage-50 p-4 mt-6">
        <p className="text-sm text-muted-foreground">
          <strong>Key takeaway:</strong> Strength training is the most effective exercise for testosterone. 
          Focus on compound movements, train hard but smart, and prioritize recovery as much as training.
        </p>
      </div>
    </ArticleLayout>
  );
}