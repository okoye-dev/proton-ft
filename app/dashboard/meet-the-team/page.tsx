"use client";
import Header from "@/components/dashboard/Header";
import React, { FC, useEffect } from "react";
import StaffMembersTable from "@/components/dashboard/meet-the-team/StaffMembersTable";
import TopManagementTable from "@/components/dashboard/meet-the-team/TopManagementTable";

interface IProps {}

const MeetTheTeam: FC<IProps> = (props) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="flex flex-col gap-5 p-5">
      <Header>Meet The Team</Header>
      <TopManagementTable />
      <StaffMembersTable />
    </div>
  );
};

export default MeetTheTeam;
