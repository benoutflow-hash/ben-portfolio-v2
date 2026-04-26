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
      {/* Full-width Image Grid Section */}
      <section className="w-full bg-[#0a0a0a] pt-20 pb-8">
        {/* Back button overlaid on grid */}
        <div className="px-6 lg:px-8 mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
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
                className="aspect-[4/3] relative overflow-hidden bg-[#1a1a1a] group"
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
                        hsl(${(slot.id * 37) % 360}, 20%, 15%), 
                        hsl(${(slot.id * 53) % 360}, 25%, 20%))`,
                    }}
                  >
                    <span className="text-white/20 text-xs font-mono">
                      {slot.id}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm uppercase tracking-[0.28em] text-muted-foreground mb-4">
            Featured Case Study
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold tracking-[-0.04em] mb-8">
            Build My Story
          </h1>
          <p className="text-lg text-muted-foreground leading-8 max-w-3xl">
            Led founder-side execution across sales, onboarding, CRM, teacher
            support, and product feedback inside a lean EdTech startup serving US
            schools.
          </p>
        </div>
      </section>
    </main>
  );
}
