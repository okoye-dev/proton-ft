"use client";
import Header from "@/components/dashboard/Header";
import React, { FC, useEffect } from "react";
import { useGetActivityReportData } from "../hooks/home";
import ActivityAndTasksReport from "@/components/dashboard/report/ActivityAndTasksReport";

interface IProps {}

const MeetTheTeam: FC<IProps> = (props) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const reportData = useGetActivityReportData();
  return (
    <div className="flex flex-col gap-5 p-5">
      <Header>Profile Report</Header>
      <div className="flex gap-5">
        <ActivityAndTasksReport reportData={reportData} />
      </div>
    </div>
  );
};

export default MeetTheTeam;
