import { motion } from "framer-motion";

export default function Live() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div className="text-left">
          <motion.h2
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-gray-800"
          >
            Live Session 🚀
          </motion.h2>

          <p className="mt-4 text-gray-600 text-lg">
            Starts:{" "}
            <motion.span
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="font-semibold text-blue-600"
            >
              27 April 2026
            </motion.span>
          </p>

          <p className="mt-2 text-gray-600 text-lg">
            Duration:{" "}
            <motion.span
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="font-semibold text-blue-600"
            >
              4 Weeks
            </motion.span>
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-blue-500 text-white p-8 rounded-2xl shadow-xl text-center"
        >
          <h3 className="text-xl font-semibold">Start Your Journey</h3>

          <p className="mt-3 text-sm opacity-90">
            Learn real-world skills and become industry ready with expert
            mentorship.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
