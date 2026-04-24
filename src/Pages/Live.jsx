import { motion } from "framer-motion";

export default function Live() {
  return (
    <section
      id="live"
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
            className="text-4xl md:text-5xl font-bold leading-tight"
          >
            Join Our <span className="text-blue-400">Live Bootcamp 🚀</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-4 text-gray-400 max-w-md"
          >
            Learn directly from industry experts, build real projects, and get
            job-ready in just a few weeks.
          </motion.p>

          <div className="mt-6 space-y-3">
            <motion.p
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-300"
            >
              📅 Starts:
              <span className="ml-2 font-semibold text-blue-400">
                27 April 2026
              </span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="text-gray-300"
            >
              ⏳ Duration:
              <span className="ml-2 font-semibold text-purple-400">
                4 Weeks
              </span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="text-gray-300"
            >
              🎯 Mode:
              <span className="ml-2 font-semibold text-green-400">
                Live + Hands-on
              </span>
            </motion.p>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl"
        >
          <h3 className="text-2xl font-bold mb-3">
            Start Your Tech Journey 💼
          </h3>

          <p className="text-gray-300 text-sm">
            Master in-demand skills, work on real-world projects, and gain the
            confidence to crack top tech interviews.
          </p>

          <div className="mt-6 space-y-3 text-sm text-gray-400">
            <p>✔ Live interactive classes</p>
            <p>✔ Real-world projects</p>
            <p>✔ Resume & interview prep</p>
            <p>✔ Certificate on completion</p>
          </div>

          <button className="mt-6 w-full py-3 bg-blue-500 hover:bg-blue-600 rounded-xl font-semibold transition">
            Reserve Your Spot
          </button>
        </motion.div>
      </div>
    </section>
  );
}
