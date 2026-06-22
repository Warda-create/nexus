import React from "react";

interface Props {
  password: string;
}

export const PasswordStrengthMeter: React.FC<Props> = ({ password }) => {
  const calculateStrength = () => {
    let score = 0;

    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    return score;
  };

  const score = calculateStrength();

  const labels = [
    "Very Weak",
    "Weak",
    "Medium",
    "Strong",
    "Very Strong",
  ];

  return (
    <div className="mt-2">
      <div className="w-full h-2 bg-gray-200 rounded">
        <div
          className="h-2 rounded bg-primary-600 transition-all"
          style={{ width: `${score * 20}%` }}
        />
      </div>

      <p className="text-sm text-gray-600 mt-1">
        Strength: {labels[Math.max(score - 1, 0)]}
      </p>
    </div>
  );
};