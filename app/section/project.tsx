"use client";

import { useState, useEffect } from "react";
import SpotlightCard from "../Components/SpotlightCard/SpotlightCard";
import ShinyText from "../Components/ShinyText/ShinyText";
import { FaCode, FaCogs } from "react-icons/fa";
import { PiCertificateFill } from "react-icons/pi";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

type TabKey = "projects" | "certificates" | "techstack";

interface Item {
  id: number;
  title?: string;
  desc?: string;
  image: string;
}

export default function ProjectSection() {
  const [active, setActive] = useState<TabKey>("techstack");

  const tabs = [
    { id: "techstack", label: "Tech Stack", icon: <FaCogs size={20} /> },
    { id: "projects", label: "Projects", icon: <FaCode size={20} /> },
    {
      id: "certificates",
      label: "Certificates",
      icon: <PiCertificateFill size={20} />,
    },
  ] as const;

  const dummyData: Record<TabKey, Item[]> = {
    projects: [
      {
        id: 1,
        title: "NOC Dashboard by Telkomsel",
        desc: "Centralized, real-time view of a network's health and performance, allowing technicians to monitor, manage, and quickly resolve issues.",
        image: "/assets/tools/angular.png",
      },
      {
        id: 2,
        title: "Aduan: Website Pengaduan Masyarakat",
        desc: "Website for public complaints management system built with React.js",
        image: "/assets/tools/reactjs.png",
      },
      {
        id: 3,
        title: "Weathery: Weather App",
        desc: "A weather forecasting app using React & OpenWeather API",
        image: "/assets/tools/reactjs.png",
      },
      {
        id: 4,
        title: "Website Pondok Pesantren Al-Anwar Pakijangan",
        desc: "Website for Pondok Pesantren Al-Anwar Pakijangan built with Laravel",
        image: "/assets/tools/laravel.png",
      },
      {
        id: 5,
        title: "Dreamdesk: E-commerce Desk Setup",
        desc: "An e-commerce platform for desk setup products built with Vite.js",
        image: "/assets/tools/vite.png",
      },
    ],
    certificates: [
      { id: 1, image: "/assets/cert/cert1.jpg" },
    ],
    techstack: [
      // Frontend
      { id: 1, title: "React.js", image: "/assets/tools/reactjs.png" },
      { id: 2, title: "Next.js", image: "/assets/tools/nextjs.png" },
      { id: 3, title: "Laravel", image: "/assets/tools/laravel.png" },
      { id: 4, title: "Angular", image: "/assets/tools/angular.png" },
      { id: 5, title: "Vite.js", image: "/assets/tools/vite.png" },
      { id: 6, title: "Tailwind", image: "/assets/tools/tailwind.png" },
      { id: 7, title: "HTML5", image: "/assets/tools/html.png" },
      { id: 8, title: "CSS3", image: "/assets/tools/css.png" },
      { id: 9, title: "JavaScript", image: "/assets/tools/js.png" },
      { id: 10, title: "TypeScript", image: "/assets/tools/ts.png" },
      // Backend
      { id: 11, title: "Node.js", image: "/assets/tools/nodejs.png" },
      { id: 12, title: "PHP", image: "/assets/tools/php.png" },
      // Database
      { id: 13, title: "MySQL", image: "/assets/tools/mysql.png" },
      { id: 14, title: "MongoDB", image: "/assets/tools/mongodb.png" },
      { id: 15, title: "Firebase", image: "/assets/tools/firebase.png" },
      // Design
      { id: 16, title: "Figma", image: "/assets/tools/figma.png" },
      { id: 17, title: "Canva", image: "/assets/tools/canva.png" },
      // Tools
      { id: 18, title: "Github", image: "/assets/tools/github.png" },
      { id: 19, title: "VSCode", image: "/assets/tools/vscode.png" },
    ],
  };

  useEffect(() => {
    AOS.init({
      offset: 10,
    });
  }, []);

  const displayedItems =
    active === "projects"
      ? [...dummyData[active]].reverse()
      : dummyData[active];

  return (
    <div className="px-4 md:px-0">
      {/* Title */}
      <div className="text-center mb-10 mt-10 md:mb-20 md:mt-20">
        <h1
          className="font-bold text-3xl md:text-5xl"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          Portofolio Showcase
        </h1>
        <p className="mx-auto max-w-2xl text-sm md:text-base leading-relaxed opacity-50 text-center mt-6 md:mt-10">
          Discover my growth through projects, skills, and achievements. Every
          step reflects my passion for technology and lifelong learning.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mt-8">
        <div className="flex w-full max-w-5xl bg-gradient-to-r from-[#2a2143] to-[#111827] p-1 md:p-2 rounded-2xl shadow-lg">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id as TabKey)}
              className={`
                flex flex-1 
                items-center justify-center 
                gap-2 md:gap-3 
                px-2 py-3 md:px-10 md:py-5 
                rounded-xl transition-all duration-300 cursor-pointer
                flex-col md:flex-row 
                ${
                  active === tab.id
                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md"
                    : "text-gray-300 hover:text-white hover:bg-gray-700/40"
                }
              `}
            >
              <div className="text-xl md:text-lg">{tab.icon}</div>
              <span className="font-semibold text-xs md:text-lg mt-1 md:mt-0">
                {tab.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div
        className={`mt-8 md:mt-12 max-w-6xl mx-auto grid gap-4 md:gap-6 
          ${
            active === "techstack"
              ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-6" // UBAH KE 2 KOLOM DI MOBILE
              : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          }`}
      >
        {displayedItems.map((item) => (
          <SpotlightCard
            key={item.id}
            className={`custom-spotlight-card p-4 md:p-6 rounded-2xl shadow-lg cursor-pointer hover:scale-[1.02] transition-transform ${
              active === "projects"
                ? "flex flex-col items-start"
                : "flex flex-col items-center"
            }`}
            spotlightColor="rgba(134, 3, 132, 0.2)"
          >
            {/* GAMBAR */}
            <Image
              src={item.image}
              alt={item.title || "Image"}
              width={100} // Resolusi sumber besar
              height={100}
              className={`object-contain mb-4 ${
                active === "techstack"
                  ? "w-20 h-20 md:w-20 md:h-20" // Ukuran JUMBO (80px) untuk Mobile & Desktop
                  : "w-full h-40 md:w-20 md:h-20" 
              }`}
            />

            {active === "projects" && (
              <div className="w-full">
                <h3 className="text-lg md:text-xl font-semibold mb-2 text-left">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-gray-400 text-left">
                  {item.desc}
                </p>
              </div>
            )}

            {active === "techstack" && (
              <ShinyText
                text={item.title || ""}
                disabled={false}
                speed={3}
                className="text-sm md:text-base font-semibold block text-center"
              />
            )}
          </SpotlightCard>
        ))}
      </div>
    </div>
  );
}