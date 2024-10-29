import React, { Dispatch, FC, SetStateAction } from "react";

interface IProps {
  unreadCount?: number;
  teamsCount?: number;
  allCount?: number;
  activeFilter: string;
  setActiveFilter: Dispatch<SetStateAction<string>>;
}

const FilterCard: FC<IProps> = ({
  unreadCount = 0,
  teamsCount = 0,
  allCount = 0,
  activeFilter,
  setActiveFilter,
}) => {
  const isUnread = activeFilter === "unread";
  const isTeams = activeFilter === "teams";
  const isAll = activeFilter === "all";

  return (
    <div className="flex items-center justify-around rounded-full border border-border-subheader p-[6px] font-semibold">
      {/* All */}
      <div
        onClick={() => setActiveFilter("all")}
        className={`flex cursor-pointer items-center gap-2 rounded-full py-[5px] pl-3 pr-2 text-xs duration-300 ${isAll ? "bg-green-bongs text-white" : "bg-white text-primary"}`}
      >
        All
        <span
          className={`flex h-6 w-6 items-center justify-center rounded-full p-1 ${isAll ? "bg-white text-primary" : "bg-tertiary/20 text-secondary"}`}
        >
          {allCount}
        </span>
      </div>

      {/* Unread */}
      <div
        onClick={() => setActiveFilter("unread")}
        className={`flex cursor-pointer items-center gap-2 rounded-full py-[5px] pl-3 pr-2 text-xs duration-300 ${isUnread ? "bg-green-bongs text-white" : "bg-white text-primary"}`}
      >
        Unread
        <span
          className={`flex h-6 w-6 items-center justify-center rounded-full p-1 ${isUnread ? "bg-white text-primary" : "bg-tertiary/20 text-secondary"}`}
        >
          {unreadCount}
        </span>
      </div>

      {/* Teams */}
      <div
        onClick={() => setActiveFilter("teams")}
        className={`flex cursor-pointer items-center gap-2 rounded-full py-[5px] pl-3 pr-2 text-xs duration-300 ${isTeams ? "bg-green-bongs text-white" : "bg-white text-primary"}`}
      >
        Teams
        <span
          className={`flex h-6 w-6 items-center justify-center rounded-full p-1 ${isTeams ? "bg-white text-primary" : "bg-tertiary/20 text-secondary"}`}
        >
          {teamsCount}
        </span>
      </div>
    </div>
  );
};

export default FilterCard;
