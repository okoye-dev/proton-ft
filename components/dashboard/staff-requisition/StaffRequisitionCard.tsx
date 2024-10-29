import { Button } from "@/components/ui/button";
import { StaffRequisitionData } from "@/types";
import { FC } from "react";
import collapse from "@/assets/svgs/collapse.svg";
import Status from "./Status";
import Image from "next/image";

interface IProps {
  data: StaffRequisitionData;
  canApprove?: boolean;
}

const StaffRequisitionCard: FC<IProps> = ({ data, canApprove = false }) => {
  return (
    <div className={`flex flex-col gap-[10px] bg-white p-5`}>
      <section className="flex items-center justify-between">
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
        <div className="flex items-center">
          <Button
            variant={"ghost"}
            className="flex gap-2 px-2 text-xs text-blue-600"
          >
            View Details <Image src={collapse} alt="close" />
          </Button>
          {!canApprove && <Status status={data.status} />}
        </div>
      </section>
    </div>
  );
};

export default StaffRequisitionCard;
