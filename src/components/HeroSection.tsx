"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SocialIcons from "./ui/SocialIcons";
import MagneticButton from "./ui/MagneticButton";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="rounded-2xl backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl p-6 sm:p-8 lg:p-12"
        >
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Text content */}
            <div className="space-y-6 order-2 lg:order-1">
              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#FFFFFF] tracking-tight"
              >
                Dr. Mohamed Ragab
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="text-2xl sm:text-3xl lg:text-4xl text-[#E2E8F0] font-normal"
              >
                Expert Physician & Educator
              </motion.p>
              <motion.p
                variants={itemVariants}
                className="text-lg text-[#E2E8F0] max-w-xl"
              >
                Master the science of life with Egypt&apos;s premier IGCSE &amp; A-Level specialist. Transform complex concepts into clinical clarity and academic excellence.
              </motion.p>
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                <MagneticButton className="w-full sm:flex-1 sm:min-w-[180px]">
                  <Link
                    href="#courses"
                    className="inline-flex w-full justify-center items-center h-12 px-6 py-4 rounded-lg bg-[var(--accent-orange)] text-white font-semibold text-base sm:text-lg hover:bg-[var(--accent-orange-hover)] transition-colors shadow-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] active:scale-[0.98]"
                  >
                    Start Learning
                  </Link>
                </MagneticButton>
                <MagneticButton className="w-full sm:flex-1 sm:min-w-[180px]">
                  <Link
                    href="#courses"
                    className="inline-flex w-full justify-center items-center h-12 px-6 py-4 rounded-lg border-2 border-white/60 text-[#FFFFFF] font-semibold text-base sm:text-lg hover:bg-white/10 transition-colors backdrop-blur-sm hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] active:scale-[0.98]"
                  >
                    Explore Courses
                  </Link>
                </MagneticButton>
              </motion.div>
              <motion.div variants={itemVariants} className="pt-6">
                <p className="text-sm font-medium text-[#E2E8F0] mb-2">Join Our Community</p>
                <SocialIcons variant="dark" />
              </motion.div>
            </div>

            {/* Right - Professor image */}
            <motion.div
              variants={itemVariants}
              className="relative flex justify-center lg:justify-end order-1 lg:order-2"
            >
              <motion.div
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative"
              >
                <Image
                  src="/images/main.png"
                  alt="Dr. Mohamed Ragab, M.D."
                  width={500}
                  height={600}
                  className="w-full max-w-sm lg:max-w-md object-contain"
                  priority
                  unoptimized
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
