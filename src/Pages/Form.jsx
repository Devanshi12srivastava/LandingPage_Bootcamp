import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import { motion } from "framer-motion";

export default function Form() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    college: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const { name, phone, email, college } = form;

  if (!name || !phone || !email || !college) {
    alert("Please fill all fields");
    return;
  }

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    alert("Invalid Email");
    return;
  }

  if (!/^[6-9][0-9]{9}$/.test(phone)) {
    alert("Invalid Phone Number");
    return;
  }

  try {
    setLoading(true);

    await fetch("https://script.google.com/macros/s/AKfycbxZ0Elipo8gkQMKZSdNl3fuAGV2C41_F_IbXXPaKdZ1HcNCfNvdPXoWT-aGHvGKRiMX-Q/exec", { 
      method: "POST",
      mode: "no-cors", 
      body: JSON.stringify({
        name,
        phone,
        email,
        college
      }),
    });

    

    alert("Registered Successfully 🚀");

    setForm({
      name: "",
      phone: "",
      email: "",
      college: "",
    });

    setLoading(false);

  } catch (err) {
    console.log(err);
    alert("Error submitting form");
    setLoading(false);
  }
};
  return (
    <section
      id="register"
      className="relative py-24 px-6 bg-linear-to-b from-[#050816] via-[#0a0f2c] to-[#050816] text-white overflow-hidden"
    >
      {/* 🔥 Glow */}
      <div className="absolute w-72 h-72 bg-blue-600 blur-[140px] opacity-20 top-0 left-0"></div>
      <div className="absolute w-72 h-72 bg-purple-600 blur-[140px] opacity-20 bottom-0 right-0"></div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl rounded-3xl p-8"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">
            Register Now 🚀
          </h2>

          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            {["name", "phone", "email", "college"].map((field, i) => (
              <input
                key={i}
                type={
                  field === "email"
                    ? "email"
                    : field === "phone"
                      ? "tel"
                      : "text"
                }
                name={field}
                placeholder={
                  field === "name"
                    ? "Your Name"
                    : field === "phone"
                      ? "Phone Number"
                      : field === "email"
                        ? "Email Address"
                        : "College Name"
                }
                value={form[field]}
                onChange={handleChange}
                className="p-3 rounded-xl bg-white/10 border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            ))}

            <motion.button
              whileHover={{ scale: 1.05 }}
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              disabled={loading}
              className="mt-3 py-3 rounded-full bg-linear-to-r from-blue-500 to-blue-600 font-semibold shadow-lg disabled:opacity-50 cursor-pointer"
            >
              {loading ? "Submitting..." : "Register Now"}
            </motion.button>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Kickstart Your <span className="text-blue-400">Tech Career 🚀</span>
          </h2>

          <p className="mt-4 text-gray-400 max-w-md">
            Learn by building real projects, get mentored by experts, and become
            job-ready in weeks.
          </p>

          <div className="mt-6 space-y-2 text-gray-300">
            <p>✔ Live Interactive Sessions</p>
            <p>✔ Real-world Projects</p>
            <p>✔ Resume & Interview Prep</p>
            <p>✔ Certificate + Career Support</p>
          </div>

          <div className="mt-8 p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg">
            <p>
              📅 Starts: <span className="text-blue-500 px-4">27 April</span>
            </p>
            <p>
              ⏳ Duration: <span className="text-blue-500 px-2">4 Weeks</span>
            </p>
            <p className="mt-2 text-red-400 text-sm font-medium">
              ⚡ Limited Seats Available
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
