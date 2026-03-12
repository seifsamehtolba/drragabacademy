"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const buttons = [
  {
    href: "#",
    src: "/images/google-play.png",
    alt: "Get it on Google Play",
  },
  {
    href: "#",
    src: "/images/app-store.png",
    alt: "Download on the App Store",
  },
  {
    href: "#",
    src: "/images/appgallery.png",
    alt: "Explore on AppGallery",
  },
];

export default function AppDownloadButtons() {
  return (
    <div className="flex flex-wrap gap-4">
      {buttons.map((btn, i) => (
        <motion.div
          key={btn.alt}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <Link href={btn.href} className="block">
            <Image
              src={btn.src}
              alt={btn.alt}
              width={160}
              height={56}
              className="h-14 w-auto object-contain rounded-lg"
              unoptimized
            />
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
