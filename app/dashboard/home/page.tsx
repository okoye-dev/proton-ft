"use client";
import Header from "@/components/dashboard/Header";
import ActivityReport from "@/components/dashboard/home/ActivityReport";
import ProgressDisplay from "@/components/dashboard/home/ProgressDisplay";
import React, { FC, useEffect } from "react";
import { useGetActivityReportData } from "../hooks/home";
import UpcomingEvents from "@/components/dashboard/home/UpcomingEvents";
import ProjectDashboard from "@/components/dashboard/home/ProjectDashboard";

interface IProps {}

const Home: FC<IProps> = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const activityReportData = useGetActivityReportData();

  return (
    <div className="flex flex-col gap-5">
      <Header>
        <>
          <h1>Welcome back, Henry</h1>
          <small className="pt-2 font-normal leading-relaxed">
            We're excited to have you on board. Below you'll find everything you
            need to get started.
          </small>
        </>
      </Header>
      <section className="flex w-full flex-col gap-5 sm:flex-row">
        <ProgressDisplay
          title="Onboarding Progress"
          content="Create your account Lorem ipsum dolor sit amet, consectetur adipiscing"
          progressValue={70}
        />
        <ProgressDisplay
          title="Tasks Completed"
          content="Create your account amet, consectetur adipiscing"
          progressValue={40}
          className="sm:max-w-lg"
        />
      </section>
      <section className="flex flex-col gap-5 lg:flex-row">
        <ActivityReport reportData={activityReportData} />
        <UpcomingEvents />
      </section>
      <ProjectDashboard />
    </div>
  );
};

export default Home;
