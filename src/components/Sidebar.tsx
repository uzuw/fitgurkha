"use client";

import Link from "next/link";
import React from "react";

export default function Sidebar() {
  return (
    <aside className="w-60 bg-green-100 min-h-screen p-6">
      <h2 className="text-lg font-bold mb-6">Menu</h2>
      <nav className="flex flex-col space-y-3">
        <Link
          href="/dashboard"
          className="text-green-800 hover:bg-green-200 rounded px-3 py-2"
        >
          Dashboard
        </Link>
        <Link
          href="/dashboard/workouts"
          className="text-green-800 hover:bg-green-200 rounded px-3 py-2"
        >
          Workouts
        </Link>
        <Link
          href="/dashboard/nutrition"
          className="text-green-800 hover:bg-green-200 rounded px-3 py-2"
        >
          Nutrition
        </Link>
        <Link
          href="/dashboard/progress"
          className="text-green-800 hover:bg-green-200 rounded px-3 py-2"
        >
          Progress
        </Link>
      </nav>
    </aside>
  );
}
