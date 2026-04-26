import { LinkedInIcon, MailIcon } from "@/components/icons";

export function ConnectSection() {
  return (
    <section id="connect" className="py-28 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-8">
          <div className="space-y-5">
            <p className="text-sm uppercase tracking-[0.28em] text-muted-foreground">
              Closing
            </p>
            <h2 className="text-4xl lg:text-5xl font-semibold text-balance font-serif tracking-[-0.04em]">
              I&apos;m looking for early-stage roles where I can combine ops,
              customer work, systems thinking, and execution.
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-8 text-pretty">
              If you think I could be useful to your team, I&apos;d love to
              talk.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:ben_spurr@hotmail.com"
              className="inline-flex items-center justify-center gap-2 px-6 h-10 rounded-md bg-primary text-primary-foreground text-sm font-medium transition-colors hover:bg-primary/90"
            >
              <MailIcon className="w-4 h-4" />
              Email Ben
            </a>
          </div>

          <div className="flex items-center justify-center gap-4 pt-6">
            <a
              href="https://www.linkedin.com/in/benjamin-spurr/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 hover:bg-muted rounded-lg transition-colors cursor-pointer"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="w-5 h-5" />
            </a>
            <a
              href="mailto:ben_spurr@hotmail.com"
              className="p-3 hover:bg-muted rounded-lg transition-colors cursor-pointer"
              aria-label="Email"
            >
              <MailIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
