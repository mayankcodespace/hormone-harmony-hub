import { ArticleLayout } from "@/components/shared/ArticleLayout";
import { SourcesAccordion, Citation } from "@/components/shared/CitationSystem";

const citations: Citation[] = [
  {
    id: 1,
    title: "Sleep and testosterone production",
    source: "JAMA, 2011",
    url: "https://jamanetwork.com/journals/jama/fullarticle/1029127",
    accessDate: "January 2026",
  },
  {
    id: 2,
    title: "Sleep disorders and erectile dysfunction",
    source: "Journal of Sexual Medicine, 2019",
    url: "https://pubmed.ncbi.nlm.nih.gov/30803985/",
    accessDate: "January 2026",
  },
  {
    id: 3,
    title: "Obstructive sleep apnea and male sexual function",
    source: "Nature Reviews Urology, 2021",
    url: "https://www.nature.com/articles/s41585-021-00452-0",
    accessDate: "January 2026",
  },
];

export default function SleepImpactArticle() {
  return (
    <ArticleLayout
      title="Sleep & Male Sexual Health"
      description="How quality sleep affects testosterone, libido, and sexual performance — and what happens when you don't get enough."
      breadcrumbs={[
        { label: "Men's Health", href: "/men" },
        { label: "Sexual Health", href: "/men/sexual-health" },
        { label: "Sleep Impact" },
      ]}
      backLink={{ label: "Sexual Health Hub", href: "/men/sexual-health" }}
      relatedArticles={[
        { title: "Testosterone & Libido", href: "/men/sexual-health/testosterone-libido" },
        { title: "Stress Impact", href: "/men/sexual-health/stress-impact" },
        { title: "Sleep & Testosterone", href: "/men/testosterone/sleep" },
      ]}
      lastUpdated="January 2026"
    >
      <div className="article-content">
        <section>
          <h2>Sleep Is Non-Negotiable for Sexual Health</h2>
          <p>
            If there's one lifestyle factor that affects nearly every aspect of male sexual health, 
            it's sleep. Testosterone production, libido, erectile function, and energy for intimacy 
            are all directly influenced by how well and how long you sleep.
          </p>
          <p>
            Yet sleep is often the first thing men sacrifice when life gets busy. The consequences 
            for sexual health can be significant.
          </p>
        </section>

        <section>
          <h2>How Sleep Affects Testosterone</h2>
          <p>
            Most testosterone production occurs during sleep, particularly during REM (rapid eye movement) 
            phases. This is why testosterone levels are highest in the morning after a good night's sleep.
          </p>
          <p>Research shows:</p>
          <ul>
            <li>Just one week of sleeping 5 hours/night can reduce testosterone by 10-15%</li>
            <li>Sleep apnea is strongly associated with low testosterone</li>
            <li>Poor sleep quality (even with adequate hours) affects hormone production</li>
            <li>Irregular sleep schedules disrupt the natural testosterone rhythm</li>
          </ul>
        </section>

        <section>
          <h2>The Erectile Function Connection</h2>
          <p>Sleep affects erectile function through multiple pathways:</p>
          <ul>
            <li><strong>Testosterone:</strong> Lower levels reduce libido and erectile capacity</li>
            <li><strong>Nitric oxide:</strong> Sleep deprivation impairs nitric oxide production (essential for erections)</li>
            <li><strong>Cardiovascular health:</strong> Poor sleep worsens blood pressure and vascular function</li>
            <li><strong>Mental clarity:</strong> Fatigue reduces desire and ability to engage sexually</li>
            <li><strong>Nocturnal erections:</strong> These occur during REM sleep and are important for penile health</li>
          </ul>
        </section>

        <section>
          <h2>Sleep Apnea: A Hidden Factor</h2>
          <p>
            Obstructive sleep apnea (OSA) is very common in men, especially those who are overweight. 
            It causes repeated breathing interruptions during sleep, leading to:
          </p>
          <ul>
            <li>Significantly lower testosterone levels</li>
            <li>Higher rates of erectile dysfunction</li>
            <li>Reduced libido and sexual satisfaction</li>
            <li>Fatigue that affects all aspects of life</li>
          </ul>
          <p>
            <strong>Red flags for sleep apnea:</strong> Loud snoring, gasping during sleep, 
            waking up with headaches, excessive daytime sleepiness.
          </p>
        </section>

        <section>
          <h2>Optimizing Sleep for Sexual Health</h2>
          <h3>Sleep Hygiene Basics</h3>
          <ul>
            <li><strong>Aim for 7-8 hours:</strong> Most adults need this range for optimal hormone production</li>
            <li><strong>Consistent schedule:</strong> Same bedtime and wake time, even on weekends</li>
            <li><strong>Dark, cool room:</strong> 65-68°F (18-20°C) is optimal</li>
            <li><strong>Limit screens:</strong> Blue light suppresses melatonin — stop 1-2 hours before bed</li>
            <li><strong>No caffeine after 2pm:</strong> Caffeine has a long half-life</li>
          </ul>

          <h3>Advanced Tips</h3>
          <ul>
            <li><strong>Morning sunlight:</strong> Helps regulate circadian rhythm</li>
            <li><strong>Exercise timing:</strong> Morning or early afternoon is best for sleep</li>
            <li><strong>Limit alcohol:</strong> It may help you fall asleep but worsens sleep quality</li>
            <li><strong>Address snoring:</strong> If you snore loudly, get checked for sleep apnea</li>
          </ul>
        </section>

        <section>
          <h2>When to See a Doctor</h2>
          <p>Consider a sleep study if you experience:</p>
          <ul>
            <li>Loud, chronic snoring</li>
            <li>Gasping or choking during sleep</li>
            <li>Morning headaches</li>
            <li>Excessive daytime sleepiness despite adequate sleep hours</li>
            <li>Partner notices breathing pauses during sleep</li>
          </ul>
          <p>
            Treating sleep apnea often significantly improves testosterone levels, 
            erectile function, and overall sexual health.
          </p>
        </section>

        <SourcesAccordion citations={citations} lastUpdated="January 2026" />
      </div>
    </ArticleLayout>
  );
}
