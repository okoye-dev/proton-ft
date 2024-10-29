"use client";
import { StaffRequisitionData } from "@/types";
import { FC, SetStateAction, useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import pfp from "@/assets/images/pfp.png";
import collapse from "@/assets/svgs/collapse.svg";
import Image from "next/image";

interface IProps {
  isMyRequest?: boolean;
  data: StaffRequisitionData;
  canApprove?: boolean;
  activeCard: number;
  setActiveCard: React.Dispatch<SetStateAction<any>>;
}

const ExpandedStaffRequisitionCard: FC<IProps> = ({
  data,
  isMyRequest,
  canApprove = false,
  activeCard,
  setActiveCard,
}) => {
  const isOpen = activeCard === data.id;
  const [height, setHeight] = useState("0px");
  const contentRef = useRef<HTMLDivElement>(null);

  // This effect handles the accordion animation
  useEffect(() => {
    if (contentRef.current) {
      if (isOpen) {
        const scrollHeight = contentRef.current.scrollHeight;
        setHeight(`${scrollHeight}px`); // Set the height to the content's scrollHeight when open
      } else {
        setHeight("0px"); // Set height to 0 when closed
      }
    }
  }, [isOpen]);

  return (
    <div
      className={`${
        isOpen ? "bg-border-subheader/20" : "bg-white"
      } flex flex-col gap-[10px] p-5 duration-300`}
    >
      <section
        className={`flex items-center justify-between border-border-subheader ${
          isOpen ? "border-b pb-5" : ""
        }`}
      >
        <div>
          <div className="flex items-center gap-3 pb-2">
            <strong className="text-lg">{data.jobTitle}</strong>
            <Button variant={"unit"} size={"sm"} className="font-normal">
              {data.unit}
            </Button>
          </div>
          <div className="flex gap-4 font-medium text-tertiary">
            <p>{data.location}</p>
            <p className="flex items-center gap-2 text-secondary">
              <span className="flex h-1 w-1 rounded-full bg-secondary"></span>
              Created {data.created}
            </p>
          </div>
        </div>
        {isOpen ? (
          <div
            onClick={() => setActiveCard(Math.random())}
            className="flex cursor-pointer gap-2 px-2 text-xs text-red-500"
          >
            Collapse
          </div>
        ) : (
          <div
            onClick={() => setActiveCard(data.id)}
            className="flex cursor-pointer gap-2 px-2 text-xs text-blue-600"
          >
            View Details <Image src={collapse} alt="close" />
          </div>
        )}
      </section>

      {/*  */}
      <div
        ref={contentRef}
        style={{
          height: isOpen ? height : "0px",
          overflow: "hidden",
          transition: "height 0.5s ease",
        }}
      >
        <section className="border-b border-border-subheader">
          <div className="flex items-center gap-5 font-medium">
            <small className="text-tertiary"> Requested By</small>
            <small className="flex items-center justify-center gap-2 text-primary">
              <Image src={pfp} alt="profile pic" width={32} height={32} />
              {data.requestedBy}
            </small>
          </div>
          <div className="flex flex-col justify-center gap-5 py-6">
            <section className="flex">
              <div className="w-72 space-y-1">
                <small className="font-medium text-tertiary">
                  Requestors Email
                </small>
                <p>{data.requestorEmail}</p>
              </div>
              <div className="w-72 space-y-1">
                <small className="font-medium text-tertiary">
                  Employment Type
                </small>
                <p>{data.employmentType}</p>
              </div>
            </section>
            <section className="flex">
              <div className="w-72 space-y-1">
                <small className="font-medium text-tertiary">
                  Proposed Start Date
                </small>
                <p>{data.proposedStartDate}</p>
              </div>
              <div className="w-72 space-y-1">
                <small className="font-medium text-tertiary">Position</small>
                <p>{data.position}</p>
              </div>
            </section>
          </div>
        </section>
        <section className="space-y-3 pt-6">
          <h1 className="text-xl font-medium text-primary">
            Reasons For Request
          </h1>
          <p className="text-secondary">{data.reasonForRequest}</p>
          <h1 className="pt-6 text-xl font-medium text-primary">
            Job Description
          </h1>
          <p className="pb-3 text-secondary">{data.jobDescription}</p>
          {canApprove && (
            <>
              <Button className="mr-3 h-12 w-60 rounded-2xl">Approve</Button>
              <Button className="h-12 w-60 rounded-2xl" variant={"outline"}>
                Decline
              </Button>
            </>
          )}
        </section>
      </div>
    </div>
  );
};

export default ExpandedStaffRequisitionCard;
