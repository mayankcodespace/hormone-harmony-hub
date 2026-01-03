import { ArticleLayout } from "@/components/shared/ArticleLayout";

const relatedArticles = [
  { title: "Sustainable Fat Loss", href: "/men/weight/sustainable-approach" },
  { title: "Exercise for Testosterone", href: "/men/testosterone/exercise" },
  { title: "Indian Diet for Weight Loss", href: "/men/weight/indian-diet" },
];

export default function ExerciseGuideMenArticle() {
  return (
    <ArticleLayout
      title="Exercise for Fat Loss"
      description="Strength training, cardio, and why daily movement matters most."
      breadcrumbs={[
        { label: "Men's Health", href: "/men" },
        { label: "Weight & Metabolism", href: "/men/weight" },
        { label: "Exercise Guide" },
      ]}
      backLink={{ href: "/men/weight", label: "Weight & Metabolism" }}
      relatedArticles={relatedArticles}
      lastUpdated="January 2025"
    >
      <p className="text-muted-foreground text-lg">
        Exercise is crucial for fat loss, but most men focus on the wrong things. Here's what 
        actually moves the needle.
      </p>

      <h2>The Hierarchy of Exercise for Fat Loss</h2>
      <p>
        Ranked by importance:
      </p>
      <ol>
        <li><strong>Daily movement (NEAT):</strong> Steps, walking, general activity — massive impact</li>
        <li><strong>Strength training:</strong> Builds muscle, raises metabolism, improves insulin sensitivity</li>
        <li><strong>Cardio:</strong> Burns calories but less important than most think</li>
        <li><strong>Ab exercises:</strong> Least important for fat loss (can't spot reduce)</li>
      </ol>

      <h2>The Power of Walking</h2>
      <p>
        Walking is the most underrated fat loss tool:
      </p>
      <ul>
        <li>Burns significant calories over time</li>
        <li>Doesn't raise cortisol like intense exercise</li>
        <li>Improves insulin sensitivity</li>
        <li>Sustainable and doesn't require recovery</li>
        <li>Can be done daily without burnout</li>
        <li><strong>Target:</strong> 7,000-10,000+ steps daily</li>
      </ul>

      <h2>Strength Training: The Foundation</h2>
      <p>
        Why strength training is essential:
      </p>
      <ul>
        <li>Muscle is metabolically active — burns calories at rest</li>
        <li>Prevents muscle loss during fat loss</li>
        <li>Dramatically improves insulin sensitivity</li>
        <li>Changes body composition (you can weigh the same but look leaner)</li>
        <li>Boosts testosterone</li>
      </ul>

      <h3>Optimal Approach</h3>
      <ul>
        <li><strong>Frequency:</strong> 3-4 sessions per week</li>
        <li><strong>Focus:</strong> Compound movements (squats, deadlifts, presses, rows)</li>
        <li><strong>Intensity:</strong> Challenging but with good form</li>
        <li><strong>Duration:</strong> 45-60 minutes per session</li>
        <li><strong>Progression:</strong> Gradually increase weight over time</li>
      </ul>

      <h2>Cardio: The Truth</h2>
      <p>
        Cardio is helpful but often overemphasized:
      </p>
      <ul>
        <li>Burns calories, but less than most think</li>
        <li>Easy to out-eat your cardio</li>
        <li>Excessive cardio can raise cortisol and increase hunger</li>
        <li>Long, slow cardio may burn muscle if overdone</li>
        <li>HIIT is time-efficient but hard on recovery</li>
      </ul>

      <h3>Sensible Cardio Approach</h3>
      <ul>
        <li>2-3 sessions per week maximum</li>
        <li>Mix of moderate steady-state and occasional HIIT</li>
        <li>20-30 minutes per session</li>
        <li>Don't replace walking with "cardio"</li>
        <li>Recovery matters — don't add cardio to exhausting lifting</li>
      </ul>

      <h2>Sample Weekly Schedule</h2>
      <ul>
        <li><strong>Monday:</strong> Lower body strength + walk</li>
        <li><strong>Tuesday:</strong> Upper body strength + walk</li>
        <li><strong>Wednesday:</strong> Walk or light cardio + mobility</li>
        <li><strong>Thursday:</strong> Lower body strength + walk</li>
        <li><strong>Friday:</strong> Upper body strength + walk</li>
        <li><strong>Saturday:</strong> Recreational activity (sports, hiking, etc.)</li>
        <li><strong>Sunday:</strong> Rest or walk</li>
      </ul>
      <p>Plus: Daily walking target of 8,000-10,000 steps</p>

      <h2>Beginner Guidelines</h2>
      <p>
        If you're new to strength training:
      </p>
      <ul>
        <li>Start with lighter weights and learn form</li>
        <li>Full-body workouts 3x per week is enough</li>
        <li>Focus on consistency, not intensity initially</li>
        <li>Consider a trainer for the first few sessions</li>
        <li>Progress gradually — add weight week over week</li>
      </ul>

      <h2>Common Mistakes</h2>
      <ul>
        <li><strong>Too much cardio, not enough lifting:</strong> Lose muscle along with fat</li>
        <li><strong>Skipping strength training:</strong> Metabolism suffers</li>
        <li><strong>Ignoring daily steps:</strong> Biggest missed opportunity</li>
        <li><strong>Training too hard while undereating:</strong> Cortisol spike, muscle loss</li>
        <li><strong>Not recovering:</strong> More isn't always better</li>
        <li><strong>Doing endless ab exercises:</strong> Won't reveal abs — fat loss will</li>
      </ul>

      <div className="rounded-lg border border-sage-200 bg-sage-50 p-4 mt-6">
        <p className="text-sm text-muted-foreground">
          <strong>Key takeaway:</strong> Prioritize daily walking and strength training over cardio. 
          Move more throughout the day, lift weights 3-4 times per week, and add cardio as a supplement, 
          not the foundation.
        </p>
      </div>
    </ArticleLayout>
  );
}