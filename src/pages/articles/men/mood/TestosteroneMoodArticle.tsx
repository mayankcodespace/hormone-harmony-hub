import { ArticleLayout } from "@/components/shared/ArticleLayout";

const relatedArticles = [
  { title: "Signs of Low Testosterone", href: "/men/testosterone/low-t-signs" },
  { title: "When to Seek Help", href: "/men/mood/when-to-seek-help" },
  { title: "Lifestyle & Testosterone", href: "/men/testosterone/lifestyle" },
];

export default function TestosteroneMoodArticle() {
  return (
    <ArticleLayout
      title="Mood & Low Testosterone"
      description="The bidirectional connection between testosterone and depression in men."
      breadcrumbs={[
        { label: "Men's Health", href: "/men" },
        { label: "Mood, Stress & Sleep", href: "/men/mood" },
        { label: "Mood & Low Testosterone" },
      ]}
      backLink={{ href: "/men/mood", label: "Mood, Stress & Sleep" }}
      relatedArticles={relatedArticles}
      lastUpdated="January 2025"
    >
      <p className="text-muted-foreground text-lg">
        The connection between testosterone and mood is real and bidirectional. Low testosterone 
        can cause depression, and depression can lower testosterone. Understanding this link 
        is important for treatment.
      </p>

      <h2>How Testosterone Affects Mood</h2>
      <p>
        Testosterone influences mood through several mechanisms:
      </p>
      <ul>
        <li>Affects neurotransmitters (dopamine, serotonin)</li>
        <li>Influences brain regions involved in mood regulation</li>
        <li>Impacts energy and motivation</li>
        <li>Affects confidence and sense of wellbeing</li>
        <li>Influences libido, which affects relationship satisfaction</li>
      </ul>

      <h2>Low Testosterone & Depression</h2>
      <p>
        The symptoms overlap significantly:
      </p>
      <ul>
        <li><strong>Low mood:</strong> Persistent sadness, emptiness</li>
        <li><strong>Fatigue:</strong> Tiredness despite rest</li>
        <li><strong>Loss of interest:</strong> Including hobbies and sex</li>
        <li><strong>Poor concentration:</strong> Brain fog, forgetfulness</li>
        <li><strong>Irritability:</strong> Short temper, frustration</li>
        <li><strong>Sleep disturbances:</strong> Insomnia or hypersomnia</li>
        <li><strong>Physical symptoms:</strong> Weight changes, aches</li>
      </ul>

      <h2>The Bidirectional Relationship</h2>
      <p>
        It works both ways:
      </p>
      <ul>
        <li><strong>Low T → Depression:</strong> Hormonal deficiency causes mood symptoms</li>
        <li><strong>Depression → Low T:</strong> Depression suppresses testosterone production</li>
        <li>This creates a potential vicious cycle</li>
        <li>Breaking it may require addressing both</li>
      </ul>

      <h2>When to Consider Hormones</h2>
      <p>
        Check testosterone if depression is accompanied by:
      </p>
      <ul>
        <li>Low libido (more specific to low T)</li>
        <li>Erectile dysfunction</li>
        <li>Loss of muscle mass</li>
        <li>Fatigue that doesn't improve with rest</li>
        <li>Poor response to antidepressants</li>
        <li>No clear psychological trigger for depression</li>
      </ul>

      <h2>Getting Tested</h2>
      <p>
        If you suspect low testosterone:
      </p>
      <ul>
        <li>Morning blood test (testosterone peaks in AM)</li>
        <li>Total and free testosterone</li>
        <li>LH and FSH (to identify cause)</li>
        <li>Thyroid panel (can cause similar symptoms)</li>
        <li>Repeat testing to confirm (levels fluctuate)</li>
      </ul>

      <h2>Treatment Approaches</h2>
      
      <h3>If Testosterone Is Low</h3>
      <ul>
        <li>Address lifestyle factors first (sleep, stress, weight)</li>
        <li>Consider TRT if significantly low and symptomatic</li>
        <li>TRT may improve mood in men with genuine hypogonadism</li>
        <li>But TRT won't cure depression if testosterone is normal</li>
      </ul>

      <h3>If Testosterone Is Normal</h3>
      <ul>
        <li>Depression is likely primary</li>
        <li>Standard depression treatment (therapy, medication)</li>
        <li>Treating depression may improve testosterone</li>
      </ul>

      <h3>Lifestyle for Both</h3>
      <ul>
        <li><strong>Exercise:</strong> Helps both depression and testosterone</li>
        <li><strong>Sleep:</strong> Critical for both</li>
        <li><strong>Stress reduction:</strong> Lowers cortisol, helps both</li>
        <li><strong>Social connection:</strong> Buffers depression</li>
      </ul>

      <h2>Important Considerations</h2>
      <ul>
        <li>Don't self-diagnose — get proper testing</li>
        <li>Low testosterone is not always the cause of depression</li>
        <li>TRT won't help if testosterone is already normal</li>
        <li>Addressing one may help the other</li>
        <li>Sometimes both need treatment simultaneously</li>
      </ul>

      <h2>When to Seek Help</h2>
      <p>
        Get professional support if:
      </p>
      <ul>
        <li>Depression is affecting work or relationships</li>
        <li>You have thoughts of self-harm</li>
        <li>You're using alcohol or substances to cope</li>
        <li>Symptoms persist despite lifestyle changes</li>
        <li>You're unsure whether it's hormonal or psychological</li>
      </ul>

      <div className="rounded-lg border border-sage-200 bg-sage-50 p-4 mt-6">
        <p className="text-sm text-muted-foreground">
          <strong>Key takeaway:</strong> Low testosterone and depression are connected, but one doesn't 
          always cause the other. Proper testing can help determine what's going on and guide treatment.
        </p>
      </div>
    </ArticleLayout>
  );
}