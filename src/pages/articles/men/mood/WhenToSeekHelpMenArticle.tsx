import { ArticleLayout } from "@/components/shared/ArticleLayout";

const relatedArticles = [
  { title: "Mood & Low Testosterone", href: "/men/mood/testosterone-mood" },
  { title: "Burnout & Adrenal Health", href: "/men/mood/burnout" },
  { title: "Anxiety: Hormonal Causes", href: "/men/mood/anxiety-hormones" },
];

export default function WhenToSeekHelpMenArticle() {
  return (
    <ArticleLayout
      title="When to Seek Professional Help"
      description="Recognizing when professional support is needed and how to access it."
      breadcrumbs={[
        { label: "Men's Health", href: "/men" },
        { label: "Mood, Stress & Sleep", href: "/men/mood" },
        { label: "When to Seek Help" },
      ]}
      backLink={{ href: "/men/mood", label: "Mood, Stress & Sleep" }}
      relatedArticles={relatedArticles}
      lastUpdated="January 2025"
    >
      <p className="text-muted-foreground text-lg">
        Men are often socialized to "tough it out" rather than seek help. But recognizing when 
        you need support is a sign of responsibility, not weakness.
      </p>

      <h2>Immediate Warning Signs</h2>
      <p>
        Seek help immediately if you experience:
      </p>
      <ul>
        <li><strong>Thoughts of suicide or self-harm</strong></li>
        <li>Planning how you would hurt yourself</li>
        <li>Feeling like a burden to others</li>
        <li>Feeling hopeless about the future</li>
        <li>Giving away possessions</li>
      </ul>

      <div className="rounded-lg border border-destructive bg-destructive/5 p-4 my-6">
        <p className="text-sm font-medium">
          <strong>Crisis Resources (India):</strong><br />
          iCall: 9152987821<br />
          Vandrevala Foundation: 1860-2662-345 (24/7)<br />
          NIMHANS: 080-46110007
        </p>
      </div>

      <h2>Signs Professional Help Would Benefit You</h2>
      <p>
        Consider seeking help if:
      </p>
      <ul>
        <li>Symptoms persist for more than 2 weeks</li>
        <li>Problems are affecting work or relationships</li>
        <li>Self-help strategies aren't working</li>
        <li>You're using alcohol or substances to cope</li>
        <li>You're withdrawing from activities you used to enjoy</li>
        <li>Sleep or appetite is significantly disrupted</li>
        <li>You're having trouble functioning day-to-day</li>
        <li>People close to you are expressing concern</li>
      </ul>

      <h2>Types of Help Available</h2>
      
      <h3>Therapy/Counseling</h3>
      <ul>
        <li><strong>CBT (Cognitive Behavioral Therapy):</strong> Evidence-based for anxiety, depression</li>
        <li><strong>Talk therapy:</strong> Processing emotions and experiences</li>
        <li><strong>Online therapy:</strong> Accessible options like iCall, YourDOST</li>
        <li>Can be short-term (8-12 sessions) or longer</li>
      </ul>

      <h3>Psychiatry</h3>
      <ul>
        <li>Medical doctors who can prescribe medication</li>
        <li>For depression, anxiety, bipolar, severe symptoms</li>
        <li>Often works best combined with therapy</li>
        <li>Medication is not a sign of weakness</li>
      </ul>

      <h3>Coaching</h3>
      <ul>
        <li>For stress, work-life balance, life transitions</li>
        <li>Not for clinical conditions (depression, anxiety disorders)</li>
        <li>Goal-oriented, future-focused</li>
      </ul>

      <h2>Overcoming Barriers</h2>
      
      <h3>"It's Not That Bad"</h3>
      <p>
        You don't need to wait until you're in crisis. Early intervention is easier and more effective 
        than waiting until things are severe.
      </p>

      <h3>"It's a Sign of Weakness"</h3>
      <p>
        Taking responsibility for your mental health takes courage. Ignoring problems until they 
        become crises is not strength — it's avoidance.
      </p>

      <h3>"I Should Be Able to Handle This"</h3>
      <p>
        We seek help for physical health issues without shame. Mental health deserves the same approach. 
        You wouldn't try to set your own broken bone.
      </p>

      <h3>"I Don't Know Where to Start"</h3>
      <p>
        Start with one step: Call one number, book one appointment. You don't need to have it all figured out.
      </p>

      <h2>How to Find Help (India)</h2>
      <ul>
        <li><strong>Hospital psychiatry departments:</strong> Government hospitals are affordable</li>
        <li><strong>Private psychiatrists/psychologists:</strong> More expensive but accessible</li>
        <li><strong>Online platforms:</strong> Practo, YourDOST, Amaha, iCall</li>
        <li><strong>Employee assistance programs:</strong> Many companies offer confidential counseling</li>
        <li><strong>NGOs:</strong> Vandrevala Foundation, The Live Love Laugh Foundation</li>
      </ul>

      <h2>What to Expect</h2>
      <p>
        For your first appointment:
      </p>
      <ul>
        <li>They'll ask about your symptoms, history, life situation</li>
        <li>Be honest — they've heard it all before</li>
        <li>You're in control — you can stop anytime</li>
        <li>It might take a few sessions to feel comfortable</li>
        <li>Not every therapist is a good fit — it's okay to try others</li>
      </ul>

      <h2>Supporting Someone Else</h2>
      <p>
        If you're worried about someone:
      </p>
      <ul>
        <li>Express concern without judgment</li>
        <li>Listen more than you advise</li>
        <li>Don't try to fix them — just be present</li>
        <li>Suggest help but don't force it</li>
        <li>Take threats of self-harm seriously</li>
        <li>Take care of yourself too</li>
      </ul>

      <div className="rounded-lg border border-sage-200 bg-sage-50 p-4 mt-6">
        <p className="text-sm text-muted-foreground">
          <strong>Key takeaway:</strong> Seeking help is a sign of self-awareness and responsibility. 
          You don't have to wait until you're in crisis. Early support prevents bigger problems.
        </p>
      </div>
    </ArticleLayout>
  );
}