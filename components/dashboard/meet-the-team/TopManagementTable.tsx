import { DataTable } from "@/components/ui/data-table";
import React, { FC } from "react";
import { columns } from "./top-management-columns";
import useParseTeamMemberData from "@/app/dashboard/hooks/meet-the-team/useParseTeamMemberData";

interface IProps {}

const TopManagementTable: FC<IProps> = (props) => {
  const parsedData = useParseTeamMemberData(true);
  return (
    <div>
      <DataTable columns={columns} data={parsedData} />
    </div>
  );
};

export default TopManagementTable;
