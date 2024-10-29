"use client";

import { TeamMemberModifiedRowData } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";

import active from "@/assets/svgs/active.svg";
import onLeave from "@/assets/svgs/gray-big-dot.svg";
import offline from "@/assets/svgs/offline.svg";

export const columns: ColumnDef<TeamMemberModifiedRowData>[] = [
  {
    header: "Staff Members",
    accessorKey: "info",
    cell: ({ getValue }) => {
      const { name, email, img } =
        getValue<TeamMemberModifiedRowData["info"]>();
      return (
        <span className="lg:pr- flex items-center gap-2 pr-6">
          <Image
            src={img}
            alt="Profile Picture"
            width={40}
            height={40}
            className="w-[50px] rounded-full"
          />
          <div className="flex flex-col gap-1">
            <span className="text-base font-medium">{name}</span>
            <span className="font-medium text-tertiary">{email}</span>
          </div>
        </span>
      );
    },
  },
  {
    header: "Location",
    accessorKey: "location",
  },
  {
    header: "Start Date",
    accessorKey: "startDate",
    cell: ({ getValue }) => {
      return (
        <div className="text-nowrap">
          {getValue<TeamMemberModifiedRowData["startDate"]>()}
        </div>
      );
    },
  },
  {
    header: "Job Title",
    accessorKey: "jobTitle",
  },
  {
    header: "Phone Number",
    accessorKey: "phoneNumber",
    cell: ({ getValue }) => {
      return (
        <div className="text-nowrap">
          {getValue<TeamMemberModifiedRowData["phoneNumber"]>()}
        </div>
      );
    },
  },
  {
    header: "Status",
    accessorKey: "status",
    cell: ({ getValue }) => {
      const status = getValue<TeamMemberModifiedRowData["status"]>();
      return (
        <span
          className={`flex gap-1 text-nowrap pr-4 font-medium ${
            status === "Active"
              ? "text-green-500"
              : status === "On Leave"
                ? "text-tertiary"
                : "text-red-500"
          }`}
        >
          <Image
            src={
              status === "Active"
                ? active
                : status === "On Leave"
                  ? onLeave
                  : offline
            }
            alt="right"
            width={16}
            height={16}
          />
          {status}
        </span>
      );
    },
  },
];
