import React from "react";
import { Card, CardBody } from "../ui/Card";

interface Props {
  title: string;
  value: string | number;
  icon: React.ReactNode;
}

export const PaymentStats = ({
  title,
  value,
  icon,
}: Props) => {
  return (
    <Card>
      <CardBody>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-500">
              {title}
            </p>

            <h2 className="text-3xl font-bold mt-2">
              {value}
            </h2>
          </div>

          <div>{icon}</div>
        </div>
      </CardBody>
    </Card>
  );
};