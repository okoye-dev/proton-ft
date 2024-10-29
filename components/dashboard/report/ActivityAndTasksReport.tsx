import { Button } from "@/components/ui/button";
import { ActivityReportData } from "@/types";
import Image from "next/image";
import React, { FC } from "react";
import arrowDown from "@/assets/svgs/arrow-down.svg";
import greendot from "@/assets/svgs/greendot.svg";
import bluedot from "@/assets/svgs/bluedot.svg";
import orangedot from "@/assets/svgs/orangedot.svg";

interface IProps {
  reportData: ActivityReportData;
}

const ActivityAndTasksReport: FC<IProps> = ({ reportData }) => {
  const active = reportData.timeActiveInPercentage ?? 0;
  const absent = reportData.timeAbsentInPercentage ?? 0;
  return (
    <div className="flex w-full flex-col gap-5 md:flex-row">
      {/* Activity Report */}
      <section className="relative flex w-full flex-col justify-around rounded-3xl border border-border-subheader p-4 pt-14 text-primary md:w-2/3 lg:pt-[38px]">
        <strong className="absolute top-4 pb-3 text-lg font-bold lg:pb-0">
          Activity Report
        </strong>

        <div className="flex items-center justify-between border-y-2 border-border-subheader py-4">
          <div className="flex items-center gap-3">
            <Image src={reportData.img} alt="pfp" width={90} height={90} />
            <div className="flex flex-col gap-1">
              <strong className="text-xl text-black">{reportData.name}</strong>
              <small className="font-medium text-tertiary">
                {reportData.tasksCompleted} Tasks Completed
              </small>
            </div>
          </div>

          <span className="flex h-full w-[2px] bg-border-subheader"></span>
          <div className="flex flex-col items-end gap-1">
            <strong className="text-lg text-primary">{reportData.date}</strong>
            <small className="font-medium text-tertiary">
              {reportData.overallTime} hours - Overall Time
            </small>
          </div>
        </div>

        <div className="flex flex-col py-2 lg:-mt-3">
          <div className="flex items-center justify-between">
            <strong className="text-lg text-tertiary">Total Time Worked</strong>
            <Button
              variant={"white"}
              size={"sm"}
              className="font-medium text-secondary"
            >
              <div className="flex items-center">
                <p className="pr-2"> Last 7 Days</p>
                <Image src={arrowDown} alt="go" width={20} height={20} />
              </div>
            </Button>
          </div>

          <div className="flex items-end justify-between pt-4">
            <p className="text-2xl font-semibold tracking-tighter text-black sm:text-3xl">
              {reportData.totalTimeWorked}
            </p>
            <span className="flex items-center gap-4">
              <Image src={greendot} alt="green" width={8} height={8} />
              <small className="font-semibold">Active</small>
              <Image src={orangedot} alt="green" width={8} height={8} />
              <small className="font-semibold">Absent</small>
              <Image src={bluedot} alt="green" width={8} height={8} />
              <small className="font-semibold">Others</small>
            </span>
          </div>

          <div className="flex w-full gap-2 pt-3">
            <span
              className="flex h-2 rounded-sm bg-green-bongs duration-300"
              style={{ width: `${active}%` }}
            ></span>
            <span
              className="flex h-2 rounded-sm bg-orange duration-300"
              style={{ width: `${absent}%` }}
            ></span>
            <span
              className="flex h-2 rounded-sm bg-blue-600 duration-300"
              style={{ width: `${100 - active - absent}%` }}
            ></span>
          </div>
        </div>
      </section>

      {/* Tasks Report */}
      <section className="relative flex w-full flex-col justify-around gap-3 text-primary md:w-1/3">
        <div className="flex flex-col gap-2 rounded-3xl border border-border-subheader p-4">
          <h2 className="text-lg font-bold">Total Tasks Completed</h2>
          <p className="text-secondary">
            Create Lorem ipsum dolor sit amet consectetur
          </p>
          <div className="flex items-center justify-between">
            <strong className="text-4xl">8</strong>
            <small className="font-medium text-green-bongs">Avg. 80%</small>
          </div>
        </div>

        <div className="flex flex-col gap-3 rounded-3xl border border-border-subheader p-4">
          <h2 className="text-lg font-bold">Total Tasks Assigned</h2>
          <p className="text-secondary">
            Create Lorem ipsum dolor sit amet consectetur Illu
          </p>
          <div className="flex items-center justify-between">
            <strong className="text-4xl">10</strong>
            <small className="font-medium text-green-bongs">Avg. 80%</small>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ActivityAndTasksReport;
