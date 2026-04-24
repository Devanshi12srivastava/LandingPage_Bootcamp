import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import HeroImg from "../assets/HeroImg.jpg";
export default function Hero() {
  const text =
    "For Final Year & Third Year Students — Build Your Career with Real Industry Exposure";

  const [typedText, setTypedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTypedText(text.slice(0, index));
      setIndex((prev) => prev + 1);

      if (index > text.length) {
        setIndex(0);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden bg-[#050816] pt-30 md:pt-36"
    >
      <img
        src={HeroImg}
        alt="heroImg"
        className="absolute w-full h-full object-cover opacity-60"
      />

      <div className="absolute inset-0 bg-black/60"></div>

      <div className="absolute w-100 h-100 bg-blue-400 blur-[80px] opacity-30 top-10 left-10 animate-pulse"></div>
      <div className="absolute w-100 h-100 bg-blue-500 blur-[80px] opacity-30 bottom-10 right-10 animate-pulse"></div>

      <div className="relative z-10 text-center px-6 max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold text-white"
        >
          BOOTCAMP
        </motion.h1>
        \
        <p className="mt-4 text-gray-300 text-lg min-h-15">
          {typedText}
          <span className="animate-pulse">|</span>
        </p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-3 text-blue-300 font-medium text-xl"
        >
          Learn • Build • Get Job Ready 🚀
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 flex flex-col md:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => {
              const el = document.getElementById("register");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-3 bg-linear-to-r from-blue-400 to-blue-600 rounded-full font-semibold hover:scale-105 transition cursor-pointer"
          >
            Register Now
          </button>

          <button
            onClick={() => {
              const el = document.getElementById("highlights");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-3 border border-white/30 rounded-full font-semibold text-white hover:bg-blue-300 hover:text-black transition cursor-pointer"
          >
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  );
}
