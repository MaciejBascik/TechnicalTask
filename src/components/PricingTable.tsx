"use client";
import { motion } from "framer-motion";

export function PricingTable() {
  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-center p-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h2 className="text-4xl font-bold text-white mb-8">Wybierz plan</h2>
      <div className="grid md:grid-cols-3 gap-8 w-full max-w-6xl">
        <div className="bg-white rounded-xl shadow-lg p-6 hover:scale-105 transition-transform">
          <h3 className="text-xl font-semibold text-indigo-800 mb-4">
            Podstawa
          </h3>
          <p className="text-2xl font-bold mb-2">$9/mo</p>
          <ul className="text-gray-600 mb-4">
            <li>✓ 1 Strona</li>
            <li>✓ Wsparcie email</li>
          </ul>
          <button className="btn-primary w-full">Rozpocznij</button>
        </div>
      </div>
    </motion.section>
  );
}
