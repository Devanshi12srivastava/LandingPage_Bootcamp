import { motion } from "framer-motion";

export default function Demo() {
  return (
    <section className="py-20 px-6 bg-blue-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-10 text-gray-800">
          Demo Sessions 📅
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ amount: 0.3 }}
            className="bg-white shadow-xl p-3 rounded-2xl hover:scale-105 transition duration-300">
          
            <h3 className="text-xl font-semibold text-blue-600">
              22 April 2026
            </h3>
            <p className="mt-2 text-gray-600">6:00 PM – 7:00 PM</p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ amount: 0.3 }}
            className="bg-white shadow-xl rounded-2xl p-3 hover:scale-105 transition duration-300">
          
            <h3 className="text-xl font-semibold text-blue-600">
              23 April 2026
            </h3>
            <p className="mt-2 text-gray-600">6:00 PM – 7:00 PM</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
