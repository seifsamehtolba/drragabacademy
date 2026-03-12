"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Film, Stethoscope, Smartphone, Sparkles } from "lucide-react";
import AppDownloadButtons from "./ui/AppDownloadButtons";

const features = [
  {
    title: "Cinematic Lessons",
    description: "High-quality visual content that turns abstract theories into memorable mental maps.",
    Icon: Film,
    iconBg: "bg-amber-500/20 border-amber-400/30",
    iconColor: "text-amber-400",
  },
  {
    title: "Physician's Insight",
    description: "Benefit from clinical perspectives that provide a deeper understanding of human biology.",
    Icon: Stethoscope,
    iconBg: "bg-teal-400/20 border-teal-300/30",
    iconColor: "text-teal-300",
  },
  {
    title: "Learning on the Go",
    description: "Access your dashboard and study materials anywhere with our dedicated mobile platform.",
    Icon: Smartphone,
    iconBg: "bg-emerald-500/20 border-emerald-400/30",
    iconColor: "text-emerald-400",
  },
];

export default function BiologyMadeFunSection() {
  return (
    <section
      id="biology-made-fun"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Soft radial white glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-white/5 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center p-6 sm:p-8 lg:p-14 rounded-2xl lg:rounded-3xl backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-8"
          >
            <div>
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--accent-orange)]/20 border border-[var(--accent-orange)]/40 text-[var(--accent-orange)] text-sm font-medium mb-4"
              >
                <Sparkles className="w-4 h-4" strokeWidth={2} />
                Interactive Learning
              </motion.span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FFFFFF] tracking-tight">
                Biology Made Fun
                <span className="ml-2 inline-block" aria-hidden>😊</span>
              </h2>
              <p className="mt-4 text-[#E2E8F0] text-lg lg:text-xl leading-relaxed max-w-xl">
                We believe education should be as vibrant as life itself. Dr. Ragab simplifies the awe-inspiring processes of biology—from cellular metabolism to complex ecosystems—making world-class science accessible to everyone.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {features.map((f, i) => {
                const FeatureIcon = f.Icon;
                return (
                  <motion.div
                    key={f.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    className="group flex flex-col items-center text-center p-5 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl hover:bg-white/15 hover:border-white/25 transition-all duration-300"
                  >
                    <motion.div
                      className={`mb-3 w-14 h-14 rounded-xl flex items-center justify-center border ${f.iconBg} group-hover:scale-110 transition-transform duration-300`}
                      animate={{ scale: [1, 1.03, 1] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <FeatureIcon className={`w-7 h-7 ${f.iconColor}`} strokeWidth={2} />
                    </motion.div>
                    <h3 className="font-semibold text-[#FFFFFF] mb-1.5 text-base">{f.title}</h3>
                    <p className="text-sm text-[#E2E8F0] leading-snug">{f.description}</p>
                  </motion.div>
                );
              })}
            </div>

            <div id="download" className="pt-2">
              <p className="text-sm font-medium text-[#E2E8F0] mb-3">Download the app and start learning today</p>
              <AppDownloadButtons />
            </div>
          </motion.div>

          {/* Right - Phone mockup centered */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex justify-center items-center py-8 lg:py-12"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="relative flex justify-center items-center"
            >
              <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                <div className="w-96 h-96 rounded-full bg-white/10 blur-3xl" />
              </div>
              <div className="relative w-72 sm:w-80 mx-auto">
                <div className="aspect-[9/19] rounded-[2.5rem] bg-gradient-to-b from-gray-900 to-gray-950 p-2.5 shadow-2xl border border-white/20 overflow-visible ring-4 ring-white/5">
                  <div className="w-full h-full rounded-[2rem] overflow-hidden bg-white shadow-inner">
                    <Image
                      src="/images/app-screenshot.png"
                      alt="Dr. Ragab Learning App"
                      width={360}
                      height={720}
                      className="w-full h-full object-contain"
                      unoptimized
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
