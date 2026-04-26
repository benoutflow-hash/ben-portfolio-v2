import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    category: "Featured Case Study",
    title: "Build My Story",
    description:
      "Led founder-side execution across sales, onboarding, CRM, teacher support, and product feedback inside a lean EdTech startup serving US schools.",
    image: "/imported-assets/build-my-story.jpg",
    href: "/work/build-my-story",
  },
  {
    category: "Systems & Workflow Design",
    title: "Automation + n8n systems",
    description:
      "Built practical automation systems using n8n, APIs, and webhooks to reduce repetitive work and make internal execution more reliable.",
    image: "/imported-assets/automation-n8n.jpg",
    href: "/work/automation-systems",
  },
  {
    category: "Sales Ops & Customer Workflow",
    title: "CRM + commercial operations",
    description:
      "Built outreach and pipeline systems that supported prospecting, follow-up, and classroom pilots in a lean startup environment.",
    image: "/imported-assets/crm-commercial-ops.jpg",
    href: "/work/crm-commercial-ops",
  },
  {
    category: "Analytical Foundation",
    title: "Engineering + university foundation",
    description:
      "Brought structured problem-solving from engineering into startup execution, systems design, and operational work.",
    image: "/imported-assets/university-foundation.jpg",
    href: "/work/engineering-foundation",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-28 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-14">
          <p className="text-sm uppercase tracking-[0.28em] text-muted-foreground mb-6">
            Selected work
          </p>
          <h2 className="font-serif text-4xl md:text-5xl leading-[1.02] tracking-[-0.04em] text-balance mb-6">
            A few examples of the systems, customer workflows, and operational
            foundations I&apos;ve built in early-stage environments.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project) => (
            <Link
              key={project.title}
              href={project.href}
              className="group block rounded-[1.6rem] border border-black/6 bg-white/70 p-4 md:p-5 shadow-[0_14px_44px_rgba(17,17,17,0.04)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_54px_rgba(17,17,17,0.07)]"
            >
              <div className="relative overflow-hidden rounded-[1.2rem] bg-muted aspect-[3/2] mb-5">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="space-y-4 text-left">
                <p className="text-[0.72rem] uppercase tracking-[0.24em] text-muted-foreground">
                  {project.category}
                </p>
                <h3 className="text-2xl font-semibold tracking-[-0.02em] text-foreground">
                  {project.title}
                </h3>
                <p className="text-sm md:text-[0.97rem] text-muted-foreground leading-7 max-w-xl">
                  {project.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
