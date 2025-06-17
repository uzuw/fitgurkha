export interface FoodItem {
  id: number;
  name: string;
  calories: number; // per serving
  protein: number;  // grams
  carbs: number;    // grams
  fats: number;     // grams
  category: "protein" | "carb" | "fat" | "vegetable" | "fruit" | "snack";
  description?: string;
}

export const foodData: FoodItem[] = [
  {
    id: 1,
    name: "Grilled Chicken Breast",
    calories: 165,
    protein: 31,
    carbs: 0,
    fats: 3.6,
    category: "protein",
    description: "Lean protein source great for muscle building.",
  },
  {
    id: 2,
    name: "Brown Rice",
    calories: 216,
    protein: 5,
    carbs: 44,
    fats: 1.8,
    category: "carb",
    description: "Whole grain carb that provides long-lasting energy.",
  },
  {
    id: 3,
    name: "Avocado",
    calories: 160,
    protein: 2,
    carbs: 9,
    fats: 15,
    category: "fat",
    description: "Healthy fats that support heart health.",
  },
  {
    id: 4,
    name: "Broccoli",
    calories: 55,
    protein: 4,
    carbs: 11,
    fats: 0.5,
    category: "vegetable",
    description: "Rich in fiber and vitamins.",
  },
  {
    id: 5,
    name: "Apple",
    calories: 95,
    protein: 0.5,
    carbs: 25,
    fats: 0.3,
    category: "fruit",
    description: "High fiber fruit to keep you full.",
  },
  {
    id: 6,
    name: "Almonds",
    calories: 170,
    protein: 6,
    carbs: 6,
    fats: 15,
    category: "snack",
    description: "Nutritious snack full of healthy fats and protein.",
  },
];
