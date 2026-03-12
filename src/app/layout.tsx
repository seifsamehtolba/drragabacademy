import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-primary",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://drragabacademy.com"),
  title: {
    default: "Dr. Ragab - Expert IGCSE & A-Level Biology | Egypt's Premier Educator",
    template: "%s | Dr. Ragab Biology",
  },
  description:
    "Master biology with Dr. Mohamed Ragab, M.D. Egypt's top IGCSE and A-Level Biology educator. World-class courses, expert articles, and proven track record of top achievers.",
  keywords: ["IGCSE Biology", "A-Level Biology", "Dr. Ragab", "Biology courses Egypt", "online biology", "medical school preparation"],
  authors: [{ name: "Dr. Mohamed Ragab" }],
  openGraph: {
    title: "Dr. Ragab - Expert IGCSE & A-Level Biology",
    description: "Master biology with Egypt's premier educator. IGCSE, A-Level, and medical school preparation.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${plusJakarta.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
