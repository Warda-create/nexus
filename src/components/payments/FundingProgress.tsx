import React from "react";
import { Card, CardBody } from "../ui/Card";

interface Props {
  raised: number;
  goal: number;
}

export const FundingProgress = ({
  raised,
  goal,
}: Props) => {
  const percentage =
    (raised / goal) * 100;

  return (
    <Card>
      <CardBody>
        <h2 className="font-semibold text-lg mb-4">
          Funding Progress
        </h2>

        <div className="flex justify-between mb-2">
          <span>
            ${raised.toLocaleString()}
          </span>

          <span>
            ${goal.toLocaleString()}
          </span>
        </div>

        <div className="w-full bg-gray-200 rounded-full h-4">
          <div
            className="bg-primary-600 h-4 rounded-full"
            style={{
              width: `${percentage}%`,
            }}
          />
        </div>

        <p className="mt-3 text-sm text-gray-500">
          {percentage.toFixed(0)}%
          Funded
        </p>
      </CardBody>
    </Card>
  );
};