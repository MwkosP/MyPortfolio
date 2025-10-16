"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

export default function Navbar({
  toggleTheme,
  isDarkMode,
}: {
  toggleTheme: () => void;
  isDarkMode: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
<nav className="
  fixed top-0 left-0 w-full z-20
  backdrop-blur-md bg-purple-950/40
  shadow-[0_4px_15px_rgba(168,85,247,0.35)]
  transition-colors duration-500 rounded-b-[2.5rem] overflow-hidden
">

      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Brand */}
        <Link
          href="/"
          className={`text-2xl font-bold transition-colors ${
            isDarkMode ? "text-purple-300" : "text-purple-800"
          }`}
        >
          Portfolio
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 font-medium">
          {["Home", "About", "Projects", "Contact"].map((item) => (
            <Link
              key={item}
              href={`/${item === "Home" ? "" : item.toLowerCase()}`}
              className={`transition-colors hover:underline ${
                isDarkMode
                  ? "text-gray-200 hover:text-purple-300"
                  : "text-gray-800 hover:text-purple-700"
              }`}
            >
              {item}
            </Link>
          ))}

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className={`ml-4 p-2 rounded-full transition-colors ${
              isDarkMode
                ? "bg-purple-900/40 hover:bg-purple-800/50 text-yellow-400"
                : "bg-purple-200 hover:bg-purple-300 text-purple-700"
            }`}
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden transition-colors ${
            isDarkMode ? "text-gray-200" : "text-gray-800"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

{/* Mobile Dropdown */}
{isOpen && (
  <div
    className={`md:hidden flex flex-col items-center space-y-4 py-4 font-medium transition-all duration-500
      ${isDarkMode
        ? "bg-purple-1200 text-gray-100 shadow-[0_8px_20px_rgba(0,0,0,0.4)]"
        : "bg-purple-90 text-gray-800 shadow-[0_8px_20px_rgba(168,85,247,0.25)]"
      }
      rounded-b-3xl
    `}
  >
    {["Home", "About", "Projects", "Contact"].map((item) => (
      <Link
        key={item}
        href={`/${item === "Home" ? "" : item.toLowerCase()}`}
        onClick={() => setIsOpen(false)}
        className={`transition-colors hover:underline ${
          isDarkMode
            ? "text-gray-100 hover:text-purple-300"
            : "text-gray-800 hover:text-purple-700"
        }`}
      >
        {item}
      </Link>
    ))}

    {/* Theme toggle inside mobile menu */}
    <button
      onClick={() => {
        toggleTheme();
        setIsOpen(false);
      }}
      className={`mt-2 px-4 py-2 rounded-lg transition-colors duration-300 font-medium ${
        isDarkMode
          ? "bg-purple-900 hover:bg-purple-800 text-yellow-400"
          : "bg-purple-300 hover:bg-purple-400 text-purple-800"
      }`}
    >
      {isDarkMode ? "Light Mode" : "Dark Mode"}
    </button>
  </div>
)}

    </nav>
  );
}
