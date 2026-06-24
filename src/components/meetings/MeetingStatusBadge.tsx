import React from "react";
import { Badge } from "../ui/Badge";

interface Props {
  status:
    | "confirmed"
    | "pending"
    | "completed"
    | "cancelled"
    | "rescheduled";
}

export const MeetingStatusBadge = ({
  status,
}: Props) => {
  switch (status) {
    case "confirmed":
      return (
        <Badge variant="success">
          Confirmed
        </Badge>
      );

    case "pending":
      return (
        <Badge variant="warning">
          Pending
        </Badge>
      );

    case "completed":
      return (
        <Badge variant="primary">
          Completed
        </Badge>
      );

    case "cancelled":
      return (
        <Badge variant="error">
          Cancelled
        </Badge>
      );

    case "rescheduled":
      return (
        <Badge variant="secondary">
          Rescheduled
        </Badge>
      );

    default:
      return (
        <Badge variant="gray">
          Unknown
        </Badge>
      );
  }
};