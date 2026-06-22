import React from "react";
import { Card, CardBody, CardHeader } from "../../components/ui/Card";

import { WalletCard } from "../../components/payments/WalletCard";
import { PaymentForm } from "../../components/payments/PaymentForm";
import { TransactionTable } from "../../components/payments/TransactionTable";

import { transactions } from "../../data/transactions";

export const PaymentsPage = () => {
  return (
    <div className="space-y-6">
      <WalletCard balance={50000} />

      <Card>
        <CardHeader>
          <h2 className="text-lg font-semibold">
            Deposit / Withdraw / Transfer
          </h2>
        </CardHeader>

        <CardBody>
          <PaymentForm />
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <h2 className="text-lg font-semibold">
            Transaction History
          </h2>
        </CardHeader>

        <CardBody>
          <TransactionTable transactions={transactions} />
        </CardBody>
      </Card>
    </div>
  );
};