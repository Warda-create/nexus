import React from "react";
import { Badge } from "../ui/Badge";

interface Props {
  status:
    | "Completed"
    | "Pending"
    | "Failed";
}

export const PaymentStatusBadge = ({
  status,
}: Props) => {
  if (status === "Completed") {
    return (
      <Badge variant="success">
        Completed
      </Badge>
    );
  }

  if (status === "Pending") {
    return (
      <Badge variant="warning">
        Pending
      </Badge>
    );
  }

  return (
    <Badge variant="error">
      Failed
    </Badge>
  );
};