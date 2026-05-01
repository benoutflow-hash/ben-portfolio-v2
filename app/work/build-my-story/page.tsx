"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

type MeetingImage = {
  id: number;
  src: string;
  alt: string;
};

const meetingImages: MeetingImage[] = [
  {
    id: 1,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-mwA9JuZtKrxUCG7U5eq7J8mpaYEixd.png",
    alt: "Build My Story meeting moment 1",
  },
  {
    id: 2,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8-bYRzzx7Y2G87mgzKxWrh7bdituuoLF.png",
    alt: "Build My Story meeting moment 2",
  },
  {
    id: 3,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-PO5OfMSiK3hsJOxiGE3oAxZYXlYt9F.png",
    alt: "Build My Story meeting moment 3",
  },
  {
    id: 4,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/14-bGvvFTiFdNXbCDKHFJsEK585n0CI3S.png",
    alt: "Build My Story meeting moment 4",
  },
  {
    id: 5,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/19-wizrE3900LXf9AZdow8R0by910wFif.png",
    alt: "Build My Story meeting moment 5",
  },
  {
    id: 6,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-iJFLTvCc5htXKRwS9H2mIaVm5DJRFH.png",
    alt: "Build My Story meeting moment 6",
  },
  {
    id: 7,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/18-EKqAE9B6tJBEOqz3l49gBmI2tt8KNO.png",
    alt: "Build My Story meeting moment 7",
  },
  {
    id: 8,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-jEk8H1aFPa2uZgSsp5DwclQrrBoq6o.png",
    alt: "Build My Story meeting moment 8",
  },
  {
    id: 9,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/11-hggyMK25BdsZWI0eNvGOQ46bi94x25.png",
    alt: "Build My Story meeting moment 9",
  },
  {
    id: 10,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9-AC7LaFxMhJo8MCm0zCv4EJRuXoIpQC.png",
    alt: "Build My Story meeting moment 10",
  },
  {
    id: 11,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/17-mGFBkbqU58DuVrILg5rWgPEEoFcfqM.png",
    alt: "Build My Story meeting moment 11",
  },
  {
    id: 12,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-bdY2XEkfNT4HW9437abQ63AcDAz5DV.png",
    alt: "Build My Story meeting moment 12",
  },
  {
    id: 13,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/13-ve530mZt5SEnUalW89AC4t7cDqQfIi.png",
    alt: "Build My Story meeting moment 13",
  },
  {
    id: 14,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-90xIp6I0kvDxmAMQx2chKesKXUKH9K.png",
    alt: "Build My Story meeting moment 14",
  },
  {
    id: 15,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/16-wrs334vodSl8rBNd0ZPQUftJmyIZru.png",
    alt: "Build My Story meeting moment 15",
  },
  {
    id: 16,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20-V77l0jwmOvAvNUP1MLveCEDXWRTwoY.png",
    alt: "Build My Story meeting moment 16",
  },
  {
    id: 17,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/15-GSvgiDI8yGw2kxzO7oFjkGJ4cudlBj.png",
    alt: "Build My Story meeting moment 17",
  },
  {
    id: 18,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7-SIpMC3Js6dlNfGv8my32NHWo51A3TA.png",
    alt: "Build My Story meeting moment 18",
  },
  {
    id: 19,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10-sR3uqTrOLYXrA0ianyNkUcdUjI63G5.png",
    alt: "Build My Story meeting moment 19",
  },
  {
    id: 20,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/12-PX0VLFCnT3TqsjxyTXB4LyXfNaEejj.png",
    alt: "Build My Story meeting moment 20",
  },
];

const rowLayouts = [
  ["sm", "md", "sm", "lg", "md"],
  ["lg", "sm", "md", "sm", "lg"],
  ["md", "lg", "sm", "md", "sm"],
] as const;

const sizeClassMap = {
  sm: "w-[180px] md:w-[210px]",
  md: "w-[230px] md:w-[280px]",
  lg: "w-[290px] md:w-[360px]",
};

function MeetingRow({
  title,
  images,
  reverse = false,
  speed = 42,
}: {
  title: string;
  images: MeetingImage[];
  reverse?: boolean;
  speed?: number;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const dragState = useRef({
    startX: 0,
    startOffset: 0,
  });

  const repeatedImages = useMemo(() => [...images, ...images], [images]);

  const startDrag = (clientX: number) => {
    setIsDragging(true);
    dragState.current = {
      startX: clientX,
      startOffset: dragOffset,
    };
  };

  const updateDrag = (clientX: number) => {
    if (!isDragging) return;

    const delta = clientX - dragState.current.startX;
    setDragOffset(dragState.current.startOffset + delta);
  };

  const stopDrag = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const handlePointerUp = () => stopDrag();
    const handleMouseMove = (event: MouseEvent) => updateDrag(event.clientX);
    const handleTouchMove = (event: TouchEvent) => {
      updateDrag(event.touches[0]?.clientX ?? 0);
    };

    window.addEventListener("mouseup", handlePointerUp);
    window.addEventListener("touchend", handlePointerUp);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener("mouseup", handlePointerUp);
      window.removeEventListener("touchend", handlePointerUp);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [isDragging, dragOffset]);

  return (
    <div className="meeting-row-group">
      <p className="mb-4 text-[0.72rem] uppercase tracking-[0.3em] text-neutral-400">
        {title}
      </p>
      <div
        className="meeting-row-shell"
        onMouseDown={(event) => startDrag(event.clientX)}
        onTouchStart={(event) => startDrag(event.touches[0]?.clientX ?? 0)}
      >
        <div
          ref={trackRef}
          className={`meeting-row-track ${reverse ? "meeting-row-track-reverse" : ""} ${
            isDragging ? "meeting-row-track-paused" : ""
          }`}
          style={{
            animationDuration: `${speed}s`,
            transform: `translateX(${dragOffset}px)`,
          }}
        >
          {repeatedImages.map((image, index) => {
            const size = rowLayouts[index % rowLayouts.length][index % 5];

            return (
              <article
                key={`${image.id}-${index}`}
                className={`meeting-card ${sizeClassMap[size]}`}
              >
                <div className="meeting-card-media">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 768px) 240px, 360px"
                    className="object-cover"
                  />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function BuildMyStoryPage() {
  const rows = useMemo(
    () => [
      meetingImages.slice(0, 5),
      meetingImages.slice(5, 10),
      meetingImages.slice(10, 15),
      meetingImages.slice(15, 20),
    ],
    [],
  );

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#fcfcfc_52%,#f7f7f7_100%)] pt-20 pb-12">
        <div className="px-6 lg:px-8 mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-neutral-500 transition-colors hover:text-neutral-900"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>

        <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
          <div className="mb-14 max-w-2xl px-2 md:px-4">
            <p className="mb-4 text-[0.72rem] uppercase tracking-[0.32em] text-neutral-500">
              Featured Case Study
            </p>
            <h1 className="font-serif text-4xl font-semibold tracking-[-0.04em] text-neutral-950 md:text-6xl">
              Real Conversations behind Real Outcomes
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-neutral-600 md:text-lg">
              A visual strip of the calls, moments, and operator work behind Build
              My Story. Once the layout is approved, we can replace every image
              with your final meeting screenshots.
            </p>
          </div>

          <div className="space-y-7">
            <MeetingRow title="Meetings, onboarding, customer delivery" images={rows[0]} speed={40} />
            <MeetingRow title="Founder-side execution and real customer conversations" images={rows[1]} reverse speed={46} />
            <MeetingRow title="Systems, support, and momentum across the week" images={rows[2]} speed={44} />
            <MeetingRow title="Delivery moments worth showing in the room" images={rows[3]} reverse speed={50} />
          </div>
        </div>

        <div className="px-6 pt-6 text-center text-sm text-neutral-400">
          Hover to slow the flow. Drag any row to scrub through the gallery.
        </div>
      </section>

      <section className="w-full border-b border-neutral-200 bg-white py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 md:grid-cols-3 md:gap-8 lg:px-8">
          <div className="text-center md:text-left">
            <p className="mb-3 text-5xl font-semibold tracking-tight text-neutral-900 md:text-6xl">
              11%
            </p>
            <p className="text-base leading-relaxed text-neutral-600">
              Placeholder description text for this statistic. Add context about what this percentage represents.
            </p>
          </div>

          <div className="text-center md:text-left">
            <p className="mb-3 text-5xl font-semibold tracking-tight text-neutral-900 md:text-6xl">
              $11,200
            </p>
            <p className="text-base leading-relaxed text-neutral-600">
              Placeholder description text for this statistic. Add context about what this dollar amount represents.
            </p>
          </div>

          <div className="text-center md:text-left">
            <p className="mb-3 text-5xl font-semibold tracking-tight text-neutral-900 md:text-6xl">
              847
            </p>
            <p className="text-base leading-relaxed text-neutral-600">
              Placeholder description text for this statistic. Add context about what this number represents.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-sm uppercase tracking-[0.28em] text-neutral-500">
            Featured Case Study
          </p>
          <h2 className="mb-8 font-serif text-4xl font-semibold tracking-[-0.04em] text-neutral-900 md:text-5xl">
            Build My Story
          </h2>
          <p className="max-w-3xl text-lg leading-8 text-neutral-600">
            This is a portfolio page which will have a few images and text of me going through what I have done at Build My Story, which is the company I work at now.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 font-serif text-3xl font-semibold tracking-[-0.02em] text-neutral-900">
            Overview
          </h2>
          <p className="mb-8 text-base leading-8 text-neutral-600">
            Placeholder text describing your role and responsibilities at Build My Story. This section can detail the company background, your position, and the overall scope of your work. Add information about the team, the mission, and your day-to-day contributions.
          </p>

          <h2 className="mt-16 mb-6 font-serif text-3xl font-semibold tracking-[-0.02em] text-neutral-900">
            Key Responsibilities
          </h2>
          <p className="mb-8 text-base leading-8 text-neutral-600">
            Placeholder text for your key responsibilities. Describe the main areas you focused on, the challenges you tackled, and the systems you built or improved. This could include sales processes, customer onboarding, CRM management, and cross-functional collaboration.
          </p>

          <h2 className="mt-16 mb-6 font-serif text-3xl font-semibold tracking-[-0.02em] text-neutral-900">
            Impact & Results
          </h2>
          <p className="mb-8 text-base leading-8 text-neutral-600">
            Placeholder text for the impact and results of your work. Connect back to the statistics shown above and provide context for how these numbers were achieved. Include any notable wins, improvements, or milestones.
          </p>
        </div>
      </section>

      <section className="border-t border-neutral-200 bg-neutral-50 px-6 py-12 lg:px-8">
        <div className="mx-auto flex max-w-4xl items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-neutral-600 transition-colors hover:text-neutral-900"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <Link
            href="/work/automation-systems"
            className="text-neutral-600 transition-colors hover:text-neutral-900"
          >
            Next Project
          </Link>
        </div>
      </section>
    </main>
  );
}
