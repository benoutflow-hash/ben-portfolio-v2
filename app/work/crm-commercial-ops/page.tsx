import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function CrmCommercialOpsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground py-20 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <p className="text-sm uppercase tracking-[0.28em] text-muted-foreground mb-4">
          Sales Ops & Customer Workflow
        </p>
        <h1 className="font-serif text-4xl md:text-5xl font-semibold tracking-[-0.04em] mb-8">
          CRM + commercial operations
        </h1>
        <p className="text-lg text-muted-foreground leading-8 max-w-3xl">
          Built outreach and pipeline systems that supported prospecting,
          follow-up, and classroom pilots in a lean startup environment.
        </p>
      </div>
    </main>
  );
}
