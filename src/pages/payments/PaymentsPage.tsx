import React from "react";

import {
  Wallet,
  DollarSign,
  TrendingUp,
  Landmark,
} from "lucide-react";

import {
  Card,
  CardBody,
  CardHeader,
} from "../../components/ui/Card";

import { WalletCard } from "../../components/payments/WalletCard";
import { PaymentForm } from "../../components/payments/PaymentForm";
import { TransactionTable } from "../../components/payments/TransactionTable";

import { PaymentStats } from "../../components/payments/PaymentStats";
import { FundingProgress } from "../../components/payments/FundingProgress";
import { QuickActions } from "../../components/payments/QuickActions";
import { RecentDeals } from "../../components/payments/RecentDeals";

import { transactions } from "../../data/transactions";

export const PaymentsPage = () => {
  return (
    <div className="space-y-8">

      {/* PAGE HEADER */}

      <div>
        <h1 className="text-3xl font-bold">
          Funding & Payments Hub
        </h1>

        <p className="text-gray-500 mt-1">
          Manage funding deals, wallet balances,
          investments and transactions.
        </p>
      </div>

      {/* WALLET */}

      <WalletCard balance={50000} />

      {/* STATS */}

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">

        <PaymentStats
          title="Available Balance"
          value="$50,000"
          icon={<Wallet size={32} />}
        />

        <PaymentStats
          title="Funds Invested"
          value="$120,000"
          icon={<DollarSign size={32} />}
        />

        <PaymentStats
          title="Active Deals"
          value="12"
          icon={<Landmark size={32} />}
        />

        <PaymentStats
          title="Growth Rate"
          value="+18%"
          icon={<TrendingUp size={32} />}
        />

      </div>

      {/* FUNDING SECTION */}

      <div className="grid gap-6 xl:grid-cols-2">

        <FundingProgress
          raised={350000}
          goal={500000}
        />

        <QuickActions />

      </div>

      {/* DEALS */}

      <RecentDeals />

      {/* PAYMENT FORM */}

      <Card>
        <CardHeader>
          <h2 className="text-lg font-semibold">
            Payment Operations
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Deposit, withdraw or transfer funds.
          </p>
        </CardHeader>

        <CardBody>
          <PaymentForm />
        </CardBody>
      </Card>

      {/* TRANSACTIONS */}

      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">

            <div>
              <h2 className="text-lg font-semibold">
                Transaction History
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                Recent payment activity
              </p>
            </div>

            <div className="text-sm text-gray-500">
              {transactions.length} Transactions
            </div>

          </div>
        </CardHeader>

        <CardBody>
          <TransactionTable
            transactions={transactions}
          />
        </CardBody>
      </Card>

      {/* ANALYTICS */}

      <div className="grid gap-6 xl:grid-cols-3">

        <Card>
          <CardBody>
            <h3 className="font-semibold mb-4">
              Investment Performance
            </h3>

            <div className="space-y-3">

              <div className="flex justify-between">
                <span>Total Investments</span>
                <span className="font-semibold">
                  $1.2M
                </span>
              </div>

              <div className="flex justify-between">
                <span>Successful Deals</span>
                <span className="font-semibold">
                  24
                </span>
              </div>

              <div className="flex justify-between">
                <span>Success Rate</span>
                <span className="font-semibold text-green-600">
                  92%
                </span>
              </div>

            </div>
          </CardBody>
        </Card>

        <Card>
          <CardBody>
            <h3 className="font-semibold mb-4">
              Monthly Funding
            </h3>

            <div className="space-y-4">

              <div>
                <div className="flex justify-between text-sm">
                  <span>January</span>
                  <span>$45k</span>
                </div>

                <div className="w-full bg-gray-200 h-2 rounded mt-1">
                  <div className="bg-primary-600 h-2 rounded w-[40%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm">
                  <span>February</span>
                  <span>$75k</span>
                </div>

                <div className="w-full bg-gray-200 h-2 rounded mt-1">
                  <div className="bg-primary-600 h-2 rounded w-[70%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm">
                  <span>March</span>
                  <span>$95k</span>
                </div>

                <div className="w-full bg-gray-200 h-2 rounded mt-1">
                  <div className="bg-primary-600 h-2 rounded w-[90%]" />
                </div>
              </div>

            </div>
          </CardBody>
        </Card>

        <Card>
          <CardBody>
            <h3 className="font-semibold mb-4">
              Funding Summary
            </h3>

            <div className="space-y-3">

              <div className="flex justify-between">
                <span>Pending Funding</span>
                <span>$45,000</span>
              </div>

              <div className="flex justify-between">
                <span>Completed Funding</span>
                <span>$280,000</span>
              </div>

              <div className="flex justify-between">
                <span>Average Deal Size</span>
                <span>$65,000</span>
              </div>

            </div>
          </CardBody>
        </Card>

      </div>

    </div>
  );
};