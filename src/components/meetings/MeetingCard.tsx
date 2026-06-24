import React from "react";
import { useNavigate } from "react-router-dom";

import { CalendarDays } from "lucide-react";
import { Clock3 } from "lucide-react";
import { Video } from "lucide-react";

import { Card } from "../ui/Card";
import { Button } from "../ui/Button";

import { Meeting } from "../../types/meeting";
import { MeetingStatusBadge } from "./MeetingStatusBadge";

interface Props {
  meeting: Meeting;
}

export const MeetingCard = ({
  meeting,
}: Props) => {
  const navigate = useNavigate();

  return (
    <Card className="p-5">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-semibold text-lg">
            {meeting.title}
          </h3>

          <p className="text-sm text-gray-500 mt-1">
            {meeting.company}
          </p>
        </div>

        <MeetingStatusBadge
          status={meeting.status}
        />
      </div>

      <div className="mt-4 space-y-2">
        <div className="flex items-center gap-2 text-sm">
          <CalendarDays size={16} />

          {meeting.date}
        </div>

        <div className="flex items-center gap-2 text-sm">
          <Clock3 size={16} />

          {meeting.startTime}
        </div>
      </div>

      <div className="mt-4">
        <p className="text-sm text-gray-600">
          {meeting.participantName}
        </p>

        <p className="text-xs text-gray-400">
          {meeting.participantRole}
        </p>
      </div>

      <Button
        className="mt-5 w-full"
        leftIcon={<Video size={16} />}
        onClick={() =>
          navigate("/video-call")
        }
      >
        Join Meeting
      </Button>
    </Card>
  );
};