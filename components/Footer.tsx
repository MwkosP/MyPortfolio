export default function Footer({ isDarkMode }: { isDarkMode: boolean }) {
  return (
    <footer
      className={`relative w-full py-6 text-center backdrop-blur-md transition-colors duration-500 ${
        isDarkMode
          ? "bg-purple-950/20 text-gray-300"
          : "bg-purple-100/60 text-purple-900"
      }`}
    >
      {/* Wavy top border */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          className={`relative block w-full h-[40px] ${
            isDarkMode ? "text-purple-950/40" : "text-purple-300/50"
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
<path
  d="M0,64 C300,120 900,0 1200,64 L1200,120 L0,120 Z"
  fill="currentColor"
/>

        </svg>
      </div>

      {/* Footer text */}
      <p className="text-sm font-medium relative z-10">
        © {new Date().getFullYear()} Panagiotis Mokos. All rights reserved.
      </p>
    </footer>
  );
}
