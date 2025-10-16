"use client";
import { motion, Variants } from "framer-motion";

export default function About() {
  // Type-safe animation variant
  const fadeSlide: Variants = {
    hidden: { opacity: 0, x: -40 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1], // ✅ replaced "easeOut" with valid easing array
      },
    },
  };

  return (
    <motion.section
      initial="hidden"
      animate="show"
      variants={fadeSlide}
      className="flex flex-col items-center justify-center min-h-[80vh] px-6 text-center"
    >
      {/* Title */}
      <motion.h1
        variants={fadeSlide}
        transition={{ delay: 0.2 }}
        className="text-4xl font-bold mb-4"
      >
        About <span className="text-purple-500">Me</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        variants={fadeSlide}
        transition={{ delay: 0.5 }}
        className="max-w-2xl text-lg leading-relaxed text-gray-400"
      >
        I’m a{" "}
        <span className="text-purple-400 font-medium">
          Machine Learning & Web
        </span>{" "}
        enthusiast, currently in my final year as a{" "}
        <span className="text-purple-400 font-medium">
          University of Macedonia
        </span>{" "}
        student.
        <br />
        <br />
        Passionate about how AI can enhance technologies and crafting smooth,
        interactive digital experiences. Familiarity with Python, Web, Java, C,
        and more.
      </motion.p>

      {/* Animated divider */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "80px" }}
        transition={{ duration: 1, delay: 1 }}
        className="mt-8 h-[2px] bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
      />

      {/* Call to action */}
      <motion.a
        href="/files/cv.html"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="mt-8 inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-xl shadow-lg hover:opacity-90 transition"
      >
        View My CV
      </motion.a>
    </motion.section>
  );
}
