export type DocumentStatus =
| "Draft"
| "In Review"
| "Signed";

export type DocumentCategory =
| "Contracts"
| "Finance"
| "Legal"
| "Investor Docs"
| "General";

export interface DocItem {
id: string;

name: string;

type: string;

size: string;

lastModified: string;

shared: boolean;

status: DocumentStatus;

category: DocumentCategory;

url?: string;

thumbnail?: string;

isFolder?: boolean;
}

export interface DocumentFolder {
id: string;

name: DocumentCategory;

count: number;
}
