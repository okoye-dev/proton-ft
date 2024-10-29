"use client";
import Header from "@/components/dashboard/Header";
import React, { FC, useEffect, useState } from "react";
import SupportSubHeader from "@/components/dashboard/support/SubHeader";
import FAQs from "@/components/dashboard/support/FAQs";
import Support from "@/components/dashboard/support/Support";

interface IProps {}

const MeetTheTeam: FC<IProps> = (props) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const [activeTab, setActiveTab] = useState("faqs");

  return (
    <div className="flex flex-col gap-5 p-5">
      <Header>FAQs & Support</Header>
      <SupportSubHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === "faqs" ? <FAQs /> : <Support />}
    </div>
  );
};

export default MeetTheTeam;
