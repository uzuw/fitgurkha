"use client";
import React, { useEffect, useState } from "react";
import { getCookie } from "@/lib/cookieStorage";
import FoodCard from "@/components/FoodCard";
import { getFoodRecommendations } from "@/utils/getFoodRecommendations";

export default function NutritionPage() {
  const [user, setUser] = useState<any>(null);
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const userData = getCookie("userData");
    setUser(userData);
    if (userData) {
      const recommendedFoods = getFoodRecommendations(userData.activity);
      setFoods(recommendedFoods);
    }
  }, []);

  if (!user) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6 space-y-4">
      <h2 className="text-2xl font-bold mb-4">Food Recommendations for {user.name}</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {foods.map((food, idx) => (
          <FoodCard key={idx} food={food} />
        ))}
      </div>
    </div>
  );
}
