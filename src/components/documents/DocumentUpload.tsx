import React from "react";
import { Button } from "../ui/Button";
import { Upload } from "lucide-react";

export const DocumentUploader = ({
  onUpload,
}: {
  onUpload: (file: File) => void;
}) => {
  return (
    <div className="p-4 border rounded-lg bg-white">
      <input
        type="file"
        className="hidden"
        id="upload"
        onChange={(e) =>
          e.target.files && onUpload(e.target.files[0])
        }
      />

      <label htmlFor="upload">
        <Button leftIcon={<Upload size={16} />}>
          Upload Document
        </Button>
      </label>
    </div>
  );
};