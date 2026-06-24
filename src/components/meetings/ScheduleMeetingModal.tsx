import React, { useState } from "react";

import { Button } from "../ui/Button";
import { Card } from "../ui/Card";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const ScheduleMeetingModal = ({
  isOpen,
  onClose,
}: Props) => {
  const [title, setTitle] =
    useState("");

  const [date, setDate] =
    useState("");

  const [time, setTime] =
    useState("");

  if (!isOpen) return null;

  const handleSubmit = () => {
    alert(
      `Meeting Scheduled:\n${title}`
    );

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <Card className="w-full max-w-lg p-6">
        <h2 className="text-xl font-bold mb-5">
          Schedule Meeting
        </h2>

        <div className="space-y-4">
          <div>
            <label className="block mb-2 text-sm font-medium">
              Meeting Title
            </label>

            <input
              className="w-full border rounded-lg p-3"
              value={title}
              onChange={(e) =>
                setTitle(
                  e.target.value
                )
              }
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">
              Date
            </label>

            <input
              type="date"
              className="w-full border rounded-lg p-3"
              value={date}
              onChange={(e) =>
                setDate(
                  e.target.value
                )
              }
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">
              Time
            </label>

            <input
              type="time"
              className="w-full border rounded-lg p-3"
              value={time}
              onChange={(e) =>
                setTime(
                  e.target.value
                )
              }
            />
          </div>
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <Button
            variant="outline"
            onClick={onClose}
          >
            Cancel
          </Button>

          <Button
            onClick={handleSubmit}
          >
            Schedule
          </Button>
        </div>
      </Card>
    </div>
  );
};