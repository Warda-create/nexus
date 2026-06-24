import { Meeting } from "../types/meeting";

export const meetings: Meeting[] = [
  {
    id: "1",
    title: "Seed Funding Discussion",
    description:
      "Discuss funding requirements and startup growth strategy.",

    type: "Funding Discussion",

    status: "confirmed",

    date: "2026-06-25",

    startTime: "10:00 AM",

    endTime: "11:00 AM",

    duration: "60 mins",

    participantName: "Sarah Johnson",

    participantRole: "Investor",

    company: "Future Ventures",

    location: "Online",

    notes:
      "Review pitch deck and financial projections before meeting.",

    joinLink: "/video-call",
  },

  {
    id: "2",
    title: "Startup Product Demo",
    description:
      "Present product roadmap and upcoming releases.",

    type: "Startup Demo",

    status: "pending",

    date: "2026-06-27",

    startTime: "02:00 PM",

    endTime: "03:00 PM",

    duration: "60 mins",

    participantName: "Ahmed Khan",

    participantRole: "Entrepreneur",

    company: "Nexus AI",

    location: "Online",

    notes:
      "Prepare MVP walkthrough and customer acquisition metrics.",

    joinLink: "/video-call",
  },

  {
    id: "3",
    title: "Due Diligence Review",

    description:
      "Review company documents and investment readiness.",

    type: "Due Diligence",

    status: "completed",

    date: "2026-06-18",

    startTime: "11:00 AM",

    endTime: "12:00 PM",

    duration: "60 mins",

    participantName: "Michael Roberts",

    participantRole: "Investor",

    company: "Capital Edge",

    location: "Online",

    notes:
      "Documents approved. Proceed to investment discussion.",

    joinLink: "/video-call",
  },

  {
    id: "4",
    title: "Follow-up Strategy Meeting",

    description:
      "Discuss next investment steps and milestones.",

    type: "Follow-up Meeting",

    status: "confirmed",

    date: "2026-06-29",

    startTime: "04:00 PM",

    endTime: "05:00 PM",

    duration: "60 mins",

    participantName: "Emma Wilson",

    participantRole: "Investor",

    company: "Growth Partners",

    location: "Online",

    notes:
      "Finalize investment structure and board involvement.",

    joinLink: "/video-call",
  },
];