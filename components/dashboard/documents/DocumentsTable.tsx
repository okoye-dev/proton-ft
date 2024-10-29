import { DataTable } from "@/components/ui/data-table";
import React, { FC } from "react";
import { columns } from "./columns";
import { useMockDocumentsData } from "@/app/dashboard/hooks/documents/useMockDocumentsData";

interface IProps {}

const DocumentsTable: FC<IProps> = (props) => {
  const data = useMockDocumentsData();

  return (
    <div>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default DocumentsTable;
