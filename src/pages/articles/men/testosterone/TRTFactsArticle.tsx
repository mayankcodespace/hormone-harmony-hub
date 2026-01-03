import { ArticleLayout } from "@/components/shared/ArticleLayout";

const relatedArticles = [
  { title: "Testosterone Testing", href: "/men/testosterone/testing" },
  { title: "Signs of Low Testosterone", href: "/men/testosterone/low-t-signs" },
  { title: "Lifestyle & Testosterone", href: "/men/testosterone/lifestyle" },
];

export default function TRTFactsArticle() {
  return (
    <ArticleLayout
      title="TRT: What You Should Know"
      description="Testosterone replacement therapy — the facts, benefits, risks, and considerations."
      breadcrumbs={[
        { label: "Men's Health", href: "/men" },
        { label: "Testosterone & Energy", href: "/men/testosterone" },
        { label: "TRT Facts" },
      ]}
      backLink={{ href: "/men/testosterone", label: "Testosterone & Energy" }}
      relatedArticles={relatedArticles}
      lastUpdated="January 2025"
    >
      <p className="text-muted-foreground text-lg">
        Testosterone Replacement Therapy (TRT) is increasingly popular, but it's often 
        presented with either excessive hype or excessive fear. Here's what the evidence shows.
      </p>

      <h2>What Is TRT?</h2>
      <p>
        TRT involves supplementing testosterone in men with clinically low levels. Methods include:
      </p>
      <ul>
        <li><strong>Injections:</strong> Most common — weekly or bi-weekly</li>
        <li><strong>Gels:</strong> Daily application to skin</li>
        <li><strong>Patches:</strong> Daily skin patches</li>
        <li><strong>Pellets:</strong> Implanted under skin every 3-6 months</li>
      </ul>

      <h2>Who Should Consider TRT?</h2>
      <p>
        TRT is medically appropriate for:
      </p>
      <ul>
        <li>Men with confirmed low testosterone (tested twice, morning)</li>
        <li>Symptoms consistent with hypogonadism</li>
        <li>Lifestyle optimization hasn't adequately improved levels</li>
        <li>No contraindications (prostate cancer, etc.)</li>
      </ul>
      <p>
        TRT is NOT appropriate for:
      </p>
      <ul>
        <li>Men with normal testosterone who want to "optimize"</li>
        <li>Bodybuilding or performance enhancement</li>
        <li>Men who haven't tried lifestyle interventions</li>
        <li>Those with active prostate cancer</li>
        <li>Men wanting to maintain fertility (TRT suppresses sperm)</li>
      </ul>

      <h2>Benefits of TRT (When Appropriate)</h2>
      <p>
        In men with genuine hypogonadism, TRT can:
      </p>
      <ul>
        <li>Improve energy and reduce fatigue</li>
        <li>Increase libido and sexual function</li>
        <li>Improve mood and reduce depression</li>
        <li>Increase muscle mass and strength</li>
        <li>Improve bone density</li>
        <li>Reduce body fat (especially with exercise)</li>
      </ul>

      <h2>Risks and Side Effects</h2>
      <p>
        TRT is not without risks:
      </p>
      <ul>
        <li><strong>Infertility:</strong> TRT suppresses sperm production (often reversible)</li>
        <li><strong>Polycythemia:</strong> Increased red blood cells (requires monitoring)</li>
        <li><strong>Acne:</strong> Skin issues, especially initially</li>
        <li><strong>Sleep apnea:</strong> Can worsen existing apnea</li>
        <li><strong>Testicular shrinkage:</strong> Natural production shuts down</li>
        <li><strong>Mood changes:</strong> Can cause irritability in some</li>
        <li><strong>Prostate:</strong> May accelerate existing prostate issues (debated)</li>
        <li><strong>Cardiovascular:</strong> Research is mixed — some concern, not definitive</li>
      </ul>

      <h2>The Fertility Issue</h2>
      <p>
        This is crucial to understand:
      </p>
      <ul>
        <li>TRT shuts down natural testosterone production</li>
        <li>This includes LH and FSH, which control sperm production</li>
        <li>Most men on TRT become infertile or have very low sperm counts</li>
        <li>Usually reversible if you stop, but not guaranteed</li>
        <li>If fertility is desired, alternatives (like clomiphene) may be better</li>
      </ul>

      <h2>Before Starting TRT</h2>
      <p>
        Essential steps before TRT:
      </p>
      <ol>
        <li>Confirm low testosterone with two morning blood tests</li>
        <li>Rule out reversible causes (sleep apnea, obesity, etc.)</li>
        <li>Try lifestyle optimization for 3-6 months</li>
        <li>Get baseline PSA and prostate exam</li>
        <li>Discuss fertility goals</li>
        <li>Understand it's usually a lifelong commitment</li>
      </ol>

      <h2>Monitoring on TRT</h2>
      <p>
        If you start TRT, regular monitoring is essential:
      </p>
      <ul>
        <li>Testosterone levels (every 3-6 months initially)</li>
        <li>Hematocrit/hemoglobin (for polycythemia)</li>
        <li>PSA (prostate health)</li>
        <li>Estradiol (can rise with TRT)</li>
        <li>Symptom assessment</li>
      </ul>

      <div className="rounded-lg border border-sage-200 bg-sage-50 p-4 mt-6">
        <p className="text-sm text-muted-foreground">
          <strong>Key takeaway:</strong> TRT can be life-changing for men with genuine hypogonadism, 
          but it's not a shortcut for lifestyle issues and comes with real trade-offs. Optimize 
          lifestyle first, get proper testing, and make an informed decision.
        </p>
      </div>
    </ArticleLayout>
  );
}