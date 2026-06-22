import { Transaction } from "../types/payment";

export const transactions: Transaction[] = [
  {
    id: "TX001",
    amount: 5000,
    sender: "Bank",
    receiver: "Investor Wallet",
    status: "Completed",
    type: "Deposit",
    date: "2026-06-10",
  },
  {
    id: "TX002",
    amount: 2500,
    sender: "Investor Wallet",
    receiver: "TechWave Startup",
    status: "Completed",
    type: "Funding",
    date: "2026-06-12",
  },
  {
    id: "TX003",
    amount: 1000,
    sender: "Investor Wallet",
    receiver: "Sarah Johnson",
    status: "Pending",
    type: "Transfer",
    date: "2026-06-15",
  },
];