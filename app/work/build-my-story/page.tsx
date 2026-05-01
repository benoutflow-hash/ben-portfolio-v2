"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type MeetingCard = {
  id: number;
  src: string;
  alt: string;
  width: number;
  height: number;
  top: string;
  left: string;
  rotate: string;
  driftX: number;
  driftY: number;
};

const meetingCards: MeetingCard[] = [
  {
    id: 1,
    src: "/imported-assets/build-my-story-meetings/meeting-01.jpg",
    alt: "Build My Story meeting screenshot 1",
    width: 250,
    height: 156,
    top: "6%",
    left: "2%",
    rotate: "-5deg",
    driftX: -14,
    driftY: 8,
  },
  {
    id: 2,
    src: "/imported-assets/build-my-story-meetings/meeting-02.jpg",
    alt: "Build My Story meeting screenshot 2",
    width: 235,
    height: 148,
    top: "31%",
    left: "7%",
    rotate: "4deg",
    driftX: -18,
    driftY: -4,
  },
  {
    id: 3,
    src: "/imported-assets/build-my-story-meetings/meeting-03.jpg",
    alt: "Build My Story meeting screenshot 3",
    width: 220,
    height: 138,
    top: "60%",
    left: "3%",
    rotate: "-3deg",
    driftX: -15,
    driftY: 7,
  },
  {
    id: 4,
    src: "/imported-assets/build-my-story-meetings/meeting-04.jpg",
    alt: "Build My Story meeting screenshot 4",
    width: 250,
    height: 156,
    top: "14%",
    left: "18%",
    rotate: "5deg",
    driftX: -16,
    driftY: 9,
  },
  {
    id: 5,
    src: "/imported-assets/build-my-story-meetings/meeting-05.jpg",
    alt: "Build My Story meeting screenshot 5",
    width: 225,
    height: 142,
    top: "73%",
    left: "18%",
    rotate: "-4deg",
    driftX: -12,
    driftY: -8,
  },
  {
    id: 6,
    src: "/imported-assets/build-my-story-meetings/meeting-06.jpg",
    alt: "Build My Story meeting screenshot 6",
    width: 210,
    height: 132,
    top: "7%",
    left: "33%",
    rotate: "-2deg",
    driftX: -14,
    driftY: 6,
  },
  {
    id: 7,
    src: "/imported-assets/build-my-story-meetings/meeting-07.jpg",
    alt: "Build My Story meeting screenshot 7",
    width: 235,
    height: 148,
    top: "70%",
    left: "34%",
    rotate: "4deg",
    driftX: -18,
    driftY: -5,
  },
  {
    id: 8,
    src: "/imported-assets/build-my-story-meetings/meeting-08.jpg",
    alt: "Build My Story meeting screenshot 8",
    width: 245,
    height: 154,
    top: "12%",
    left: "58%",
    rotate: "-4deg",
    driftX: -15,
    driftY: 6,
  },
  {
    id: 9,
    src: "/imported-assets/build-my-story-meetings/meeting-09.jpg",
    alt: "Build My Story meeting screenshot 9",
    width: 220,
    height: 138,
    top: "72%",
    left: "56%",
    rotate: "3deg",
    driftX: -14,
    driftY: -6,
  },
  {
    id: 10,
    src: "/imported-assets/build-my-story-meetings/meeting-10.jpg",
    alt: "Build My Story meeting screenshot 10",
    width: 250,
    height: 156,
    top: "30%",
    left: "72%",
    rotate: "5deg",
    driftX: -16,
    driftY: 8,
  },
  {
    id: 11,
    src: "/imported-assets/build-my-story-meetings-set-a/meeting-11.jpg",
    alt: "Build My Story meeting screenshot 11",
    width: 230,
    height: 144,
    top: "58%",
    left: "74%",
    rotate: "-5deg",
    driftX: -15,
    driftY: -4,
  },
  {
    id: 12,
    src: "/imported-assets/build-my-story-meetings-set-a/meeting-12.jpg",
    alt: "Build My Story meeting screenshot 12",
    width: 220,
    height: 138,
    top: "8%",
    left: "83%",
    rotate: "4deg",
    driftX: -13,
    driftY: 7,
  },
  {
    id: 13,
    src: "/imported-assets/build-my-story-meetings-set-a/meeting-13.jpg",
    alt: "Build My Story meeting screenshot 13",
    width: 245,
    height: 154,
    top: "75%",
    left: "85%",
    rotate: "-3deg",
    driftX: -12,
    driftY: -7,
  },
  {
    id: 14,
    src: "/imported-assets/build-my-story-meetings-set-a/meeting-14.jpg",
    alt: "Build My Story meeting screenshot 14",
    width: 205,
    height: 128,
    top: "45%",
    left: "87%",
    rotate: "6deg",
    driftX: -18,
    driftY: 8,
  },
  {
    id: 15,
    src: "/imported-assets/build-my-story-meetings-set-a/meeting-15.jpg",
    alt: "Build My Story meeting screenshot 15",
    width: 215,
    height: 134,
    top: "1%",
    left: "95%",
    rotate: "-4deg",
    driftX: -16,
    driftY: 9,
  },
  {
    id: 16,
    src: "/imported-assets/build-my-story-meetings-set-a/meeting-16.jpg",
    alt: "Build My Story meeting screenshot 16",
    width: 225,
    height: 142,
    top: "62%",
    left: "99%",
    rotate: "3deg",
    driftX: -14,
    driftY: -5,
  },
  {
    id: 17,
    src: "/imported-assets/build-my-story-meetings-set-a/meeting-17.jpg",
    alt: "Build My Story meeting screenshot 17",
    width: 235,
    height: 148,
    top: "18%",
    left: "111%",
    rotate: "-5deg",
    driftX: -15,
    driftY: 6,
  },
  {
    id: 18,
    src: "/imported-assets/build-my-story-meetings-set-a/meeting-18.jpg",
    alt: "Build My Story meeting screenshot 18",
    width: 210,
    height: 132,
    top: "76%",
    left: "114%",
    rotate: "4deg",
    driftX: -12,
    driftY: -7,
  },
  {
    id: 19,
    src: "/imported-assets/build-my-story-meetings-set-a/meeting-19.jpg",
    alt: "Build My Story meeting screenshot 19",
    width: 245,
    height: 154,
    top: "36%",
    left: "121%",
    rotate: "-4deg",
    driftX: -16,
    driftY: 8,
  },
  {
    id: 20,
    src: "/imported-assets/build-my-story-meetings-set-a/meeting-20.jpg",
    alt: "Build My Story meeting screenshot 20",
    width: 220,
    height: 138,
    top: "7%",
    left: "129%",
    rotate: "5deg",
    driftX: -14,
    driftY: 7,
  },
];

export default function BuildMyStoryPage() {
  const [dragX, setDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const dragState = useRef({ startX: 0, startDragX: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!isDragging) return;
      const delta = event.clientX - dragState.current.startX;
      setDragX(dragState.current.startDragX + delta);
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (!isDragging) return;
      const delta = (event.touches[0]?.clientX ?? 0) - dragState.current.startX;
      setDragX(dragState.current.startDragX + delta);
    };

    const stopDrag = () => setIsDragging(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", stopDrag);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", stopDrag);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", stopDrag);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", stopDrag);
    };
  }, [isDragging]);

  const startDrag = (clientX: number) => {
    setIsDragging(true);
    dragState.current = {
      startX: clientX,
      startDragX: dragX,
    };
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="overflow-hidden bg-[linear-gradient(180deg,#fcfcfc_0%,#f8f8f8_100%)] pt-10 md:pt-14">
        <div className="mx-auto max-w-[1600px] px-3 sm:px-6 lg:px-8">
          <div
            className={`build-story-collage build-story-collage-wide ${
              isDragging ? "build-story-collage-dragging" : ""
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onMouseDown={(event) => startDrag(event.clientX)}
            onTouchStart={(event) => startDrag(event.touches[0]?.clientX ?? 0)}
          >
            <div
              className={`build-story-collage-stage ${isHovered ? "build-story-collage-stage-hovered" : ""} ${
                isDragging ? "build-story-collage-stage-dragging" : ""
              }`}
              style={{ transform: `translateX(${dragX}px)` }}
            >
              {meetingCards.map((card) => (
                <article
                  key={card.id}
                  className="build-story-card"
                  style={{
                    width: `${card.width}px`,
                    height: `${card.height}px`,
                    top: card.top,
                    left: card.left,
                    rotate: card.rotate,
                    ["--rotation" as string]: card.rotate,
                    ["--drift-x" as string]: `${card.driftX}px`,
                    ["--drift-y" as string]: `${card.driftY}px`,
                  }}
                >
                  <div className="build-story-card-inner">
                    <Image
                      src={card.src}
                      alt={card.alt}
                      fill
                      sizes="(max-width: 768px) 42vw, 250px"
                      className="object-cover"
                    />
                  </div>
                </article>
              ))}

              <div className="build-story-heading-wrap">
                <h1 className="build-story-heading font-serif text-4xl font-semibold tracking-[-0.05em] text-neutral-950 md:text-6xl xl:text-7xl">
                  Real Conversations
                  <br />
                  behind Real Outcomes
                </h1>
              </div>
            </div>
          </div>

          <div className="px-3 pt-6 pb-10 text-center text-sm text-neutral-400 md:px-6">
            Slide through the collage or drag it to reveal more.
          </div>

          <div className="px-3 pb-10 md:px-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-neutral-500 transition-colors hover:text-neutral-900"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </div>
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
