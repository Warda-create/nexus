import React, { useState } from "react";
import { Button } from "../ui/Button";

export const FundingDealModal = () => {
  const [amount, setAmount] = useState("");

  const handleFund = () => {
    alert(
      `Funding successful!\nAmount: $${amount}`
    );
  };

  return (
    <div className="space-y-4">
      <input
        className="border rounded-lg w-full px-4 py-2"
        placeholder="Funding Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <Button onClick={handleFund}>
        Fund Startup
      </Button>
    </div>
  );
};