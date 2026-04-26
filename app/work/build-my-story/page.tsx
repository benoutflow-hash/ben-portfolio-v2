import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

// 20 meeting images with size indicators (big = has smiles, small = neutral)
const meetingImages = [
  // Row 1 - mixed sizes
  { id: 1, src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-90xIp6I0kvDxmAMQx2chKesKXUKH9K.png", size: "big" },
  { id: 2, src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8-bYRzzx7Y2G87mgzKxWrh7bdituuoLF.png", size: "small" },
  { id: 3, src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20-V77l0jwmOvAvNUP1MLveCEDXWRTwoY.png", size: "big" },
  { id: 4, src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/14-bGvvFTiFdNXbCDKHFJsEK585n0CI3S.png", size: "small" },
  // Row 2
  { id: 5, src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-PO5OfMSiK3hsJOxiGE3oAxZYXlYt9F.png", size: "big" },
  { id: 6, src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-iJFLTvCc5htXKRwS9H2mIaVm5DJRFH.png", size: "small" },
  { id: 7, src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/18-EKqAE9B6tJBEOqz3l49gBmI2tt8KNO.png", size: "big" },
  { id: 8, src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-jEk8H1aFPa2uZgSsp5DwclQrrBoq6o.png", size: "small" },
  // Row 3
  { id: 9, src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/19-wizrE3900LXf9AZdow8R0by910wFif.png", size: "big" },
  { id: 10, src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-bdY2XEkfNT4HW9437abQ63AcDAz5DV.png", size: "small" },
  { id: 11, src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/11-hggyMK25BdsZWI0eNvGOQ46bi94x25.png", size: "big" },
  { id: 12, src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9-AC7LaFxMhJo8MCm0zCv4EJRuXoIpQC.png", size: "small" },
  // Row 4
  { id: 13, src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-mwA9JuZtKrxUCG7U5eq7J8mpaYEixd.png", size: "big" },
  { id: 14, src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/16-wrs334vodSl8rBNd0ZPQUftJmyIZru.png", size: "small" },
  { id: 15, src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/17-mGFBkbqU58DuVrILg5rWgPEEoFcfqM.png", size: "big" },
  { id: 16, src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/15-GSvgiDI8yGw2kxzO7oFjkGJ4cudlBj.png", size: "small" },
  // Row 5
  { id: 17, src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/12-PX0VLFCnT3TqsjxyTXB4LyXfNaEejj.png", size: "big" },
  { id: 18, src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/13-ve530mZt5SEnUalW89AC4t7cDqQfIi.png", size: "small" },
  { id: 19, src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7-SIpMC3Js6dlNfGv8my32NHWo51A3TA.png", size: "big" },
  { id: 20, src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10-sR3uqTrOLYXrA0ianyNkUcdUjI63G5.png", size: "small" },
];

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

        {/* Image Grid - varied sizes with CSS Grid */}
        <div className="w-full overflow-hidden">
          <div className="grid grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-1">
            {meetingImages.map((image) => (
              <div
                key={image.id}
                className={`relative overflow-hidden group ${
                  image.size === "big" 
                    ? "col-span-2 row-span-1 aspect-[16/10]" 
                    : "col-span-1 row-span-1 aspect-[4/3]"
                }`}
              >
                <Image
                  src={image.src}
                  alt={`Meeting photo ${image.id}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes={image.size === "big" ? "(max-width: 768px) 33vw, 16vw" : "(max-width: 768px) 16vw, 8vw"}
                />
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
