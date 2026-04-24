import { motion } from "framer-motion";
import CountUp from "react-countup";
export default function Highlights() {
  const items = [
    {
      title: "IT Domain Expertise",
      desc: "Work on real-world projects using modern technologies like MERN stack and industry tools.",
    },
    {
      title: "Real Industry Exposure",
      desc: "Gain hands-on experience with live projects and real business workflows.",
    },
    {
      title: "Career Readiness",
      desc: "Crack interviews with mock sessions, resume building, and job-ready skills.",
    },
  ];

  const stats = [
    { value: "500+", label: "Students Trained" },
    { value: "50+", label: "Projects Built" },
    { value: "95%", label: "Success Rate" },
  ];

  const animations = [
    { x: -80, opacity: 0 },
    { y: 80, opacity: 0 },
    { x: 80, opacity: 0 },
  ];

  return (
    <section
      id="highlights"
      className="relative py-24 px-6 bg-linear-to-b from-[#10183c] via-[#040b34] to-[#050816] text-white overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/20 blur-[120px] rounded-full"></div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Build Skills That Get You{" "}
          <span className="text-blue-400">Hired 🚀</span>
        </h2>

        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          Learn by building real projects, gain industry exposure, and become
          job-ready with confidence.
        </p>

        <div className="flex justify-center gap-8 mb-16 flex-wrap">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <h3 className="text-2xl font-bold text-blue-400">{stat.value}</h3>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={animations[i % animations.length]}
              whileInView={{ x: 0, y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg hover:scale-105 hover:border-blue-400 hover:bg-white/10 transition duration-300 shadow-lg"
            >
              <span className="text-xs text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full">
                Key Feature
              </span>

              <h3 className="text-lg font-semibold mt-4 mb-2">{item.title}</h3>

              <p className="text-sm text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <button
            onClick={() => {
              const el = document.getElementById("register");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-3 bg-blue-500 hover:bg-blue-600 transition rounded-full text-white font-semibold shadow-lg hover:scale-105 cursor-pointer"
          >
            Start Your Journey →
          </button>
        </motion.div>

        <p className="mt-6 text-gray-500 text-sm">
          Join hundreds of students building successful tech careers 💼
        </p>
      </div>
    </section>
  );
}
