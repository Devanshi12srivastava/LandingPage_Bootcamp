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
    <section
      id="benefits"
      className="relative py-24 px-6 bg-linear-to-b from-[#050816] via-[#0a0f2c] to-[#050816] text-white overflow-hidden"
    >
      <div className="absolute w-72 h-72 bg-blue-600 blur-[140px] opacity-20 top-0 left-0"></div>
      <div className="absolute w-72 h-72 bg-purple-600 blur-[140px] opacity-20 bottom-0 right-0"></div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Why Choose Our Bootcamp 🚀
        </h2>

        <p className="text-gray-400 mb-14 max-w-2xl mx-auto">
          Everything you need to become industry-ready — from practical learning
          to career support.
        </p>

        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {[
            {
              icon: "📚",
              title: "Practical Learning",
              desc: "Learn by building real-world projects, not just theory.",
            },
            {
              icon: "👨‍🏫",
              title: "Expert Mentorship",
              desc: "Get guidance from experienced developers and mentors.",
            },
            {
              icon: "📜",
              title: "Certification",
              desc: "Receive a recognized certificate to boost your resume.",
            },
            {
              icon: "🎯",
              title: "Career Guidance",
              desc: "Resume building, mock interviews, and placement support.",
            },
            {
              icon: "💻",
              title: "Live Projects",
              desc: "Work on real-time applications used in industry.",
            },
          ].map((itemData, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ scale: 1.07 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg hover:border-blue-400 hover:bg-white/10 transition duration-300 shadow-lg"
            >
              <div className="text-3xl mb-3">{itemData.icon}</div>

              <h3 className="font-semibold text-lg mb-2">{itemData.title}</h3>

              <p className="text-sm text-gray-400">{itemData.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
