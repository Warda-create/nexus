import React from "react";

import { MeetingCard } from "./MeetingCard";
import { Meeting } from "../../types/meeting";

interface Props {
  meetings: Meeting[];
}

export const UpcomingMeetings = ({
  meetings,
}: Props) => {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {meetings.map((meeting) => (
        <MeetingCard
          key={meeting.id}
          meeting={meeting}
        />
      ))}
    </div>
  );
};