"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaUser, FaLock } from "react-icons/fa";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (username && password) {
      alert("Account created! Please login.");
      router.push("/auth/login");
    } else {
      alert("Please fill username and password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#e6f2e9] via-[#c7e3cd] to-[#a3d9b1] p-6">
      <div className="backdrop-blur-md bg-white/70 rounded-xl shadow-lg w-full max-w-md p-10 border border-green-300">
        <h2 className="text-3xl font-semibold text-green-900 text-center mb-8">
          Register
        </h2>
        <form onSubmit={handleRegister} className="space-y-6">
          <div className="flex items-center bg-green-100 border border-green-300 rounded-lg px-4 py-3 shadow-sm focus-within:ring-2 focus-within:ring-green-400 transition">
            <FaUser className="text-green-600 mr-3 text-xl" />
            <input
              type="text"
              placeholder="Username"
              className="bg-transparent focus:outline-none text-green-900 w-full placeholder-green-500"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              autoComplete="username"
            />
          </div>

          <div className="flex items-center bg-green-100 border border-green-300 rounded-lg px-4 py-3 shadow-sm focus-within:ring-2 focus-within:ring-green-400 transition">
            <FaLock className="text-green-600 mr-3 text-xl" />
            <input
              type="password"
              placeholder="Password"
              className="bg-transparent focus:outline-none text-green-900 w-full placeholder-green-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="new-password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg shadow-md transition"
          >
            Register
          </button>
        </form>

        {/* Login Link */}
        <p className="mt-6 text-center text-green-800">
          Already have an account?{" "}
          <Link
            href="/auth/login"
            className="font-semibold hover:underline hover:text-green-900 transition"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
