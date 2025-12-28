import { ArticleLayout } from "@/components/shared/ArticleLayout";

const relatedArticles = [
  { title: "PMS vs PMDD: Understanding the Difference", href: "/mood-pms/pms-vs-pmdd-basics" },
  { title: "Natural Remedies for PMS", href: "/mood-pms/natural-remedies" },
  { title: "Sleep & Hormonal Mood", href: "/mood-pms/sleep-mood" },
];

export default function SerotoninArticle() {
  return (
    <ArticleLayout
      title="The Serotonin Connection"
      description="How hormones affect brain chemistry and mood."
      breadcrumbs={[
        { label: "Mood & PMS", href: "/mood-pms" },
        { label: "Serotonin & Hormones" },
      ]}
      backLink={{ href: "/mood-pms", label: "Mood & PMS" }}
      relatedArticles={relatedArticles}
      lastUpdated="December 2024"
    >
      <p className="text-muted-foreground text-lg">
        Ever wonder why you feel like a different person before your period? 
        The answer lies in how hormones affect brain chemicals like serotonin.
      </p>

      <h2>What is Serotonin?</h2>
      <p>
        Serotonin is a neurotransmitter — a brain chemical that helps regulate:
      </p>
      <ul>
        <li>Mood and emotional stability</li>
        <li>Sleep</li>
        <li>Appetite</li>
        <li>Digestion</li>
        <li>Pain perception</li>
      </ul>
      <p>
        Low serotonin is linked to depression, anxiety, and mood instability.
      </p>

      <h2>The Estrogen-Serotonin Connection</h2>
      <p>
        Estrogen helps with serotonin production and function:
      </p>
      <ul>
        <li>Increases serotonin synthesis</li>
        <li>Reduces serotonin breakdown</li>
        <li>Increases serotonin receptors in the brain</li>
      </ul>

      <h3>What This Means for Your Cycle</h3>
      <ul>
        <li><strong>Follicular phase (after period):</strong> Rising estrogen → rising serotonin → better mood</li>
        <li><strong>Ovulation:</strong> Peak estrogen → peak serotonin → often feel best</li>
        <li><strong>Luteal phase (before period):</strong> Estrogen drops → serotonin drops → PMS symptoms</li>
      </ul>

      <h2>Why Some Women Are More Affected</h2>
      <p>
        Women with PMS/PMDD may have:
      </p>
      <ul>
        <li>Greater sensitivity to hormonal fluctuations</li>
        <li>Different serotonin receptor sensitivity</li>
        <li>Genetic variations affecting serotonin processing</li>
      </ul>
      <p>
        This isn't about hormone levels being "wrong" — it's about how your brain 
        responds to normal hormonal changes.
      </p>

      <h2>Supporting Serotonin Naturally</h2>

      <h3>Through Food</h3>
      <ul>
        <li><strong>Tryptophan-rich foods:</strong> Eggs, cheese, turkey, nuts, seeds, bananas</li>
        <li><strong>Complex carbs:</strong> Help tryptophan enter the brain (don't go super low-carb)</li>
        <li><strong>Omega-3s:</strong> Support brain function</li>
      </ul>

      <h3>Through Lifestyle</h3>
      <ul>
        <li><strong>Sunlight:</strong> Helps serotonin production</li>
        <li><strong>Exercise:</strong> Boosts serotonin and other mood chemicals</li>
        <li><strong>Sleep:</strong> Essential for serotonin regulation</li>
        <li><strong>Stress management:</strong> Chronic stress depletes serotonin</li>
      </ul>

      <h2>Why Carb Cravings Make Sense</h2>
      <p>
        When serotonin drops before your period, your brain craves carbs because 
        carbohydrates help boost serotonin. It's not about willpower — it's biology.
      </p>
      <p>
        Instead of fighting it, choose complex carbs (oats, whole grains) that 
        provide a steadier serotonin boost.
      </p>

      <div className="rounded-lg border border-sage-200 bg-sage-50 p-4 mt-6">
        <p className="text-sm text-muted-foreground">
          <strong>Key insight:</strong> Your premenstrual mood changes have a biological 
          basis. Understanding the serotonin connection helps you stop blaming yourself 
          and start working with your body.
        </p>
      </div>
    </ArticleLayout>
  );
}
