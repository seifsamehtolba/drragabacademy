"use client";

import { motion } from "framer-motion";
import { ThemedVideoPlayer } from "./ui/ThemedVideoPlayer";

export default function QuoteVideoSection() {
  return (
    <section id="quote" className="relative py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center p-8 lg:p-12 rounded-2xl backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl"
        >
          {/* Left - Quote */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-medium text-[#E2E8F0] leading-relaxed">
              &ldquo;Life is not a random event; it is a miracle. Biology is not
              just a subject—it is the lens through which we appreciate the wonders of creation.&rdquo;
            </blockquote>
            <div className="flex items-center gap-4">
              <svg
                className="w-16 h-8 text-[#E2E8F0]"
                viewBox="0 0 80 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              >
                <path d="M5 35 Q20 25 35 30 T65 25" />
              </svg>
              <p className="text-[#FFFFFF] text-lg font-medium">
                Dr. Mohamed Ragab, M.D.
              </p>
            </div>
          </motion.div>

          {/* Right - Custom themed video player */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex justify-center lg:justify-end"
          >
            <ThemedVideoPlayer />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
