"use client";
import { motion, Variants } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Home() {
  const fadeRotate: Variants = {
    hidden: { opacity: 0, rotate: -5, scale: 0.9 },
    show: {
      opacity: 1,
      rotate: 0,
      scale: 1,
      transition: { duration: 2, ease: [0.7, 1, 0.3, 1] },
    },
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="
        flex flex-col items-center justify-center
        py-10 max-[1024px]:py-6
        min-h-[80vh] px-4 sm:px-6 text-center
        scale-[0.95] sm:scale-100
        max-[1024px]:scale-[0.92] max-[850px]:scale-[0.9] 
      "
    >
      {/* Profile image */}
      <motion.img
        src="/images/foto.jpg"
        alt="My profile photo"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        className="
          w-36 h-36 xs:w-44 xs:h-44 sm:w-48 sm:h-48
          rounded-full object-cover shadow-[0_0_25px_rgba(147,51,234,0.7)]
          border border-purple-500
        "
      />

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="
          text-2xl xs:text-3xl sm:text-4xl
          font-bold mt-4 sm:mt-6
        "
      >
        Hi, I’m <span className="text-purple-500">Panagiotis Mokos</span> 👋
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="
          text-gray-400 mt-2
          text-sm xs:text-base sm:text-lg
          leading-snug sm:leading-relaxed
          max-w-xs sm:max-w-md
        "
      >
        A passionate{" "}
        <span className="text-purple-800/100">AI – Web developer</span> / Enthusiast
        creating fast, elegant, and modern experiences.
      </motion.p>

      {/* Icon buttons */}
      <motion.div
        variants={fadeRotate}
        initial="hidden"
        animate="show"
        transition={{ delay: 1.2 }}
        className="flex space-x-4 xs:space-x-5 sm:space-x-8 mt-5 sm:mt-6"
      >
        {/* Gmail */}
        <motion.a
          href="mailto:mwkospanagiotis@example.com"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.15, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          className="
            w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14
            flex items-center justify-center
            rounded-full border border-purple-300
            bg-purple-100/70 text-purple-700 backdrop-blur-md
            hover:shadow-[0_0_20px_rgba(147,51,234,0.4)]
            transition
          "
          aria-label="Email"
        >
          <Mail size={20} className="sm:w-[22px] sm:h-[22px]" />
        </motion.a>

        {/* GitHub */}
        <motion.a
          href="https://github.com/MwkosP"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.15, rotate: -5 }}
          whileTap={{ scale: 0.9 }}
          className="
            w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14
            flex items-center justify-center
            rounded-full border border-purple-300
            bg-purple-100/70 text-purple-700 backdrop-blur-md
            hover:shadow-[0_0_20px_rgba(147,51,234,0.4)]
            transition
          "
          aria-label="GitHub"
        >
          <Github size={20} className="sm:w-[22px] sm:h-[22px]" />
        </motion.a>

        {/* LinkedIn */}
        <motion.a
          href="https://www.linkedin.com/in/panagiotis-mokos-09237a254/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.15, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          className="
            w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14
            flex items-center justify-center
            rounded-full border border-purple-300
            bg-purple-100/70 text-purple-700 backdrop-blur-md
            hover:shadow-[0_0_20px_rgba(147,51,234,0.4)]
            transition
          "
          aria-label="LinkedIn"
        >
          <Linkedin size={20} className="sm:w-[22px] sm:h-[22px]" />
        </motion.a>
      </motion.div>

      {/* CV buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="
          flex flex-col sm:flex-row
          gap-3 sm:gap-4 mt-6 sm:mt-8
        "
      >
        {/* View CV (HTML) */}
        <motion.a
          href="/files/cv.html"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="
            px-4 sm:px-6 py-2 sm:py-3
            bg-white text-purple-600 border border-purple-400
            rounded-xl shadow-md hover:bg-purple-50 transition
            text-sm sm:text-base
          "
        >
          View CV
        </motion.a>
      </motion.div>

    </motion.section>
  );
}
