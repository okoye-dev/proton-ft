import Link from "next/link";
import React, { FC } from "react";

interface IProps {
  name: string;
  unit: string;
  timeFrame: string;
  date: string;
}

const MeetingCard: FC<IProps> = ({ name, unit, timeFrame, date }) => {
  return (
    <div className="flex w-full flex-col gap-2 rounded-2xl border border-border-subheader bg-white p-4">
      <h2 className="font-semibold text-primary">
        Meeting with {name} - {unit}
      </h2>
      <span className="flex gap-3 text-tertiary">
        {timeFrame}
        <span> {date}</span>
      </span>
      <Link
        href={""}
        className="font-semibold text-blue-600 duration-300 hover:text-blue-500"
      >
        Join on Google Meet
      </Link>
    </div>
  );
};

export default MeetingCard;
