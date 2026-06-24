import React from "react";

interface Props {
  selectedStatus: string;
  setSelectedStatus: (
    value: string
  ) => void;
}

export const MeetingFilters = ({
  selectedStatus,
  setSelectedStatus,
}: Props) => {
  return (
    <div className="flex flex-wrap gap-3">
      <select
        value={selectedStatus}
        onChange={(e) =>
          setSelectedStatus(e.target.value)
        }
        className="px-4 py-2 border rounded-lg bg-white"
      >
        <option value="all">
          All Meetings
        </option>

        <option value="confirmed">
          Confirmed
        </option>

        <option value="pending">
          Pending
        </option>

        <option value="completed">
          Completed
        </option>

        <option value="cancelled">
          Cancelled
        </option>
      </select>
    </div>
  );
};