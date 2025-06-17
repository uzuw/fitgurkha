/**
 * Calculate BMR using Mifflin-St Jeor Equation
 * @param weightKg - weight in kilograms
 * @param heightCm - height in centimeters
 * @param age - age in years
 * @param gender - "male" or "female"
 * @returns BMR calories (rounded)
 */
export function calculateBMR(
  weightKg: number,
  heightCm: number,
  age: number,
  gender: "male" | "female"
): number {
  if (gender === "male") {
    return Math.round(10 * weightKg + 6.25 * heightCm - 5 * age + 5);
  } else {
    return Math.round(10 * weightKg + 6.25 * heightCm - 5 * age - 161);
  }
}
