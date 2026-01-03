import { ArticleLayout } from "@/components/shared/ArticleLayout";

const relatedArticles = [
  { title: "Signs of Low Testosterone", href: "/men/testosterone/low-t-signs" },
  { title: "Stress & Sexual Health", href: "/men/sexual-health/stress-impact" },
  { title: "Sleep & Sexual Function", href: "/men/sexual-health/sleep-impact" },
];

export default function TestosteroneLibidoArticle() {
  return (
    <ArticleLayout
      title="Testosterone & Libido"
      description="Understanding the hormone-libido connection in men."
      breadcrumbs={[
        { label: "Men's Health", href: "/men" },
        { label: "Sexual Health & Energy", href: "/men/sexual-health" },
        { label: "Testosterone & Libido" },
      ]}
      backLink={{ href: "/men/sexual-health", label: "Sexual Health & Energy" }}
      relatedArticles={relatedArticles}
      lastUpdated="January 2025"
    >
      <p className="text-muted-foreground text-lg">
        Testosterone is essential for male libido, but the relationship isn't as simple as 
        "more testosterone = more desire." Understanding the nuances helps you know when 
        hormones are the issue — and when they're not.
      </p>

      <h2>How Testosterone Affects Libido</h2>
      <p>
        Testosterone influences desire through:
      </p>
      <ul>
        <li>Direct effects on brain regions involved in desire</li>
        <li>Influences on dopamine (the "reward" neurotransmitter)</li>
        <li>Effects on overall energy and vitality</li>
        <li>Maintenance of genital sensitivity</li>
      </ul>

      <h2>The Threshold Effect</h2>
      <p>
        Important to understand:
      </p>
      <ul>
        <li>There's a minimum testosterone level needed for libido</li>
        <li>Below this threshold, libido suffers significantly</li>
        <li>Above the threshold, more testosterone doesn't mean more libido</li>
        <li>The threshold varies between individuals</li>
        <li>Other factors become more important once you're above threshold</li>
      </ul>

      <h2>When Low Testosterone Causes Low Libido</h2>
      <p>
        Signs the issue may be hormonal:
      </p>
      <ul>
        <li>Gradual decline in interest (not sudden)</li>
        <li>Reduced spontaneous desire (not just with a partner)</li>
        <li>Fewer morning erections</li>
        <li>Other low T symptoms present (fatigue, muscle loss, mood changes)</li>
        <li>No clear psychological cause</li>
      </ul>

      <h2>When It's Probably Not Testosterone</h2>
      <p>
        Other factors to consider:
      </p>
      <ul>
        <li><strong>Relationship issues:</strong> Conflict, disconnect, resentment</li>
        <li><strong>Stress:</strong> High cortisol suppresses desire</li>
        <li><strong>Depression:</strong> Common cause of low libido</li>
        <li><strong>Medications:</strong> Antidepressants, blood pressure meds</li>
        <li><strong>Porn use:</strong> Can alter dopamine and expectations</li>
        <li><strong>Performance anxiety:</strong> Fear of failure</li>
        <li><strong>Boredom:</strong> In long-term relationships</li>
      </ul>

      <h2>What About Supplements?</h2>
      <p>
        Honest assessment:
      </p>
      <ul>
        <li>Most "libido boosters" have minimal evidence</li>
        <li>They work primarily through placebo effect</li>
        <li>Nothing will dramatically boost testosterone if you're already normal</li>
        <li>Address lifestyle factors first (sleep, stress, exercise)</li>
      </ul>

      <h2>What Actually Helps</h2>
      
      <h3>If Testosterone Is Low</h3>
      <ul>
        <li>Address underlying causes (sleep, stress, weight)</li>
        <li>Consider TRT if significantly low and symptomatic</li>
        <li>Work with a doctor — not online "clinics"</li>
      </ul>

      <h3>If Testosterone Is Normal</h3>
      <ul>
        <li>Address relationship dynamics</li>
        <li>Reduce stress</li>
        <li>Improve sleep</li>
        <li>Consider therapy for psychological factors</li>
        <li>Exercise (boosts mood and body image)</li>
        <li>Re-evaluate porn consumption</li>
      </ul>

      <h2>Partner Communication</h2>
      <p>
        This is often the hardest but most important part:
      </p>
      <ul>
        <li>Low libido affects both partners</li>
        <li>Shame and silence make it worse</li>
        <li>Open conversation reduces pressure</li>
        <li>Focus on intimacy, not just sex</li>
        <li>Consider couples therapy</li>
      </ul>

      <h2>When to See a Doctor</h2>
      <ul>
        <li>Persistent low libido (more than a few weeks)</li>
        <li>Other symptoms of low testosterone</li>
        <li>Affecting your relationship</li>
        <li>Accompanied by erectile issues</li>
        <li>After starting new medication</li>
      </ul>

      <div className="rounded-lg border border-sage-200 bg-sage-50 p-4 mt-6">
        <p className="text-sm text-muted-foreground">
          <strong>Key takeaway:</strong> Testosterone is important for libido, but it's not the only 
          factor. If testosterone is normal, look at stress, relationship, and psychological factors. 
          If it's low, address it — but recognize that might be one piece of a bigger picture.
        </p>
      </div>
    </ArticleLayout>
  );
}