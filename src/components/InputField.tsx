import React from "react";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  error,
  ...inputProps
}) => {
  return (
    <div className="flex flex-col mb-4">
      {label && (
        <label className="mb-1 text-gray-700 dark:text-gray-300 font-medium">
          {label}
        </label>
      )}
      <input
        className={`p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
          error ? "border-red-500" : "border-gray-300"
        }`}
        {...inputProps}
      />
      {error && (
        <span className="text-red-500 text-sm mt-1">{error}</span>
      )}
    </div>
  );
};

export default InputField;
