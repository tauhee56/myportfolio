import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Preloader from "@/components/Preloader";
import ScrollProgress from "@/components/ScrollProgress";
import CursorFollower from "@/components/CursorFollower";
import PageTransition from "@/components/PageTransition";
import { siteConfig } from "@/lib/siteConfig";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0a0a0a",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.title,
  description: siteConfig.description,
  keywords:
    "Tauheed Ahmad, Full Stack Developer, React Developer, Node.js, AI Integration, Mobile App Development, Web Development, Portfolio",
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    title: siteConfig.title,
    description:
      "Professional portfolio showcasing expertise in full stack development, AI integration, and mobile app development.",
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — Full Stack Developer`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tauheed Ahmad - Full Stack Developer",
    description:
      "Professional portfolio showcasing expertise in full stack development, AI integration, and mobile app development.",
    images: [siteConfig.ogImage],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Preloader />
        <ScrollProgress />
        <CursorFollower />
        <Navigation />
        <PageTransition>
          <main className="relative overflow-x-clip">
            {children}
          </main>
        </PageTransition>
      </body>
    </html>
  );
}
