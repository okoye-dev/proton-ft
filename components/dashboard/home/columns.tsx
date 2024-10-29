"use client";

import { ProjectsTableModifiedData, TitleAndDescriptionData } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import redDot from "@/assets/svgs/offline.svg";
import greenDot from "@/assets/svgs/active.svg";
import blueDot from "@/assets/svgs/blue-big-dot.svg";
import TitleAndDescriptionCell from "./TitleAndDescriptionCell";

export const columns: ColumnDef<ProjectsTableModifiedData>[] = [
  {
    header: "Project Title / Description",
    accessorKey: "titleAndDescription",
    cell: ({ getValue }) => {
      const { title, description, unit } = getValue<TitleAndDescriptionData>();

      return (
        <TitleAndDescriptionCell
          title={title}
          description={description}
          unit={unit}
        />
      );
    },
  },
  {
    header: "Task Period",
    accessorKey: "taskPeriod",
    cell: ({ getValue }) => {
      return (
        <span className="text-nowrap font-medium text-primary">
          {getValue<string>()}
        </span>
      );
    },
  },
  {
    header: "Progress",
    accessorKey: "progressValue",
    cell: ({ getValue }) => {
      const progressValue = getValue<number>();
      return (
        <span className="flex items-center gap-2 pr-4 text-xs font-semibold text-primary">
          <Progress value={progressValue} className="h-2 min-w-20" />
          {progressValue}%
        </span>
      );
    },
  },
  {
    header: "Members",
    accessorKey: "members",
    cell: ({ getValue }) => {
      return (
        <span className="flex lg:pr-5">
          <Image
            src={getValue<string>()}
            alt="members"
            width={150}
            height={50}
          />
        </span>
      );
    },
  },
  {
    header: "Status",
    accessorKey: "status",
    cell: ({ getValue }) => {
      const value = getValue<ProjectsTableModifiedData["status"]>();
      const status =
        value === "Not Started"
          ? redDot
          : value === "Completed"
            ? greenDot
            : blueDot;
      return (
        <span className="flex items-center gap-2">
          <Image src={status} alt="status" />
          <p
            className={`${value === "Not Started" ? "text-red-500" : "text-green-bright"}`}
          >
            {value}
          </p>
        </span>
      );
    },
  },
];
