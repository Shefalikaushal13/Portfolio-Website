import { RiCloseLine, RiMenu2Line } from '@remixicon/react';
import React, { useState } from 'react';
import { motion } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-[#1a2b4c]/50 border-b border-white/20 shadow-lg text-white px-6 py-4 md:px-20 md:py-6">
        <div className="flex justify-between items-center relative">
          <a href="#Home" className="text-xl font-bold tracking-wide">
            Shefali Kaushal
          </a>

          <ul className="hidden md:flex gap-8 font-semibold text-md">
            <li><a href="#About" className="hover:opacity-80 transition-all">About</a></li>
            <li><a href="#Education" className="hover:opacity-80 transition-all">Education</a></li>
            <li><a href="#Projects" className="hover:opacity-80 transition-all">Skills & Projects</a></li>
            <li><a href="#Experience" className="hover:opacity-80 transition-all">Experience</a></li>
            <li><a href="#Certifications" className="hover:opacity-80 transition-all">Certifications & Awards</a></li>
            <li><a href="#Contact" className="hover:opacity-80 transition-all">Contact</a></li>
          </ul>

          <div className="md:hidden z-50" onClick={toggleMenu}>
            {menuOpen ? <RiCloseLine size={28} /> : <RiMenu2Line size={28} />}
          </div>
        </div>

        {menuOpen && (
          <ul className="absolute top-full left-0 w-full bg-[#171d32]/90 backdrop-blur-md px-10 py-6 rounded-b-xl shadow-md flex flex-col gap-4 text-center font-semibold md:hidden animate-fadeIn">
            <li><a href="#About" onClick={toggleMenu}>About</a></li>
            <li><a href="#Education" onClick={toggleMenu}>Education</a></li>
            <li><a href="#Experience" onClick={toggleMenu}>Experience</a></li>
            <li><a href="#Projects" onClick={toggleMenu}>Skills & Projects</a></li>
            <li><a href="#Certifications" onClick={toggleMenu}>Certifications & Awards</a></li>
            <li><a href="#Contact" onClick={toggleMenu}>Contact</a></li>
          </ul>
        )}
      </nav>
      {/*spacing to prevent content being hidden behind navbar */}
      <div className="h-[80px] md:h-[96px]"></div>
    </motion.div>
  );
};

export default Navbar;
