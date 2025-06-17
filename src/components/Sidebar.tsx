"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  MdDashboard,
  MdFitnessCenter,
  MdHome,
  MdRestaurantMenu,
  MdTimeline,
  MdPerson,
  MdLogout,
} from "react-icons/md";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const navLinks = [
  { href: "/", label: "Home", icon: <MdHome size={20} /> },
  { href: "/dashboard", label: "Dashboard", icon: <MdDashboard size={20} /> },
  {
    href: "/dashboard/workouts",
    label: "Workouts",
    icon: <MdFitnessCenter size={20} />,
  },
  {
    href: "/dashboard/nutrition",
    label: "Nutrition",
    icon: <MdRestaurantMenu size={20} />,
  },
  { href: "/dashboard/progress", label: "Progress", icon: <MdTimeline size={20} /> },
];

export default function Sidebar() {
  const [expanded, setExpanded] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    // Check for token in localStorage on mount
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);
  }, []);

  function handleLogout() {
    localStorage.removeItem("token");
    setToken(null);
    router.push("/auth/login");
  }

  return (
    <motion.aside
      initial={{ width: 64 }}
      animate={{ width: expanded ? 220 : 64 }}
      transition={{ type: "spring", stiffness: 220, damping: 30 }}
      className="fixed top-0 left-0 h-screen bg-white shadow-md flex flex-col items-center py-6 border-r border-gray-200 z-999"
    >
      {/* Toggle Button */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="mb-8 p-2 rounded-full hover:bg-green-100 transition text-green-700"
        aria-label={expanded ? "Collapse sidebar" : "Expand sidebar"}
      >
        {expanded ? <FiChevronLeft size={24} /> : <FiChevronRight size={24} />}
      </button>

      {/* Nav Links */}
      <nav className="flex flex-col gap-3 w-full px-2 flex-grow">
        {navLinks.map(({ href, label, icon }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-4 px-4 py-2 rounded-lg cursor-pointer transition-colors ${
                isActive
                  ? "bg-green-200 text-green-800 font-semibold shadow"
                  : "text-green-700 hover:bg-green-100"
              }`}
            >
              <span>{icon}</span>
              {expanded && <span className="whitespace-nowrap">{label}</span>}
            </Link>
          );
        })}
      </nav>

      {/* Profile / Logout Button */}
      {token ? (
        <button
          onClick={handleLogout}
          className="mt-auto flex items-center gap-4 px-4 py-2 rounded-lg cursor-pointer text-red-600 hover:bg-red-100 transition w-full justify-center"
          aria-label="Log out"
          title="Log out"
        >
          <MdLogout size={20} />
          {expanded && <span>Log Out</span>}
        </button>
      ) : (
        <Link
          href="/auth/register"
          className="mt-auto flex items-center gap-4 px-4 py-2 rounded-lg cursor-pointer text-green-700 hover:bg-green-100 transition w-full justify-center"
          aria-label="Register"
          title="Register"
        >
          <MdPerson size={20} />
          {expanded && <span>Register</span>}
        </Link>
      )}
    </motion.aside>
  );
}
