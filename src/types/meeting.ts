export type MeetingStatus =
  | "confirmed"
  | "pending"
  | "completed"
  | "cancelled"
  | "rescheduled";

export type MeetingType =
  | "Pitch Meeting"
  | "Funding Discussion"
  | "Due Diligence"
  | "Startup Demo"
  | "Follow-up Meeting";

export interface Meeting {
  id: string;

  title: string;

  description: string;

  type: MeetingType;

  status: MeetingStatus;

  date: string;

  startTime: string;

  endTime: string;

  duration: string;

  participantName: string;

  participantRole: string;

  company: string;

  location?: string;

  notes?: string;

  joinLink?: string;
}