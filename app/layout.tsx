import "./globals.css";
import { Inter } from "next/font/google";
import NavbarClient from "./components/NavbarClient";
import Footer from "./components/Footer";
import ThemeProvider from "./components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

// ✅ Metadata (now valid because layout is a Server Component)
export const metadata = {
  title: "Panagiotis Mokos | AI & Web Developer Portfolio",
  description:
    "Explore Panagiotis Mokos' portfolio — AI & Web Developer specializing in modern, fast, and elegant web experiences using Next.js and AI technologies.",
  openGraph: {
    title: "Panagiotis Mokos | AI & Web Developer Portfolio",
    description:
      "Portfolio of Panagiotis Mokos — AI & Web Developer passionate about building elegant digital experiences.",
    url: "https://my-portfolio-ten-weld.vercel.app",
    siteName: "Panagiotis Mokos Portfolio",
    images: [
      {
        url: "https://my-portfolio-ten-weld.vercel.app/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Panagiotis Mokos Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Panagiotis Mokos | Portfolio",
    description:
      "AI & Web Developer portfolio showcasing modern, interactive projects built with Next.js and Framer Motion.",
    images: [
      "https://my-portfolio-ten-weld.vercel.app/images/og-image.jpg",
    ],
  },
};






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
