import React from "react";
import { Card } from "../ui/Card";

export const MeetingTimeline = () => {
  const steps = [
    "Meeting Requested",
    "Accepted",
    "Scheduled",
    "Reminder Sent",
    "Meeting Started",
    "Completed",
  ];

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-6">
        Meeting Timeline
      </h3>

      <div className="space-y-4">
        {steps.map((step, index) => (
          <div
            key={step}
            className="flex items-center gap-4"
          >
            <div className="w-4 h-4 rounded-full bg-primary-600" />

            <div className="flex-1">
              <p className="font-medium">
                {step}
              </p>
            </div>

            {index !== steps.length - 1 && (
              <div className="absolute ml-2 mt-12 h-6 border-l border-gray-300" />
            )}
          </div>
        ))}
      </div>
    </Card>
  );
};