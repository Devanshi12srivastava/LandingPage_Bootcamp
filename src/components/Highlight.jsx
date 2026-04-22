import { motion } from "framer-motion";

export default function Highlights() {
  return (
    <section id="highlights" className="py-20 px-6 text-center">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Program Highlights 💡</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="backdrop-blur-lg bg-white/30 border border-white/20 shadow-xl p-6 rounded-2xl hover:scale-105 transition"
          >
            IT Domain
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="backdrop-blur-lg bg-white/30 border border-white/20 shadow-xl p-6 rounded-2xl hover:scale-105 transition"
          >
            Industry Exposure
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="backdrop-blur-lg bg-white/30 border border-white/20 shadow-xl p-6 rounded-2xl hover:scale-105 transition"
          >
            Career Rediness
          </motion.div>
        </div>
      </div>
    </section>
  );
}
