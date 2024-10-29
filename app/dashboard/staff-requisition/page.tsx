"use client";
import Header from "@/components/dashboard/Header";
import StaffRequisitionCardList from "@/components/dashboard/staff-requisition/StaffRequisitionCardList";
import StaffRequisitionSubHeader from "@/components/dashboard/staff-requisition/StaffRequisitionSubHeader";
import React, { FC, useEffect } from "react";
import { useGetStaffRequisitionData } from "../hooks/staff-requisition";

interface IProps {}

const Requisition: FC<IProps> = (props) => {
  const data = useGetStaffRequisitionData();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="flex flex-col gap-5 p-5">
      <Header>Staff Requisition</Header>
      <StaffRequisitionSubHeader variant="My Requests" />
      <StaffRequisitionCardList data={data} />
    </div>
  );
};

export default Requisition;
