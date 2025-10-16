"use client";
import { useState, useEffect, createContext } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Particles from "@/components/Particles";
import "./globals.css";
import { motion, AnimatePresence } from "framer-motion";
import { metadata } from "./metadata";


// 🟣 Create a ThemeContext (shared theme state)
export const ThemeContext = createContext({
  isDarkMode: true,
  toggleTheme: () => {},
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState<boolean | null>(null);

  // 🧠 Load saved theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      setIsDarkMode(false);
      document.body.classList.add("bg-gray-50", "text-gray-900");
    } else {
      setIsDarkMode(true);
      document.body.classList.add("bg-gray-950", "text-gray-100");
    }
  }, []);

  // 💾 Save and update classes on toggle
  useEffect(() => {
    if (isDarkMode === null) return;
    const body = document.body;

    if (isDarkMode) {
      localStorage.setItem("theme", "dark");
      body.classList.add("bg-gray-950", "text-gray-100");
      body.classList.remove("bg-gray-50", "text-gray-900");
    } else {
      localStorage.setItem("theme", "light");
      body.classList.add("bg-gray-50", "text-gray-900");
      body.classList.remove("bg-gray-950", "text-gray-100");
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  // ⏳ Avoid flicker while theme loads
  if (isDarkMode === null) {
    return (
      <html lang="en">
        <body className="bg-gray-950 text-gray-100 transition-colors duration-500"></body>
      </html>
    );
  }

  return (
    <html lang="en">
      <body className="relative min-h-screen overflow-hidden transition-colors duration-500">
        <div className="fixed inset-0 -z-50">
          <Particles
            particleCount={200}
            particleSpread={8}
            speed={0.15}
            particleColors={["#9333ea", "#a855f7", "#ec4899"]}
            alphaParticles
          />
        </div>

        {/* 🟣 Provide theme context to all children */}
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
          <div className="flex flex-col min-h-screen relative z-10">
            <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
            <main className="flex-grow pt-20">{children}</main>
            <Footer isDarkMode={isDarkMode} />
          </div>
        </ThemeContext.Provider>
      </body>
    </html>
  );
}
