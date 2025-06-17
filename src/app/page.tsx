"use client";
import React from "react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-br from-green-400 to-blue-500 text-white">
      <h1 className="text-4xl font-bold mb-6">Welcome to Your Fitness Tracker</h1>
      <p className="mb-8 max-w-md text-center">
        Track your workouts, nutrition, and progress. Get personalized plans based on your data.
      </p>
      <div className="space-x-4">
        <Link
          href="/auth/login"
          className="px-6 py-3 bg-white text-green-600 font-semibold rounded shadow hover:bg-gray-100 transition"
        >
          Login
        </Link>
        <Link
          href="/onboarding"
          className="px-6 py-3 bg-transparent border border-white rounded font-semibold hover:bg-white hover:text-green-600 transition"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}
