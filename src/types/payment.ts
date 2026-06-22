export interface Transaction {
  id: string;
  amount: number;
  sender: string;
  receiver: string;
  status: "Completed" | "Pending" | "Failed";
  type: "Deposit" | "Withdraw" | "Transfer" | "Funding";
  date: string;
}

export interface Wallet {
  balance: number;
}