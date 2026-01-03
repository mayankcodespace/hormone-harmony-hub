import { ArticleLayout } from "@/components/shared/ArticleLayout";

const relatedArticles = [
  { title: "Signs of Low Testosterone", href: "/men/testosterone/low-t-signs" },
  { title: "TRT: What You Should Know", href: "/men/testosterone/trt-facts" },
  { title: "Understanding Testosterone", href: "/men/testosterone/basics" },
];

export default function TestosteroneTestingArticle() {
  return (
    <ArticleLayout
      title="Testosterone Testing: What to Know"
      description="How to get tested for testosterone, what tests to ask for, and how to interpret results."
      breadcrumbs={[
        { label: "Men's Health", href: "/men" },
        { label: "Testosterone & Energy", href: "/men/testosterone" },
        { label: "Testosterone Testing" },
      ]}
      backLink={{ href: "/men/testosterone", label: "Testosterone & Energy" }}
      relatedArticles={relatedArticles}
      lastUpdated="January 2025"
    >
      <p className="text-muted-foreground text-lg">
        Getting your testosterone tested seems simple, but there are nuances that affect accuracy 
        and interpretation. Here's what you need to know.
      </p>

      <h2>When to Test</h2>
      <p>
        Timing matters for accurate results:
      </p>
      <ul>
        <li><strong>Morning testing:</strong> Testosterone peaks in the morning (7-10 AM)</li>
        <li><strong>Fasted:</strong> Some recommend fasting, though impact is modest</li>
        <li><strong>Rested:</strong> Avoid testing after poor sleep or intense exercise</li>
        <li><strong>Two tests:</strong> If the first is low, repeat to confirm</li>
      </ul>

      <h2>Tests to Request</h2>
      <p>
        A complete testosterone panel should include:
      </p>
      
      <h3>Essential Tests</h3>
      <ul>
        <li><strong>Total testosterone:</strong> The primary measure</li>
        <li><strong>Free testosterone:</strong> The active, unbound portion</li>
        <li><strong>SHBG (Sex Hormone Binding Globulin):</strong> Affects how much testosterone is available</li>
      </ul>

      <h3>Additional Tests</h3>
      <ul>
        <li><strong>LH (Luteinizing Hormone):</strong> Helps identify if the issue is testicular or pituitary</li>
        <li><strong>FSH:</strong> Another pituitary hormone, relevant for fertility</li>
        <li><strong>Estradiol:</strong> Estrogen levels (can be elevated in low T)</li>
        <li><strong>Prolactin:</strong> Can suppress testosterone if elevated</li>
        <li><strong>Thyroid panel:</strong> Thyroid issues can mimic low T</li>
        <li><strong>CBC:</strong> Testosterone affects red blood cells</li>
        <li><strong>PSA:</strong> Baseline before any treatment</li>
      </ul>

      <h2>Understanding Results</h2>
      <p>
        Interpreting testosterone results requires context:
      </p>
      <ul>
        <li><strong>Reference ranges:</strong> Typically 300-1000 ng/dL for total testosterone</li>
        <li><strong>"Normal" doesn't mean optimal:</strong> 320 is technically normal but may cause symptoms</li>
        <li><strong>Age matters:</strong> A 50-year-old at 400 is different from a 25-year-old at 400</li>
        <li><strong>Free T matters:</strong> If SHBG is high, total T may look fine but free T is low</li>
        <li><strong>Symptoms matter:</strong> Treat the patient, not just the number</li>
      </ul>

      <h2>Common Patterns</h2>
      <p>
        What different results suggest:
      </p>
      <ul>
        <li><strong>Low total T + Low LH:</strong> Secondary hypogonadism (pituitary issue)</li>
        <li><strong>Low total T + High LH:</strong> Primary hypogonadism (testicular issue)</li>
        <li><strong>Normal total T + Low free T:</strong> High SHBG, possibly thyroid or liver related</li>
        <li><strong>Low T + High prolactin:</strong> May need pituitary imaging</li>
      </ul>

      <h2>Getting Tested in India</h2>
      <p>
        Options for testosterone testing:
      </p>
      <ul>
        <li><strong>Through a doctor:</strong> Best approach — get interpretation included</li>
        <li><strong>Private labs:</strong> Thyrocare, Lal Path Labs, SRL — can order directly</li>
        <li><strong>Cost:</strong> Total testosterone is ₹400-800, full panel ₹1500-3000</li>
        <li><strong>Note:</strong> Always get morning tests for accurate results</li>
      </ul>

      <h2>Red Flags That Need Immediate Attention</h2>
      <ul>
        <li>Very low testosterone (&lt;150 ng/dL)</li>
        <li>Elevated prolactin</li>
        <li>Very high or very low LH</li>
        <li>Symptoms of pituitary tumor (headaches, vision changes)</li>
      </ul>

      <div className="rounded-lg border border-sage-200 bg-sage-50 p-4 mt-6">
        <p className="text-sm text-muted-foreground">
          <strong>Key takeaway:</strong> Don't just get "testosterone tested" — get a proper panel 
          including free testosterone and LH. And always test in the morning for accurate results.
        </p>
      </div>
    </ArticleLayout>
  );
}