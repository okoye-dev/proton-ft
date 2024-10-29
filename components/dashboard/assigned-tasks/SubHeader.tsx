import { Button } from "@/components/ui/button";
import Link from "next/link";
import arrowRight from "@/assets/svgs/arrow-right.svg";
import { FC } from "react";
import SubHeader from "../SubHeader";
import Image from "next/image";

interface IProps {}

const AssignedTasksSubHeader: FC<IProps> = () => {
  return (
    <SubHeader>
      <div className="relative flex w-full items-center justify-between px-2">
        <ul className="flex items-center gap-5 px-2">
          <li
            className={`items-centerpx-3 flex text-sm font-semibold text-primary`}
          >
            New Tasks
          </li>
          <li
            className={`flex items-center px-3 text-sm font-semibold text-tertiary`}
          >
            Ongoing Tasks
          </li>
          <li
            className={`flex items-center px-3 text-sm font-semibold text-tertiary`}
          >
            Completed Tasks
          </li>
          <li className="absolute bottom-0 left-0 flex h-[3px] w-[7rem] bg-green-bright"></li>
        </ul>

        <Button variant={"white"} className="flex gap-4 font-semibold">
          <div className="group flex items-center gap-2">
            <Image
              src={arrowRight}
              alt="go"
              width={20}
              height={20}
              className="min-w-4 scale-x-[-1] duration-300 group-hover:-translate-x-1"
            />
            <span className="hidden group-hover:opacity-80 md:flex">
              {" "}
              Prev Week
            </span>
          </div>
          <div className="group flex items-center gap-2">
            <span className="hidden group-hover:opacity-80 md:flex">
              {" "}
              Next Week
            </span>
            <Image
              src={arrowRight}
              alt="go"
              width={20}
              height={20}
              className="min-w-4 duration-300 group-hover:translate-x-1"
            />
          </div>
        </Button>
      </div>
    </SubHeader>
  );
};

export default AssignedTasksSubHeader;
