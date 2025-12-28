import { ArticleLayout } from "@/components/shared/ArticleLayout";

const relatedArticles = [
  { title: "PMS vs PMDD: Understanding the Difference", href: "/mood-pms/pms-vs-pmdd-basics" },
  { title: "Tracking Mood & Your Cycle", href: "/mood-pms/mood-tracking" },
  { title: "Managing Anxiety Around Your Period", href: "/mood-pms/period-anxiety" },
];

export default function WhenToSeekHelpArticle() {
  return (
    <ArticleLayout
      title="When to Seek Professional Help"
      description="Recognizing when mood symptoms need medical attention."
      breadcrumbs={[
        { label: "Mood & PMS", href: "/mood-pms" },
        { label: "When to Seek Help" },
      ]}
      backLink={{ href: "/mood-pms", label: "Mood & PMS" }}
      relatedArticles={relatedArticles}
      lastUpdated="December 2024"
    >
      <p className="text-muted-foreground text-lg">
        Not all mood symptoms require professional help, but some definitely do. 
        Here's how to know when it's time to reach out.
      </p>

      <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-4 mb-6">
        <p className="text-sm">
          <strong>If you're having thoughts of suicide or self-harm, please reach out 
          immediately:</strong><br/>
          iCall: 9152987821 | Vandrevala Foundation: 1860-2662-345 | NIMHANS: 080-46110007
        </p>
      </div>

      <h2>Seek Help Immediately If...</h2>
      <ul>
        <li>You're having thoughts of hurting yourself</li>
        <li>You're having thoughts of suicide</li>
        <li>You feel completely unable to function</li>
        <li>You're having thoughts of hurting others</li>
        <li>You're experiencing psychotic symptoms</li>
      </ul>

      <h2>See a Doctor Soon If...</h2>

      <h3>Symptoms Are Severe</h3>
      <ul>
        <li>PMS prevents you from going to work or school</li>
        <li>Relationships are suffering significantly</li>
        <li>You feel like a completely different person before your period</li>
        <li>Rage or anger feels out of control</li>
        <li>Depressive episodes are debilitating</li>
      </ul>

      <h3>Symptoms Don't Follow Patterns</h3>
      <ul>
        <li>Mood issues persist throughout the entire month</li>
        <li>No clear connection to your menstrual cycle</li>
        <li>Symptoms don't improve when your period starts</li>
      </ul>

      <h3>Lifestyle Changes Haven't Helped</h3>
      <ul>
        <li>You've tried diet, exercise, sleep improvements for 2-3 cycles</li>
        <li>Symptoms remain severe</li>
      </ul>

      <h2>Who to See</h2>

      <h3>For Cyclical Mood Symptoms</h3>
      <ul>
        <li><strong>Gynecologist:</strong> First stop for hormonally-linked symptoms</li>
        <li><strong>Psychiatrist:</strong> For severe mood symptoms, PMDD assessment</li>
        <li><strong>Reproductive psychiatrist:</strong> Specialist in hormonal mental health</li>
      </ul>

      <h3>For General Mental Health</h3>
      <ul>
        <li><strong>Psychologist/Therapist:</strong> Talk therapy, coping strategies</li>
        <li><strong>Psychiatrist:</strong> Medication if needed</li>
      </ul>

      <h2>What to Bring</h2>
      <ul>
        <li>2-3 months of mood and cycle tracking data</li>
        <li>List of current medications and supplements</li>
        <li>Notes on what you've already tried</li>
        <li>Questions you want answered</li>
      </ul>

      <h2>Treatment Options</h2>
      <p>
        (To be discussed with your healthcare provider)
      </p>
      <ul>
        <li><strong>SSRIs:</strong> Can be taken cyclically or continuously for PMDD</li>
        <li><strong>Hormonal options:</strong> Birth control pills, other hormonal treatments</li>
        <li><strong>Therapy:</strong> CBT can help with coping strategies</li>
        <li><strong>Combination approaches:</strong> Often most effective</li>
      </ul>

      <h2>Remember</h2>
      <ul>
        <li>Seeking help is a sign of strength, not weakness</li>
        <li>Severe PMS and PMDD are real, treatable conditions</li>
        <li>You don't have to suffer through this</li>
        <li>Treatment can make a significant difference</li>
      </ul>

      <div className="rounded-lg border border-sage-200 bg-sage-50 p-4 mt-6">
        <p className="text-sm text-muted-foreground">
          <strong>Key message:</strong> Trust your instincts. If something feels wrong, 
          or you're struggling more than feels reasonable, reach out. You deserve support.
        </p>
      </div>
    </ArticleLayout>
  );
}
