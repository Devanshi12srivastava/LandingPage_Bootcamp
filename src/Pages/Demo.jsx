import { motion } from "framer-motion";
import Bootcampphoto from "../assets/Bootcampphoto.png";

export default function Demo() {
  return (
    <section
      id="demo"
      className="relative py-20 px-6 bg-linear-to-b from-[#050816] via-[#0a0f2c] to-[#050816] text-white overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/20 blur-[120px] rounded-full"></div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex justify-end"
        >
          <motion.img
            src={Bootcampphoto}
            alt="Training"
            className="w-full max-w-lg h-60 sm:h-72 md:h-80 lg:h-87.5 object-cover rounded-2xl border border-white/10 shadow-2xl mr-0 md:mr-1"
            whileHover={{
              scale: 1.05,
              y: 5,
              boxShadow: "0px 20px 40px rgba(0,0,0,0.3)",
            }}
            transition={{ type: "spring", stiffness: 120 }}
          />
        </motion.div>
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4 leading-tight"
          >
            Experience Before You Commit 🎯
          </motion.h2>

          <p className="text-gray-400 mb-8 text-sm max-w-md">
            Join our live demo sessions to explore how we teach, build real
            projects, and prepare you for real-world tech careers.
          </p>

          <div className="flex flex-col gap-4">
            {[
              { date: "22 April 2026", color: "text-blue-400" },
              { date: "23 April 2026", color: "text-purple-400" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg hover:border-blue-400 transition shadow-md"
              >
                <h3 className={`text-lg font-semibold ${item.color}`}>
                  {item.date}
                </h3>
                <p className="text-gray-300 text-sm">6:00 PM – 7:00 PM</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
