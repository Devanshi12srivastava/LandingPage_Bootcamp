export default function Footer() {
  return (
    <footer className="bg-blue-900 text-gray-300 py-6 px-6">
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 items-center">

        {/* LEFT */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold text-white">
            Bootcamp 🚀
          </h2>
          <p className="mt-2 text-sm text-white">
            Empowering students with real-world skills & career guidance.
          </p>
        </div>

        {/* RIGHT */}
        <div className="text-center md:text-right space-y-2">
          <p>
            📧 <span className="text-white">contact@casentraglobal.com</span>
          </p>
          <p>
            🌐 <span className="text-white">www.casentraglobal.com</span>
          </p>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-500 mt-6 pt-4 text-center text-sm text-white">
        © 2026 Bootcamp. All rights reserved.
      </div>

    </footer>
  );
}