import React, { FC } from "react";
import calendar from "@/assets/svgs/calendar.svg";
import Image from "next/image";
import { useGetUpcomingEventsData } from "@/app/dashboard/hooks/home";
import EventCard from "./EventCard";

interface IProps {}

const UpcomingEvents: FC<IProps> = (props) => {
  const data = useGetUpcomingEventsData();

  return (
    <div className="flex sm:min-w-[30rem] flex-col gap-2 rounded-3xl border border-border-subheader p-4 text-primary">
      <span className="flex justify-between border-b-2 border-border-subheader pb-3">
        <strong className="text-lg">Upcoming Events</strong>{" "}
        <Image src={calendar} alt="calendar" width={16} height={16} />
      </span>
      {data.map((event, i) => (
        <EventCard key={i} eventData={event} />
      ))}
    </div>
  );
};

export default UpcomingEvents;
