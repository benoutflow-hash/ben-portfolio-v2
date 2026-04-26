"use client";

const strengths = [
  "Early-stage operations and execution",
  "Customer onboarding and support",
  "CRM, outreach, and follow-up systems",
  "Workflow automation with n8n, APIs, and webhooks",
  "Founder-side problem solving",
  "Structured thinking from engineering",
];

export function AboutSection() {
  return (
    <section id="about" className="py-28 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-muted-foreground mb-10">
              About
            </p>

            <div className="space-y-7">
              <p className="text-xl md:text-2xl leading-[1.6] text-foreground max-w-3xl text-balance">
                I work best in early-stage teams where the role is not neatly
                defined and the work matters immediately.
              </p>

              <div className="space-y-6 max-w-3xl text-base md:text-lg leading-[1.9] text-muted-foreground">
                <p>
                  Most of what I know has come from building inside a startup
                  from zero. That meant doing whatever helped the company move
                  forward: supporting sales, improving onboarding, managing CRM,
                  solving customer issues, tightening internal processes, and
                  building better systems for day-to-day execution.
                </p>
                <p>
                  My background is unusual in a useful way. I started in
                  structural engineering, which trained me to think clearly and
                  solve problems properly. Then startup life forced me to get
                  practical fast.
                </p>
                <p>
                  I&apos;m not a traditional software engineer. I&apos;m an
                  operator who uses tools like n8n, APIs, webhooks, and
                  AI-assisted workflows to make teams more effective.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="rounded-[1.75rem] border border-black/6 bg-white/70 p-7 lg:p-8 shadow-[0_12px_40px_rgba(17,17,17,0.04)]">
              <h3 className="text-sm uppercase tracking-[0.24em] text-muted-foreground mb-6">
                Core strengths
              </h3>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {strengths.map((strength, index) => (
                  <div
                    key={strength}
                    className="rounded-2xl border px-4 py-4 text-sm leading-6 text-foreground/85 transition-all duration-300 ease-out hover:scale-[1.03] hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(76,29,149,0.08)]"
                    style={{
                      backgroundColor: `rgba(${245 - index * 4}, ${243 - index * 3}, 255, 0.92)`,
                      borderColor: `rgba(${196 - index * 9}, ${181 - index * 10}, ${253 - index * 4}, ${0.38 + index * 0.01})`,
                    }}
                  >
                    {strength}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
