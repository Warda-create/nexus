import { useMemo, useState } from "react";
import {
  createDocumentFromFile,
  deleteDocument,
} from "../services/documentService";
import {
  DocItem,
  DocumentCategory,
} from "../types/document";

const initialDocuments: DocItem[] = [
  {
    id: "1",
    name: "Pitch Deck 2024.pdf",
    type: "PDF",
    size: "2.4 MB",
    lastModified: "2024-02-15",
    shared: true,
    status: "Draft",
    category: "Investor Docs",
  },
  {
    id: "2",
    name: "Financial Projections.xlsx",
    type: "Spreadsheet",
    size: "1.8 MB",
    lastModified: "2024-02-10",
    shared: false,
    status: "In Review",
    category: "Finance",
  },
  {
    id: "3",
    name: "Business Plan.docx",
    type: "Document",
    size: "3.2 MB",
    lastModified: "2024-02-05",
    shared: true,
    status: "Signed",
    category: "General",
  },
];

export const useDocuments = () => {
  const [documents, setDocuments] =
    useState<DocItem[]>(initialDocuments);

  const [selectedDocument, setSelectedDocument] =
    useState<DocItem | null>(null);

  const [searchQuery, setSearchQuery] =
    useState("");

  const [selectedCategory, setSelectedCategory] =
    useState<DocumentCategory | "All">("All");

  const uploadDocument = (file: File) => {
    const document =
      createDocumentFromFile(file);

    setDocuments((prev) => [
      document,
      ...prev,
    ]);
  };

  const uploadDocuments = (files: File[]) => {
    const newDocuments = files.map((file) =>
      createDocumentFromFile(file)
    );

    setDocuments((prev) => [
      ...newDocuments,
      ...prev,
    ]);
  };

  const removeDocument = (id: string) => {
    setDocuments((prev) =>
      deleteDocument(prev, id)
    );

    if (
      selectedDocument &&
      selectedDocument.id === id
    ) {
      setSelectedDocument(null);
    }
  };

  const filteredDocuments = useMemo(() => {
    return documents.filter((doc) => {
      const matchesSearch =
        doc.name
          .toLowerCase()
          .includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === "All"
          ? true
          : doc.category === selectedCategory;

      return (
        matchesSearch &&
        matchesCategory
      );
    });
  }, [
    documents,
    searchQuery,
    selectedCategory,
  ]);

  const folders = useMemo(
    () => [
      {
        name: "All",
        count: documents.length,
      },
      {
        name: "Contracts",
        count: documents.filter(
          (d) => d.category === "Contracts"
        ).length,
      },
      {
        name: "Finance",
        count: documents.filter(
          (d) => d.category === "Finance"
        ).length,
      },
      {
        name: "Legal",
        count: documents.filter(
          (d) => d.category === "Legal"
        ).length,
      },
      {
        name: "Investor Docs",
        count: documents.filter(
          (d) =>
            d.category === "Investor Docs"
        ).length,
      },
      {
        name: "General",
        count: documents.filter(
          (d) => d.category === "General"
        ).length,
      },
    ],
    [documents]
  );

  return {
    documents,
    filteredDocuments,

    selectedDocument,
    setSelectedDocument,

    searchQuery,
    setSearchQuery,

    selectedCategory,
    setSelectedCategory,

    uploadDocument,
    uploadDocuments,

    removeDocument,

    folders,
  };
};
