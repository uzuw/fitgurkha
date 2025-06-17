"use client";

import React from "react";
import { useUserData } from "@/context/UserDataContext";
import { getWorkoutPlan } from "@/utils/getWorkoutPlan";
import { getFoodRecommendations } from "@/utils/getFoodRecommendations";
import WorkoutCard from "@/components/WorkoutCard";
import FoodCard from "@/components/FoodCard";

export default function DashboardPage() {
  const { userData } = useUserData();

  if (!userData) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-xl font-semibold">No user data found</h2>
        <p>
          Please complete your{" "}
          <a href="/onboarding" className="text-green-600 underline">
            onboarding
          </a>
          .
        </p>
      </div>
    );
  }

  const workoutPlan = getWorkoutPlan(userData.exerciseFrequency);
  const foodSuggestions = getFoodRecommendations(userData);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Welcome back, {userData.name}!</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Your Workout Plan</h2>
        {workoutPlan.map((w, i) => (
          <WorkoutCard key={i} workout={w} />
        ))}
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Nutrition Suggestions</h2>
        {foodSuggestions.map((food, i) => (
          <FoodCard key={i} name={food.name} description={food.description} />
        ))}
      </section>
    </div>
  );
}
