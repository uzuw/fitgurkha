/**
 * Calculate BMI
 * @param weightKg - weight in kilograms
 * @param heightCm - height in centimeters
 * @returns BMI number rounded to 1 decimal place
 */
export function calculateBMI(weightKg: number, heightCm: number): number {
  const heightM = heightCm / 100;
  const bmi = weightKg / (heightM * heightM);
  return Math.round(bmi * 10) / 10;
}

/**
 * Get BMI category string based on BMI value
 */
export function getBMICategory(bmi: number): string {
  if (bmi < 18.5) return "Underweight";
  if (bmi < 24.9) return "Normal weight";
  if (bmi < 29.9) return "Overweight";
  return "Obesity";
}
