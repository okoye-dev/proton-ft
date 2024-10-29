import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { Task } from "@/types";
import Image from "next/image";
import React, { FC } from "react";
import Comment from "./Comment";

interface IProps {
  task: Task;
  className?: string;
}

const ExpandedTaskCard: FC<IProps> = ({ task, className }) => {
  return (
    <div
      className={cn(
        "flex w-full flex-col gap-4 rounded-2xl bg-white py-4 text-primary duration-300",
        className,
      )}
    >
      <h2 className="text-lg font-semibold">{task.title}</h2>
      <p className="text-tertiary">{task.description}</p>
      <div className="flex items-center justify-between gap-2 text-tertiary">
        <p>Assigned To </p>
        <div className="flex items-center gap-2">
          <Image src={task.members} alt="member" className="h-auto w-32" />
          {/* Replace 4 with {task.noOfMembers - 1} */}
          <p>You & 4 others</p>
        </div>
      </div>
      <div>
        <p className="pb-2 text-tertiary">Task Progress</p>
        <span className="flex w-full items-center gap-2 text-xs">
          <Progress className="mr-2 h-2" value={task.progressValue} />{" "}
          {task.progressValue}%
        </span>
      </div>

      <div className="flex flex-col gap-5 border-y-2 border-border-subheader py-4">
        <div className="flex items-center justify-between gap-2">
          <span className="border-b border-green-bongs pb-1 font-medium">
            Comments
          </span>
          <span className="cursor-pointer text-sm text-green-bongs duration-300 hover:text-green-bright">
            Expand
          </span>
        </div>
        <div className="sidebar-content max-h-60 overflow-y-scroll rounded-2xl py-2">
          {task.comments?.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExpandedTaskCard;
