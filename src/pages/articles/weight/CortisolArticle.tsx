import { ArticleLayout } from "@/components/shared/ArticleLayout";

const relatedArticles = [
  { title: "Understanding Hormonal Weight Gain", href: "/hormonal-weight/why-weight-changes" },
  { title: "Insulin Resistance Explained Simply", href: "/hormonal-weight/insulin-resistance" },
  { title: "Sleep & Weight Connection", href: "/hormonal-weight/sleep-weight" },
];

export default function CortisolArticle() {
  return (
    <ArticleLayout
      title="Cortisol, Stress & Belly Fat"
      description="How the stress hormone affects where you store fat."
      breadcrumbs={[
        { label: "Hormonal Weight", href: "/hormonal-weight" },
        { label: "Cortisol & Belly Fat" },
      ]}
      backLink={{ href: "/hormonal-weight", label: "Hormonal Weight" }}
      relatedArticles={relatedArticles}
      lastUpdated="December 2024"
    >
      <p className="text-muted-foreground text-lg">
        That stubborn belly fat might not be about what you're eating — it could be 
        about stress. Here's the cortisol connection.
      </p>

      <h2>What is Cortisol?</h2>
      <p>
        Cortisol is your body's main stress hormone. It's released by your adrenal glands 
        in response to stress. In short bursts, it's helpful. Chronically elevated? 
        That's where problems start.
      </p>

      <h2>How Cortisol Affects Weight</h2>
      <ul>
        <li><strong>Belly fat storage:</strong> Cortisol specifically promotes fat storage around your middle</li>
        <li><strong>Increased appetite:</strong> High cortisol drives cravings for high-calorie foods</li>
        <li><strong>Insulin resistance:</strong> Chronic cortisol worsens blood sugar regulation</li>
        <li><strong>Muscle breakdown:</strong> Can break down muscle, slowing metabolism</li>
        <li><strong>Water retention:</strong> Can cause bloating and puffiness</li>
      </ul>

      <h2>Signs of Chronic High Cortisol</h2>
      <ul>
        <li>Weight gain, especially around the belly and face</li>
        <li>Difficulty sleeping or waking up feeling unrefreshed</li>
        <li>Anxiety or feeling wired but tired</li>
        <li>Brain fog and difficulty concentrating</li>
        <li>Cravings for comfort foods</li>
        <li>Getting sick frequently</li>
      </ul>

      <h2>What Raises Cortisol?</h2>
      <ul>
        <li>Chronic work or life stress</li>
        <li>Poor sleep or sleep deprivation</li>
        <li>Over-exercising (especially lots of cardio)</li>
        <li>Under-eating or very restrictive dieting</li>
        <li>Excessive caffeine</li>
        <li>Constant phone/screen stimulation</li>
      </ul>

      <h2>How to Lower Cortisol</h2>

      <h3>Stress Management</h3>
      <ul>
        <li>Deep breathing exercises</li>
        <li>Meditation or mindfulness</li>
        <li>Time in nature</li>
        <li>Hobbies and activities you enjoy</li>
        <li>Social connection</li>
      </ul>

      <h3>Sleep</h3>
      <ul>
        <li>Prioritize 7-8 hours</li>
        <li>Keep a consistent sleep schedule</li>
        <li>Limit screens before bed</li>
      </ul>

      <h3>Exercise Balance</h3>
      <ul>
        <li>Include gentle movement (walking, yoga)</li>
        <li>Don't overdo intense cardio</li>
        <li>Include rest days</li>
      </ul>

      <h3>Nutrition</h3>
      <ul>
        <li>Don't severely restrict calories</li>
        <li>Eat enough protein</li>
        <li>Limit caffeine, especially after 2pm</li>
        <li>Include magnesium-rich foods</li>
      </ul>

      <div className="rounded-lg border border-sage-200 bg-sage-50 p-4 mt-6">
        <p className="text-sm text-muted-foreground">
          <strong>Remember:</strong> You can't out-exercise or out-diet chronic stress. 
          If you're doing everything right but still gaining belly fat, look at your 
          stress levels and sleep quality.
        </p>
      </div>
    </ArticleLayout>
  );
}
