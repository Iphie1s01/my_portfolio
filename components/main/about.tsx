"use client";

import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/lib/motion";

export const About = () => {
  const features = [
    {
      icon: "🎨",
      title: "Creative Design",
      description: "Pixel-perfect interfaces that captivate users",
      gradient: "from-cyan-400 to-blue-500",
    },
    {
      icon: "⚡",
      title: "Performance",
      description: "Lightning-fast apps that scale effortlessly",
      gradient: "from-yellow-400 to-orange-500",
    },
    {
      icon: "🔧",
      title: "Clean Code",
      description: "Maintainable, elegant solutions that last",
      gradient: "from-cyan-400 to-teal-500",
    },
    {
      icon: "🚀",
      title: "Innovation",
      description: "Always exploring cutting-edge technologies",
      gradient: "from-purple-400 to-pink-500",
    },
  ];

  return (
    <section
      id="about-me"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20 z-20"
    >
      <div className="w-full h-auto flex flex-col lg:flex-row items-start justify-center max-w-[1400px] px-6 gap-8">
        {/* Left Column - About Text */}
        <motion.div
          initial="hidden"
          animate="visible"
          className="flex-1 flex flex-col justify-center"
        >
          <motion.div
            variants={slideInFromLeft(0.3)}
            className="flex items-center space-x-2 text-cyan-400 text-sm font-medium mb-4"
          >
            <span className="w-8 h-0.5 bg-cyan-400"></span>
            <span>ABOUT ME</span>
          </motion.div>

          <motion.h1
            variants={slideInFromLeft(0.5)}
            className="text-[40px] md:text-[50px] font-bold mb-6 text-white"
          >
            Crafting Digital{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Experiences
            </span>
          </motion.h1>

          <motion.p
            variants={slideInFromLeft(0.7)}
            className="text-lg text-gray-300 leading-relaxed mb-4"
          >
            I&apos;m a developer who thrives at the intersection of creativity
            and technology. From designing beautiful UIs to writing efficient
            server-side code, I love crafting digital experiences that just{" "}
            <span className="text-cyan-400 font-semibold">work</span>.
          </motion.p>

          <motion.p
            variants={slideInFromLeft(0.9)}
            className="text-lg text-gray-300 leading-relaxed"
          >
            Outside coding, for leisure, I&apos;m into gaming, graphics design,
            and building side projects that push my skills forward.
          </motion.p>
        </motion.div>

        {/* Right Column - Feature Cards */}
        <motion.div
          initial="hidden"
          animate="visible"
          className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={slideInFromRight(0.5 + index * 0.2)}
              className="group relative bg-gradient-to-br from-[#1a1a1e]/80 to-[#1a1a1e]/40 backdrop-blur-sm p-6 rounded-2xl border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105"
            >
              {/* Gradient glow effect on hover */}
              <div
                className={`absolute -inset-0.5 bg-gradient-to-r ${feature.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300`}
              ></div>

              <div className="relative">
                {/* Icon */}
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
