"use client";

import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 lg:px-8 pt-20 relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(139,92,246,0.06),_transparent_34%),radial-gradient(circle_at_80%_20%,_rgba(168,85,247,0.04),_transparent_30%),radial-gradient(circle_at_50%_100%,_rgba(196,181,253,0.03),_transparent_40%)]" />

      {/* Ambient orbs */}
      <div className="ambient-orb ambient-drift-one top-[-8rem] left-[-6rem] h-[20rem] w-[20rem] bg-[rgba(139,92,246,0.08)]" />
      <div className="ambient-orb ambient-drift-two right-[-7rem] top-[18%] h-[24rem] w-[24rem] bg-[rgba(168,85,247,0.06)]" />
      <div className="ambient-orb ambient-drift-three bottom-[-10rem] left-[28%] h-[22rem] w-[22rem] bg-[rgba(196,181,253,0.06)]" />

      <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.2fr_0.8fr] gap-16 lg:gap-20 items-center relative z-10">
        <div className="text-center lg:text-left max-w-3xl">
          <p className="text-[0.72rem] uppercase tracking-[0.32em] text-muted-foreground/90 mb-7 animate-fade-in">
            Ops, customer work, systems, and founder-side execution
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-7 leading-[0.95] animate-fade-in-delay-1 font-serif tracking-[-0.05em] text-balance">
            Startup Operator
          </h1>

          <p className="text-lg md:text-[1.32rem] text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-10 leading-[1.75] text-balance animate-fade-in-delay-2">
            I built inside an early-stage startup from zero and learned fast
            across sales, onboarding, CRM, customer support, workflow
            automation, and founder-side execution.
          </p>

          <p className="text-base md:text-lg text-muted-foreground/92 max-w-2xl mx-auto lg:mx-0 mb-12 leading-[1.8] text-balance animate-fade-in-delay-2">
            Now I&apos;m looking for roles where I can bring that same pace,
            range, and usefulness to another ambitious team.
          </p>

          <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 animate-fade-in-delay-4">
            <button
              onClick={() => scrollToSection("projects")}
              className="cursor-pointer px-8 py-4 bg-accent text-accent-foreground rounded-lg hover:opacity-90 transition-opacity font-medium flex items-center gap-2"
            >
              View Selected Work
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollToSection("connect")}
              className="cursor-pointer px-8 py-4 border border-border rounded-lg hover:bg-muted transition-colors font-medium"
            >
              Get In Touch
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-10 text-sm text-muted-foreground animate-fade-in-delay-4">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4" />
              <span>London / South East, UK</span>
            </div>
            <span className="hidden sm:inline">•</span>
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span>Open to startup operator roles</span>
            </div>
          </div>
        </div>

        <div className="animate-fade-in-delay-3">
          <div className="relative mx-auto max-w-[22rem] lg:max-w-[24rem] overflow-hidden rounded-[1.75rem] border border-black/6 bg-white/60 p-3 shadow-[0_14px_42px_rgba(17,17,17,0.05)]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.35rem] bg-[#e5e2eb]">
              <Image
                alt="Ben Spurr"
                src="/imported-assets/ben-profile.png"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
