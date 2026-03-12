"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const bulletPoints = [
  "Dr. Mohamed Ragab, M.D., is a medical professional and an esteemed faculty member at Alexandria University.",
  "Over two decades of specialized experience in delivering world-class IGCSE and A-Level Biology education.",
  "A proven track record of mentoring top-achieving students who consistently rank among the highest scorers in Egypt.",
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-20 lg:py-28 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center p-8 lg:p-12 rounded-2xl backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl"
        >
          {/* Left - Image with soft radial white glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center lg:justify-start"
          >
            <div className="relative">
              <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                <div className="w-80 h-80 rounded-full bg-white/10 blur-3xl" />
              </div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative"
              >
                <Image
                  src="/images/mainbg.png"
                  alt="Dr. Mohamed Ragab"
                  width={400}
                  height={400}
                  className="w-full max-w-sm lg:max-w-md object-contain drop-shadow-2xl"
                  unoptimized
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Bullet points */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-[var(--accent-orange)] mb-6">
              About me
            </h2>
            <ul className="space-y-6">
              {bulletPoints.map((point, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4 text-lg"
                >
                  <span className="flex-shrink-0 w-2 h-2 mt-2.5 rounded-full bg-[var(--accent-orange)]" />
                  <span className="text-[#E2E8F0]">{point}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
