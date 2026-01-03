import { ArticleLayout } from "@/components/shared/ArticleLayout";

const relatedArticles = [
  { title: "Signs of Low Testosterone", href: "/men/testosterone/low-t-signs" },
  { title: "Lifestyle & Testosterone", href: "/men/testosterone/lifestyle" },
  { title: "Testosterone Testing", href: "/men/testosterone/testing" },
];

export default function TestosteroneBasicsArticle() {
  return (
    <ArticleLayout
      title="Understanding Testosterone: The Complete Guide"
      description="What testosterone does, normal levels, and why it matters for men's health."
      breadcrumbs={[
        { label: "Men's Health", href: "/men" },
        { label: "Testosterone & Energy", href: "/men/testosterone" },
        { label: "Understanding Testosterone" },
      ]}
      backLink={{ href: "/men/testosterone", label: "Testosterone & Energy" }}
      relatedArticles={relatedArticles}
      lastUpdated="January 2025"
    >
      <p className="text-muted-foreground text-lg">
        Testosterone is the primary male sex hormone, but it does far more than affect libido. 
        Understanding what it does — and doesn't do — can help you make informed decisions about your health.
      </p>

      <h2>What Does Testosterone Do?</h2>
      <p>
        Testosterone affects almost every system in the male body. Its key functions include:
      </p>
      <ul>
        <li><strong>Muscle mass and strength:</strong> Testosterone promotes protein synthesis and muscle growth</li>
        <li><strong>Bone density:</strong> Helps maintain strong bones and prevents osteoporosis</li>
        <li><strong>Fat distribution:</strong> Influences where your body stores fat</li>
        <li><strong>Red blood cell production:</strong> Stimulates the bone marrow</li>
        <li><strong>Libido and sexual function:</strong> Essential for sex drive and erectile function</li>
        <li><strong>Mood and mental clarity:</strong> Affects energy, motivation, and cognitive function</li>
        <li><strong>Body hair:</strong> Promotes facial and body hair growth</li>
      </ul>

      <h2>What Are Normal Testosterone Levels?</h2>
      <p>
        "Normal" testosterone ranges vary by lab and age, but general guidelines are:
      </p>
      <ul>
        <li><strong>Total testosterone:</strong> 300-1000 ng/dL (10.4-34.7 nmol/L)</li>
        <li><strong>Free testosterone:</strong> 9-30 ng/dL (varies significantly by age)</li>
      </ul>
      <p>
        Important: Numbers alone don't tell the whole story. A man with 350 ng/dL may feel fine, 
        while another at 500 ng/dL may have symptoms. Context matters.
      </p>

      <h2>Testosterone Through Life</h2>
      <p>
        Testosterone levels naturally change throughout life:
      </p>
      <ul>
        <li><strong>Puberty:</strong> Levels surge, triggering physical changes</li>
        <li><strong>20s-30s:</strong> Peak levels, generally 500-800 ng/dL</li>
        <li><strong>After 30:</strong> Gradual decline of about 1% per year</li>
        <li><strong>60s and beyond:</strong> About 20-30% lower than peak</li>
      </ul>

      <h2>What Affects Testosterone Levels?</h2>
      <p>
        Many factors influence testosterone beyond just age:
      </p>
      <ul>
        <li><strong>Sleep:</strong> Most testosterone is produced during sleep</li>
        <li><strong>Stress:</strong> Chronic stress raises cortisol, which suppresses testosterone</li>
        <li><strong>Body fat:</strong> Excess fat converts testosterone to estrogen</li>
        <li><strong>Exercise:</strong> Strength training can boost testosterone; overtraining can lower it</li>
        <li><strong>Diet:</strong> Adequate calories, protein, and fats are essential</li>
        <li><strong>Medications:</strong> Opioids, steroids, and some others can lower testosterone</li>
      </ul>

      <h2>The Testosterone Hype</h2>
      <p>
        There's a lot of misinformation about testosterone. Some important clarifications:
      </p>
      <ul>
        <li>Testosterone supplements don't actually contain testosterone</li>
        <li>Most "T boosters" have little to no scientific support</li>
        <li>High testosterone isn't always better — very high levels have side effects</li>
        <li>Lifestyle factors often matter more than supplements</li>
      </ul>

      <div className="rounded-lg border border-sage-200 bg-sage-50 p-4 mt-6">
        <p className="text-sm text-muted-foreground">
          <strong>Key takeaway:</strong> Testosterone is crucial for men's health, but it's just one piece 
          of the puzzle. Before focusing on testosterone specifically, ensure you're sleeping well, 
          managing stress, exercising, and eating properly.
        </p>
      </div>
    </ArticleLayout>
  );
}