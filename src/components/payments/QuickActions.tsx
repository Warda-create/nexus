import React from "react";

import {
  Plus,
  Send,
  Wallet,
  Landmark,
} from "lucide-react";

import { Button } from "../ui/Button";
import { Card, CardBody } from "../ui/Card";

export const QuickActions = () => {
  return (
    <Card>
      <CardBody>
        <h2 className="font-semibold text-lg mb-4">
          Quick Actions
        </h2>

        <div className="grid grid-cols-2 gap-3">

          <Button
            leftIcon={<Plus size={16} />}
          >
            Add Funds
          </Button>

          <Button
            leftIcon={<Send size={16} />}
          >
            Transfer
          </Button>

          <Button
            leftIcon={<Wallet size={16} />}
          >
            Withdraw
          </Button>

          <Button
            leftIcon={<Landmark size={16} />}
          >
            New Deal
          </Button>

        </div>
      </CardBody>
    </Card>
  );
};