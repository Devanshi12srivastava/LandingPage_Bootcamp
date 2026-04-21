import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center bg-linear-to-br from-blue-400 via-indigo-500 to-blue-600 text-white relative overflow-hidden">
      {/* Background blur circles */}
      <div className="absolute w-72 h-72 bg-white/10 rounded-full top-10 left-10 blur-3xl"></div>
      <div className="absolute w-72 h-72 bg-purple-400/20 rounded-full bottom-10 right-10 blur-3xl"></div>

      <div className="text-center px-6 z-10">
        <motion.h1
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold tracking-wide mx-10"
        >
          BOOTCAMP
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-lg md:text-xl text-white-200 "
        >
          For Final Year And Third Year Students
          <br /> Build Real Skills. Get Industry Ready.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-10 flex justify-center gap-4 flex-wrap"
        >
          <button
            onClick={() => {
              document.getElementById("register").scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="bg-white text-blue-600 px-12 py-5 text-xl rounded-full font-semibold shadow-lg hover:scale-105 transition cursor-pointer"
          >
            Register Now
          </button>

          <button onClick={() => {
              document.getElementById("highlights").scrollIntoView({
                behavior: "smooth",
              });
            }} className="border border-white px-12 py-5 text-xl rounded-full hover:bg-white hover:text-blue-600 transition cursor-pointer">
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  );
}
