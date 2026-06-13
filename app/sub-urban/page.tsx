import { Clock, MapPin } from "lucide-react";

export default function SubUrbanPage() {
  return (
    <main className="relative min-h-screen bg-[#07070a] text-white flex flex-col items-center justify-center overflow-hidden px-6 py-16">
      {/* Ambient orbs */}
      <div
        className="ambient-orb ambient-drift-one"
        style={{
          top: "-12rem",
          left: "-10rem",
          width: "44rem",
          height: "44rem",
          background:
            "radial-gradient(circle, rgba(168,85,247,0.22) 0%, transparent 65%)",
        }}
      />
      <div
        className="ambient-orb ambient-drift-two"
        style={{
          bottom: "-10rem",
          right: "-12rem",
          width: "40rem",
          height: "40rem",
          background:
            "radial-gradient(circle, rgba(34,211,238,0.12) 0%, transparent 65%)",
        }}
      />
      <div
        className="ambient-orb ambient-drift-three"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "70rem",
          height: "70rem",
          background:
            "radial-gradient(circle, rgba(236,72,153,0.05) 0%, transparent 55%)",
        }}
      />

      {/* Grain texture overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Live indicator */}
        <div className="animate-fade-in flex items-center gap-2.5 mb-10">
          <div
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ backgroundColor: "#a855f7" }}
          />
          <span
            className="text-[0.6rem] uppercase tracking-[0.4em]"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            Tonight &nbsp;·&nbsp; Sat 13 Jun 2026
          </span>
        </div>

        {/* Main title */}
        <h1
          className="animate-fade-in-delay-1 font-serif font-semibold uppercase leading-[0.86] mb-10 select-none"
          style={{
            fontSize: "clamp(5rem, 20vw, 14rem)",
            letterSpacing: "-0.03em",
            textShadow:
              "0 0 50px rgba(168,85,247,0.65), 0 0 100px rgba(168,85,247,0.3), 0 0 180px rgba(168,85,247,0.15)",
          }}
        >
          Sub
          <br />
          Urban
        </h1>

        {/* Free entry badge */}
        <div
          className="animate-fade-in-delay-2 mb-12 px-6 py-2.5 rounded-full text-[0.65rem] uppercase tracking-[0.35em] font-medium"
          style={{
            border: "1px solid rgba(168,85,247,0.55)",
            color: "#c084fc",
            boxShadow:
              "0 0 18px rgba(168,85,247,0.18), inset 0 0 18px rgba(168,85,247,0.06)",
          }}
        >
          Free Entry
        </div>

        {/* Event details */}
        <div
          className="animate-fade-in-delay-3 flex flex-col sm:flex-row items-center gap-4 sm:gap-8"
          style={{ color: "rgba(255,255,255,0.55)" }}
        >
          <div className="flex items-center gap-2">
            <Clock
              className="w-3.5 h-3.5 shrink-0"
              style={{ color: "rgba(168,85,247,0.7)" }}
            />
            <span className="text-sm tracking-wide">9pm – 2am</span>
          </div>

          <span
            className="hidden sm:block text-xs"
            style={{ color: "rgba(255,255,255,0.15)" }}
          >
            ·
          </span>

          <div className="flex items-center gap-2">
            <MapPin
              className="w-3.5 h-3.5 shrink-0"
              style={{ color: "rgba(168,85,247,0.7)" }}
            />
            <span className="text-sm tracking-wide">
              The Mezzanine, Tooting Market
            </span>
          </div>
        </div>

        {/* Subtle bottom rule */}
        <div
          className="mt-16 w-px h-12 mx-auto"
          style={{
            background:
              "linear-gradient(to bottom, rgba(168,85,247,0.4), transparent)",
          }}
        />
      </div>
    </main>
  );
}
