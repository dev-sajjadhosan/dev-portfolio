import { useEffect, useState } from "react";

const lines = [
  "Yo, I'm Sajjad Hosan 👋",
  "A MERN Stack Developer who loves clean UIs and creative builds.",
  "Languages: en_US, code 😉",
  "Stack: MongoDB, Express, React, Node.js",
  "Mission: Create tools that inspire & solve real problems",
  "Superpower: Just a laptop + imagination",
  "Let’s build something legendary 🚀",
];

export default function IntroTerminal() {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < lines.length) {
      const timeout = setTimeout(() => {
        setDisplayedLines((prev) => [...prev, lines[currentIndex]]);
        setCurrentIndex((prev) => prev + 1);
      }, 900); // typing delay

      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  return (
    <div className="bg-black text-green-400 font-mono p-6 rounded-xl shadow-xl w-lg h-[18rem] mx-auto">
      <div className="text-sm space-y-2">
        {displayedLines.map((line, index) => (
          <div key={index} className="flex">
            <span className="text-gray-500 mr-2">➜</span>
            <span>{line}</span>
          </div>
        ))}
        {currentIndex < lines.length && (
          <div className="flex">
            <span className="text-gray-500 mr-2">➜</span>
            <span className="animate-pulse">|</span>
          </div>
        )}
      </div>
    </div>
  );
}
