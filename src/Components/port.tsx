// src/components/Head.tsx
import React from "react";
import portLogo from "../assets/port.jpg"; // ✅ Use your actual image file (e.g., griffin.png)

const Head = () => {
  return (
    <header className="w-full fixed top-0 z-50 bg-gradient-to-br from-[#1a033b] via-[#21043d] to-[#100020] text-white shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <img
            src={portLogo}
            alt="Logo"
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="text-2xl font-bold tracking-widest">
            MyPortfolio
          </span>
        </div>

        {/* Navigation Links */}
        <nav className="space-x-6 text-lg font-medium hidden md:flex">
          <a
            href="#home"
            className="hover:text-purple-400 transition duration-200"
          >
            Home
          </a>
          <a
            href="#skills"
            className="hover:text-purple-400 transition duration-200"
          >
            Skills
          </a>
          <a
            href="#contact"
            className="hover:text-purple-400 transition duration-200"
          >
            Contact
          </a>
          <a
            href="#Education"
            className="hover:text-purple-400 transition duration-200"
          >
            Education
          </a>
           <a
            href="#Projects"
            className="hover:text-purple-400 transition duration-200"
          >
            Projects
          </a>
           <a
            href="#Experience"
            className="hover:text-purple-400 transition duration-200"
          >
            Experience
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Head;
