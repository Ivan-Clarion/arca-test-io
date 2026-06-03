import LegalPage from "@/components/sections/LegalPage";

export const metadata = {
  title: "Terms of Service — Tester.io",
  description: "The terms that govern your use of Tester.io.",
};

const sections = [
  {
    heading: "1. Acceptance of terms",
    body: "By accessing or using Tester.io, you agree to be bound by these Terms of Service. If you are using the service on behalf of an organization, you agree on its behalf.",
  },
  {
    heading: "2. Use of the service",
    body: "Tester.io grants you a non-exclusive, non-transferable right to use the service in accordance with these terms and your selected plan. You agree not to misuse the service, attempt to disrupt it, or access it in unauthorized ways.",
  },
  {
    heading: "3. Your content",
    body: "You retain all rights to the documents and data you connect to Tester.io. You grant us a limited license to process that content only as needed to provide the service and generate your insights.",
  },
  {
    heading: "4. Plans and billing",
    body: [
      "Paid plans are billed in advance on a recurring basis until cancelled.",
      "You can upgrade, downgrade, or cancel at any time; changes take effect at the start of the next billing period.",
      "Fees are non-refundable except where required by law.",
    ],
  },
  {
    heading: "5. Availability",
    body: "We work to keep Tester.io available and reliable, but the service is provided \"as is\" without warranties of any kind. We are not liable for indirect or consequential damages arising from use of the service.",
  },
  {
    heading: "6. Termination",
    body: "You may stop using the service at any time. We may suspend or terminate access if these terms are violated. Upon termination, your right to use the service ends and your data is handled per our Privacy Policy.",
  },
  {
    heading: "7. Changes to these terms",
    body: "We may update these terms from time to time. Material changes will be communicated, and continued use of the service after changes take effect constitutes acceptance.",
  },
  {
    heading: "8. Contact",
    body: "Questions about these terms can be sent to legal@tester.io.",
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Service"
      updated="June 3, 2026"
      intro="The ground rules for using Tester.io. Please read them carefully."
      sections={sections}
    />
  );
}
