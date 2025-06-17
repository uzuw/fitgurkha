"use client";
import React, { useEffect, useState } from "react";
import { getCookie } from "@/lib/cookieStorage";
import ProgressChart from "@/components/ProgressChart";
import { motion } from "framer-motion";
import { MdTrendingDown } from "react-icons/md";

export default function ProgressPage() {
  const [user, setUser] = useState<any>(null);

  const [progressData, setProgressData] = useState([
    { date: "2025-06-01", weight: 70 },
    { date: "2025-06-08", weight: 69 },
    { date: "2025-06-15", weight: 68 },
    { date: "2025-06-22", weight: 67 },
  ]);

  useEffect(() => {
    const data = getCookie("userData");
    setUser(data);
  }, []);

  if (!user)
    return (
      <p className="p-6 text-center text-gray-600 animate-pulse">Loading...</p>
    );

  return (
    <motion.div
      className="max-w-5xl mx-auto px-6 py-10 font-sans text-gray-800"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-center mb-8">
        <motion.h2
          className="text-4xl font-bold mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Progress Tracking 📉
        </motion.h2>
        <p className="text-gray-500">Stay motivated, {user.name}! Every step counts.</p>
      </div>

      <motion.div
        className="bg-white rounded-xl shadow-lg p-6"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className="flex items-center mb-4">
          <MdTrendingDown className="text-blue-500 mr-2" size={28} />
          <h3 className="text-xl font-semibold">Weight Trend (kg)</h3>
        </div>
        <ProgressChart data={progressData} />
      </motion.div>

      <motion.div
        className="mt-10 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-5 text-sm text-blue-800 shadow-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        💡 <strong>Tip:</strong> Small, consistent changes are more sustainable than extreme ones.
        Keep up the great work!
      </motion.div>
    </motion.div>
  );
}
