"use client";
import { useState } from "react";
import ScrollFloat from "../Components/ScrollFloat/ScrollFloat";
import SpotlightCard from "../Components/SpotlightCard/SpotlightCard";
import { FaCode } from "react-icons/fa";
import { PiCertificateFill } from "react-icons/pi";
import { FaCogs } from "react-icons/fa";
import Image from "next/image";

// ✅ 1. Buat type untuk tab key
type TabKey = "projects" | "certificates" | "techstack";

// ✅ 2. Buat type untuk item
interface Item {
  id: number;
  title?: string;
  desc?: string;
  image: string;
}

export default function ProjectSection() {
  const [active, setActive] = useState<TabKey>("projects");

  const tabs = [
    { id: "projects", label: "Projects", icon: <FaCode size={18} /> },
    {
      id: "certificates",
      label: "Certificates",
      icon: <PiCertificateFill size={18} />,
    },
    { id: "techstack", label: "Tech Stack", icon: <FaCogs size={18} /> },
  ] as const;

  // ✅ 3. Dummy data
  const dummyData: Record<TabKey, Item[]> = {
    projects: [
      // {
      //   id: 1,
      //   title: "Weather App",
      //   desc: "A weather forecasting app using React & OpenWeather API",
      //   image: "/assets/tools/reactjs.png",
      // },
      // {
      //   id: 2,
      //   title: "Todo App",
      //   desc: "Task management app with drag & drop support",
      //   image: "/assets/tools/nodejs.png",
      // },
      // {
      //   id: 3,
      //   title: "E-commerce Store",
      //   desc: "Fullstack store with cart, payment, and admin dashboard",
      //   image: "/assets/tools/mysql.png",
      // },
    ],
    certificates: [
      { id: 1, image: "/assets/cert/cert1.jpg" },
      // { id: 2, image: "/assets/tools/cert2.png" },
    ],
    techstack: [
      // Frontend
      { id: 1, title: "React.js", image: "/assets/tools/reactjs.png" },
      { id: 2, title: "Next.js", image: "/assets/tools/nextjs.png" },
      { id: 3, title: "Tailwind", image: "/assets/tools/tailwind.png" },
      { id: 4, title: "HTML5", image: "/assets/tools/html.png" },
      { id: 5, title: "CSS3", image: "/assets/tools/css.png" },
      { id: 6, title: "JavaScript", image: "/assets/tools/js.png" },
      { id: 7, title: "TypeScript", image: "/assets/tools/ts.png" },

      // Backend
      { id: 8, title: "Node.js", image: "/assets/tools/nodejs.png" },
      { id: 9, title: "PHP", image: "/assets/tools/php.png" },

      // Database
      { id: 10, title: "MySQL", image: "/assets/tools/mysql.png" },

      // Design
      { id: 11, title: "Figma", image: "/assets/tools/figma.png" },
      { id: 12, title: "Canva", image: "/assets/tools/canva.png" },

      // Tools
      { id: 13, title: "Github", image: "/assets/tools/github.png" },
      { id: 14, title: "VSCode", image: "/assets/tools/vscode.png" },
    ],
  };

  return (
    <div>
      {/* Title */}
      <div className="text-center text-4xl mb-10 mt-20">
        <ScrollFloat
          animationDuration={1}
          ease="back.inOut(2)"
          scrollStart="center bottom+=50%"
          scrollEnd="bottom bottom-=40%"
          stagger={0.03}
          textClassName="font-bold"
        >
          Portofolio Showcase
        </ScrollFloat>
        <p className="mx-auto max-w-2xl w-4/5 text-base leading-relaxed opacity-50 text-center">
          Discover my growth through projects, skills, and achievements. Every
          step reflects my passion for technology and lifelong learning.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mt-8">
        <div className="flex w-full max-w-5xl bg-gradient-to-r from-[#2a2143] to-[#111827] p-2 rounded-2xl shadow-lg">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id as TabKey)}
              className={`flex flex-1 items-center justify-center gap-3 px-10 py-5 text-lg rounded-xl transition-all duration-300 cursor-pointer
                ${
                  active === tab.id
                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md"
                    : "text-gray-300 hover:text-white hover:bg-gray-700/40"
                }`}
            >
              {tab.icon}
              <span className="font-semibold">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div
        className={`mt-12 max-w-6xl mx-auto grid gap-6 
          ${
            active === "techstack"
              ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-6"
              : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          }`}
      >
        {dummyData[active].map((item) => (
          <SpotlightCard
            key={item.id}
            className={`custom-spotlight-card p-6 rounded-2xl shadow-lg cursor-pointer hover:scale-[1.02] transition-transform ${
              active === "projects"
                ? "flex flex-col items-start"
                : "flex flex-col items-center"
            }`}
            spotlightColor="rgba(134, 3, 132, 0.2)"
          >
            {/* Gambar */}
            <Image
              src={item.image}
              alt={item.title || "Image"}
              width={80}
              height={80}
              className="mb-4 object-contain"
            />

            {/* Kondisional berdasarkan tab */}
            {active === "projects" && (
              <div className="w-full">
                <h3 className="text-xl font-semibold mb-2 text-left">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-left">{item.desc}</p>
              </div>
            )}

            {active === "techstack" && (
              <h3 className="text-base font-medium text-center">
                {item.title}
              </h3>
            )}
          </SpotlightCard>
        ))}
      </div>
    </div>
  );
}
