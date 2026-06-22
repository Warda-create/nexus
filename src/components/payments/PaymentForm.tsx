import React, { useState } from "react";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";

export const PaymentForm = () => {
  const [amount, setAmount] = useState("");
  const [receiver, setReceiver] = useState("");

  const handleSubmit = () => {
    alert(
      `Mock Transaction\nAmount: ${amount}\nReceiver: ${receiver || "N/A"}`
    );
  };

  return (
    <div className="space-y-4">
      <Input
        label="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        fullWidth
      />

      <Input
        label="Receiver"
        value={receiver}
        onChange={(e) => setReceiver(e.target.value)}
        fullWidth
      />

      <Button onClick={handleSubmit}>
        Submit Transaction
      </Button>
    </div>
  );
};