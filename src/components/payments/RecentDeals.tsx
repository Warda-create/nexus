import React from "react";
import { Card, CardBody } from "../ui/Card";

export const RecentDeals = () => {
  const deals = [
    {
      startup: "Nexus AI",
      amount: "$50,000",
      status: "Active",
    },
    {
      startup: "PropTech Vision",
      amount: "$125,000",
      status: "Completed",
    },
    {
      startup: "Smart Estate",
      amount: "$80,000",
      status: "Pending",
    },
  ];

  return (
    <Card>
      <CardBody>
        <h2 className="font-semibold text-lg mb-4">
          Recent Funding Deals
        </h2>

        <div className="space-y-4">
          {deals.map((deal) => (
            <div
              key={deal.startup}
              className="border rounded-lg p-4"
            >
              <div className="flex justify-between">
                <div>
                  <h3 className="font-medium">
                    {deal.startup}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {deal.amount}
                  </p>
                </div>

                <span className="text-sm font-medium">
                  {deal.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardBody>
    </Card>
  );
};