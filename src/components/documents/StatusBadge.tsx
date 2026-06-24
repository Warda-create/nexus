import React from "react";

interface StatusBadgeProps {
  status: "Draft" | "In Review" | "Signed";
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({
  status,
}) => {
  const styles = {
    Draft: "bg-gray-100 text-gray-700",
    "In Review":
      "bg-yellow-100 text-yellow-700",
    Signed:
      "bg-green-100 text-green-700",
  };

  return (
    <span
      className={`px-2 py-1 text-xs rounded ${styles[status]}`}
    >
      {status}
    </span>
  );
};