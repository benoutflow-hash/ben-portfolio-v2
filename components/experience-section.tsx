"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const experiences = [
  {
    title: "Co-founder & Commercial Operations Lead",
    company: "Build My Story",
    period: "Oct 2024 - Present",
    image: "/imported-assets/build-my-story-experience.jpg",
    description:
      "I'm the customer lead at Build My Story, handling sales, customer success, and much of the day-to-day operational work across the business. It has been my main crash course in startup life: working closely with customers, building processes as we go, and doing whatever is needed to keep things moving.",
  },
  {
    title: "Structural Engineer",
    company: "Price & Myers",
    period: "Jan 2024 - Jan 2025",
    image: "/imported-assets/structural-engineer-experience.jpg",
    description:
      "I worked as a structural engineer on live projects, which gave me a strong foundation in structured thinking, clear communication, and solving practical problems properly. It also taught me how to work carefully and logically under pressure, which I've carried with me into startup work.",
  },
  {
    title: "Founder",
    company: "Bakeless",
    period: "Feb 2024 - Nov 2024",
    image: "/imported-assets/bakeless-experience.jpg",
    description:
      "I started Bakeless after realising how expensive protein bars had become, and how little room there was to customise them. With my mum being a nutritionist and me being into fitness, I began making my own, then turned the idea into a dry powder mix that let people make bars at home by adding a nut butter, a liquid, and a sweetener like honey.",
  },
  {
    title: "Co-founder",
    company: "Spire Design, side venture",
    period: "2019 - 2021",
    image: "/imported-assets/spire-design-experience.jpg",
    description:
      "My first proper business venture. On one side, you'd find me measuring every jumper by hand. On the other, you'd find me standing over a bathtub with ten bottles of bleach trying to fix a batch we ordered in the wrong colour.",
  },
];

export function ExperienceSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="experience" className="py-24 px-6 lg:px-8 bg-muted/35">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-12">
          <p className="text-sm uppercase tracking-[0.28em] text-muted-foreground mb-6">
            Experience
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-border to-transparent" />

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <article
                key={exp.title}
                className="relative pl-12 text-left group"
              >
                {/* Timeline connector */}
                <div className="absolute left-0 top-3 h-[2px] transition-all duration-300 w-8 bg-foreground/30 group-hover:w-10 group-hover:bg-foreground" />

                <button
                  onClick={() =>
                    setExpandedIndex(expandedIndex === index ? null : index)
                  }
                  className="w-full cursor-pointer text-left"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                      <p className="text-muted-foreground leading-7">
                        {exp.company} | {exp.period}
                      </p>
                    </div>
                    <ChevronDown
                      className={`mt-1 h-5 w-5 shrink-0 transition-all duration-300 text-muted-foreground/45 ${
                        expandedIndex === index ? "rotate-180" : "rotate-0"
                      } opacity-0 group-hover:opacity-100`}
                    />
                  </div>
                </button>

                <div
                  className={`grid transition-all duration-400 ease-out ${
                    expandedIndex === index
                      ? "grid-rows-[1fr] opacity-100 mt-4"
                      : "grid-rows-[0fr] opacity-0 mt-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="grid gap-5 md:grid-cols-[220px_1fr] md:gap-8 items-stretch rounded-[1.5rem] border border-black/6 bg-white/72 p-4 md:p-5 shadow-[0_10px_30px_rgba(17,17,17,0.04)]">
                      <div className="relative overflow-hidden rounded-[1rem] bg-white min-h-[180px] h-full border border-black/6">
                        <Image
                          src={exp.image}
                          alt={exp.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="h-full flex items-center">
                        <p className="text-sm md:text-base leading-8 text-foreground/78">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
