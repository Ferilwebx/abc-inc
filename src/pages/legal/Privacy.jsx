import React from "react";
import { motion } from "framer-motion";

const sections = [
  { title: "Information We Collect", content: "We collect information you voluntarily provide when you submit a Request for Quote (RFQ), contact form, or download request. This may include your name, email address, phone number, company name, job title, and project specifications. We also collect standard web analytics data including IP addresses, browser type, and pages visited." },
  { title: "How We Use Your Information", content: "Your information is used to respond to your enquiries, process quote requests, provide technical assessments, send relevant product and capability updates, and improve our website experience. We do not sell, rent, or share your personal information with third parties for marketing purposes." },
  { title: "Data Security", content: "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. All data transmissions are encrypted using industry-standard SSL/TLS protocols." },
  { title: "Cookies", content: "Our website uses essential cookies for functionality and analytics cookies to understand usage patterns. You can control cookie preferences through your browser settings. Analytics data is aggregated and does not identify individual users." },
  { title: "Third-Party Services", content: "We may use third-party services for analytics, email delivery, and website hosting. These services process data only as necessary to provide their services and are bound by appropriate data processing agreements." },
  { title: "Data Retention", content: "We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law. Quote-related data is retained for the duration of any business relationship plus a reasonable archival period." },
  { title: "Your Rights", content: "You have the right to access, correct, or delete your personal information. You may opt out of marketing communications at any time. To exercise these rights, contact us at privacy@abcinc.com." },
  { title: "Contact", content: "For questions about this privacy policy or your personal data, contact our Data Protection team at privacy@abcinc.com or write to ABC Inc., Plot No. 42, MIDC Industrial Area, Chakan, Pune, Maharashtra 410501, India." },
];

export default function Privacy() {
  return (
    <>
      <section className="bg-foundry py-24 md:py-28">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="heading-lg text-white">Privacy Policy</h1>
            <p className="mt-4 text-white/60">Last updated: July 2026</p>
          </motion.div>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl space-y-10">
          <p className="body-md">ABC Inc. respects your privacy and is committed to protecting your personal information. This policy explains how we collect, use, and safeguard data when you visit our website or interact with our services.</p>
          {sections.map((s, i) => (
            <div key={s.title}>
              <h2 className="text-lg font-semibold text-foundry mb-3">{i + 1}. {s.title}</h2>
              <p className="text-sm text-steel/70 leading-relaxed">{s.content}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}