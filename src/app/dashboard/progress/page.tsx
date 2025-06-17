"use client";
import React, { useEffect, useState } from "react";
import { getCookie } from "@/lib/cookieStorage";
import ProgressChart from "@/components/ProgressChart";

export default function ProgressPage() {
  const [user, setUser] = useState<any>(null);

  // Example: static progress data, ideally would come from API or storage
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

  if (!user) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Your Progress, {user.name}</h2>
      <ProgressChart data={progressData} />
    </div>
  );
}
