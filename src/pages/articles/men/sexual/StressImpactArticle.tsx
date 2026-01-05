import { ArticleLayout } from "@/components/shared/ArticleLayout";
import { SourcesAccordion, Citation } from "@/components/shared/CitationSystem";

const citations: Citation[] = [
  {
    id: 1,
    title: "Stress and sexual dysfunction in men",
    source: "Journal of Sexual Medicine, 2019",
    url: "https://pubmed.ncbi.nlm.nih.gov/30803983/",
    accessDate: "January 2026",
  },
  {
    id: 2,
    title: "Cortisol and testosterone relationship",
    source: "Psychoneuroendocrinology, 2018",
    url: "https://pubmed.ncbi.nlm.nih.gov/29455076/",
    accessDate: "January 2026",
  },
  {
    id: 3,
    title: "Chronic stress and male reproductive function",
    source: "Nature Reviews Urology, 2020",
    url: "https://www.nature.com/articles/s41585-020-0309-6",
    accessDate: "January 2026",
  },
];

export default function StressImpactArticle() {
  return (
    <ArticleLayout
      title="How Stress Impacts Male Sexual Health"
      description="Understanding the cortisol-testosterone connection and how chronic stress affects libido, performance, and fertility."
      breadcrumbs={[
        { label: "Men's Health", href: "/men" },
        { label: "Sexual Health", href: "/men/sexual-health" },
        { label: "Stress Impact" },
      ]}
      backLink={{ label: "Sexual Health Hub", href: "/men/sexual-health" }}
      relatedArticles={[
        { title: "Testosterone & Libido", href: "/men/sexual-health/testosterone-libido" },
        { title: "Sleep & Sexual Health", href: "/men/sexual-health/sleep-impact" },
        { title: "Stress Management", href: "/men/mood/stress-management" },
      ]}
      lastUpdated="January 2026"
    >
      <div className="article-content">
        <section>
          <h2>The Stress-Sex Connection</h2>
          <p>
            Chronic stress is one of the most underappreciated factors affecting male sexual health. 
            When you're constantly stressed, your body prioritizes survival over reproduction — 
            and this has direct effects on libido, performance, and even fertility.
          </p>
          <p>
            The key player is cortisol, your primary stress hormone. When cortisol stays elevated, 
            it directly suppresses testosterone production and affects the entire sexual response cycle.
          </p>
        </section>

        <section>
          <h2>How Cortisol Affects Sexual Function</h2>
          <p>When stress becomes chronic, cortisol creates a cascade of effects:</p>
          <ul>
            <li><strong>Testosterone suppression:</strong> Cortisol and testosterone have an inverse relationship — high cortisol means lower testosterone</li>
            <li><strong>Blood flow restriction:</strong> Stress causes vasoconstriction, reducing blood flow essential for erections</li>
            <li><strong>Mental distraction:</strong> Anxiety makes it hard to be present during intimacy</li>
            <li><strong>Neurotransmitter disruption:</strong> Stress affects dopamine and serotonin, which influence desire</li>
            <li><strong>Sleep disruption:</strong> Poor sleep from stress further tanks testosterone</li>
          </ul>
        </section>

        <section>
          <h2>Signs That Stress Is Affecting Your Sexual Health</h2>
          <ul>
            <li>Low libido despite healthy relationship</li>
            <li>Difficulty getting or maintaining erections</li>
            <li>Premature ejaculation (often anxiety-related)</li>
            <li>Inability to be mentally present during sex</li>
            <li>Avoiding intimacy due to "not being in the mood"</li>
            <li>Performance anxiety that creates a negative cycle</li>
          </ul>
        </section>

        <section>
          <h2>The Vicious Cycle</h2>
          <p>
            Sexual difficulties often create more stress, which worsens the problem. A man may experience 
            erectile difficulty due to work stress, then become anxious about performance, which creates 
            more stress, which makes the problem worse.
          </p>
          <p>
            Breaking this cycle requires addressing the root cause (stress) rather than just 
            treating the symptom (erectile dysfunction).
          </p>
        </section>

        <section>
          <h2>Strategies to Reduce Stress's Impact</h2>
          <h3>Immediate Techniques</h3>
          <ul>
            <li><strong>Deep breathing:</strong> Box breathing (4-4-4-4) before intimacy can calm the nervous system</li>
            <li><strong>Physical exercise:</strong> Burns off stress hormones and boosts testosterone</li>
            <li><strong>Mindfulness:</strong> Helps you stay present rather than anxious</li>
          </ul>
          
          <h3>Long-term Changes</h3>
          <ul>
            <li><strong>Address work-life balance:</strong> Chronic overwork is a testosterone killer</li>
            <li><strong>Prioritize sleep:</strong> Sleep deprivation elevates cortisol</li>
            <li><strong>Regular exercise:</strong> 3-4 times per week reduces baseline cortisol</li>
            <li><strong>Communication:</strong> Talk to your partner — reducing performance pressure helps</li>
          </ul>
        </section>

        <section>
          <h2>When to Seek Help</h2>
          <p>Consider seeing a professional if:</p>
          <ul>
            <li>Sexual difficulties persist despite lifestyle changes</li>
            <li>You're experiencing significant anxiety or depression</li>
            <li>The issue is affecting your relationship</li>
            <li>You're avoiding intimacy altogether</li>
          </ul>
          <p>
            A urologist can rule out physical causes, while a therapist can help with 
            stress management and any psychological factors.
          </p>
        </section>

        <section>
          <h2>The Bottom Line</h2>
          <p>
            Stress is a legitimate medical factor affecting sexual health — it's not "just in your head" 
            in the dismissive sense. The mind-body connection is real. Addressing chronic stress through 
            lifestyle changes, stress management techniques, and sometimes professional help can significantly 
            improve sexual function.
          </p>
        </section>

        <SourcesAccordion citations={citations} lastUpdated="January 2026" />
      </div>
    </ArticleLayout>
  );
}
