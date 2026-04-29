import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GlobalSkill.pk | Expert Data Entry & Web Development",
  description: "Professional freelance services by Ali Haider. High-quality Data Entry, Virtual Assistant, and Next.js Web Development at affordable rates.",
  keywords: "Data Entry, Freelance Pakistan, Virtual Assistant, Nextjs Developer, GlobalSkill",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
