import { ArticleLayout } from "@/components/shared/ArticleLayout";

const relatedArticles = [
  { title: "Understanding Your Cycle Phases", href: "/periods/cycle-phases" },
  { title: "Irregular Periods: Causes & When to Worry", href: "/periods/irregular-periods-causes" },
  { title: "PMS vs Normal Cycle Changes", href: "/periods/pms-basics" },
];

export default function TrackingGuideArticle() {
  return (
    <ArticleLayout
      title="Period Tracking: A Beginner's Guide"
      description="How to track your cycle effectively and what patterns to look for."
      breadcrumbs={[
        { label: "Periods & Cycle", href: "/periods" },
        { label: "Tracking Guide" },
      ]}
      backLink={{ href: "/periods", label: "Periods & Cycle" }}
      relatedArticles={relatedArticles}
      lastUpdated="December 2024"
    >
      <p className="text-muted-foreground text-lg">
        Tracking your cycle is one of the most powerful things you can do to understand 
        your body. It helps you predict, prepare, and notice changes worth discussing with a doctor.
      </p>

      <h2>Why Track?</h2>
      <ul>
        <li><strong>Predict:</strong> Know when your period is coming</li>
        <li><strong>Prepare:</strong> Plan for low-energy or high-symptom days</li>
        <li><strong>Patterns:</strong> See connections between symptoms and cycle phase</li>
        <li><strong>Health info:</strong> Useful data for doctor visits</li>
        <li><strong>Fertility:</strong> Understand your fertile window (if relevant)</li>
      </ul>

      <h2>What to Track</h2>
      
      <h3>Basic (Start Here)</h3>
      <ul>
        <li><strong>Day 1:</strong> First day of bleeding (not spotting)</li>
        <li><strong>Duration:</strong> How many days of bleeding</li>
        <li><strong>Cycle length:</strong> Days from Day 1 to next Day 1</li>
      </ul>

      <h3>Intermediate (Helpful Details)</h3>
      <ul>
        <li><strong>Flow:</strong> Light, medium, or heavy each day</li>
        <li><strong>Pain:</strong> When and how severe (1-10)</li>
        <li><strong>Mood:</strong> General daily mood notes</li>
        <li><strong>Energy:</strong> Low, medium, high</li>
        <li><strong>Symptoms:</strong> Bloating, headaches, cravings, skin changes</li>
      </ul>

      <h3>Advanced (For Detailed Insights)</h3>
      <ul>
        <li><strong>Cervical mucus:</strong> Changes through cycle (fertility tracking)</li>
        <li><strong>Basal body temperature:</strong> Rises after ovulation</li>
        <li><strong>Ovulation signs:</strong> Mild pain, mucus changes</li>
        <li><strong>Sleep quality:</strong> Often worse before period</li>
      </ul>

      <h2>Tools for Tracking</h2>
      
      <h3>Apps</h3>
      <ul>
        <li><strong>Clue:</strong> Science-based, privacy-focused, great UI</li>
        <li><strong>Flo:</strong> Popular, lots of features (review privacy settings)</li>
        <li><strong>Drip:</strong> Open-source, privacy-first</li>
        <li><strong>Apple Health / Google Fit:</strong> Built-in period tracking</li>
      </ul>

      <h3>Simple Methods</h3>
      <ul>
        <li><strong>Calendar:</strong> Just mark Day 1 of each period</li>
        <li><strong>Spreadsheet:</strong> Create your own with custom columns</li>
        <li><strong>Notes app:</strong> Quick daily notes work too</li>
        <li><strong>Paper journal:</strong> If you prefer analog</li>
      </ul>

      <h2>What Patterns to Look For</h2>
      <ul>
        <li><strong>Cycle length consistency:</strong> Is it regular or variable?</li>
        <li><strong>PMS timing:</strong> When do symptoms start and end?</li>
        <li><strong>Energy patterns:</strong> When are you most/least energized?</li>
        <li><strong>Pain patterns:</strong> Same time each cycle? Getting worse?</li>
        <li><strong>Mood patterns:</strong> Tied to specific cycle phases?</li>
      </ul>

      <h2>How Long to Track</h2>
      <p>
        Track for at least 3 cycles to start seeing patterns. Continue tracking to notice 
        changes over time. Many people find it becomes a helpful habit.
      </p>

      <div className="rounded-lg border border-sage-200 bg-sage-50 p-4 mt-6">
        <p className="text-sm text-muted-foreground">
          <strong>Pro tip:</strong> Don't stress about tracking everything perfectly. 
          Even just noting Day 1 of each period gives you valuable data. Add more details 
          as it becomes natural.
        </p>
      </div>
    </ArticleLayout>
  );
}
