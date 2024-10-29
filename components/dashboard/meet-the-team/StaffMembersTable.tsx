import { DataTable } from "@/components/ui/data-table";
import React, { FC } from "react";
import { columns } from "./staff-members-columns";
import useParseTeamMemberData from "@/app/dashboard/hooks/meet-the-team/useParseTeamMemberData";
import FilterCard from "./FilterCard";

interface IProps {}

const StaffMembersTable: FC<IProps> = (props) => {
  const parsedData = useParseTeamMemberData(false);
  return (
    <div className="space-y-5">
      <FilterCard />
      <DataTable columns={columns} data={parsedData} />
    </div>
  );
};

export default StaffMembersTable;
