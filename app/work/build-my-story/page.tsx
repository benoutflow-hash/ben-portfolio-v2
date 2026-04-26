import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

// Generate 30 placeholder slots for images
const imageSlots = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  // Placeholder - will be replaced with actual meeting photos
  src: null,
}));

export default function BuildMyStoryPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Full-width Image Grid Section - White background */}
      <section className="w-full bg-white pt-20 pb-8">
        {/* Back button overlaid on grid */}
        <div className="px-6 lg:px-8 mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-neutral-500 hover:text-neutral-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>

        {/* Image Grid - 6 columns x 5 rows = 30 images */}
        <div className="w-full overflow-hidden">
          <div className="grid grid-cols-5 md:grid-cols-6 lg:grid-cols-10 gap-1">
            {imageSlots.map((slot) => (
              <div
                key={slot.id}
                className="aspect-[4/3] relative overflow-hidden bg-neutral-100 group"
              >
                {slot.src ? (
                  <Image
                    src={slot.src}
                    alt={`Meeting photo ${slot.id}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  // Placeholder with subtle gradient variations
                  <div 
                    className="w-full h-full flex items-center justify-center"
                    style={{
                      background: `linear-gradient(${135 + (slot.id * 12)}deg, 
                        hsl(${(slot.id * 37) % 360}, 15%, 90%), 
                        hsl(${(slot.id * 53) % 360}, 20%, 85%))`,
                    }}
                  >
                    <span className="text-neutral-400 text-xs font-mono">
                      {slot.id}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Statistics Section */}
      <section className="w-full bg-white py-16 border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {/* Stat 1 */}
            <div className="text-center md:text-left">
              <p className="text-5xl md:text-6xl font-semibold tracking-tight text-neutral-900 mb-3">
                11%
              </p>
              <p className="text-base text-neutral-600 leading-relaxed">
                Placeholder description text for this statistic. Add context about what this percentage represents.
              </p>
            </div>

            {/* Stat 2 */}
            <div className="text-center md:text-left">
              <p className="text-5xl md:text-6xl font-semibold tracking-tight text-neutral-900 mb-3">
                $11,200
              </p>
              <p className="text-base text-neutral-600 leading-relaxed">
                Placeholder description text for this statistic. Add context about what this dollar amount represents.
              </p>
            </div>

            {/* Stat 3 */}
            <div className="text-center md:text-left">
              <p className="text-5xl md:text-6xl font-semibold tracking-tight text-neutral-900 mb-3">
                847
              </p>
              <p className="text-base text-neutral-600 leading-relaxed">
                Placeholder description text for this statistic. Add context about what this number represents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Header Content Section */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm uppercase tracking-[0.28em] text-neutral-500 mb-4">
            Featured Case Study
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold tracking-[-0.04em] mb-8 text-neutral-900">
            Build My Story
          </h1>
          <p className="text-lg text-neutral-600 leading-8 max-w-3xl">
            This is a portfolio page which will have a few images and text of me going through what I have done at Build My Story, which is the company I work at now.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl font-semibold tracking-[-0.02em] mb-6 text-neutral-900">
            Overview
          </h2>
          <p className="text-base text-neutral-600 leading-8 mb-8">
            Placeholder text describing your role and responsibilities at Build My Story. This section can detail the company background, your position, and the overall scope of your work. Add information about the team, the mission, and your day-to-day contributions.
          </p>

          <h2 className="font-serif text-3xl font-semibold tracking-[-0.02em] mb-6 text-neutral-900 mt-16">
            Key Responsibilities
          </h2>
          <p className="text-base text-neutral-600 leading-8 mb-8">
            Placeholder text for your key responsibilities. Describe the main areas you focused on, the challenges you tackled, and the systems you built or improved. This could include sales processes, customer onboarding, CRM management, and cross-functional collaboration.
          </p>

          <h2 className="font-serif text-3xl font-semibold tracking-[-0.02em] mb-6 text-neutral-900 mt-16">
            Impact &amp; Results
          </h2>
          <p className="text-base text-neutral-600 leading-8 mb-8">
            Placeholder text for the impact and results of your work. Connect back to the statistics shown above and provide context for how these numbers were achieved. Include any notable wins, improvements, or milestones.
          </p>
        </div>
      </section>

      {/* Footer Navigation */}
      <section className="py-12 px-6 lg:px-8 bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-neutral-600 hover:text-neutral-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <Link
            href="/work/automation-systems"
            className="text-neutral-600 hover:text-neutral-900 transition-colors"
          >
            Next Project
          </Link>
        </div>
      </section>
    </main>
  );
}
