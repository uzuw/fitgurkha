"use client";
import React, { useEffect, useState } from "react";
import { getCookie } from "@/lib/cookieStorage";
import { getWorkoutPlan } from "@/utils/getWorkoutPlan";
import WorkoutCard from "@/components/WorkoutCard";

export default function WorkoutsPage() {
  const [user, setUser] = useState<any>(null);
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const userData = getCookie("userData");
    setUser(userData);
    if (userData) {
      const plan = getWorkoutPlan(userData.activity);
      setWorkouts(plan);
    }
  }, []);

  if (!user) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6 space-y-4">
      <h2 className="text-2xl font-bold mb-4">Workout Plan for {user.name}</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {workouts.map((workout, idx) => (
          <WorkoutCard key={idx} workout={workout} />
        ))}
      </div>
    </div>
  );
}
