import React from "react";
import { Card } from "../ui/Card";

interface Props {
  title: string;
  value: string | number;
  icon: React.ReactNode;
}

export const MeetingStats = ({
  title,
  value,
  icon,
}: Props) => {
  return (
    <Card className="p-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">
            {title}
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {value}
          </h2>
        </div>

        <div className="text-primary-600">
          {icon}
        </div>
      </div>
    </Card>
  );
};