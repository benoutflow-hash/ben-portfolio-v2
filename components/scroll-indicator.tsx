"use client";

import { useState, useEffect } from "react";

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Selected work" },
  { id: "connect", label: "Connect" },
];

export function ScrollIndicator() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
      <nav className="flex flex-col gap-6">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="group relative flex items-center min-h-12 w-28 cursor-pointer"
            aria-label={`Go to ${section.label}`}
          >
            <div
              className={`ml-1 w-0.5 transition-all duration-300 rounded-full ${
                activeSection === section.id
                  ? "h-12 bg-foreground"
                  : "h-8 bg-foreground/30 group-hover:h-10 group-hover:bg-foreground/50"
              }`}
            />
            <span className="pointer-events-none absolute left-4 whitespace-nowrap text-xs tracking-[0.16em] uppercase text-muted-foreground/80 opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100">
              {section.label}
            </span>
          </button>
        ))}
      </nav>
    </div>
  );
}
