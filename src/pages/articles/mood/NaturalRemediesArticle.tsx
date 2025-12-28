import { ArticleLayout } from "@/components/shared/ArticleLayout";

const relatedArticles = [
  { title: "The Serotonin Connection", href: "/mood-pms/serotonin-hormones" },
  { title: "Sleep & Hormonal Mood", href: "/mood-pms/sleep-mood" },
  { title: "Stress Management Techniques", href: "/mood-pms/stress-management" },
];

export default function NaturalRemediesArticle() {
  return (
    <ArticleLayout
      title="Natural Remedies for PMS"
      description="Evidence-based natural approaches to managing PMS symptoms."
      breadcrumbs={[
        { label: "Mood & PMS", href: "/mood-pms" },
        { label: "Natural Remedies" },
      ]}
      backLink={{ href: "/mood-pms", label: "Mood & PMS" }}
      relatedArticles={relatedArticles}
      lastUpdated="December 2024"
    >
      <p className="text-muted-foreground text-lg">
        Looking for natural ways to manage PMS? Here's what the evidence says about 
        various approaches — no hype, just facts.
      </p>

      <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-4 mb-6">
        <p className="text-sm">
          <strong>Important:</strong> These are for mild to moderate PMS. If symptoms 
          are severe, please consult a healthcare provider. Natural doesn't mean 
          without risks — discuss with your doctor, especially if on medications.
        </p>
      </div>

      <h2>Lifestyle Approaches (Best Evidence)</h2>

      <h3>Exercise</h3>
      <ul>
        <li>Strong evidence for reducing PMS symptoms</li>
        <li>Aerobic exercise 30 minutes, 3-5 times per week</li>
        <li>Both cardio and yoga show benefits</li>
        <li>May take 2-3 cycles to see improvement</li>
      </ul>

      <h3>Sleep</h3>
      <ul>
        <li>7-8 hours consistently helps stabilize mood</li>
        <li>Poor sleep worsens every PMS symptom</li>
      </ul>

      <h3>Stress Reduction</h3>
      <ul>
        <li>Meditation, breathing exercises, yoga</li>
        <li>Whatever helps you unwind</li>
        <li>Cortisol affects hormonal balance</li>
      </ul>

      <h2>Dietary Changes (Moderate Evidence)</h2>

      <h3>What May Help</h3>
      <ul>
        <li><strong>Complex carbs:</strong> Support serotonin production</li>
        <li><strong>Calcium-rich foods:</strong> Some studies show benefit</li>
        <li><strong>Magnesium-rich foods:</strong> Nuts, seeds, dark chocolate, leafy greens</li>
        <li><strong>Regular, balanced meals:</strong> Stable blood sugar helps mood</li>
      </ul>

      <h3>What to Limit</h3>
      <ul>
        <li><strong>Caffeine:</strong> Can worsen anxiety, breast tenderness</li>
        <li><strong>Alcohol:</strong> Disrupts sleep, depletes B vitamins</li>
        <li><strong>High sodium:</strong> Worsens bloating</li>
        <li><strong>Excessive sugar:</strong> Blood sugar swings affect mood</li>
      </ul>

      <h2>Supplements (Mixed Evidence)</h2>
      <p>Always consult a doctor before starting supplements.</p>

      <h3>Some Evidence</h3>
      <ul>
        <li><strong>Magnesium:</strong> May help with mood, bloating, cramps</li>
        <li><strong>Vitamin B6:</strong> Some evidence for mood symptoms</li>
        <li><strong>Calcium:</strong> May reduce overall PMS severity</li>
      </ul>

      <h3>Limited/Mixed Evidence</h3>
      <ul>
        <li><strong>Evening primrose oil:</strong> Popular but evidence is weak</li>
        <li><strong>Chasteberry (Vitex):</strong> Some studies positive, needs more research</li>
      </ul>

      <h2>Mind-Body Practices</h2>
      <ul>
        <li><strong>Yoga:</strong> Good evidence for PMS relief</li>
        <li><strong>Mindfulness meditation:</strong> Helps with emotional symptoms</li>
        <li><strong>Acupuncture:</strong> Some positive studies, may be worth trying</li>
      </ul>

      <h2>What to Expect</h2>
      <ul>
        <li>Natural approaches often take 2-3 cycles to show effects</li>
        <li>Combine multiple approaches for best results</li>
        <li>Track your symptoms to see what's working</li>
        <li>Lifestyle changes are foundational — add supplements carefully</li>
      </ul>

      <div className="rounded-lg border border-sage-200 bg-sage-50 p-4 mt-6">
        <p className="text-sm text-muted-foreground">
          <strong>Bottom line:</strong> Start with lifestyle (exercise, sleep, stress) 
          — these have the best evidence and no risks. Add dietary changes and 
          supplements thoughtfully.
        </p>
      </div>
    </ArticleLayout>
  );
}
