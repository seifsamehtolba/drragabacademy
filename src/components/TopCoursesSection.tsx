"use client";

import { motion } from "framer-motion";
import { useRef, useCallback, useEffect, useState } from "react";
import CourseCard from "./ui/CourseCard";

const courses = [
  {
    title: "IGCSE Biology",
    subtitle: "Your Gateway to the Biological Sciences",
    description:
      "Build a rock-solid foundation in life sciences through engaging, visual-first lessons designed for IGCSE success.",
    level: "Core & Extended",
    variant: "igcse" as const,
  },
  {
    title: "Advanced Biology",
    subtitle: "Bridging the Gap to Your Medical Career",
    variant: "alevel" as const,
  },
  {
    title: "Grade 9 Foundation",
    subtitle: "Simplifying Science for Young Minds",
    variant: "grade9" as const,
  },
  {
    title: "Specialized Physiology",
    subtitle: "Advanced Human Anatomy & Systems",
    variant: "postgraduates" as const,
  },
];

const CARD_WIDTH = 344; // w-80 (320) + gap-6 (24)
const AUTO_SCROLL_INTERVAL = 4000;

export default function TopCoursesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const scroll = useCallback((direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    setIsPaused(true);
    const amount = direction === "left" ? -CARD_WIDTH : CARD_WIDTH;
    el.scrollBy({ left: amount, behavior: "smooth" });
    setTimeout(() => setIsPaused(false), 5000);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const el = scrollRef.current;
    if (!el) return;

    const interval = setInterval(() => {
      const { scrollLeft, scrollWidth, clientWidth } = el;
      const maxScroll = scrollWidth - clientWidth;
      if (maxScroll <= 0) return;

      if (scrollLeft >= maxScroll - 10) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: CARD_WIDTH, behavior: "smooth" });
      }
    }, AUTO_SCROLL_INTERVAL);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section
      id="courses"
      className="relative py-20 lg:py-28 overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-4xl lg:text-5xl font-bold text-center text-[#FFFFFF] mb-16"
        >
          Featured Courses
        </motion.h2>

        <div className="relative">
          {/* Left arrow */}
          <button
            onClick={() => scroll("left")}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full backdrop-blur-xl bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all focus:outline-none"
            aria-label="Scroll Previous"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right arrow */}
          <button
            onClick={() => scroll("right")}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full backdrop-blur-xl bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all focus:outline-none"
            aria-label="Scroll Next"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div
            ref={scrollRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="overflow-x-auto overflow-y-hidden pb-4 scrollbar-hide -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
          >
            <div className="flex gap-6 min-w-max items-stretch">
              {courses.map((course, i) => (
                <div key={course.title} className="w-80 flex-shrink-0 h-[420px]">
                  <CourseCard
                    title={course.title}
                    subtitle={course.subtitle}
                    description={"description" in course ? course.description : undefined}
                    level={"level" in course ? course.level : undefined}
                    variant={course.variant}
                    index={i}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
