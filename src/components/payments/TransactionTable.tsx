import React from "react";
import { Transaction } from "../../types/payment";

interface Props {
  transactions: Transaction[];
}

export const TransactionTable: React.FC<Props> = ({ transactions }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="text-left py-3">Date</th>
            <th className="text-left py-3">Type</th>
            <th className="text-left py-3">Amount</th>
            <th className="text-left py-3">Sender</th>
            <th className="text-left py-3">Receiver</th>
            <th className="text-left py-3">Status</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((tx) => (
            <tr key={tx.id} className="border-b">
              <td className="py-3">{tx.date}</td>
              <td className="py-3">{tx.type}</td>
              <td className="py-3">${tx.amount}</td>
              <td className="py-3">{tx.sender}</td>
              <td className="py-3">{tx.receiver}</td>
              <td className="py-3">{tx.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};