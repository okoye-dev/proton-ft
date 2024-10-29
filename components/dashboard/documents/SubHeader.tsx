import { Button } from "@/components/ui/button";
import filter from "@/assets/svgs/filter.svg";
import { FC } from "react";
import SubHeader from "../SubHeader";
import Image from "next/image";
import SearchBar from "../requisition/SearchBar";

interface IProps {}

const DocumentsSubHeader: FC<IProps> = () => {
  return (
    <SubHeader>
      <div className="relative flex w-full items-center justify-between gap-4 px-2">
        <ul className="flex items-center gap-5 px-2">
          <li
            className={`items-centerpx-3 flex text-sm font-semibold text-primary sm:text-nowrap`}
          >
            Company Documents
          </li>
          <li
            className={`flex items-center px-3 text-sm font-semibold text-tertiary sm:text-nowrap`}
          >
            Personal Documents
          </li>
          <li className="absolute -bottom-1 left-0 flex h-[3px] w-[7rem] bg-green-bright sm:bottom-0 sm:w-[11.5rem]"></li>
        </ul>

        <div className="flex w-fit items-center gap-2">
          <SearchBar />
          <Button variant={"white"} className="group flex gap-4 font-semibold">
            <div className="flex items-center gap-2">
              <span className="hidden group-hover:opacity-80 md:flex">
                Filter
              </span>
              <Image
                src={filter}
                alt="go"
                width={20}
                height={20}
                className="min-w-4"
              />
            </div>
          </Button>
        </div>
      </div>
    </SubHeader>
  );
};

export default DocumentsSubHeader;
