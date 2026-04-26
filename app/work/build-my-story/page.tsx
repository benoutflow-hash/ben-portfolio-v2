import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

// 20 meeting images with varied sizes and positions for collage effect
// Sizes: xl (smiling), lg (smiling), md (neutral), sm (neutral), xs (neutral)
const meetingImages = [
  // Large smiling images
  { id: 1, src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-90xIp6I0kvDxmAMQx2chKesKXUKH9K.png", size: "xl", top: "2%", left: "0%", zIndex: 10 },
  { id: 2, src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20-V77l0jwmOvAvNUP1MLveCEDXWRTwoY.png", size: "lg", top: "5%", left: "22%", zIndex: 8 },
  { id: 3, src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-PO5OfMSiK3hsJOxiGE3oAxZYXlYt9F.png", size: "xl", top: "0%", left: "45%", zIndex: 12 },
  { id: 4, src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/18-EKqAE9B6tJBEOqz3l49gBmI2tt8KNO.png", size: "lg", top: "8%", left: "72%", zIndex: 9 },
  
  // Medium neutral images
  { id: 5, src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8-bYRzzx7Y2G87mgzKxWrh7bdituuoLF.png", size: "md", top: "18%", left: "12%", zIndex: 15 },
  { id: 6, src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/14-bGvvFTiFdNXbCDKHFJsEK585n0CI3S.png", size: "sm", top: "22%", left: "38%", zIndex: 6 },
  { id: 7, src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-iJFLTvCc5htXKRwS9H2mIaVm5DJRFH.png", size: "md", top: "20%", left: "58%", zIndex: 7 },
  { id: 8, src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-jEk8H1aFPa2uZgSsp5DwclQrrBoq6o.png", size: "sm", top: "15%", left: "85%", zIndex: 11 },
  
  // More large smiling images in middle area
  { id: 9, src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/19-wizrE3900LXf9AZdow8R0by910wFif.png", size: "xl", top: "35%", left: "5%", zIndex: 14 },
  { id: 10, src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/11-hggyMK25BdsZWI0eNvGOQ46bi94x25.png", size: "lg", top: "40%", left: "65%", zIndex: 13 },
  
  // Small neutral images scattered
  { id: 11, src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-bdY2XEkfNT4HW9437abQ63AcDAz5DV.png", size: "sm", top: "38%", left: "30%", zIndex: 5 },
  { id: 12, src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9-AC7LaFxMhJo8MCm0zCv4EJRuXoIpQC.png", size: "xs", top: "45%", left: "48%", zIndex: 4 },
  { id: 13, src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/16-wrs334vodSl8rBNd0ZPQUftJmyIZru.png", size: "sm", top: "32%", left: "88%", zIndex: 6 },
  
  // Bottom section - mix of sizes
  { id: 14, src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-mwA9JuZtKrxUCG7U5eq7J8mpaYEixd.png", size: "xl", top: "55%", left: "25%", zIndex: 16 },
  { id: 15, src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/17-mGFBkbqU58DuVrILg5rWgPEEoFcfqM.png", size: "lg", top: "58%", left: "0%", zIndex: 10 },
  { id: 16, src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/15-GSvgiDI8yGw2kxzO7oFjkGJ4cudlBj.png", size: "md", top: "52%", left: "55%", zIndex: 8 },
  { id: 17, src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/12-PX0VLFCnT3TqsjxyTXB4LyXfNaEejj.png", size: "lg", top: "60%", left: "75%", zIndex: 11 },
  
  // Final scattered images
  { id: 18, src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/13-ve530mZt5SEnUalW89AC4t7cDqQfIi.png", size: "sm", top: "72%", left: "15%", zIndex: 7 },
  { id: 19, src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7-SIpMC3Js6dlNfGv8my32NHWo51A3TA.png", size: "xl", top: "75%", left: "40%", zIndex: 15 },
  { id: 20, src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10-sR3uqTrOLYXrA0ianyNkUcdUjI63G5.png", size: "md", top: "78%", left: "70%", zIndex: 9 },
];

// Size classes for varied image dimensions
const sizeClasses = {
  xl: "w-[28%] md:w-[24%] aspect-video",
  lg: "w-[22%] md:w-[20%] aspect-video",
  md: "w-[16%] md:w-[14%] aspect-[4/3]",
  sm: "w-[12%] md:w-[10%] aspect-[4/3]",
  xs: "w-[9%] md:w-[8%] aspect-square",
};

export default function BuildMyStoryPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Full-width Image Collage Section - White background */}
      <section className="w-full bg-white pt-20">
        {/* Back button */}
        <div className="px-6 lg:px-8 mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-neutral-500 hover:text-neutral-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>

        {/* Image Collage - overlapping scattered layout */}
        <div className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden">
          {meetingImages.map((image) => (
            <div
              key={image.id}
              className={`absolute ${sizeClasses[image.size as keyof typeof sizeClasses]} transition-transform duration-300 hover:scale-105 hover:z-50`}
              style={{
                top: image.top,
                left: image.left,
                zIndex: image.zIndex,
              }}
            >
              <div className="relative w-full h-full rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={image.src}
                  alt={`Meeting photo ${image.id}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 30vw, 25vw"
                />
              </div>
            </div>
          ))}
          
          {/* Quote overlay in white space */}
          <div 
            className="absolute z-20 bg-white/90 backdrop-blur-sm px-6 py-4 rounded-lg shadow-sm"
            style={{ top: "42%", left: "35%", transform: "translate(-50%, -50%)" }}
          >
            <p className="text-lg md:text-xl lg:text-2xl font-semibold text-neutral-900 text-center max-w-xs">
              Real conversations behind real outcomes.
            </p>
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
