import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// Navbar is requested from the new project template
import { Navbar } from "@/components/main/navbar";
import { StarsCanvas } from "@/components/main/star-background";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#030014",
};

export const metadata: Metadata = {
  title: "Ifeoluwa | Full-Stack Web & Software Developer",
  description:
    "I'm a developer who thrives at the intersection of creativity and technology. From designing beautiful UIs to writing efficient server-side code, I love crafting digital experiences that just",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "bg-[#030014] overflow-y-scroll overflow-x-hidden",
          inter.className
        )}
      >
        <StarsCanvas />
        <Navbar />
        {children}
        {/* Footer removed from here to be included in page.tsx as per user preference for old footer */}
      </body>
    </html>
  );
}
