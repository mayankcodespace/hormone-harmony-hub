import { ArticleLayout } from "@/components/shared/ArticleLayout";

const relatedArticles = [
  { title: "The Serotonin Connection", href: "/mood-pms/serotonin-hormones" },
  { title: "Stress Management Techniques", href: "/mood-pms/stress-management" },
  { title: "When to Seek Professional Help", href: "/mood-pms/when-to-seek-help" },
];

export default function PeriodAnxietyArticle() {
  return (
    <ArticleLayout
      title="Managing Anxiety Around Your Period"
      description="Understanding and coping with hormonal anxiety."
      breadcrumbs={[
        { label: "Mood & PMS", href: "/mood-pms" },
        { label: "Period Anxiety" },
      ]}
      backLink={{ href: "/mood-pms", label: "Mood & PMS" }}
      relatedArticles={relatedArticles}
      lastUpdated="December 2024"
    >
      <p className="text-muted-foreground text-lg">
        If you notice anxiety peaks before your period, you're not imagining it. 
        Hormonal changes genuinely affect anxiety levels.
      </p>

      <h2>Why Anxiety Increases Before Your Period</h2>
      <ul>
        <li><strong>Progesterone drop:</strong> Progesterone has calming effects; when it drops, anxiety can rise</li>
        <li><strong>Serotonin changes:</strong> Lower estrogen means less serotonin support</li>
        <li><strong>GABA effects:</strong> Progesterone affects GABA, a calming neurotransmitter</li>
        <li><strong>Physical symptoms:</strong> Bloating, pain, and fatigue can worsen anxiety</li>
      </ul>

      <h2>Common Patterns</h2>
      <ul>
        <li>Anxiety may spike 3-7 days before your period</li>
        <li>Often improves once bleeding starts</li>
        <li>May feel like "dread" or unease without clear cause</li>
        <li>Existing anxiety conditions may worsen cyclically</li>
      </ul>

      <h2>In-the-Moment Strategies</h2>

      <h3>Breathing Techniques</h3>
      <ul>
        <li><strong>4-7-8 breathing:</strong> Inhale 4 counts, hold 7, exhale 8</li>
        <li><strong>Box breathing:</strong> Inhale 4, hold 4, exhale 4, hold 4</li>
        <li><strong>Long exhale:</strong> Make your exhale longer than your inhale</li>
      </ul>

      <h3>Grounding Techniques</h3>
      <ul>
        <li><strong>5-4-3-2-1:</strong> Notice 5 things you see, 4 you hear, 3 you feel, 2 you smell, 1 you taste</li>
        <li><strong>Cold water:</strong> Splash cold water on your face or hold ice</li>
        <li><strong>Physical movement:</strong> Walk, stretch, shake it out</li>
      </ul>

      <h2>Preventive Strategies</h2>

      <h3>Before the Luteal Phase</h3>
      <ul>
        <li>Reduce caffeine (worsens anxiety)</li>
        <li>Prioritize sleep</li>
        <li>Plan lighter schedules if possible</li>
        <li>Stock up on comforting, healthy foods</li>
      </ul>

      <h3>Throughout the Month</h3>
      <ul>
        <li>Regular exercise (reduces overall anxiety)</li>
        <li>Consistent sleep schedule</li>
        <li>Stress management practice</li>
        <li>Limit alcohol (affects hormones and anxiety)</li>
      </ul>

      <h2>Supplements That May Help</h2>
      <p>(Discuss with your doctor first)</p>
      <ul>
        <li><strong>Magnesium:</strong> Calming mineral; many women are deficient</li>
        <li><strong>B6:</strong> May help with PMS symptoms</li>
        <li><strong>Omega-3s:</strong> Support brain health</li>
      </ul>

      <h2>When It's More Than PMS</h2>
      <p>
        Seek professional help if:
      </p>
      <ul>
        <li>Anxiety is severe or debilitating</li>
        <li>Panic attacks are frequent</li>
        <li>Anxiety persists through the entire month</li>
        <li>You're avoiding activities due to anxiety</li>
        <li>Anxiety is affecting relationships or work</li>
      </ul>

      <div className="rounded-lg border border-sage-200 bg-sage-50 p-4 mt-6">
        <p className="text-sm text-muted-foreground">
          <strong>Remember:</strong> Knowing that anxiety has a hormonal component 
          doesn't make it less real, but it can help you prepare, cope, and seek 
          appropriate support.
        </p>
      </div>
    </ArticleLayout>
  );
}
