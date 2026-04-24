import logo from "../assets/logo.png";
import { FaEnvelope, FaGlobe, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-linear-to-b from-[#050816] via-[#0a0f2c] to-[#050816] text-gray-300 py-10 px-5 sm:px-6 overflow-hidden">
      {/* Glow */}
      <div className="absolute w-72 h-72 bg-blue-600 blur-[140px] opacity-20 top-0 left-0"></div>
      <div className="absolute w-72 h-72 bg-purple-600 blur-[140px] opacity-20 bottom-0 right-0"></div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 relative z-10">
        {/* BRAND */}
        <div className="flex items-start gap-3">
          <img src={logo} alt="Bootcamp Logo" className="w-12 h-12" />

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Bootcamp
            </h2>
            <p className="mt-2 text-sm text-gray-400 leading-relaxed">
              Empowering students with real-world skills, mentorship, and career
              growth.
            </p>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="text-left sm:text-center">
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>

          <ul className="space-y-2 text-sm">
            {[
              { name: "Home", id: "home" },
              { name: "Highlights", id: "highlights" },
              { name: "Demo", id: "demo" },
              { name: "Live", id: "live" },
              { name: "Benefits", id: "benefits" },
              { name: "Career", id: "career" },
            ].map((link, i) => (
              <li
                key={i}
                onClick={() =>
                  document.getElementById(link.id)?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
                className="cursor-pointer text-gray-400 hover:text-white hover:translate-x-1 transition"
              >
                {link.name}
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div className="text-left sm:text-right">
          <h3 className="text-white font-semibold mb-4">Contact</h3>

          <p className="text-sm text-gray-400 flex items-center gap-2 sm:justify-end">
            <FaEnvelope className="text-blue-400" />
            contact@casentraglobal.com
          </p>

          <p className="text-sm text-gray-400 mt-2 flex items-center gap-2 sm:justify-end">
            <FaGlobe className="text-blue-400" />
            <a
              href="https://www.casentraglobal.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              www.casentraglobal.com
            </a>
          </p>

          <p className="text-sm text-gray-400 mt-2 flex items-center gap-2 sm:justify-end">
            <FaLinkedin className="text-[#0A66C2]" />
            <a
              href="https://www.linkedin.com/company/casentra-global/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-white/10 mt-10 pt-5 text-center text-xs text-gray-500">
        © 2026 Bootcamp. Built with ❤️ for learners.
      </div>
    </footer>
  );
}
