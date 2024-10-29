import { Button } from "@/components/ui/button";
import Link from "next/link";
import arrowRight from "@/assets/svgs/arrow-right.svg";
import { FC } from "react";
import SubHeader from "../SubHeader";
import Image from "next/image";

interface IProps {
  variant?: "My Requests" | "Open Requests" | "Staff Requisition";
}

const StaffRequisitionSubHeader: FC<IProps> = ({ variant }) => {
  return (
    <SubHeader>
      <div className="flex w-full justify-between px-2">
        <h2 className="flex items-center border-b-2 border-green-bright px-3 text-sm font-semibold">
          {variant}
        </h2>
        <Link href={"/dashboard/staff-requisition/create"}>
          <Button variant={"white"} className="flex gap-2 font-semibold">
            Request for New Staff
            <Image src={arrowRight} alt="go" width={20} height={20} />
          </Button>
        </Link>
      </div>
    </SubHeader>
  );
};

export default StaffRequisitionSubHeader;
