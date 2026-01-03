import { ArticleLayout } from "@/components/shared/ArticleLayout";

const relatedArticles = [
  { title: "Testosterone & Libido", href: "/men/sexual-health/testosterone-libido" },
  { title: "Cardiovascular Health Connection", href: "/men/sexual-health/cardiovascular" },
  { title: "Stress & Sexual Health", href: "/men/sexual-health/stress-impact" },
];

export default function ErectileFunctionArticle() {
  return (
    <ArticleLayout
      title="Erectile Function: What to Know"
      description="Understanding what causes erectile issues and when to seek help."
      breadcrumbs={[
        { label: "Men's Health", href: "/men" },
        { label: "Sexual Health & Energy", href: "/men/sexual-health" },
        { label: "Erectile Function" },
      ]}
      backLink={{ href: "/men/sexual-health", label: "Sexual Health & Energy" }}
      relatedArticles={relatedArticles}
      lastUpdated="January 2025"
    >
      <p className="text-muted-foreground text-lg">
        Erectile dysfunction (ED) is common, affecting up to 50% of men over 40 to some degree. 
        Understanding the causes can help you address it effectively — and know when it might 
        signal something more serious.
      </p>

      <h2>How Erections Work</h2>
      <p>
        Erections require coordination of:
      </p>
      <ul>
        <li><strong>Brain:</strong> Arousal and signal initiation</li>
        <li><strong>Nerves:</strong> Transmit signals to blood vessels</li>
        <li><strong>Blood vessels:</strong> Must dilate and allow blood flow</li>
        <li><strong>Hormones:</strong> Testosterone, nitric oxide</li>
        <li>Problems with any of these can cause ED</li>
      </ul>

      <h2>Physical Causes</h2>
      <ul>
        <li><strong>Cardiovascular issues:</strong> Poor blood flow (most common)</li>
        <li><strong>Diabetes:</strong> Damages blood vessels and nerves</li>
        <li><strong>Low testosterone:</strong> Less common than assumed</li>
        <li><strong>Medications:</strong> Blood pressure meds, antidepressants</li>
        <li><strong>Obesity:</strong> Affects hormones and blood flow</li>
        <li><strong>Sleep apnea:</strong> Lowers testosterone, affects blood flow</li>
        <li><strong>Nerve damage:</strong> From surgery, injury, or diabetes</li>
      </ul>

      <h2>Psychological Causes</h2>
      <ul>
        <li><strong>Performance anxiety:</strong> Fear of failure becomes self-fulfilling</li>
        <li><strong>Stress:</strong> Activates fight-or-flight, inhibits arousal</li>
        <li><strong>Depression:</strong> Affects desire and function</li>
        <li><strong>Relationship issues:</strong> Conflict, lack of connection</li>
        <li><strong>Porn-induced ED:</strong> Desensitization to real stimuli</li>
      </ul>

      <h2>Clues About the Cause</h2>
      
      <h3>Probably Physical If:</h3>
      <ul>
        <li>Gradual onset over months/years</li>
        <li>Affects all situations (including morning erections)</li>
        <li>No erection at all, even with stimulation</li>
        <li>Present with cardiovascular risk factors</li>
      </ul>

      <h3>Probably Psychological If:</h3>
      <ul>
        <li>Sudden onset</li>
        <li>Morning erections are present</li>
        <li>Works in some situations but not others</li>
        <li>Related to stress or relationship issues</li>
        <li>Started with a specific incident</li>
      </ul>

      <h2>ED as a Warning Sign</h2>
      <p>
        Important: ED can be an early indicator of cardiovascular disease:
      </p>
      <ul>
        <li>Penile arteries are smaller than heart arteries</li>
        <li>They show problems first</li>
        <li>ED can precede heart disease by 3-5 years</li>
        <li>If you have ED, get cardiovascular checkup</li>
      </ul>

      <h2>Lifestyle Improvements</h2>
      <p>
        These help regardless of cause:
      </p>
      <ul>
        <li><strong>Exercise:</strong> Improves cardiovascular health and testosterone</li>
        <li><strong>Lose excess weight:</strong> Improves hormones and blood flow</li>
        <li><strong>Quit smoking:</strong> Major cause of vascular ED</li>
        <li><strong>Limit alcohol:</strong> Impairs function short and long term</li>
        <li><strong>Sleep:</strong> Crucial for testosterone and overall function</li>
        <li><strong>Stress management:</strong> Reduces performance anxiety</li>
      </ul>

      <h2>Treatment Options</h2>
      
      <h3>Medications (PDE5 Inhibitors)</h3>
      <ul>
        <li>Sildenafil (Viagra), Tadalafil (Cialis)</li>
        <li>Effective for most men</li>
        <li>Require prescription</li>
        <li>Work for physical and psychological ED</li>
        <li>Don't create desire — require arousal</li>
      </ul>

      <h3>Other Medical Options</h3>
      <ul>
        <li>Testosterone replacement (if truly low)</li>
        <li>Vacuum devices</li>
        <li>Injections</li>
        <li>Surgery (rare, for severe cases)</li>
      </ul>

      <h3>Psychological Approaches</h3>
      <ul>
        <li>Sex therapy or couples counseling</li>
        <li>Cognitive behavioral therapy for anxiety</li>
        <li>Mindfulness-based approaches</li>
      </ul>

      <h2>When to See a Doctor</h2>
      <ul>
        <li>ED lasting more than a few weeks</li>
        <li>Accompanied by other symptoms</li>
        <li>Affecting your relationship</li>
        <li>You have cardiovascular risk factors</li>
        <li>After starting new medication</li>
      </ul>

      <div className="rounded-lg border border-sage-200 bg-sage-50 p-4 mt-6">
        <p className="text-sm text-muted-foreground">
          <strong>Key takeaway:</strong> ED is common and treatable. Don't be embarrassed to seek help. 
          It can sometimes signal cardiovascular issues, so getting checked is important for overall health, 
          not just sexual function.
        </p>
      </div>
    </ArticleLayout>
  );
}