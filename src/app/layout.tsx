import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Preloader from "@/components/Preloader";
import ScrollProgress from "@/components/ScrollProgress";
import CursorFollower from "@/components/CursorFollower";
import PageTransition from "@/components/PageTransition";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tauheed Ahmad - Full Stack Developer & AI Enthusiast",
  description: "Professional portfolio of Tauheed Ahmad - Full Stack Developer specializing in React, Node.js, AI Integration, and Mobile App Development. 5+ years of experience in web and app development.",
  keywords: "Tauheed Ahmad, Full Stack Developer, React Developer, Node.js, AI Integration, Mobile App Development, Web Development, Portfolio",
  authors: [{ name: "Tauheed Ahmad" }],
  creator: "Tauheed Ahmad",
  openGraph: {
    title: "Tauheed Ahmad - Full Stack Developer & AI Enthusiast",
    description: "Professional portfolio showcasing expertise in full stack development, AI integration, and mobile app development.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tauheed Ahmad - Full Stack Developer",
    description: "Professional portfolio showcasing expertise in full stack development, AI integration, and mobile app development.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased cursor-none`}
      >
        <Preloader />
        <ScrollProgress />
        <CursorFollower />
        <Navigation />
        <PageTransition>
          <main className="relative">
            {children}
          </main>
        </PageTransition>
      </body>
    </html>
  );
}
