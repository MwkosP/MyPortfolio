"use client";
import { motion, Variants } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "../layout";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
  const { isDarkMode } = useContext(ThemeContext);

  // 🎬 fade, slide up, and rotate in — type safe
  const fadeRotate: Variants = {
    hidden: { opacity: 0, y: 40, rotateX: -10 },
    show: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }, // ✅ fixed easing array
    },
  };

  return (
    <motion.section
      initial="hidden"
      animate="show"
      variants={fadeRotate}
      className="flex flex-col items-center justify-center h-[calc(100vh-140px)] px-6 text-center"
    >
      {/* Title */}
      <motion.h1
        variants={fadeRotate}
        transition={{ delay: 0.2 }}
        className={`font-bold mb-6 text-3xl sm:text-4xl ${
          isDarkMode ? "text-gray-100" : "text-gray-900"
        }`}
      >
        Get In <span className="text-purple-500">Touch</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        variants={fadeRotate}
        transition={{ delay: 0.4 }}
        className={`max-w-md mb-8 text-sm sm:text-base leading-relaxed ${
          isDarkMode ? "text-gray-300" : "text-gray-700"
        }`}
      >
        Whether you want to collaborate, talk about projects, or just say hi —
        feel free to reach out anytime.
      </motion.p>

      {/* Icon buttons */}
      <motion.div
        variants={fadeRotate}
        transition={{ delay: 0.4 }}
        className="flex space-x-6 sm:space-x-8 mt-2"
      >
        {/* Gmail */}
        <motion.a
          href="mailto:mwkospanagiotis@example.com"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.15, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          className={`w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full border backdrop-blur-md transition-shadow duration-300 ${
            isDarkMode
              ? "bg-purple-950/50 border-purple-900/50 hover:shadow-[0_0_20px_rgba(147,51,234,0.7)] text-purple-300"
              : "bg-purple-100/80 border-purple-200 hover:shadow-[0_0_20px_rgba(147,51,234,0.5)] text-purple-700"
          }`}
          aria-label="Email"
        >
          <Mail size={22} />
        </motion.a>

        {/* GitHub */}
        <motion.a
          href="https://github.com/MwkosP"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.15, rotate: -5 }}
          whileTap={{ scale: 0.9 }}
          className={`w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full border backdrop-blur-md transition-shadow duration-300 ${
            isDarkMode
              ? "bg-purple-950/50 border-purple-900/50 hover:shadow-[0_0_20px_rgba(147,51,234,0.7)] text-purple-300"
              : "bg-purple-100/80 border-purple-200 hover:shadow-[0_0_20px_rgba(147,51,234,0.5)] text-purple-700"
          }`}
          aria-label="GitHub"
        >
          <Github size={22} />
        </motion.a>

        {/* LinkedIn */}
        <motion.a
          href="https://www.linkedin.com/in/panagiotis-mokos-09237a254/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.15, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          className={`w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full border backdrop-blur-md transition-shadow duration-300 ${
            isDarkMode
              ? "bg-purple-950/50 border-purple-900/50 hover:shadow-[0_0_20px_rgba(147,51,234,0.7)] text-purple-300"
              : "bg-purple-100/80 border-purple-200 hover:shadow-[0_0_20px_rgba(147,51,234,0.5)] text-purple-700"
          }`}
          aria-label="LinkedIn"
        >
          <Linkedin size={22} />
        </motion.a>
      </motion.div>

      {/* Decorative divider */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "80px" }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.6 }}
        className="mt-10 h-[2px] bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"
      />
    </motion.section>
  );
}
