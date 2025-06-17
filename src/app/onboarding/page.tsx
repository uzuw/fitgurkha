"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useUserData, UserData } from "@/context/UserDataContext";

export default function OnboardingPage() {
  const router = useRouter();
  const { setUserData } = useUserData();

  const [form, setForm] = useState<UserData>({
    name: "",
    age: 0,
    heightCm: 0,
    gender: "male",
    exerciseFrequency: "never",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  function validate() {
    const newErrors: { [key: string]: string } = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (form.age <= 0) newErrors.age = "Age must be positive";
    if (form.heightCm <= 0) newErrors.heightCm = "Height must be positive";
    return newErrors;
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    // Convert age and heightCm to numbers
    const cleanedData = {
      ...form,
      age: Number(form.age),
      heightCm: Number(form.heightCm),
    };
    setUserData(cleanedData);
    router.push("/dashboard");
  }

  return (
    <div className="max-w-md mx-auto mt-16 p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-6 text-center">Tell Us About You</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className={`w-full border rounded p-2 ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        <div>
          <label className="block font-semibold mb-1">Age</label>
          <input
            type="number"
            name="age"
            value={form.age}
            onChange={handleChange}
            className={`w-full border rounded p-2 ${
              errors.age ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.age && (
            <p className="text-red-500 text-sm mt-1">{errors.age}</p>
          )}
        </div>

        <div>
          <label className="block font-semibold mb-1">Height (cm)</label>
          <input
            type="number"
            name="heightCm"
            value={form.heightCm}
            onChange={handleChange}
            className={`w-full border rounded p-2 ${
              errors.heightCm ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.heightCm && (
            <p className="text-red-500 text-sm mt-1">{errors.heightCm}</p>
          )}
        </div>

        <div>
          <label className="block font-semibold mb-1">Gender</label>
          <select
            name="gender"
            value={form.gender}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label className="block font-semibold mb-1">Exercise Frequency</label>
          <select
            name="exerciseFrequency"
            value={form.exerciseFrequency}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2"
          >
            <option value="never">Never</option>
            <option value="sometimes">Sometimes</option>
            <option value="regularly">Regularly</option>
            <option value="daily">Daily</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white p-3 rounded font-semibold hover:bg-green-700 transition"
        >
          Save & Continue
        </button>
      </form>
    </div>
  );
}
