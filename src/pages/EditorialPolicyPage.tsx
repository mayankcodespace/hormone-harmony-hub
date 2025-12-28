import { Layout } from "@/components/layout/Layout";
import { Breadcrumb } from "@/components/shared/Breadcrumb";

export default function EditorialPolicyPage() {
  return (
    <Layout>
      <section className="bg-gradient-to-b from-sage-50 to-background py-12">
        <div className="container">
          <Breadcrumb items={[{ label: "Editorial Policy" }]} />
          
          <div className="max-w-3xl mx-auto">
            <h1 className="font-serif text-3xl sm:text-4xl font-bold mb-6">
              Editorial Policy
            </h1>
            <p className="text-muted-foreground">
              Last updated: December 2024
            </p>
          </div>
        </div>
      </section>

      <div className="container py-12">
        <div className="max-w-3xl mx-auto prose prose-sage">
          <p className="text-muted-foreground text-lg">
            At HormoneClarity, we're committed to creating helpful, people-first content 
            that serves our readers' needs. This policy outlines how we create and maintain 
            our health education content.
          </p>

          <h2>Content Principles</h2>
          <p>
            Our content follows these core principles, aligned with 
            Google's helpful content guidance:
          </p>
          <ul>
            <li>
              <strong>People-first:</strong> Content created primarily to help users, 
              not to rank in search engines
            </li>
            <li>
              <strong>Expertise:</strong> Topics written with genuine knowledge and care
            </li>
            <li>
              <strong>Transparency:</strong> Clear about what we are (educational) and aren't (medical advice)
            </li>
            <li>
              <strong>Satisfying experience:</strong> Readers leave feeling they learned something useful
            </li>
          </ul>

          <h2>Content Creation Process</h2>
          <h3>Research</h3>
          <ul>
            <li>We consult peer-reviewed medical literature and established health organizations</li>
            <li>Primary sources include WHO, ACOG, NICHD, medical journals, and established clinical guidelines</li>
            <li>We avoid single-study claims and wait for established consensus where possible</li>
          </ul>

          <h3>Writing</h3>
          <ul>
            <li>Content is written in clear, accessible language</li>
            <li>We use Hinglish and simple English appropriate for our audience</li>
            <li>Indian context is included (food examples, healthcare system references)</li>
            <li>We avoid jargon unless explained</li>
          </ul>

          <h3>Review</h3>
          <ul>
            <li>All content is reviewed for factual accuracy</li>
            <li>Claims are checked against cited sources</li>
            <li>We verify that red flags and "when to see a doctor" guidance is included</li>
          </ul>

          <h2>Citations & Sources</h2>
          <p>
            Every major health claim includes inline citations. We prioritize:
          </p>
          <ul>
            <li>World Health Organization (WHO)</li>
            <li>American College of Obstetricians and Gynecologists (ACOG)</li>
            <li>National Institute of Child Health and Human Development (NICHD)</li>
            <li>Established medical guidelines and clinical consensus statements</li>
            <li>Peer-reviewed research from reputable journals</li>
          </ul>
          <p>
            Each article includes a "Sources" section with full references.
          </p>

          <h2>Content Updates</h2>
          <ul>
            <li>Each article displays a "Last updated" date</li>
            <li>Content is reviewed periodically for accuracy</li>
            <li>New research or guideline changes trigger content updates</li>
            <li>Outdated information is corrected or removed</li>
          </ul>

          <h2>What We Don't Do</h2>
          <ul>
            <li>We don't provide medical diagnoses</li>
            <li>We don't recommend specific medications or dosages</li>
            <li>We don't make "cure" claims or miracle promises</li>
            <li>We don't use fear-mongering or scare tactics</li>
            <li>We don't create content just for search ranking</li>
            <li>We don't make unsupported health claims</li>
          </ul>

          <h2>Corrections Policy</h2>
          <p>
            If we identify errors in our content:
          </p>
          <ul>
            <li>Factual errors are corrected promptly</li>
            <li>Significant corrections are noted in the article</li>
            <li>The "Last updated" date is changed</li>
          </ul>
          <p>
            If you spot an error, please contact us so we can investigate and correct if needed.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about our editorial process? Reach out via our{" "}
            <a href="/contact" className="text-primary">contact page</a>.
          </p>
        </div>
      </div>
    </Layout>
  );
}
