import React from "react";
import { SiReact } from "react-icons/si";
import { FaGlasses } from "react-icons/fa";

export default function newNavbar() {
  return (
    <div className="relative w-full h-24">
      <nav
        className="
          fixed top-4 left-1/2 -translate-x-1/2
          w-full max-w-2xl
          px-8 py-4 
          flex items-center justify-between
          bg-white/10 
          backdrop-blur-lg
          rounded-full
          border border-white/20 
          shadow-lg
          z-50
        "
      >
        {/* Sisi Kiri: Logo dan Teks */}
        <div className="flex items-center gap-3 text-white">
          {/* <SiReact size={24} /> */}
          <FaGlasses size={24} />
          <span className="text-xl font-semibold">Ezar Hardin</span>
        </div>

        {/* Sisi Kanan: Links */}
        <div className="flex items-center gap-6 text-white">
          <a href="#" className="font-medium hover:text-gray-200">
            Home
          </a>
          <a href="#about" className="font-medium hover:text-gray-200">
            About
          </a>
          <a href="#project" className="font-medium hover:text-gray-200">
            Portofolio
          </a>
          <a href="#contact" className="font-medium hover:text-gray-200">
            Contact
          </a>
        </div>
      </nav>
    </div>
  );
}
