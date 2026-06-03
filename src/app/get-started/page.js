import PageHeader from "@/components/ui/PageHeader";
import GetStartedClient from "@/components/get-started/GetStartedClient";

export const metadata = {
  title: "Get Started — Tester.io",
  description:
    "Upload a document and let Tester.io scan it for risks, deadlines, and decisions — then ask follow-up questions.",
};

export default function GetStartedPage() {
  return (
    <main className="flex-1">
      <PageHeader
        eyebrow="Get Started"
        title="Scan your first document."
        subtitle="Upload a file and Tester.io reads it end to end — surfacing risks, deadlines, and decisions. Then ask follow-up questions, answered only from your document."
      />

      <section className="px-6 py-16">
        <GetStartedClient />
      </section>
    </main>
  );
}
