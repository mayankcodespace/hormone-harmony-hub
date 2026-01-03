import { ArticleLayout } from "@/components/shared/ArticleLayout";

const relatedArticles = [
  { title: "Stress & Male Hormones", href: "/men/mood/stress-hormones" },
  { title: "Cortisol & Testosterone Connection", href: "/men/testosterone/cortisol-connection" },
  { title: "When to Seek Help", href: "/men/mood/when-to-seek-help" },
];

export default function BurnoutArticle() {
  return (
    <ArticleLayout
      title="Burnout & Adrenal Health"
      description="Understanding burnout from a hormonal perspective and how to recover."
      breadcrumbs={[
        { label: "Men's Health", href: "/men" },
        { label: "Mood, Stress & Sleep", href: "/men/mood" },
        { label: "Burnout & Adrenal Health" },
      ]}
      backLink={{ href: "/men/mood", label: "Mood, Stress & Sleep" }}
      relatedArticles={relatedArticles}
      lastUpdated="January 2025"
    >
      <p className="text-muted-foreground text-lg">
        Burnout isn't just being tired or stressed — it's a state of chronic exhaustion with 
        real physiological underpinnings. Understanding it can help you recover.
      </p>

      <h2>What Is Burnout?</h2>
      <p>
        Burnout is characterized by:
      </p>
      <ul>
        <li><strong>Exhaustion:</strong> Physical and emotional depletion</li>
        <li><strong>Cynicism:</strong> Detachment, negativity toward work/life</li>
        <li><strong>Reduced efficacy:</strong> Feeling unproductive despite effort</li>
      </ul>
      <p>
        It's not the same as ordinary stress — it's a state of prolonged, unrecovered stress.
      </p>

      <h2>The Physiological Reality</h2>
      <p>
        Burnout has measurable biological effects:
      </p>
      <ul>
        <li><strong>HPA axis dysfunction:</strong> The stress response system becomes dysregulated</li>
        <li><strong>Cortisol patterns:</strong> Often low morning cortisol, flattened daily rhythm</li>
        <li><strong>Inflammation:</strong> Chronic low-grade inflammation</li>
        <li><strong>Testosterone:</strong> Often suppressed</li>
        <li><strong>Neurotransmitters:</strong> Dopamine and serotonin affected</li>
      </ul>

      <h2>"Adrenal Fatigue" — The Controversy</h2>
      <p>
        A note on terminology:
      </p>
      <ul>
        <li>"Adrenal fatigue" is not a recognized medical diagnosis</li>
        <li>Your adrenals don't actually "fatigue" or stop working</li>
        <li>However, HPA axis dysregulation is real and measurable</li>
        <li>The symptoms people attribute to "adrenal fatigue" are real</li>
        <li>It's better understood as chronic stress physiology</li>
      </ul>

      <h2>Symptoms of Burnout</h2>
      <ul>
        <li>Exhaustion that doesn't improve with rest</li>
        <li>Difficulty getting out of bed</li>
        <li>Low morning energy (should be your peak)</li>
        <li>Second wind in the evening (reversed rhythm)</li>
        <li>Needing caffeine to function</li>
        <li>Crashing after meals</li>
        <li>Salt and sugar cravings</li>
        <li>Difficulty handling stress that was previously manageable</li>
        <li>Brain fog and poor concentration</li>
        <li>Feeling disconnected or emotionally flat</li>
      </ul>

      <h2>How Burnout Develops</h2>
      <p>
        The progression typically looks like:
      </p>
      <ol>
        <li><strong>Stage 1:</strong> High stress, high cortisol, "wired" feeling</li>
        <li><strong>Stage 2:</strong> Cortisol starts to dysregulate, fatigue creeps in</li>
        <li><strong>Stage 3:</strong> Low cortisol, exhaustion, "crashed" state</li>
      </ol>

      <h2>Recovery Strategies</h2>
      
      <h3>Rest (Priority #1)</h3>
      <ul>
        <li>Sleep 8-10 hours if needed</li>
        <li>Take actual time off (not just working from home)</li>
        <li>Reduce commitments temporarily</li>
        <li>Say no to non-essential obligations</li>
      </ul>

      <h3>Gentle Movement</h3>
      <ul>
        <li>Intense exercise can worsen burnout initially</li>
        <li>Walking, yoga, gentle swimming are better</li>
        <li>Listen to your body — if you feel worse after exercise, do less</li>
      </ul>

      <h3>Nutrition</h3>
      <ul>
        <li>Don't restrict calories — your body needs resources to heal</li>
        <li>Adequate protein and healthy fats</li>
        <li>Reduce caffeine (stimulates already depleted system)</li>
        <li>Limit sugar (blood sugar swings worsen symptoms)</li>
        <li>Salt is okay if craving it</li>
      </ul>

      <h3>Stress Reduction</h3>
      <ul>
        <li>Remove or reduce stressors where possible</li>
        <li>Boundaries at work</li>
        <li>Time in nature</li>
        <li>Social connection (positive only)</li>
        <li>Therapy or coaching for perspective</li>
      </ul>

      <h3>Supplements That May Help</h3>
      <ul>
        <li><strong>Adaptogens:</strong> Ashwagandha, rhodiola (but may not work for everyone)</li>
        <li><strong>B vitamins:</strong> Often depleted in chronic stress</li>
        <li><strong>Magnesium:</strong> Calming, supports recovery</li>
        <li><strong>Vitamin C:</strong> Adrenals use lots of it</li>
      </ul>

      <h2>Recovery Timeline</h2>
      <ul>
        <li>Mild burnout: Weeks to a few months</li>
        <li>Moderate burnout: Several months</li>
        <li>Severe burnout: 6 months to a year or more</li>
        <li>Recovery isn't linear — expect ups and downs</li>
        <li>Rushing recovery often extends it</li>
      </ul>

      <div className="rounded-lg border border-sage-200 bg-sage-50 p-4 mt-6">
        <p className="text-sm text-muted-foreground">
          <strong>Key takeaway:</strong> Burnout is real and physiological, not a character flaw. 
          Recovery requires rest, reducing stress, and patience. You can't push through burnout — 
          you have to recover from it.
        </p>
      </div>
    </ArticleLayout>
  );
}