"use client";

import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import Image from "next/image";
import { useRef, useCallback, useEffect, useState } from "react";

const achievers = [
  { title: "TOP OF EGYPT O. L. 2011", subtitle: "الأول في مصر", image: "/images/hall-of-fame/hof-1.jpeg", highlight: false },
  { title: "TOP EGYPT A. S. 2012", subtitle: "الأول في مصر", image: "/images/hall-of-fame/hof-2.jpeg", highlight: false },
  { title: "TOP EGYPT 2014", subtitle: "الأول في مصر", image: "/images/hall-of-fame/hof-3.jpeg", highlight: false },
  { title: "TOP OF EGYPT A. S. 2015", subtitle: "الأول في مصر", image: "/images/hall-of-fame/hof-4.jpeg", highlight: false },
  { title: "TOP ALEXANDRIA A. S. 2016", subtitle: "الأول في الأسكندرية", image: "/images/hall-of-fame/hof-5.jpeg", highlight: false },
  { title: "TOP ALEXANDRIA A. S. 2016 november", subtitle: "الأول في الأسكندرية", image: "/images/hall-of-fame/hof-6.jpeg", highlight: false },
  { title: "TOP OF THE WORLD A. S. 2017 🌟", subtitle: "الأول على العالم", image: "/images/hall-of-fame/hof-7.jpeg", highlight: true },
  { title: "TOP ALEXANDRIA A. S. 2018", subtitle: "الأول في الأسكندرية", image: "/images/hall-of-fame/hof-8.jpeg", highlight: false },
  { title: "TOP OF THE WORLD A. S. November 2019 🌟", subtitle: "الأول علي العالم", image: "/images/hall-of-fame/hof-9.jpeg", highlight: true },
  { title: "TOP OF ALEXANDRIA JUNE 2019", subtitle: "الأول في الأسكندرية", image: "/images/hall-of-fame/hof-10.jpeg", highlight: false },
  { title: "TOP THE REGION A. L. 2020 🌟", subtitle: "الأول في المنطقة", image: "/images/hall-of-fame/hof-11.jpeg", highlight: true },
  { title: "TOP IN EGYPT A. L. 2022", subtitle: "الأول في مصر", image: "/images/hall-of-fame/hof-12.jpeg", highlight: false },
  { title: "TOP ALEXANDRIA A. S. 2023", subtitle: "الأول في الأسكندرية", image: "/images/hall-of-fame/hof-13.jpeg", highlight: false },
  { title: "الحمد لله", subtitle: "", image: "/images/hall-of-fame/hof-14.jpeg", highlight: false },
];

const CARD_WIDTH = 290; // 250px card + 40px gap
const AUTO_SCROLL_INTERVAL = 4000;

export default function HallOfFameSection() {
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
      id="hall-of-fame"
      className="relative py-20 lg:py-28 overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--accent-orange)]/20 border border-[var(--accent-orange)]/40 text-[var(--accent-orange)] text-sm font-medium mb-4">
            <Trophy className="w-4 h-4" strokeWidth={2} />
            Celebrating Excellence
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#FFFFFF] mb-4">
            Hall of Fame
          </h2>
          <p className="text-[#E2E8F0] text-lg max-w-2xl mx-auto">
            Our students consistently achieve top results. Meet the high achievers who have excelled in IGCSE and A-Level Biology.
          </p>
        </motion.div>

        <div className="relative">
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
            <div className="flex gap-10 min-w-max items-stretch">
              {achievers.map((item, i) => (
                <motion.div
                  key={`${item.title}-${i}`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="w-[250px] flex-shrink-0 flex flex-col"
                >
                  <div
                    className={`rounded-2xl overflow-hidden backdrop-blur-lg border shadow-2xl transition-all duration-300 flex flex-col h-full ${
                      item.highlight
                        ? "bg-[var(--accent-orange)]/15 border-[var(--accent-orange)]/40"
                        : "bg-white/10 border-white/20 hover:bg-white/15 hover:border-white/25"
                    }`}
                  >
                    <div className="relative aspect-[3/4] w-full overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="250px"
                        className="object-cover rounded-t-2xl"
                      />
                    </div>
                    <div className="p-4 flex flex-col items-end gap-1">
                      <span className="text-[#FFFFFF] font-semibold text-base text-right leading-tight">
                        {item.title}
                      </span>
                      {item.subtitle && (
                        <span className="text-[#E2E8F0] text-sm text-right">
                          {item.subtitle}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
