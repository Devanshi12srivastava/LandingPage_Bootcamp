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

  const [error, setError] = useState("");

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
      const q = query(
        collection(db, "bootcamp-form"),
        where("email", "==", email),
      );

      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        alert("Email already exists");
        return;
      }

      const q2 = query(
        collection(db, "bootcamp-form"),
        where("phone", "==", phone),
      );

      const phoneSnap = await getDocs(q2);

      if (!phoneSnap.empty) {
        alert("Phone already exists");
        return;
      }
      await addDoc(collection(db, "bootcamp-form"), form);
      alert("Form Submitted Successfully");
      setForm({
        name: "",
        phone: "",
        email: "",
        college: "",
      });

    } catch (err) {
      console.log(err);
      alert("Error in submitting");
    }
  };

  return (
    <section
      id="register"
      className="py-20 px-4 bg-linear-to-r from-blue-50 to-blue-100"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="bg-white/70 backdrop-blur-lg shadow-2xl rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Register Now
            </h2>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
                className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <input
                type="tel"
                maxLength="10"
                name="phone"
                placeholder="Phone"
                value={form.phone}
                onChange={handleChange}
                className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <input
                type="text"
                name="college"
                value={form.college}
                onChange={handleChange}
                placeholder="College"
                className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <button
                type="submit"
                className="bg-blue-600 text-white text-lg font-semibold py-3 rounded-lg hover:scale-105 transition duration-300 cursor-pointer"
              >
                Submit
              </button>
            </form>
          </div>
          <div className="text-center md:text-left px-15">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold text-gray-800"
            >
              Join Our Bootcamp 🚀
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-4 text-gray-600"
            >
              Kickstart your career with real-world projects, expert mentorship,
              and industry-ready skills.
            </motion.p>

            <div className="mt-6 space-y-3">
              <p>✅ Live Sessions</p>
              <p>✅ Industry Exposure</p>
              <p>✅ Certificate</p>
              <p>✅ Career Guidance</p>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-8 bg-white shadow-xl p-6 rounded-2xl"
            >
              <p className="font-semibold">📅 Starts: 27 April</p>
              <p>⏳ Duration: 4 Weeks</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
