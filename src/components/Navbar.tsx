"use client";

import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-green-700 text-white px-6 py-3 flex justify-between items-center">
      <Link href="/">
        <h1 className="text-xl font-bold cursor-pointer">FitTrack</h1>
      </Link>

      <div className="space-x-4">
        <Link
          href="/dashboard"
          className="hover:bg-green-600 px-3 py-1 rounded transition"
        >
          Dashboard
        </Link>
        <Link
          href="/dashboard/workouts"
          className="hover:bg-green-600 px-3 py-1 rounded transition"
        >
          Workouts
        </Link>
        <Link
          href="/dashboard/nutrition"
          className="hover:bg-green-600 px-3 py-1 rounded transition"
        >
          Nutrition
        </Link>
        <Link
          href="/dashboard/progress"
          className="hover:bg-green-600 px-3 py-1 rounded transition"
        >
          Progress
        </Link>
      </div>
    </nav>
  );
}
