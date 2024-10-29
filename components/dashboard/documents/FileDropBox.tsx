"use client";
import { Button } from "@/components/ui/button";
import React, { FC, useState } from "react";
import fileIcon from "@/assets/svgs/file.svg";
import Image from "next/image";

interface IProps {}

const FileDropBox: FC<IProps> = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const files = Array.from(e.dataTransfer.files);
    setSelectedFiles((prevFiles) => [...prevFiles, ...files]);
  };

  const handleBrowseFiles = () => {
    document.getElementById("fileInput")?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setSelectedFiles((prevFiles) => [...prevFiles, ...files]);
  };

  return (
    <div className="h-full w-full">
      <div
        className={`flex h-full w-full flex-col items-center justify-center gap-2 rounded-2xl border-4 border-dotted px-4 py-10 transition-all duration-300 lg:gap-3 ${
          isDragging ? "border-blue-500 bg-blue-50" : "border-border-subheader"
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <Image src={fileIcon} alt="file" width={50} height={50} />
        <p className="mt-2 font-medium text-primary">
          Choose a file or drag & drop it here
        </p>
        <small className="text-tertiary">
          Supported Formats: .pdf, .docx, .pngs
        </small>
        <Button variant={"white"} className="px-8" onClick={handleBrowseFiles}>
          Browse File
        </Button>
        <input
          id="fileInput"
          type="file"
          multiple
          aria-label="fileInput"
          className="hidden"
          onChange={handleFileChange}
        />
      </div>

      {/* Display the list of selected files */}
      {selectedFiles.length > 0 && (
        <div className="mt-4">
          <ul className="mt-2 flex flex-wrap gap-2">
            {selectedFiles.map((file, index) => (
              <li
                key={index}
                className="w-fit rounded-xl border border-border-subheader bg-white px-4 py-2 text-sm text-secondary shadow-sm"
              >
                {file.name} ({(file.size / 1024).toFixed(2)} KB)
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FileDropBox;
