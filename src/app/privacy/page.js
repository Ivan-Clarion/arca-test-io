import LegalPage from "@/components/sections/LegalPage";

export const metadata = {
  title: "Privacy Policy — Tester.io",
  description: "How Tester.io collects, uses, and protects your information.",
};

const sections = [
  {
    heading: "1. Overview",
    body: "This Privacy Policy explains how Tester.io (\"we\", \"us\") collects, uses, and protects information when you use our document intelligence service. By using Tester.io, you agree to the practices described here.",
  },
  {
    heading: "2. Information we collect",
    body: [
      "Account information you provide, such as your name, work email, and company.",
      "Documents and folder contents you connect to Tester.io so we can scan them and surface insights.",
      "Usage data, such as which features you use and when scans run, to improve the product.",
    ],
  },
  {
    heading: "3. How we use your documents",
    body: "We read your connected documents solely to generate insights for your workspace. We do not use your documents to train shared or third-party models, and we do not sell your data. Confidential and restricted files are handled on a need-to-know basis.",
  },
  {
    heading: "4. Data security",
    body: "Documents are encrypted in transit and at rest. Access is controlled, logged, and limited to what is necessary to provide the service. Enterprise customers may deploy Tester.io on-premise for full data residency.",
  },
  {
    heading: "5. Data retention",
    body: "We retain your data for as long as your account is active. You can request deletion of your documents and account data at any time, and we will remove it within 30 days unless retention is required by law.",
  },
  {
    heading: "6. Your rights",
    body: "Depending on your jurisdiction, you may have the right to access, correct, export, or delete your personal information. To exercise these rights, contact us at privacy@tester.io.",
  },
  {
    heading: "7. Contact",
    body: "Questions about this policy can be sent to privacy@tester.io.",
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      updated="June 3, 2026"
      intro="Your documents are sensitive. Here's exactly how we handle the information you trust us with."
      sections={sections}
    />
  );
}
