import { motion } from "framer-motion";
import BootcampImage from "../assets/BootcampImage.png";
export default function Career() {
  return (
    <section
      id="career"
      className="relative py-24 px-6 bg-linear-to-b from-[#050816] via-[#0a0f2c] to-[#050816] text-white overflow-hidden"
    >
      <div className="absolute w-72 h-72 bg-blue-600 blur-[140px] opacity-20 top-0 left-0"></div>
      <div className="absolute w-72 h-72 bg-purple-600 blur-[140px] opacity-20 bottom-0 right-0"></div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div>
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 leading-tight"
          >
            Choose Your <span className="text-blue-400">Career Path 🚀</span>
          </motion.h2>

          <p className="text-gray-400 mb-10 max-w-md">
            Whether you're from IT, core engineering, or any background — we
            help you build the right skills and land opportunities.
          </p>

          <div className="space-y-4">
            {[
              {
                title: "IT Domain",
                desc: "Frontend, Backend, MERN stack & software development roles",
                color: "blue",
              },
              {
                title: "Core Domain",
                desc: "Engineering roles with technical + software integration",
                color: "purple",
              },
              {
                title: "Non-IT Domain",
                desc: "Switch your career into tech with guided roadmap",
                color: "indigo",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg hover:border-blue-400 transition shadow-md cursor-pointer"
              >
                <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <a
            href="https://casentraglobal.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              whileHover={{ scale: 1.08 }}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="mt-10 px-8 py-3 bg-linear-to-r from-blue-500 to-blue-600 rounded-full font-semibold shadow-lg cursor-pointer"
            >
              Explore Your Path →
            </motion.button>
          </a>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative flex justify-end"
        >
          <img
            src={BootcampImage}
            alt="image"
            alt="Career"
            className="w-full max-w-lg h-auto object-contain rounded-2xl border border-white/10 shadow-2xl hover:scale-105 transition duration-300 md:translate-x-10"
          />
        </motion.div>
      </div>
    </section>
  );
}
