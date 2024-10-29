"use client";

import { DocumentsRowData } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import download from "@/assets/svgs/download.svg";
import deleteIcon from "@/assets/svgs/red-bin.svg";
import pfp from "@/assets/images/pfp.png";

export const columns: ColumnDef<DocumentsRowData>[] = [
  {
    header: "File Name",
    accessorKey: "filename",
  },
  {
    header: "File Size",
    accessorKey: "fileSize",
    cell: ({ getValue }) => {
      const size = getValue<number>();
      return (
        <span className="text-nowrap font-medium text-secondary">
          {size} MB
        </span>
      );
    },
  },
  {
    header: "Date Uploaded",
    accessorKey: "dateUploaded",
  },
  {
    header: "Last Updated",
    accessorKey: "lastUpdated",
  },
  {
    header: "Uploaded By",
    accessorKey: "uploadedBy",
    cell: ({ getValue }) => (
      <span className="flex w-full items-center gap-2 text-nowrap font-medium text-primary">
        <Image
          src={pfp}
          alt="pfp"
          width={30}
          height={30}
          className="rounded-full"
        />
        {getValue<string>()}
      </span>
    ),
  },
  {
    header: "Actions",
    accessorKey: "actions",
    cell: ({ getValue }) => {
      const { canDownload, canDelete } =
        getValue<DocumentsRowData["actions"]>();

      return (
        <div className="flex gap-3">
          {canDownload && (
            <Image
              src={download}
              alt="Download"
              width={24}
              height={24}
              className="cursor-pointer"
              onClick={() => console.log("Download clicked")}
            />
          )}
          {canDelete && (
            <Image
              src={deleteIcon}
              alt="Delete"
              width={24}
              height={24}
              className="cursor-pointer"
              onClick={() => console.log("Delete clicked")}
            />
          )}
        </div>
      );
    },
  },
];
