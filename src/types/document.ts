export type DocumentStatus = "Draft" | "In Review" | "Signed";

export interface DocItem {
  id: string;
  name: string;
  type: string;
  size: string;
  lastModified: string;
  shared: boolean;
  url?: string;
  status: DocumentStatus;
}