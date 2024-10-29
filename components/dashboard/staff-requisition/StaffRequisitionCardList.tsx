"use client";
import { StaffRequisitionData } from "@/types";
import { FC, useState } from "react";
import ExpandedStaffRequisitionCard from "./ExpandedStaffRequisition";

interface IProps {
  data: StaffRequisitionData[];
}

const StaffRequisitionCardList: FC<IProps> = ({ data }) => {
  const [activeCard, setActiveCard] = useState(0);

  return (
    <div className="overflow-hidden rounded-2xl border border-border-subheader">
      {data.map((entry, id) => (
        <div key={id}>
          <ExpandedStaffRequisitionCard
            data={entry}
            canApprove={true}
            activeCard={activeCard}
            setActiveCard={setActiveCard}
          />
          {id < data.length - 1 && (
            <span className="bg-border-subheader flex h-[2px] w-full"></span>
          )}
        </div>
      ))}
    </div>
  );
};

export default StaffRequisitionCardList;
