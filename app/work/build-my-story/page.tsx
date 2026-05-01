"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

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
    width: 260,
    height: 162,
    top: "7%",
    left: "49%",
    rotate: "-5deg",
    driftX: -10,
    driftY: 8,
  },
  {
    id: 2,
    src: "/imported-assets/build-my-story-meetings/meeting-02.jpg",
    alt: "Build My Story meeting screenshot 2",
    width: 220,
    height: 138,
    top: "6%",
    left: "66%",
    rotate: "4deg",
    driftX: -8,
    driftY: -6,
  },
  {
    id: 3,
    src: "/imported-assets/build-my-story-meetings/meeting-03.jpg",
    alt: "Build My Story meeting screenshot 3",
    width: 245,
    height: 154,
    top: "18%",
    left: "81%",
    rotate: "-3deg",
    driftX: -11,
    driftY: 7,
  },
  {
    id: 4,
    src: "/imported-assets/build-my-story-meetings/meeting-04.jpg",
    alt: "Build My Story meeting screenshot 4",
    width: 215,
    height: 134,
    top: "32%",
    left: "46%",
    rotate: "3deg",
    driftX: -10,
    driftY: 5,
  },
  {
    id: 5,
    src: "/imported-assets/build-my-story-meetings/meeting-05.jpg",
    alt: "Build My Story meeting screenshot 5",
    width: 235,
    height: 148,
    top: "30%",
    left: "61%",
    rotate: "-4deg",
    driftX: -9,
    driftY: -6,
  },
  {
    id: 6,
    src: "/imported-assets/build-my-story-meetings/meeting-06.jpg",
    alt: "Build My Story meeting screenshot 6",
    width: 205,
    height: 128,
    top: "42%",
    left: "76%",
    rotate: "5deg",
    driftX: -8,
    driftY: 6,
  },
  {
    id: 7,
    src: "/imported-assets/build-my-story-meetings/meeting-07.jpg",
    alt: "Build My Story meeting screenshot 7",
    width: 250,
    height: 156,
    top: "54%",
    left: "50%",
    rotate: "-3deg",
    driftX: -10,
    driftY: -7,
  },
  {
    id: 8,
    src: "/imported-assets/build-my-story-meetings/meeting-08.jpg",
    alt: "Build My Story meeting screenshot 8",
    width: 220,
    height: 138,
    top: "55%",
    left: "67%",
    rotate: "4deg",
    driftX: -8,
    driftY: 5,
  },
  {
    id: 9,
    src: "/imported-assets/build-my-story-meetings/meeting-09.jpg",
    alt: "Build My Story meeting screenshot 9",
    width: 235,
    height: 148,
    top: "66%",
    left: "81%",
    rotate: "-5deg",
    driftX: -11,
    driftY: -6,
  },
  {
    id: 10,
    src: "/imported-assets/build-my-story-meetings/meeting-10.jpg",
    alt: "Build My Story meeting screenshot 10",
    width: 205,
    height: 128,
    top: "78%",
    left: "59%",
    rotate: "3deg",
    driftX: -8,
    driftY: 6,
  },
  {
    id: 11,
    src: "/imported-assets/build-my-story-meetings-set-a/meeting-11.jpg",
    alt: "Build My Story meeting screenshot 11",
    width: 215,
    height: 134,
    top: "82%",
    left: "75%",
    rotate: "-4deg",
    driftX: -8,
    driftY: -5,
  },
  {
    id: 12,
    src: "/imported-assets/build-my-story-meetings-set-a/meeting-12.jpg",
    alt: "Build My Story meeting screenshot 12",
    width: 195,
    height: 122,
    top: "12%",
    left: "92%",
    rotate: "5deg",
    driftX: -7,
    driftY: 5,
  },
];

export default function BuildMyStoryPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="overflow-hidden bg-[linear-gradient(180deg,#fcfcfc_0%,#f8f8f8_100%)] pt-10 md:pt-14">
        <div className="mx-auto max-w-[1600px] px-3 sm:px-6 lg:px-8">
          <div className="build-story-static-layout">
            <div className="build-story-copy-column">
              <h1 className="build-story-heading-left font-serif text-4xl font-semibold tracking-[-0.05em] text-neutral-950 md:text-6xl xl:text-7xl">
                Real Conversations
                <br />
                behind Real Outcomes
              </h1>
            </div>

            <div className="build-story-static-collage">
              {meetingCards.map((card) => (
                <article
                  key={card.id}
                  className="build-story-card build-story-card-static"
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
                      sizes="(max-width: 768px) 42vw, 260px"
                      className="object-cover"
                    />
                  </div>
                </article>
              ))}
            </div>
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
