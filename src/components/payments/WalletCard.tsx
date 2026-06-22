import React from "react";
import { Wallet } from "lucide-react";
import { Card, CardBody } from "../ui/Card";

interface Props {
  balance: number;
}

export const WalletCard: React.FC<Props> = ({ balance }) => {
  return (
    <Card className="bg-gradient-to-r from-primary-600 to-primary-700 text-white">
      <CardBody>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm opacity-90">Wallet Balance</p>

            <h2 className="text-3xl font-bold mt-2">
              ${balance.toLocaleString()}
            </h2>
          </div>

          <Wallet size={42} />
        </div>
      </CardBody>
    </Card>
  );
};