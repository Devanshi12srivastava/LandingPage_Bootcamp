import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 },
};

export default function Benefits() {
  return (
    <section className="py-20 px-6 bg-blue-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10 text-gray-800">
          What You Will Gain 🎁
        </h2>

        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
        >
          <motion.div
            variants={item}
            className="bg-white p-6 rounded-2xl shadow-lg hover:scale-105 transition"
          >
            <h3 className="font-semibold text-lg">📚 Practical Learning</h3>
          </motion.div>

          <motion.div
            variants={item}
            className="bg-white p-6 rounded-2xl shadow-lg hover:scale-105 transition"
          >
            <h3 className="font-semibold text-lg">👨‍🏫 Expert Mentorship</h3>
          </motion.div>

          <motion.div
            variants={item}
            className="bg-white p-6 rounded-2xl shadow-lg hover:scale-105 transition"
          >
            <h3 className="font-semibold text-lg">📜 Certificate</h3>
          </motion.div>

          <motion.div
            variants={item}
            className="bg-white p-6 rounded-2xl shadow-lg hover:scale-105 transition"
          >
            <h3 className="font-semibold text-lg">🎯 Career Guidance</h3>
          </motion.div>

          <motion.div
            variants={item}
            className="bg-white p-6 rounded-2xl shadow-lg hover:scale-105 transition"
          >
            <h3 className="font-semibold text-lg">💻 Real-time Projects</h3>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
