import { FC } from "react";
import search from "@/assets/svgs/search.svg";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface IProps {
  className?: string;
}

const SearchBar: FC<IProps> = ({ className }) => {
  return (
    <div
      className={cn(
        "bg-gray bg-searchbar flex w-full justify-between rounded-[10px] border border-border-subheader p-[10px] text-sm font-medium md:text-base",
        className,
      )}
    >
      <input
        aria-label="search"
        type="text"
        placeholder="Input search here"
        className="w-full bg-transparent pr-2 placeholder:text-black/70 focus:outline-none"
      />
      <Image src={search} alt="search" width={25} height={25} />
    </div>
  );
};

export default SearchBar;
