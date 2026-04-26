"use client";

import { LinkedInIcon, MailIcon } from "@/components/icons";

const navItems = ["Home", "About", "Experience", "Case Study", "Connect"];

export function Navigation() {
  const scrollToSection = (section: string) => {
    const sectionId =
      section === "Case Study"
        ? "projects"
        : section === "Home"
          ? "hero"
          : section.toLowerCase();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => scrollToSection("Home")}
            className="cursor-pointer font-sans text-xs font-semibold uppercase tracking-[0.28em] text-foreground/70"
          >
            Ben Spurr
          </button>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="cursor-pointer text-sm text-foreground/70 transition-colors hover:text-foreground"
              >
                {item}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/benjamin-spurr/"
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer rounded-full border border-border p-2 text-foreground/70 transition-colors hover:bg-muted hover:text-foreground"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="w-4 h-4" />
            </a>
            <a
              href="mailto:ben_spurr@hotmail.com"
              className="cursor-pointer rounded-full border border-border p-2 text-foreground/70 transition-colors hover:bg-muted hover:text-foreground"
              aria-label="Email Ben"
            >
              <MailIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
