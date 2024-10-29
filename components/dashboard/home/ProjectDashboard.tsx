import { DataTable } from "@/components/ui/data-table";
import React, { FC } from "react";
import { columns } from "./columns";
import {
  useGetProjectsTableData,
  useParseProjectTableData,
} from "@/app/dashboard/hooks/home";

interface IProps {}

const ProjectsTable: FC<IProps> = (props) => {
  const data = useGetProjectsTableData();
  const parsedData = useParseProjectTableData(data);

  return (
    <div>
      <DataTable columns={columns} data={parsedData} />
    </div>
  );
};

export default ProjectsTable;
