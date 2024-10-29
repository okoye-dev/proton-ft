import React, { FC } from "react";
import pfpBunch from "@/assets/images/pfp-bunch.png";
import { UpcomingEventsData } from "@/types";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface IProps {
  eventData: UpcomingEventsData;
}

const EventCard: FC<IProps> = ({ eventData }) => {
  return (
    <div className="flex flex-col gap-1 border-b-2 pb-1 border-border-subheader">
      <div>
        <h2 className="font-medium text-secondary">{eventData.eventTitle}</h2>
        <small className="text-tertiary">
          {eventData.time} / {eventData.date}
        </small>
      </div>
      <div className="flex items-center justify-between">
        <Image src={pfpBunch} alt="pfp" className="h-6 w-fit" />
        <Button
          variant={"ghost"}
          size={"sm"}
          className="flex gap-2 font-medium text-blue-600"
        >
          See Details
        </Button>
      </div>
    </div>
  );
};

export default EventCard;
