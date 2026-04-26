"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

// 20 meeting images with varied sizes - smiling ones are bigger
// Sizes range from xs to xl with smiling faces getting larger sizes
const meetingImages = [
  // Row 1 - scattered across top
  { id: 1, src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-mwA9JuZtKrxUCG7U5eq7J8mpaYEixd.png", size: "lg", isSmiling: true },
  { id: 2, src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8-bYRzzx7Y2G87mgzKxWrh7bdituuoLF.png", size: "sm", isSmiling: false },
  { id: 3, src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-PO5OfMSiK3hsJOxiGE3oAxZYXlYt9F.png", size: "xl", isSmiling: true },
  { id: 4, src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/14-bGvvFTiFdNXbCDKHFJsEK585n0CI3S.png", size: "xs", isSmiling: false },
  { id: 5, src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/19-wizrE3900LXf9AZdow8R0by910wFif.png", size: "lg", isSmiling: true },
  { id: 6, src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-iJFLTvCc5htXKRwS9H2mIaVm5DJRFH.png", size: "md", isSmiling: false },
  { id: 7, src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/18-EKqAE9B6tJBEOqz3l49gBmI2tt8KNO.png", size: "xl", isSmiling: true },
  { id: 8, src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-jEk8H1aFPa2uZgSsp5DwclQrrBoq6o.png", size: "sm", isSmiling: false },
  { id: 9, src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/11-hggyMK25BdsZWI0eNvGOQ46bi94x25.png", size: "lg", isSmiling: true },
  { id: 10, src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9-AC7LaFxMhJo8MCm0zCv4EJRuXoIpQC.png", size: "xs", isSmiling: false },
  { id: 11, src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/17-mGFBkbqU58DuVrILg5rWgPEEoFcfqM.png", size: "xl", isSmiling: true },
  { id: 12, src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-bdY2XEkfNT4HW9437abQ63AcDAz5DV.png", size: "sm", isSmiling: false },
  { id: 13, src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/13-ve530mZt5SEnUalW89AC4t7cDqQfIi.png", size: "md", isSmiling: true },
  { id: 14, src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-90xIp6I0kvDxmAMQx2chKesKXUKH9K.png", size: "lg", isSmiling: true },
  { id: 15, src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/16-wrs334vodSl8rBNd0ZPQUftJmyIZru.png", size: "xs", isSmiling: false },
  { id: 16, src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20-V77l0jwmOvAvNUP1MLveCEDXWRTwoY.png", size: "xl", isSmiling: true },
  { id: 17, src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/15-GSvgiDI8yGw2kxzO7oFjkGJ4cudlBj.png", size: "sm", isSmiling: false },
  { id: 18, src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7-SIpMC3Js6dlNfGv8my32NHWo51A3TA.png", size: "lg", isSmiling: true },
  { id: 19, src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10-sR3uqTrOLYXrA0ianyNkUcdUjI63G5.png", size: "md", isSmiling: true },
  { id: 20, src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/12-PX0VLFCnT3TqsjxyTXB4LyXfNaEejj.png", size: "sm", isSmiling: true },
];

// Size classes with pixel widths for the horizontal scroll
const sizeStyles: Record<string, { width: number; height: number }> = {
  xl: { width: 280, height: 180 },
  lg: { width: 220, height: 140 },
  md: { width: 160, height: 100 },
  sm: { width: 120, height: 80 },
  xs: { width: 90, height: 60 },
};

export default function BuildMyStoryPage() {
  const scrollRef = useRef<HTMLDivElement>(null);

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

        {/* Image Collage - Horizontal scroll with scattered layout */}
        <div 
          ref={scrollRef}
          className="relative w-full h-[400px] overflow-x-auto overflow-y-hidden cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="absolute inset-0 flex items-center" style={{ width: '2400px' }}>
            {/* Left cluster */}
            <div className="absolute" style={{ left: '20px', top: '30px' }}>
              <div className="rounded-xl overflow-hidden shadow-md" style={{ width: sizeStyles.lg.width, height: sizeStyles.lg.height }}>
                <Image src={meetingImages[0].src} alt="" fill className="object-cover" sizes="280px" />
              </div>
            </div>
            <div className="absolute" style={{ left: '40px', top: '200px' }}>
              <div className="rounded-xl overflow-hidden shadow-md" style={{ width: sizeStyles.sm.width, height: sizeStyles.sm.height }}>
                <Image src={meetingImages[1].src} alt="" fill className="object-cover" sizes="120px" />
              </div>
            </div>
            <div className="absolute" style={{ left: '180px', top: '120px' }}>
              <div className="rounded-xl overflow-hidden shadow-md" style={{ width: sizeStyles.xs.width, height: sizeStyles.xs.height }}>
                <Image src={meetingImages[3].src} alt="" fill className="object-cover" sizes="90px" />
              </div>
            </div>
            <div className="absolute" style={{ left: '260px', top: '20px' }}>
              <div className="rounded-xl overflow-hidden shadow-md" style={{ width: sizeStyles.xl.width, height: sizeStyles.xl.height }}>
                <Image src={meetingImages[2].src} alt="" fill className="object-cover" sizes="280px" />
              </div>
            </div>
            <div className="absolute" style={{ left: '300px', top: '220px' }}>
              <div className="rounded-xl overflow-hidden shadow-md" style={{ width: sizeStyles.md.width, height: sizeStyles.md.height }}>
                <Image src={meetingImages[5].src} alt="" fill className="object-cover" sizes="160px" />
              </div>
            </div>
            
            {/* Center cluster with text */}
            <div className="absolute" style={{ left: '520px', top: '40px' }}>
              <div className="rounded-xl overflow-hidden shadow-md" style={{ width: sizeStyles.lg.width, height: sizeStyles.lg.height }}>
                <Image src={meetingImages[4].src} alt="" fill className="object-cover" sizes="220px" />
              </div>
            </div>
            <div className="absolute" style={{ left: '560px', top: '200px' }}>
              <div className="rounded-xl overflow-hidden shadow-md" style={{ width: sizeStyles.sm.width, height: sizeStyles.sm.height }}>
                <Image src={meetingImages[7].src} alt="" fill className="object-cover" sizes="120px" />
              </div>
            </div>
            <div className="absolute" style={{ left: '760px', top: '100px' }}>
              <div className="rounded-xl overflow-hidden shadow-md" style={{ width: sizeStyles.xs.width, height: sizeStyles.xs.height }}>
                <Image src={meetingImages[9].src} alt="" fill className="object-cover" sizes="90px" />
              </div>
            </div>
            
            {/* Center text */}
            <div className="absolute flex items-center justify-center" style={{ left: '880px', top: '80px', width: '320px', height: '240px' }}>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-neutral-900 text-center leading-tight">
                Real Conversations<br />behind Real Outcomes
              </h2>
            </div>
            
            <div className="absolute" style={{ left: '780px', top: '20px' }}>
              <div className="rounded-xl overflow-hidden shadow-md" style={{ width: sizeStyles.xl.width, height: sizeStyles.xl.height }}>
                <Image src={meetingImages[6].src} alt="" fill className="object-cover" sizes="280px" />
              </div>
            </div>
            <div className="absolute" style={{ left: '850px', top: '260px' }}>
              <div className="rounded-xl overflow-hidden shadow-md" style={{ width: sizeStyles.md.width, height: sizeStyles.md.height }}>
                <Image src={meetingImages[12].src} alt="" fill className="object-cover" sizes="160px" />
              </div>
            </div>
            
            {/* Right side cluster */}
            <div className="absolute" style={{ left: '1200px', top: '30px' }}>
              <div className="rounded-xl overflow-hidden shadow-md" style={{ width: sizeStyles.lg.width, height: sizeStyles.lg.height }}>
                <Image src={meetingImages[8].src} alt="" fill className="object-cover" sizes="220px" />
              </div>
            </div>
            <div className="absolute" style={{ left: '1220px', top: '200px' }}>
              <div className="rounded-xl overflow-hidden shadow-md" style={{ width: sizeStyles.xl.width, height: sizeStyles.xl.height }}>
                <Image src={meetingImages[10].src} alt="" fill className="object-cover" sizes="280px" />
              </div>
            </div>
            <div className="absolute" style={{ left: '1440px', top: '60px' }}>
              <div className="rounded-xl overflow-hidden shadow-md" style={{ width: sizeStyles.sm.width, height: sizeStyles.sm.height }}>
                <Image src={meetingImages[11].src} alt="" fill className="object-cover" sizes="120px" />
              </div>
            </div>
            <div className="absolute" style={{ left: '1500px', top: '180px' }}>
              <div className="rounded-xl overflow-hidden shadow-md" style={{ width: sizeStyles.lg.width, height: sizeStyles.lg.height }}>
                <Image src={meetingImages[13].src} alt="" fill className="object-cover" sizes="220px" />
              </div>
            </div>
            <div className="absolute" style={{ left: '1580px', top: '20px' }}>
              <div className="rounded-xl overflow-hidden shadow-md" style={{ width: sizeStyles.xs.width, height: sizeStyles.xs.height }}>
                <Image src={meetingImages[14].src} alt="" fill className="object-cover" sizes="90px" />
              </div>
            </div>
            
            {/* Far right cluster */}
            <div className="absolute" style={{ left: '1720px', top: '50px' }}>
              <div className="rounded-xl overflow-hidden shadow-md" style={{ width: sizeStyles.xl.width, height: sizeStyles.xl.height }}>
                <Image src={meetingImages[15].src} alt="" fill className="object-cover" sizes="280px" />
              </div>
            </div>
            <div className="absolute" style={{ left: '1760px', top: '260px' }}>
              <div className="rounded-xl overflow-hidden shadow-md" style={{ width: sizeStyles.sm.width, height: sizeStyles.sm.height }}>
                <Image src={meetingImages[16].src} alt="" fill className="object-cover" sizes="120px" />
              </div>
            </div>
            <div className="absolute" style={{ left: '1920px', top: '100px' }}>
              <div className="rounded-xl overflow-hidden shadow-md" style={{ width: sizeStyles.lg.width, height: sizeStyles.lg.height }}>
                <Image src={meetingImages[17].src} alt="" fill className="object-cover" sizes="220px" />
              </div>
            </div>
            <div className="absolute" style={{ left: '2020px', top: '20px' }}>
              <div className="rounded-xl overflow-hidden shadow-md" style={{ width: sizeStyles.md.width, height: sizeStyles.md.height }}>
                <Image src={meetingImages[18].src} alt="" fill className="object-cover" sizes="160px" />
              </div>
            </div>
            <div className="absolute" style={{ left: '2160px', top: '180px' }}>
              <div className="rounded-xl overflow-hidden shadow-md" style={{ width: sizeStyles.sm.width, height: sizeStyles.sm.height }}>
                <Image src={meetingImages[19].src} alt="" fill className="object-cover" sizes="120px" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll hint */}
        <p className="text-center text-sm text-neutral-400 py-4">Drag to explore</p>
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
