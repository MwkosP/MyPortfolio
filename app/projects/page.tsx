"use client";
import { motion, Variants } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "../layout";
import { Target } from "lucide-react";

export default function Projects() {
  const { isDarkMode } = useContext(ThemeContext);

  const fadeSlideRight: Variants = {
    hidden: { opacity: 0, x: 60 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }, // ✅ fixed easing
    },
  };

  const projects = [
    {
      title: "TA Engine",
      description:
        "Technical Analysis Engine in Python providing Buy/Sell signals.",
      link: "https://github.com/MwkosP/Technical-Analysis",
    },
    {
      title: "Binary Face Classification",
      description:
        "Deep and Transfer Learning for classifying Fake and Real Faces.",
      link: "https://github.com/MwkosP/Face-Classification-with-Neural-Networks",
    },
    {
      title: "Fuel Station Website",
      description: "A Paid Website for a Client's Gas Fuel Station.",
      link: "https://github.com/MwkosP/Website-Oil-Gas",
    },
  ];

  return (
    <motion.section
      initial="hidden"
      animate="show"
      variants={fadeSlideRight}
      className="flex flex-col items-center justify-center px-4 sm:px-6 text-center min-h-[calc(100svh-140px)] overflow-hidden"
    >
      {/* Title */}
      <motion.h1
        variants={fadeSlideRight}
        transition={{ delay: 0.2 }}
        className={`font-bold mb-4 sm:mb-6 text-2xl xs:text-3xl sm:text-4xl ${
          isDarkMode ? "text-gray-100" : "text-black"
        }`}
      >
        My <span className="text-purple-500">Projects</span>
      </motion.h1>

      {/* Grid */}
      <div
        className="
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
          w-full max-w-6xl
          gap-3 xs:gap-4 sm:gap-6
          max-[380px]:scale-[0.92] max-[380px]:origin-top
        "
      >
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              delay: 0.2 + i * 0.15,
              ease: [0.16, 1, 0.3, 1], // ✅ fixed easing
            }}
            className={`p-4 sm:p-6 rounded-xl sm:rounded-2xl backdrop-blur-md border shadow-md transition transform hover:scale-[1.02] hover:-translate-y-[2px] ${
              isDarkMode
                ? "bg-purple-950/40 border-purple-900/40 text-gray-300"
                : "bg-purple-950/40 border-purple-900/40 text-gray-800"
            }`}
          >
            <h2
              className={`${
                isDarkMode ? "text-purple-400" : "text-purple-700"
              } font-semibold text-lg sm:text-xl mb-1 sm:mb-2`}
            >
              {project.title}
            </h2>

            <p
              className={`${
                isDarkMode ? "text-gray-300" : "text-gray-700"
              } text-xs sm:text-sm leading-snug sm:leading-relaxed mb-3 sm:mb-4 line-clamp-3`}
              style={{
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {project.description}
            </p>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-block font-medium text-sm sm:text-base ${
                isDarkMode
                  ? "text-purple-400 hover:text-pink-400"
                  : "text-purple-700 hover:text-pink-500"
              }`}
            >
              View Project →
            </a>
          </motion.div>
        ))}
      </div>

      {/* Divider */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "72px" }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-4 sm:mt-8 h-[2px] bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"
      />
    </motion.section>
  );
}
