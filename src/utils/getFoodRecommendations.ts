import { UserData } from "@/context/UserDataContext";
import { foodData } from "@/lib/foodData";

export function getFoodRecommendations(userData: UserData) {
  // Simple example: recommend more protein if exercise frequency is higher
  if (userData.exerciseFrequency === "daily" || userData.exerciseFrequency === "regularly") {
    return foodData.filter((food) => food.category === "protein");
  }
  // Otherwise suggest a balanced mix
  return foodData.filter(
    (food) =>
      food.category === "protein" ||
      food.category === "vegetable" ||
      food.category === "fruit"
  );
}
