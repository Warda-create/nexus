import React, { useState } from "react";
import {
  FileText,
  Upload,
  Download,
  Trash2,
  Share2,
  Eye,
} from "lucide-react";

import { Card, CardHeader, CardBody } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";
import { Badge } from "../../components/ui/Badge";

import { DocumentStatusBadge } from "../../components/documents/StatusBadge";
import { DocItem } from "../../types/document";

const initialDocs: DocItem[] = [
  {
    id: "1",
    name: "Pitch Deck 2024.pdf",
    type: "PDF",
    size: "2.4 MB",
    lastModified: "2024-02-15",
    shared: true,
    status: "Draft",
  },
  {
    id: "2",
    name: "Financial Projections.xlsx",
    type: "Spreadsheet",
    size: "1.8 MB",
    lastModified: "2024-02-10",
    shared: false,
    status: "In Review",
  },
  {
    id: "3",
    name: "Business Plan.docx",
    type: "Document",
    size: "3.2 MB",
    lastModified: "2024-02-05",
    shared: true,
    status: "Signed",
  },
];

export const DocumentsPage: React.FC = () => {
  const [docs, setDocs] = useState<DocItem[]>(initialDocs);
  const [selectedDoc, setSelectedDoc] = useState<DocItem | null>(null);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const newDoc: DocItem = {
      id: Date.now().toString(),
      name: file.name,
      type: file.type,
      size: `${(file.size / 1024 / 1024).toFixed(2)} MB`,
      lastModified: new Date().toISOString().split("T")[0],
      shared: false,
      status: "Draft",
      url: URL.createObjectURL(file),
    };

    setDocs([newDoc, ...docs]);
  };

  return (
    <div className="space-y-6">
      {/* HEADER */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Document Chamber</h1>
          <p className="text-gray-500">
            Upload, sign and manage legal documents
          </p>
        </div>

        <label>
          <input
            type="file"
            className="hidden"
            onChange={handleUpload}
          />
          <Button leftIcon={<Upload size={18} />}>
            Upload Document
          </Button>
        </label>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* LEFT PANEL */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <h2 className="font-semibold">Quick Filters</h2>
          </CardHeader>

          <CardBody className="space-y-2">
            {["All", "Draft", "In Review", "Signed"].map((f) => (
              <button
                key={f}
                className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50 rounded"
              >
                {f}
              </button>
            ))}
          </CardBody>
        </Card>

        {/* DOCUMENT LIST */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <h2 className="font-semibold">Documents</h2>
            </CardHeader>

            <CardBody className="space-y-2">
              {docs.map((doc) => (
                <div
                  key={doc.id}
                  className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50"
                >
                  {/* LEFT */}
                  <div className="flex items-center gap-3">
                    <FileText className="text-primary-600" />

                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-medium text-sm">
                          {doc.name}
                        </p>
                        {doc.shared && (
                          <Badge variant="secondary" size="sm">
                            Shared
                          </Badge>
                        )}
                      </div>

                      <p className="text-xs text-gray-500">
                        {doc.type} • {doc.size} •{" "}
                        {doc.lastModified}
                      </p>

                      <div className="mt-1">
                        <DocumentStatusBadge
                          status={doc.status}
                        />
                      </div>
                    </div>
                  </div>

                  {/* ACTIONS */}
                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setSelectedDoc(doc)}
                    >
                      <Eye size={16} />
                    </Button>

                    <Button variant="ghost" size="sm">
                      <Download size={16} />
                    </Button>

                    <Button variant="ghost" size="sm">
                      <Share2 size={16} />
                    </Button>

                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-red-500"
                    >
                      <Trash2 size={16} />
                    </Button>
                  </div>
                </div>
              ))}
            </CardBody>
          </Card>
        </div>

        {/* RIGHT PANEL - PREVIEW */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <h2 className="font-semibold">Preview</h2>
          </CardHeader>

          <CardBody>
            {selectedDoc ? (
              <div className="space-y-3">
                <p className="font-medium">
                  {selectedDoc.name}
                </p>

                <div className="text-xs text-gray-500">
                  {selectedDoc.type}
                </div>

                <div className="h-40 bg-gray-100 rounded flex items-center justify-center text-sm text-gray-500">
                  Document Preview
                </div>

                <Button fullWidth>Open Full View</Button>
              </div>
            ) : (
              <p className="text-sm text-gray-400">
                Select a document to preview
              </p>
            )}
          </CardBody>
        </Card>
      </div>
    </div>
  );
};