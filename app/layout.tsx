import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Thomas Roy Chappel - Frontend-Focused Full Stack Developer",
  description:
    "Personal portfolio of Thomas Roy Chappel, a Frontend-Focused Full Stack Developer specializing in React, Next.js, TypeScript, and modern web technologies.",
  authors: [{ name: "Thomas Roy Chappel" }],
  keywords: [
    "frontend developer",
    "full stack developer",
    "react",
    "nextjs",
    "typescript",
    "web development",
    "portfolio",
  ],
  openGraph: {
    title: "Thomas Roy Chappel - Developer Portfolio",
    description:
      "Frontend-Focused Full Stack Developer crafting beautiful web experiences",
    type: "website",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thomas Roy Chappel - Developer Portfolio",
    description: "Frontend-Focused Full Stack Developer",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
