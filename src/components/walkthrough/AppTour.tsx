import React, { useState } from "react";
import { Joyride } from "react-joyride";

export const AppTour = () => {
  const [run] = useState(true);

  const steps: Step[] = [
    {
      target: ".tour-dashboard",
      content: "This is your dashboard.",
    },
    {
      target: ".tour-calendar",
      content: "Schedule meetings here.",
    },
    {
      target: ".tour-documents",
      content: "Upload and manage contracts here.",
    },
    {
      target: ".tour-payments",
      content: "Manage wallet and transactions.",
    },
    {
      target: ".tour-video",
      content: "Start video meetings here.",
    },
  ];

  return (
    <Joyride
      steps={steps}
      run={run}
      continuous
      showSkipButton
      showProgress
    />
  );
};