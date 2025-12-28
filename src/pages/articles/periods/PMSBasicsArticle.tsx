import { ArticleLayout } from "@/components/shared/ArticleLayout";

const relatedArticles = [
  { title: "Understanding Your Cycle Phases", href: "/periods/cycle-phases" },
  { title: "Mood & PMS Guide", href: "/mood-pms" },
  { title: "Period Tracking: A Beginner's Guide", href: "/periods/tracking-guide" },
];

export default function PMSBasicsArticle() {
  return (
    <ArticleLayout
      title="PMS vs Normal Cycle Changes"
      description="Understanding premenstrual symptoms and when they cross into PMS territory."
      breadcrumbs={[
        { label: "Periods & Cycle", href: "/periods" },
        { label: "PMS Basics" },
      ]}
      backLink={{ href: "/periods", label: "Periods & Cycle" }}
      relatedArticles={relatedArticles}
      lastUpdated="December 2024"
    >
      <p className="text-muted-foreground text-lg">
        Almost every menstruating person notices some changes before their period. 
        But when does normal cycle variation become PMS? And when is it something more serious?
      </p>

      <h2>What Are Normal Cycle Changes?</h2>
      <p>
        It's completely normal to notice shifts throughout your cycle. The luteal phase 
        (after ovulation, before your period) often brings:
      </p>
      <ul>
        <li>Slight breast tenderness</li>
        <li>Mild bloating</li>
        <li>Subtle mood shifts</li>
        <li>Changes in energy</li>
        <li>Different food preferences</li>
      </ul>
      <p>
        These are your hormones at work — especially progesterone rising after ovulation.
      </p>

      <h2>What Is PMS?</h2>
      <p>
        PMS (Premenstrual Syndrome) is when these symptoms become more pronounced and start 
        interfering with daily life. Key characteristics:
      </p>
      <ul>
        <li>Symptoms appear 1-2 weeks before period</li>
        <li>Symptoms improve once period starts</li>
        <li>Symptoms are noticeable and bothersome</li>
        <li>Pattern repeats most cycles</li>
      </ul>

      <h2>Common PMS Symptoms</h2>
      <h3>Physical</h3>
      <ul>
        <li>Bloating and water retention</li>
        <li>Breast tenderness</li>
        <li>Headaches</li>
        <li>Fatigue</li>
        <li>Acne flare-ups</li>
        <li>Digestive changes</li>
      </ul>

      <h3>Emotional</h3>
      <ul>
        <li>Mood swings</li>
        <li>Irritability</li>
        <li>Anxiety</li>
        <li>Low mood</li>
        <li>Difficulty concentrating</li>
        <li>Changes in sleep</li>
      </ul>

      <h2>When It's More Than PMS: PMDD</h2>
      <p>
        PMDD (Premenstrual Dysphoric Disorder) is a severe form that affects 3-8% of 
        menstruating people. Signs include:
      </p>
      <ul>
        <li>Severe depression or hopelessness</li>
        <li>Intense anxiety or panic</li>
        <li>Extreme irritability or rage</li>
        <li>Feeling out of control</li>
        <li>Significant disruption to work, relationships, daily life</li>
        <li>Thoughts of self-harm (seek help immediately)</li>
      </ul>

      <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-4">
        <p className="text-sm">
          <strong>Important:</strong> PMDD is a real medical condition that can be treated. 
          If your premenstrual symptoms are severe, please talk to a doctor.
        </p>
      </div>

      <h2>What Helps with PMS</h2>
      <ul>
        <li><strong>Track it:</strong> Know when to expect symptoms and plan accordingly</li>
        <li><strong>Sleep more:</strong> Extra rest during luteal phase</li>
        <li><strong>Reduce caffeine & alcohol:</strong> Both can worsen symptoms</li>
        <li><strong>Gentle exercise:</strong> Walking, yoga, swimming</li>
        <li><strong>Magnesium-rich foods:</strong> Nuts, dark chocolate, bananas</li>
        <li><strong>Complex carbs:</strong> Help with serotonin production</li>
        <li><strong>Lower stress:</strong> Easier said than done, but important</li>
      </ul>

      <div className="rounded-lg border border-sage-200 bg-sage-50 p-4 mt-6">
        <p className="text-sm text-muted-foreground">
          <strong>Tracking tip:</strong> Note your symptoms alongside your cycle for 2-3 months. 
          This helps you (and your doctor) see patterns clearly.
        </p>
      </div>
    </ArticleLayout>
  );
}
