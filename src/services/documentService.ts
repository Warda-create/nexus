import { DocItem } from "../types/document";

export const formatFileSize = (bytes: number): string => {
  if (bytes < 1024) {
    return `${bytes} B`;
  }

  if (bytes < 1024 * 1024) {
    return `${(bytes / 1024).toFixed(1)} KB`;
  }

  if (bytes < 1024 * 1024 * 1024) {
    return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
  }

  return `${(bytes / 1024 / 1024 / 1024).toFixed(1)} GB`;
};

export const getFileCategory = (
  fileName: string
):
  | "Contracts"
  | "Finance"
  | "Legal"
  | "Investor Docs"
  | "General" => {
  const lower = fileName.toLowerCase();

  if (
    lower.includes("contract") ||
    lower.includes("agreement") ||
    lower.includes("nda")
  ) {
    return "Contracts";
  }

  if (
    lower.includes("finance") ||
    lower.includes("financial") ||
    lower.includes("budget") ||
    lower.includes("revenue")
  ) {
    return "Finance";
  }

  if (
    lower.includes("legal") ||
    lower.includes("law")
  ) {
    return "Legal";
  }

  if (
    lower.includes("pitch") ||
    lower.includes("investor") ||
    lower.includes("funding")
  ) {
    return "Investor Docs";
  }

  return "General";
};

export const createDocumentFromFile = (
  file: File
): DocItem => {
  return {
    id: Date.now().toString(),

    name: file.name,

    type: file.type || "Unknown",

    size: formatFileSize(file.size),

    lastModified: new Date()
      .toISOString()
      .split("T")[0],

    shared: false,

    status: "Draft",

    category: getFileCategory(file.name),

    url: URL.createObjectURL(file),
  };
};

export const downloadDocument = (
  document: DocItem
) => {
  if (!document.url) return;

  const link = window.document.createElement("a");

  link.href = document.url;

  link.download = document.name;

  window.document.body.appendChild(link);

  link.click();

  window.document.body.removeChild(link);
};

export const deleteDocument = (
  docs: DocItem[],
  id: string
) => {
  return docs.filter(
    (doc) => doc.id !== id
  );
};

export const searchDocuments = (
  docs: DocItem[],
  query: string
) => {
  if (!query.trim()) {
    return docs;
  }

  const lower = query.toLowerCase();

  return docs.filter((doc) =>
    doc.name
      .toLowerCase()
      .includes(lower)
  );
};