"use client";

import { motion } from "framer-motion";

export default function BiologicalSoupBackground() {
  return (
    <motion.div
      className="fixed inset-0 overflow-hidden pointer-events-none z-0"
      initial={{ opacity: 1 }}
      animate={{
        y: [0, 20, 0],
        rotate: [0, 5, 0],
      }}
      transition={{
        duration: 60,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.05]"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern
            id="biological-soup"
            x="0"
            y="0"
            width="400"
            height="400"
            patternUnits="userSpaceOnUse"
          >
            {/* DNA Helix 1 */}
            <path
              d="M50 50 Q80 30 110 50 Q140 70 170 50 Q200 30 230 50 Q260 70 290 50 Q320 30 350 50"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-white"
            />
            <path
              d="M50 70 Q80 90 110 70 Q140 50 170 70 Q200 90 230 70 Q260 50 290 70 Q320 90 350 70"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-white"
            />
            {/* DNA Helix 2 - offset */}
            <path
              d="M100 150 Q130 130 160 150 Q190 170 220 150 Q250 130 280 150"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-white"
            />
            <path
              d="M100 170 Q130 190 160 170 Q190 150 220 170 Q250 190 280 170"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-white"
            />
            {/* Cells - circles */}
            <circle cx="80" cy="200" r="15" fill="currentColor" className="text-white" />
            <circle cx="200" cy="100" r="20" fill="currentColor" className="text-white" />
            <circle cx="300" cy="250" r="12" fill="currentColor" className="text-white" />
            <circle cx="150" cy="300" r="18" fill="currentColor" className="text-white" />
            <circle cx="250" cy="50" r="10" fill="currentColor" className="text-white" />
            {/* Molecules - hexagons */}
            <polygon
              points="50,350 75,362.5 75,387.5 50,400 25,387.5 25,362.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-white"
            />
            <polygon
              points="200,350 225,362.5 225,387.5 200,400 175,387.5 175,362.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-white"
            />
            <polygon
              points="350,150 375,162.5 375,187.5 350,200 325,187.5 325,162.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-white"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#biological-soup)" />
      </svg>
    </motion.div>
  );
}
