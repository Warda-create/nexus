import React, { useRef, useState } from "react";
import { Upload, FolderOpen, FileText } from "lucide-react";

import { Button } from "../ui/Button";

interface DocumentUploadProps {
onUpload: (file: File) => void;
onMultipleUpload?: (files: File[]) => void;
}

export const DocumentUpload: React.FC<DocumentUploadProps> = ({
onUpload,
onMultipleUpload,
}) => {
const fileInputRef =
useRef<HTMLInputElement>(null);

const folderInputRef =
useRef<HTMLInputElement>(null);

const [dragging, setDragging] =
useState(false);

const [selectedFiles, setSelectedFiles] =
useState<File[]>([]);

const processFiles = (
fileList: FileList | null
) => {
if (!fileList) return;


const files = Array.from(fileList);

setSelectedFiles(files);

if (onMultipleUpload) {
  onMultipleUpload(files);
} else {
  files.forEach((file) =>
    onUpload(file)
  );
}


};

const handleDrop = (
e: React.DragEvent<HTMLDivElement>
) => {
e.preventDefault();


setDragging(false);

processFiles(e.dataTransfer.files);


};

return ( <div className="space-y-4">
<div
onDragOver={(e) => {
e.preventDefault();
setDragging(true);
}}
onDragLeave={() =>
setDragging(false)
}
onDrop={handleDrop}
className={`border-2 border-dashed rounded-xl p-8 text-center transition-all ${
          dragging
            ? "border-primary-500 bg-primary-50"
            : "border-gray-300 bg-white"
        }`}
> <Upload
       size={40}
       className="mx-auto mb-4 text-primary-600"
     />


    <h3 className="text-lg font-semibold mb-2">
      Upload Documents
    </h3>

    <p className="text-sm text-gray-500 mb-6">
      Drag & drop files here or
      choose files/folders from your
      computer
    </p>

    <div className="flex flex-wrap justify-center gap-3">
      <Button
        leftIcon={<Upload size={16} />}
        onClick={() =>
          fileInputRef.current?.click()
        }
      >
        Choose Files
      </Button>

      <Button
        variant="outline"
        leftIcon={
          <FolderOpen size={16} />
        }
        onClick={() =>
          folderInputRef.current?.click()
        }
      >
        Open Folder
      </Button>
    </div>

    <input
      ref={fileInputRef}
      type="file"
      multiple
      className="hidden"
      onChange={(e) =>
        processFiles(
          e.target.files
        )
      }
    />

    <input
      ref={folderInputRef}
      type="file"
      multiple
      className="hidden"
      onChange={(e) =>
        processFiles(
          e.target.files
        )
      }
      {...({
        webkitdirectory: "",
      } as any)}
    />
  </div>

  {selectedFiles.length > 0 && (
    <div className="bg-white border rounded-xl">
      <div className="p-4 border-b">
        <h4 className="font-medium">
          Selected Files (
          {selectedFiles.length})
        </h4>
      </div>

      <div className="max-h-72 overflow-y-auto">
        {selectedFiles.map(
          (file, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-3 border-b last:border-b-0"
            >
              <FileText
                size={18}
                className="text-primary-600"
              />

              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">
                  {file.name}
                </p>

                <p className="text-xs text-gray-500">
                  {(
                    file.size /
                    1024
                  ).toFixed(1)}{" "}
                  KB
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  )}
</div>


);
};
