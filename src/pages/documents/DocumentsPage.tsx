import React from "react";
import {
  Search,
  Folder,
  FileText,
  Download,
  Trash2,
  Share2,
  Eye,
  FileImage,
  FileSpreadsheet,
  FileArchive,
} from "lucide-react";

import { Card, CardBody, CardHeader } from "../../components/ui/Card";
import { Input } from "../../components/ui/Input";
import { Badge } from "../../components/ui/Badge";

import { DocumentUpload } from "../../components/documents/DocumentUpload";
import { StatusBadge } from "../../components/documents/StatusBadge";

import { useDocuments } from "../../hooks/useDocuments";
import { downloadDocument } from "../../services/documentService";

export const DocumentsPage: React.FC = () => {
  const {
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
  } = useDocuments();

  const getFileIcon = (type: string) => {
    const lower = type.toLowerCase();

    if (
      lower.includes("image") ||
      lower.includes("png") ||
      lower.includes("jpg") ||
      lower.includes("jpeg")
    ) {
      return <FileImage size={20} />;
    }

    if (
      lower.includes("sheet") ||
      lower.includes("excel") ||
      lower.includes("spreadsheet")
    ) {
      return <FileSpreadsheet size={20} />;
    }

    if (
      lower.includes("zip") ||
      lower.includes("rar")
    ) {
      return <FileArchive size={20} />;
    }

    return <FileText size={20} />;
  };

  const renderPreview = () => {
    if (!selectedDocument) {
      return (
        <div className="h-full flex items-center justify-center text-gray-500">
          Select a document to preview
        </div>
      );
    }

    if (!selectedDocument.url) {
      return (
        <div className="h-full flex items-center justify-center text-gray-500">
          Preview unavailable
        </div>
      );
    }

    const lower =
      selectedDocument.name.toLowerCase();

    if (
      lower.endsWith(".png") ||
      lower.endsWith(".jpg") ||
      lower.endsWith(".jpeg") ||
      lower.endsWith(".gif") ||
      lower.endsWith(".webp")
    ) {
      return (
        <img
          src={selectedDocument.url}
          alt={selectedDocument.name}
          className="max-h-[500px] mx-auto rounded-lg"
        />
      );
    }

    if (lower.endsWith(".pdf")) {
      return (
        <iframe
          src={selectedDocument.url}
          title={selectedDocument.name}
          className="w-full h-[500px] rounded-lg border"
        />
      );
    }

    return (
      <div className="h-full flex items-center justify-center text-gray-500">
        Preview not available for this file type
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Upload Section */}
      <DocumentUpload
        onUpload={uploadDocument}
        onMultipleUpload={uploadDocuments}
      />

      {/* Main Explorer Layout */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        {/* Sidebar */}
        <Card className="xl:col-span-3">
          <CardHeader>
            <h2 className="font-semibold text-lg">
              Folders
            </h2>
          </CardHeader>

          <CardBody className="space-y-2">
            {folders.map((folder) => (
              <button
                key={folder.name}
                onClick={() =>
                  setSelectedCategory(
                    folder.name as any
                  )
                }
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-left transition-colors ${
                  selectedCategory ===
                  folder.name
                    ? "bg-primary-50 text-primary-700"
                    : "hover:bg-gray-100"
                }`}
              >
                <div className="flex items-center gap-2">
                  <Folder size={18} />
                  <span>{folder.name}</span>
                </div>

                <Badge
                  variant="gray"
                  size="sm"
                >
                  {folder.count}
                </Badge>
              </button>
            ))}
          </CardBody>
        </Card>

        {/* Documents */}
        <Card className="xl:col-span-5">
          <CardHeader>
            <div className="space-y-4">
              <h2 className="font-semibold text-lg">
                Documents
              </h2>

              <div className="relative">
                <Search
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <Input
                  value={searchQuery}
                  onChange={(e) =>
                    setSearchQuery(
                      e.target.value
                    )
                  }
                  placeholder="Search documents..."
                  className="pl-10"
                />
              </div>
            </div>
          </CardHeader>

          <CardBody className="p-0">
            <div className="max-h-[700px] overflow-y-auto">
              {filteredDocuments.length ===
              0 ? (
                <div className="p-8 text-center text-gray-500">
                  No documents found
                </div>
              ) : (
                filteredDocuments.map((doc) => (
                  <div
                    key={doc.id}
                    className={`p-4 border-b cursor-pointer hover:bg-gray-50 transition-colors ${
                      selectedDocument?.id ===
                      doc.id
                        ? "bg-primary-50"
                        : ""
                    }`}
                    onClick={() =>
                      setSelectedDocument(
                        doc
                      )
                    }
                  >
                    <div className="flex items-start gap-3">
                      <div className="text-primary-600 mt-1">
                        {getFileIcon(
                          doc.type
                        )}
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium truncate">
                          {doc.name}
                        </h3>

                        <p className="text-sm text-gray-500">
                          {doc.size}
                        </p>

                        <div className="mt-2 flex flex-wrap gap-2">
                          <StatusBadge
                            status={
                              doc.status
                            }
                          />

                          <Badge
                            variant="gray"
                            size="sm"
                          >
                            {
                              doc.category
                            }
                          </Badge>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mt-4">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedDocument(
                            doc
                          );
                        }}
                        className="p-2 rounded hover:bg-gray-100"
                      >
                        <Eye size={16} />
                      </button>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          downloadDocument(
                            doc
                          );
                        }}
                        className="p-2 rounded hover:bg-gray-100"
                      >
                        <Download
                          size={16}
                        />
                      </button>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          alert(
                            "Share feature coming soon"
                          );
                        }}
                        className="p-2 rounded hover:bg-gray-100"
                      >
                        <Share2
                          size={16}
                        />
                      </button>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();

                          if (
                            window.confirm(
                              "Delete this document?"
                            )
                          ) {
                            removeDocument(
                              doc.id
                            );
                          }
                        }}
                        className="p-2 rounded hover:bg-red-50 text-red-600"
                      >
                        <Trash2
                          size={16}
                        />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </CardBody>
        </Card>

        {/* Preview */}
        <Card className="xl:col-span-4">
          <CardHeader>
            <h2 className="font-semibold text-lg">
              Preview
            </h2>
          </CardHeader>

          <CardBody>
            {selectedDocument && (
              <div className="mb-4">
                <h3 className="font-medium break-words">
                  {selectedDocument.name}
                </h3>

                <p className="text-sm text-gray-500">
                  {
                    selectedDocument.size
                  }
                </p>
              </div>
            )}

            {renderPreview()}
          </CardBody>
        </Card>
      </div>
    </div>
  );
};