"use client";

import { motion } from "framer-motion";
import { slideInFromLeft } from "@/lib/motion";

export const About = () => {
  return (
    <section
      id="about-me"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20 z-20"
    >
      <div className="w-full h-auto flex flex-col items-center justify-center max-w-[900px] px-6">
        <motion.h1
          variants={slideInFromLeft(0.5)}
          className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10 text-center"
        >
          About Me
        </motion.h1>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-300 text-center leading-relaxed"
        >
          I&apos;m a developer who thrives at the intersection of creativity and
          technology. From designing beautiful UIs to writing efficient
          server-side code, I love crafting digital experiences that just work.
          <br />
          <br />
          Outside coding, for leisure, I&apos;m into gaming, graphics design,
          and building side projects that push my skills forward.
        </motion.p>
      </div>
    </section>
  );
};
