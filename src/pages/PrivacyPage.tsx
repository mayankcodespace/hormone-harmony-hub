import { Layout } from "@/components/layout/Layout";
import { Breadcrumb } from "@/components/shared/Breadcrumb";

export default function PrivacyPage() {
  return (
    <Layout>
      <section className="bg-gradient-to-b from-sage-50 to-background py-12">
        <div className="container">
          <Breadcrumb items={[{ label: "Privacy Policy" }]} />
          
          <div className="max-w-3xl mx-auto">
            <h1 className="font-serif text-3xl sm:text-4xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground">
              Last updated: December 2024
            </p>
          </div>
        </div>
      </section>

      <div className="container py-12">
        <div className="max-w-3xl mx-auto prose prose-sage">
          <p className="text-lg text-muted-foreground">
            At HormoneClarity, we respect your privacy and are committed to protecting 
            any personal data you share with us.
          </p>

          <h2>Information We Collect</h2>
          <h3>Information You Provide</h3>
          <ul>
            <li>
              <strong>Email address:</strong> If you subscribe to our newsletter or 
              contact us through our contact form
            </li>
            <li>
              <strong>Messages:</strong> Any information you include in messages sent 
              through our contact form
            </li>
          </ul>

          <h3>Information Collected Automatically</h3>
          <ul>
            <li>
              <strong>Usage data:</strong> Pages visited, time spent on pages, links clicked
            </li>
            <li>
              <strong>Device information:</strong> Browser type, device type, operating system
            </li>
            <li>
              <strong>Location:</strong> General geographic location (country/city level)
            </li>
          </ul>

          <h2>How We Use Your Information</h2>
          <ul>
            <li>To send newsletters you've subscribed to</li>
            <li>To respond to your inquiries</li>
            <li>To improve our website and content</li>
            <li>To analyze how our website is used</li>
            <li>To comply with legal obligations</li>
          </ul>

          <h2>Cookies & Analytics</h2>
          <p>
            We may use cookies and similar technologies to:
          </p>
          <ul>
            <li>Understand how you use our website</li>
            <li>Remember your preferences</li>
            <li>Analyze traffic patterns</li>
          </ul>
          <p>
            You can control cookies through your browser settings.
          </p>

          <h2>Third-Party Services</h2>
          <p>
            We may use third-party services for:
          </p>
          <ul>
            <li>Website analytics (e.g., Google Analytics)</li>
            <li>Email newsletter delivery</li>
            <li>Website hosting</li>
          </ul>
          <p>
            These services may collect information as described in their own privacy policies.
          </p>

          <h2>Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect 
            your personal data against unauthorized access, alteration, disclosure, or destruction.
          </p>

          <h2>Data Retention</h2>
          <ul>
            <li>Newsletter subscriptions: Until you unsubscribe</li>
            <li>Contact form messages: As long as necessary to address your inquiry</li>
            <li>Analytics data: As per third-party service retention policies</li>
          </ul>

          <h2>Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access the personal data we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Unsubscribe from communications</li>
            <li>Withdraw consent where applicable</li>
          </ul>

          <h2>Children's Privacy</h2>
          <p>
            Our website is intended for adults (18+). We do not knowingly collect 
            personal information from children under 18.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this privacy policy from time to time. Changes will be 
            reflected on this page with an updated "Last updated" date.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have questions about this privacy policy or your personal data, 
            please <a href="/contact" className="text-primary">contact us</a>.
          </p>
        </div>
      </div>
    </Layout>
  );
}
