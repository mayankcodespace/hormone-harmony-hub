import { Layout } from "@/components/layout/Layout";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { AlertTriangle } from "lucide-react";

export default function DisclaimerPage() {
  return (
    <Layout>
      <section className="bg-gradient-to-b from-terracotta-50 to-background py-12">
        <div className="container">
          <Breadcrumb items={[{ label: "Medical Disclaimer" }]} />
          
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="h-8 w-8 text-warning" />
              <h1 className="font-serif text-3xl sm:text-4xl font-bold">
                Medical Disclaimer
              </h1>
            </div>
            <p className="text-muted-foreground">
              Last updated: December 2024
            </p>
          </div>
        </div>
      </section>

      <div className="container py-12">
        <div className="max-w-3xl mx-auto prose prose-sage">
          <div className="bg-terracotta-50 border border-terracotta-200 rounded-lg p-6 mb-8 not-prose">
            <p className="font-semibold text-foreground mb-2">Important Notice</p>
            <p className="text-muted-foreground">
              The information provided on HormoneClarity is for educational and informational 
              purposes only. It is NOT intended to be a substitute for professional medical advice, 
              diagnosis, or treatment.
            </p>
          </div>

          <h2>General Information Only</h2>
          <p>
            The content on this website is designed to provide general information about 
            hormonal health topics. It is not comprehensive and does not cover all aspects 
            of the topics discussed. The information should not be relied upon as a complete 
            or definitive source of health information.
          </p>

          <h2>Not Medical Advice</h2>
          <p>
            Nothing on this website constitutes medical advice. The information provided 
            is not intended to:
          </p>
          <ul>
            <li>Diagnose any medical condition</li>
            <li>Treat or cure any disease or health condition</li>
            <li>Replace consultation with a qualified healthcare provider</li>
            <li>Encourage you to disregard medical advice</li>
            <li>Delay seeking medical advice</li>
          </ul>

          <h2>Always Consult a Healthcare Professional</h2>
          <p>
            If you have or suspect you have a medical problem or condition, please contact 
            a qualified healthcare professional immediately. This includes, but is not limited to:
          </p>
          <ul>
            <li>Gynecologists / OB-GYNs</li>
            <li>Endocrinologists</li>
            <li>General physicians</li>
            <li>Registered dietitians</li>
            <li>Mental health professionals (psychiatrists, psychologists)</li>
          </ul>
          <p>
            Never disregard professional medical advice or delay seeking it because of 
            something you have read on this website.
          </p>

          <h2>No Doctor-Patient Relationship</h2>
          <p>
            Use of this website does not create a doctor-patient or healthcare provider-patient 
            relationship between you and HormoneClarity or any contributors to this website.
          </p>

          <h2>Emergency Situations</h2>
          <p>
            If you are experiencing a medical emergency, please call your local emergency 
            services (112 in India) or go to the nearest emergency room immediately.
          </p>
          <p>
            If you are experiencing a mental health crisis, please contact:
          </p>
          <ul>
            <li><strong>iCall:</strong> 9152987821</li>
            <li><strong>Vandrevala Foundation:</strong> 1860-2662-345 (24/7)</li>
            <li><strong>NIMHANS:</strong> 080-46110007</li>
          </ul>

          <h2>Personal Responsibility</h2>
          <p>
            You assume full responsibility for how you choose to use any information 
            provided on this website. Any reliance you place on the information is 
            strictly at your own risk.
          </p>

          <h2>Individual Results May Vary</h2>
          <p>
            Health information is general in nature. What works for one person may not 
            work for another. Individual results can vary based on many factors including 
            age, health status, medications, and other individual circumstances.
          </p>

          <h2>No Guarantees</h2>
          <p>
            We make no guarantees or warranties about the accuracy, completeness, or 
            adequacy of the information on this website. While we strive to provide 
            accurate and up-to-date information, health knowledge evolves and we may 
            not capture the most recent developments.
          </p>

          <h2>External Links</h2>
          <p>
            This website may contain links to external websites. We are not responsible 
            for the content, accuracy, or practices of external sites.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have questions about this disclaimer, please{" "}
            <a href="/contact" className="text-primary">contact us</a>.
          </p>
        </div>
      </div>
    </Layout>
  );
}
