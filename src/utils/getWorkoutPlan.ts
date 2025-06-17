export function getWorkoutPlan(exerciseFrequency: string): string[] {
  switch (exerciseFrequency) {
    case "never":
      return [
        "Start with 10 minutes of walking daily",
        "Try beginner yoga 2 times a week",
        "Increase activity gradually",
      ];
    case "sometimes":
      return [
        "30 minutes cardio 3 times a week",
        "Strength training 2 times a week",
        "Include stretching exercises",
      ];
    case "regularly":
      return [
        "45 minutes cardio 4 times a week",
        "Strength training 3 times a week",
        "Include high-intensity interval training (HIIT)",
      ];
    case "daily":
      return [
        "60 minutes varied workouts daily",
        "Mix strength, cardio, and flexibility",
        "Rest and recovery days as needed",
      ];
    default:
      return ["Stay active and listen to your body."];
  }
}
