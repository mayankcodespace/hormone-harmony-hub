import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { DisclaimerBanner } from "@/components/shared/DisclaimerBanner";
import { Stethoscope, MapPin, Clock, Search, Shield, AlertTriangle, HelpCircle, CheckCircle, ExternalLink } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const indianStates = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
  "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
  "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
  "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
  "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi", "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Puducherry"
];

const specialties = [
  { value: "endocrinologist", label: "Endocrinologist", desc: "Hormones, testosterone, thyroid, diabetes" },
  { value: "urologist", label: "Urologist", desc: "Sexual health, fertility, prostate issues" },
  { value: "psychiatrist", label: "Psychiatrist", desc: "Mental health, anxiety, depression" },
  { value: "cardiologist", label: "Cardiologist", desc: "Heart health (connected to sexual health)" },
  { value: "dietitian", label: "Registered Dietitian", desc: "Nutrition guidance, weight management" },
];

const trustedPlatforms = [
  {
    name: "AIIMS Hospital Portals",
    desc: "Government medical institutions with verified specialists",
    url: "https://www.aiims.edu"
  },
  {
    name: "State Medical Council Websites",
    desc: "Official registry of registered medical practitioners (state-wise)",
    url: "https://www.nmc.org.in/information-desk/for-students-to-study-in-india/list-of-state-medical-councils/"
  },
  {
    name: "NMC (National Medical Commission)",
    desc: "Verify doctor registration and qualifications",
    url: "https://www.nmc.org.in"
  },
  {
    name: "Major Hospital Websites",
    desc: "Apollo, Fortis, Max, Manipal, KIMS, etc.",
    url: "https://www.apollohospitals.com"
  },
  {
    name: "Practo / Lybrate",
    desc: "Search doctors and appointments (verify credentials separately)",
    url: "https://www.practo.com"
  }
];

const searchKeywords = {
  endocrinologist: ["testosterone specialist", "hormone doctor", "thyroid specialist", "metabolic disorder specialist"],
  urologist: ["men's health specialist", "sexual health doctor", "fertility specialist", "andrology"],
  psychiatrist: ["men's mental health", "anxiety specialist", "depression treatment", "stress management"],
  cardiologist: ["heart specialist", "cardiovascular health", "preventive cardiology"],
  dietitian: ["clinical dietitian", "men's nutrition", "weight loss specialist", "sports nutrition"],
};

const redFlags = [
  "Guarantees quick fixes or miracle cures",
  "Pushes expensive supplements without proper diagnosis",
  "Dismisses your symptoms without investigation",
  "No verifiable medical degree or registration",
  "Pressures you into immediate procedures",
  "Does not explain treatment options clearly",
  "Promotes 'testosterone boosters' without proper testing",
];

const questionsToAsk = [
  "What is your experience treating men with similar symptoms?",
  "What tests do you recommend and why?",
  "What are my treatment options, including lifestyle changes?",
  "What are the potential side effects of recommended medications?",
  "How long before I might see improvement?",
  "When should I schedule a follow-up?",
  "What lifestyle changes do you recommend alongside treatment?",
];

const verificationSteps = [
  "Check NMC (National Medical Commission) registry for doctor registration",
  "Verify their medical degree and specialization",
  "Look for hospital affiliations",
  "Read reviews on multiple platforms, not just one",
  "Ask about their experience with your specific condition",
];

export default function MenFindDoctorPage() {
  const [selectedState, setSelectedState] = useState<string>("");
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>("");
  
  const showGuidance = selectedState && selectedSpecialty;
  const specialtyInfo = specialties.find(s => s.value === selectedSpecialty);
  const keywords = selectedSpecialty ? searchKeywords[selectedSpecialty as keyof typeof searchKeywords] : [];

  return (
    <Layout>
      <DisclaimerBanner />
      
      <section className="bg-gradient-to-b from-sage-50 to-background py-12">
        <div className="container">
          <Breadcrumb items={[{ label: "Men's Health", href: "/men" }, { label: "Find a Doctor" }]} />
          
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground mx-auto mb-6">
              <Stethoscope className="h-8 w-8" />
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
              Doctor Discovery Guide
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Find the right specialist for your health needs. 
              We'll guide you on where to search, what to look for, and questions to ask.
            </p>
          </div>
        </div>
      </section>

      <div className="container py-12">
        <div className="max-w-4xl mx-auto">
          {/* Selection Section */}
          <div className="rounded-xl border border-border bg-card p-8 mb-8">
            <h2 className="font-serif text-xl font-semibold mb-6 text-center">
              Tell us what you're looking for
            </h2>
            
            <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div>
                <label className="block text-sm font-medium mb-2">
                  <MapPin className="h-4 w-4 inline mr-2" />
                  Your State / Union Territory
                </label>
                <Select value={selectedState} onValueChange={setSelectedState}>
                  <SelectTrigger className="bg-background">
                    <SelectValue placeholder="Select your state" />
                  </SelectTrigger>
                  <SelectContent className="bg-background border border-border z-50 max-h-[300px]">
                    {indianStates.map((state) => (
                      <SelectItem key={state} value={state}>
                        {state}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">
                  <Stethoscope className="h-4 w-4 inline mr-2" />
                  Specialty Needed
                </label>
                <Select value={selectedSpecialty} onValueChange={setSelectedSpecialty}>
                  <SelectTrigger className="bg-background">
                    <SelectValue placeholder="Select specialty" />
                  </SelectTrigger>
                  <SelectContent className="bg-background border border-border z-50">
                    {specialties.map((specialty) => (
                      <SelectItem key={specialty.value} value={specialty.value}>
                        {specialty.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            {specialtyInfo && (
              <p className="text-sm text-muted-foreground text-center mt-4">
                <strong>{specialtyInfo.label}:</strong> {specialtyInfo.desc}
              </p>
            )}
          </div>

          {/* Guidance Content */}
          {showGuidance && (
            <div className="space-y-8 animate-in fade-in duration-500">
              {/* Search Keywords */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Search className="h-5 w-5 text-primary" />
                    Keywords to Search
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    When searching for a {specialtyInfo?.label} in {selectedState}, try these terms:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {keywords.map((keyword) => (
                      <span
                        key={keyword}
                        className="inline-flex items-center rounded-full bg-sage-100 px-3 py-1 text-sm text-sage-700"
                      >
                        "{keyword}"
                      </span>
                    ))}
                    <span className="inline-flex items-center rounded-full bg-sage-100 px-3 py-1 text-sm text-sage-700">
                      "{specialtyInfo?.label} in {selectedState}"
                    </span>
                  </div>
                </CardContent>
              </Card>

              {/* Trusted Platforms */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Shield className="h-5 w-5 text-primary" />
                    Where to Search
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {trustedPlatforms.map((platform) => (
                      <a
                        key={platform.name}
                        href={platform.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition cursor-pointer"
                      >
                        <ExternalLink className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-sm">{platform.name}</p>
                          <p className="text-xs text-muted-foreground">{platform.desc}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Verification Steps */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    How to Verify Credentials
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {verificationSteps.map((step, index) => (
                      <li key={index} className="flex items-start gap-3 text-sm">
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-sage-100 text-sage-700 text-xs font-medium flex-shrink-0">
                          {index + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Red Flags */}
              <Card className="border-terracotta-200 bg-terracotta-50/30">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg text-terracotta-700">
                    <AlertTriangle className="h-5 w-5" />
                    Red Flags to Avoid
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {redFlags.map((flag, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-terracotta-800">
                        <span className="text-terracotta-500 mt-1">✗</span>
                        {flag}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Questions to Ask */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <HelpCircle className="h-5 w-5 text-primary" />
                    Questions to Ask Your Doctor
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {questionsToAsk.map((question, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <span className="text-primary mt-1">•</span>
                        {question}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Coming Soon */}
          <div className="mt-12 rounded-xl bg-sage-50 border border-sage-200 p-8 text-center">
            <div className="inline-flex items-center gap-2 bg-terracotta-100 text-terracotta-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Clock className="h-4 w-4" />
              Verified Listings Coming Soon
            </div>
            <h2 className="font-serif text-xl font-semibold mb-3">
              We're Building a Trusted Directory
            </h2>
            <p className="text-muted-foreground mb-4 max-w-xl mx-auto">
              We're working on a verified directory of healthcare providers who specialize 
              in men's hormonal health. Each listing will be carefully vetted.
            </p>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 p-4 rounded-lg bg-muted/50 text-center">
            <p className="text-xs text-muted-foreground">
              <strong>Disclaimer:</strong> This guide is for educational purposes only. 
              We do not endorse any specific healthcare provider. Always verify credentials 
              independently and consult qualified medical professionals for health decisions.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
