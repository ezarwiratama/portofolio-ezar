"use client";

import Dock from "../Components/Dock/Dock";
import { VscHome, VscArchive, VscAccount } from "react-icons/vsc";
import ShinyText from "../Components/ShinyText/ShinyText";

export default function Footer() {
  const items = [
    {
      icon: <VscHome size={18} />,
      label: "Home",
      onClick: () =>
        document.getElementById("home")?.scrollIntoView({ behavior: "smooth" }),
    },
    {
      icon: <VscAccount size={18} />,
      label: "About Me",
      onClick: () =>
        document
          .getElementById("about")
          ?.scrollIntoView({ behavior: "smooth" }),
    },
    {
      icon: <VscArchive size={18} />,
      label: "Project",
      onClick: () =>
        document
          .getElementById("project")
          ?.scrollIntoView({ behavior: "smooth" }),
    },
  ];

  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center gap-6">
        <Dock
          items={items}
          panelHeight={30}
          baseItemSize={60}
          magnification={90}
        />
      </div>
      <div className="bg-transparent border-t border-gray-700 text-gray-300 py-6 mt-5">
        <div className="max-w-6xl mx-auto px-4 flex flex-col items-center gap-6">
          {/* Copyright */}
          <div className="text-center text-sm">
            <ShinyText
              text={`© ${new Date().getFullYear()} Ezar Hardin. All rights reserved.`}
              disabled={false}
              speed={3}
              className="custom-class"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
