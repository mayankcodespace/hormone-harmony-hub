import { ArticleLayout } from "@/components/shared/ArticleLayout";
import { SourcesAccordion, Citation } from "@/components/shared/CitationSystem";

const citations: Citation[] = [
  {
    id: 1,
    title: "Dopamine and male sexual behavior",
    source: "Pharmacology Biochemistry and Behavior, 2019",
    url: "https://pubmed.ncbi.nlm.nih.gov/30849377/",
    accessDate: "January 2026",
  },
  {
    id: 2,
    title: "Pornography use and sexual dysfunction",
    source: "Behavioral Sciences, 2020",
    url: "https://www.mdpi.com/2076-328X/10/2/40",
    accessDate: "January 2026",
  },
  {
    id: 3,
    title: "Reward system and sexual motivation",
    source: "Neuroscience & Biobehavioral Reviews, 2018",
    url: "https://pubmed.ncbi.nlm.nih.gov/29453954/",
    accessDate: "January 2026",
  },
];

export default function DopamineArticle() {
  return (
    <ArticleLayout
      title="Dopamine, Desire & Sexual Health"
      description="Understanding how the reward system affects libido, arousal, and the impact of modern stimulation on sexual function."
      breadcrumbs={[
        { label: "Men's Health", href: "/men" },
        { label: "Sexual Health", href: "/men/sexual-health" },
        { label: "Dopamine & Desire" },
      ]}
      backLink={{ label: "Sexual Health Hub", href: "/men/sexual-health" }}
      relatedArticles={[
        { title: "Testosterone & Libido", href: "/men/sexual-health/testosterone-libido" },
        { title: "Stress Impact", href: "/men/sexual-health/stress-impact" },
        { title: "Mood & Testosterone", href: "/men/mood/testosterone-mood" },
      ]}
      lastUpdated="January 2026"
    >
      <div className="article-content">
        <section>
          <h2>The Chemistry of Desire</h2>
          <p>
            Dopamine is often called the "motivation molecule" — it's the neurotransmitter that 
            drives desire, anticipation, and reward-seeking behavior. In the context of sexual health, 
            dopamine is what makes you want sex, not just enjoy it.
          </p>
          <p>
            While testosterone provides the foundation for libido, dopamine provides the spark. 
            Understanding this system can help explain why some men experience low desire despite 
            normal testosterone levels.
          </p>
        </section>

        <section>
          <h2>How Dopamine Affects Sexual Function</h2>
          <ul>
            <li><strong>Arousal initiation:</strong> Dopamine triggers the desire for sexual activity</li>
            <li><strong>Erection facilitation:</strong> Dopamine signals help initiate erections</li>
            <li><strong>Orgasm intensity:</strong> Dopamine release contributes to orgasm experience</li>
            <li><strong>Sexual motivation:</strong> Dopamine drives the pursuit of sexual activity</li>
          </ul>
        </section>

        <section>
          <h2>The Modern Dopamine Problem</h2>
          <p>
            Our brains evolved in an environment of scarcity. Modern life provides unprecedented 
            access to supernormal stimuli — things that trigger dopamine far beyond what our ancestors 
            experienced. This can affect the reward system's sensitivity.
          </p>
          <p>Common dopamine-flooding activities:</p>
          <ul>
            <li>Social media scrolling (constant novelty)</li>
            <li>Pornography (supernormal sexual stimuli)</li>
            <li>Video games (designed for dopamine hits)</li>
            <li>Highly processed foods</li>
            <li>Gambling and betting apps</li>
          </ul>
          <p>
            Chronic overstimulation can lead to dopamine receptor downregulation — meaning you 
            need more stimulation to feel the same level of desire or pleasure.
          </p>
        </section>

        <section>
          <h2>Signs of Dopamine Dysregulation</h2>
          <ul>
            <li>Difficulty getting aroused by real-life partner</li>
            <li>Needing increasingly extreme stimuli for arousal</li>
            <li>Low motivation and anhedonia (lack of pleasure in activities)</li>
            <li>Procrastination and difficulty initiating tasks</li>
            <li>Preference for quick dopamine hits over meaningful activities</li>
          </ul>
        </section>

        <section>
          <h2>Resetting the Reward System</h2>
          <h3>Reduce Supernormal Stimuli</h3>
          <ul>
            <li>Consider a period of abstaining from or reducing pornography</li>
            <li>Limit mindless social media scrolling</li>
            <li>Reduce highly processed, hyper-palatable foods</li>
            <li>Be mindful of activities that provide "cheap" dopamine</li>
          </ul>

          <h3>Build Healthy Dopamine Sources</h3>
          <ul>
            <li><strong>Exercise:</strong> Naturally increases dopamine receptor sensitivity</li>
            <li><strong>Cold exposure:</strong> Cold showers can increase dopamine sustainably</li>
            <li><strong>Sunlight:</strong> Morning sunlight supports healthy dopamine levels</li>
            <li><strong>Accomplishment:</strong> Completing meaningful tasks provides satisfaction</li>
            <li><strong>Social connection:</strong> Real human interaction releases dopamine healthily</li>
          </ul>

          <h3>Nutrition for Dopamine</h3>
          <ul>
            <li>Adequate protein (provides tyrosine, dopamine precursor)</li>
            <li>Iron, B vitamins, vitamin D</li>
            <li>Omega-3 fatty acids</li>
            <li>Limit caffeine (can affect dopamine receptors)</li>
          </ul>
        </section>

        <section>
          <h2>The Patience Factor</h2>
          <p>
            If you've been overstimulating your reward system, recovery takes time. Dopamine 
            receptors need weeks to months to regain normal sensitivity. During this period, 
            you may experience:
          </p>
          <ul>
            <li>Reduced pleasure from activities temporarily</li>
            <li>Increased cravings for stimulation</li>
            <li>Mood fluctuations</li>
          </ul>
          <p>
            This is normal and temporary. Most people report significantly improved desire, 
            motivation, and sexual function after allowing their reward system to recalibrate.
          </p>
        </section>

        <section>
          <h2>When to Seek Help</h2>
          <p>
            If you're struggling with compulsive use of pornography, gambling, or other 
            dopamine-flooding activities, or if low motivation and anhedonia are affecting 
            your life, consider speaking with a mental health professional. These issues 
            are treatable with proper support.
          </p>
        </section>

        <SourcesAccordion citations={citations} lastUpdated="January 2026" />
      </div>
    </ArticleLayout>
  );
}
