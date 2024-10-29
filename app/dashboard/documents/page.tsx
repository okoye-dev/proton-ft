"use client";
import DocumentsTable from "@/components/dashboard/documents/DocumentsTable";
import FileDropBox from "@/components/dashboard/documents/FileDropBox";
import DocumentsSubHeader from "@/components/dashboard/documents/SubHeader";
import Header from "@/components/dashboard/Header";
import { FC, useEffect } from "react";

interface IProps {}

const Documentation: FC<IProps> = (props) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="flex flex-col gap-5 p-5">
      <Header>Documentation</Header>
      <DocumentsSubHeader />
      <FileDropBox />
      <DocumentsTable />
    </div>
  );
};

export default Documentation;
