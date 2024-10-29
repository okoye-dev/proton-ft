import CandidateApplicationForm from "@/components/apply/CandidateApplicationForm";
import ProgressIndicator from "@/components/apply/ProgressIndicator";
import React, { FC } from "react";

interface IProps {}

const ApplicationPage: FC<IProps> = (props) => {
  return (
    <div className="flex w-full flex-col items-center gap-6 px-5 py-10 lg:py-40">
      <CandidateApplicationForm />
      <ProgressIndicator formStage={0} />
    </div>
  );
};

export default ApplicationPage;
