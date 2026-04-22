import { motion } from "framer-motion";
export default function Career() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10 text-gray-800">
          Career Paths 🚀
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          <motion.span
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="px-8 py-3 text-lg font-medium rounded-full border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition duration-300 cursor-pointer"
          >
            IT Domain
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className
            className="px-8 py-3 text-lg font-medium rounded-full border border-indigo-600 text-blue-600 hover:bg-blue-600 hover:text-white transition duration-300 cursor-pointer"
          >
            Core Domain
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className
            className="px-8 py-3 text-lg font-medium rounded-full border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition duration-300 cursor-pointer"
          >
            Non-IT Domain
          </motion.span>
        </div>
      </div>
    </section>
  );
}
