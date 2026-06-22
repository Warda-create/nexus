export interface Participant {
  id: string;
  name: string;
  stream?: MediaStream;
  isLocal?: boolean;
}

export interface CallState {
  isActive: boolean;
  isScreenSharing: boolean;
  participants: Participant[];
}