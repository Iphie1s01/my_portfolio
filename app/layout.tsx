import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "@/components/main/navbar";
import { cn } from "@/lib/utils";
import CursorGlow from "@/components/main/cursor-glow";

export const viewport: Viewport = {
  themeColor: "#0A0A0B",
};

export const metadata: Metadata = {
  title: "Ifeoluwa — Digital Architect",
  description:
    "Full-stack developer turning product ideas into production-grade reality — clean code, considered design, zero shortcuts.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Mono:wght@300;400;500&family=Crimson+Pro:ital,wght@0,300;0,400;1,300&display=swap" rel="stylesheet" />
      </head>
      <body className={cn("overflow-y-scroll overflow-x-hidden")}>
        <CursorGlow />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
