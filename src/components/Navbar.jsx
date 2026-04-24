import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", id: "home" },
    { name: "Highlights", id: "highlights" },
    { name: "Demo", id: "demo" },
    { name: "Live", id: "live" },
    { name: "Benefits", id: "benefits" },
    { name: "Career", id: "career" },
    { name: "Register", id: "register" },
  ];

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setOpen(false); // mobile menu close
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#050816]/70 backdrop-blur-2xl">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-8 py-2">
        {/* 🔥 LOGO */}
        <div className="flex items-center gap-3 -ml-4">
          <img src={logo} alt="logo" className="w-18 h-18 object-contain" />
          <div>
            <h1 className="text-white font-bold text-lg">Casentra</h1>
            <p className="text-xs text-gray-400">Global Bootcamp</p>
          </div>
        </div>

        {/* 🔥 DESKTOP LINKS */}
        <div className="hidden md:flex gap-8 items-center text-[18px] font-semibold text-gray-300">
          {links.map((link, i) => (
            <motion.span
              key={i}
              whileHover={{ y: -2 }}
              onClick={() => handleScroll(link.id)}
              className="cursor-pointer text-gray-300 hover:text-white transition relative group"
            >
              {link.name}

              {/* 🔥 underline */}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-linear-to-r from-blue-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </motion.span>
          ))}
        </div>

        {/* 🔥 MOBILE MENU BUTTON */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="text-white text-2xl"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* 🔥 MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-linear-to-b from-[#0b1026] via-[#111a3a] to-[#0b1026] backdrop-blur-lg px-6 pb-6"
          >
            <div className="flex flex-col gap-4 text-gray-300 text-sm mt-4">
              {links.map((link, i) => (
                <span
                  key={i}
                  onClick={() => handleScroll(link.id)}
                  className="cursor-pointer hover:text-white transition"
                >
                  {link.name}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
