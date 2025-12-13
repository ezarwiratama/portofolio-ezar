"use client";

import React, { useState } from "react";
import { FaGlasses } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

export default function NewNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full h-24 flex justify-center">
      {/* Container Utama Navbar */}
      <nav
        className="
          fixed top-4 
          w-[90%] md:w-full max-w-2xl 
          px-6 py-4 
          flex flex-col md:flex-row items-center justify-between
          bg-white/10 
          backdrop-blur-lg
          rounded-3xl md:rounded-full
          border border-white/20 
          shadow-lg
          z-50
          transition-all duration-300 ease-in-out
        "
      >
        {/* Baris Atas: Logo & Tombol Hamburger */}
        <div className="w-full flex items-center justify-between md:w-auto">
          <a 
            href="#home" 
            className="flex items-center gap-3 text-white cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => setIsOpen(false)}
          >
            <FaGlasses size={24} />
            <span className="text-xl font-semibold">Ezar Hardin</span>
          </a>

          <button
            className="md:hidden text-white p-1"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <IoClose size={24} /> : <RxHamburgerMenu size={24} />}
          </button>
        </div>

        {/* Links (Desktop) */}
        {/* 'hidden md:flex' artinya: tersembunyi di mobile, muncul (flex) di desktop */}
        <div className="hidden md:flex items-center gap-6 text-white">
          <NavLink href="#" text="Home" />
          <NavLink href="#about" text="About" />
          <NavLink href="#project" text="Portofolio" />
          <NavLink href="#contact" text="Contact" />
        </div>

        {/* Links (Mobile Menu Dropdown) */}
        {/* Render kondisional: Hanya muncul jika isOpen === true */}
        {isOpen && (
          <div className="w-full flex flex-col items-center gap-4 mt-4 md:hidden pb-2 text-white border-t border-white/10 pt-4 animate-fadeIn">
            <NavLink href="#" text="Home" onClick={() => setIsOpen(false)} />
            <NavLink href="#about" text="About" onClick={() => setIsOpen(false)} />
            <NavLink href="#project" text="Portofolio" onClick={() => setIsOpen(false)} />
            <NavLink href="#contact" text="Contact" onClick={() => setIsOpen(false)} />
          </div>
        )}
      </nav>
    </div>
  );
}

// Komponen kecil agar kodingan lebih rapi
function NavLink({ href, text, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="font-medium hover:text-gray-300 transition-colors duration-200"
    >
      {text}
    </a>
  );
}