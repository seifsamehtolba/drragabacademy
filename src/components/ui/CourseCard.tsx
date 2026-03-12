"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Microscope,
  Trophy,
  Sparkles,
  HeartPulse,
  ArrowRight,
} from "lucide-react";

interface CourseCardProps {
  title: string;
  subtitle?: string;
  description?: string;
  level?: string;
  variant: "igcse" | "alevel" | "grade9" | "postgraduates";
  index: number;
}

const iconMap = {
  igcse: Microscope,
  alevel: Trophy,
  grade9: Sparkles,
  postgraduates: HeartPulse,
};

const variantStyles = {
  igcse: {
    iconBg: "bg-[var(--course-igcse-muted)] border-[var(--course-igcse)]/40",
    iconColor: "text-[var(--course-igcse)]",
    cardBorder: "border-[var(--course-igcse)]/30",
    badge: "bg-[var(--course-igcse)]/30 text-[var(--course-igcse)] border border-[var(--course-igcse)]/50",
    button: "bg-[var(--course-igcse)]/20 text-[var(--course-igcse)] border-[var(--course-igcse)]/50 hover:bg-[var(--course-igcse)]/30",
  },
  alevel: {
    iconBg: "bg-[var(--course-alevel-muted)] border-[var(--course-alevel)]/40",
    iconColor: "text-[var(--course-alevel)]",
    cardBorder: "border-[var(--course-alevel)]/30",
    badge: "bg-[var(--course-alevel)]/30 text-[var(--course-alevel)] border border-[var(--course-alevel)]/50",
    button: "bg-[var(--course-alevel)]/20 text-[var(--course-alevel)] border-[var(--course-alevel)]/50 hover:bg-[var(--course-alevel)]/30",
  },
  grade9: {
    iconBg: "bg-[var(--course-grade9-muted)] border-[var(--course-grade9)]/40",
    iconColor: "text-[var(--course-grade9)]",
    cardBorder: "border-[var(--course-grade9)]/30",
    badge: "bg-[var(--course-grade9)]/30 text-[var(--course-grade9)] border border-[var(--course-grade9)]/50",
    button: "bg-[var(--course-grade9)]/20 text-[var(--course-grade9)] border-[var(--course-grade9)]/50 hover:bg-[var(--course-grade9)]/30",
  },
  postgraduates: {
    iconBg: "bg-[var(--course-postgraduates-muted)] border-[var(--course-postgraduates)]/40",
    iconColor: "text-[var(--course-postgraduates)]",
    cardBorder: "border-[var(--course-postgraduates)]/30",
    badge: "bg-[var(--course-postgraduates)]/30 text-[var(--course-postgraduates)] border border-[var(--course-postgraduates)]/50",
    button: "bg-[var(--course-postgraduates)]/20 text-[var(--course-postgraduates)] border-[var(--course-postgraduates)]/50 hover:bg-[var(--course-postgraduates)]/30",
  },
} as const;

export default function CourseCard({
  title,
  subtitle,
  description,
  level,
  variant,
  index,
}: CourseCardProps) {
  const Icon = iconMap[variant];
  const styles = variantStyles[variant];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      }}
      className={`rounded-[24px] overflow-hidden h-full backdrop-blur-lg bg-white/10 border shadow-2xl ${styles.cardBorder} transition-shadow`}
    >
      <div className="p-6 lg:p-8 h-full flex flex-col">
        <div
          className={`flex justify-center items-center mb-5 flex-shrink-0 w-24 h-24 rounded-2xl p-4 shadow-lg border ${styles.iconBg}`}
        >
          <Icon
            className={`w-12 h-12 ${styles.iconColor}`}
            strokeWidth={1.75}
          />
        </div>
        <h3 className="text-xl font-bold mb-2 line-clamp-2 flex-shrink-0 text-[#FFFFFF]">
          {title}
        </h3>
        {level && (
          <span
            className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-lg mb-2 w-fit border ${styles.badge}`}
          >
            {level}
          </span>
        )}
        {subtitle && (
          <p className="text-sm mb-4 line-clamp-3 text-[#E2E8F0]">{subtitle}</p>
        )}
        {description && (
          <p className="text-sm line-clamp-3 text-[#E2E8F0]">{description}</p>
        )}
        <div className="mt-auto pt-4">
          <Link
            href="#courses"
            className={`inline-flex w-full justify-center items-center gap-2 min-w-[200px] h-12 px-6 py-3 rounded-lg font-semibold text-sm transition-all border hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] ${styles.button}`}
          >
            Enroll Now
            <ArrowRight className="w-4 h-4" strokeWidth={2} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
