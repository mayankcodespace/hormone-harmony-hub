import { ArticleLayout } from "@/components/shared/ArticleLayout";

const relatedArticles = [
  { title: "What Causes Severe Cramps?", href: "/periods/cramps-what-helps" },
  { title: "Heavy Periods: What's Normal?", href: "/periods/heavy-bleeding" },
  { title: "Periods & Exercise", href: "/periods/exercise-guide" },
];

export default function PainManagementArticle() {
  return (
    <ArticleLayout
      title="Period Pain Management"
      description="Practical approaches to managing menstrual cramps and discomfort."
      breadcrumbs={[
        { label: "Periods & Cycle", href: "/periods" },
        { label: "Pain Management" },
      ]}
      backLink={{ href: "/periods", label: "Periods & Cycle" }}
      relatedArticles={relatedArticles}
      lastUpdated="December 2024"
    >
      <p className="text-muted-foreground text-lg">
        Period pain ranges from mild inconvenience to debilitating. While severe pain needs 
        medical evaluation, many people find relief through a combination of approaches.
      </p>

      <h2>Heat Therapy</h2>
      <p>
        One of the most effective, time-tested methods. Heat relaxes the uterine muscles 
        and increases blood flow.
      </p>
      <ul>
        <li><strong>Hot water bottle:</strong> Traditional and effective</li>
        <li><strong>Heating pad:</strong> Electric pads with temperature control</li>
        <li><strong>Heat patches:</strong> Stick-on patches for work/school</li>
        <li><strong>Warm bath:</strong> Full-body relaxation</li>
      </ul>

      <h2>Gentle Movement</h2>
      <p>
        Counter-intuitive but true: gentle movement often helps more than lying still.
      </p>
      <ul>
        <li><strong>Walking:</strong> Light 15-20 minute walks</li>
        <li><strong>Gentle yoga:</strong> Child's pose, cat-cow, reclined twists</li>
        <li><strong>Stretching:</strong> Hip openers and lower back stretches</li>
        <li><strong>Swimming:</strong> Water supports the body</li>
      </ul>

      <h2>Diet Adjustments</h2>
      
      <h3>May Help</h3>
      <ul>
        <li><strong>Anti-inflammatory foods:</strong> Turmeric, ginger, fatty fish</li>
        <li><strong>Magnesium-rich:</strong> Dark chocolate, nuts, bananas</li>
        <li><strong>Iron-rich:</strong> Replace what you're losing</li>
        <li><strong>Omega-3 fatty acids:</strong> Fish, flaxseeds, walnuts</li>
        <li><strong>Warm liquids:</strong> Herbal teas, warm water with lemon</li>
      </ul>

      <h3>May Worsen Pain</h3>
      <ul>
        <li><strong>Caffeine:</strong> Can increase cramping for some</li>
        <li><strong>Alcohol:</strong> Inflammation, dehydration</li>
        <li><strong>Very salty foods:</strong> Increase bloating</li>
        <li><strong>Processed foods:</strong> General inflammation</li>
      </ul>

      <h2>Over-the-Counter Options</h2>
      <ul>
        <li><strong>Ibuprofen:</strong> Anti-inflammatory, often more effective than paracetamol</li>
        <li><strong>Naproxen:</strong> Longer-lasting than ibuprofen</li>
        <li><strong>Paracetamol:</strong> Works for some, less effective for cramps</li>
      </ul>
      <p className="text-sm text-muted-foreground">
        Note: Take NSAIDs with food. Start at the first sign of period or pain for best effect.
      </p>

      <h2>Stress & Sleep</h2>
      <ul>
        <li><strong>Extra rest:</strong> Your body needs more during menstruation</li>
        <li><strong>Stress management:</strong> Cortisol can worsen pain perception</li>
        <li><strong>Deep breathing:</strong> Activates relaxation response</li>
        <li><strong>Reduce commitments:</strong> If possible, schedule lighter days</li>
      </ul>

      <h2>When Self-Care Isn't Enough</h2>
      <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-4">
        <p className="text-sm">
          If OTC medication doesn't help, if pain is getting worse, or if pain significantly 
          disrupts your life — please see a gynecologist. There may be an underlying cause, 
          and prescription options exist.
        </p>
      </div>

      <div className="rounded-lg border border-sage-200 bg-sage-50 p-4 mt-6">
        <p className="text-sm text-muted-foreground">
          <strong>Create a period kit:</strong> Heating pad, pain relievers, comfortable clothes, 
          dark chocolate, your favorite tea. Having it ready reduces stress when pain arrives.
        </p>
      </div>
    </ArticleLayout>
  );
}
