"use client";
import { useGetMeetingsData } from "@/app/dashboard/hooks/assigned-tasks";
import MeetingCard from "@/components/dashboard/assigned-tasks/MeetingCard";
import AssignedTasksSubHeader from "@/components/dashboard/assigned-tasks/SubHeader";
import Tasks from "@/components/dashboard/assigned-tasks/Tasks";
import Header from "@/components/dashboard/Header";
import React, { FC, useEffect } from "react";

interface IProps {}

const AssignedTasksPage: FC<IProps> = (props) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const data = useGetMeetingsData();

  return (
    <div className="flex flex-col gap-5 p-5">
      <Header>List of Assigned Tasks</Header>
      <section className="flex flex-col gap-5 sm:flex-row">
        {data.map((meetingData, i) => (
          <div className="w-full" key={i}>
            <MeetingCard {...meetingData} />
          </div>
        ))}
      </section>
      <AssignedTasksSubHeader />
      <Tasks />
    </div>
  );
};

export default AssignedTasksPage;
