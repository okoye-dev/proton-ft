import React, { FC } from "react";
import SearchBar from "../requisition/SearchBar";
import filter from "@/assets/svgs/filter-by.svg";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface IProps {}

const FilterCard: FC<IProps> = (props) => {
  return (
    <div className="flex items-center justify-between gap-3 rounded-2xl border border-border-subheader bg-white px-2 py-4">
      <SearchBar className="max-w-[20rem] sm:max-w-[25rem] lg:max-w-lg" />
      <ul className="relative flex items-center gap-2 px-2 text-xs md:gap-5 md:text-sm">
        <li
          className={`flex items-center border-b-2 border-green-bongs px-2 font-semibold text-green-bongs`}
        >
          All
        </li>
        <li className={`flex items-center px-2 font-semibold text-tertiary`}>
          Active
        </li>
        <li className={`flex items-center px-2 font-semibold text-tertiary`}>
          Inactive
        </li>
      </ul>
      <div className="mx-2 flex min-w-[20px] items-center gap-2">
        <Image src={filter} alt="filter" width={20} height={20} />
        <span className="hidden text-nowrap text-secondary lg:flex">
          Filter by:
        </span>
        <Button variant={"white"} className="hidden lg:flex">
          Status
        </Button>
      </div>
    </div>
  );
};

export default FilterCard;
