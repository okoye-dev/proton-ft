import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { Task } from "@/types";
import Image from "next/image";
import React, { FC } from "react";

interface IProps {
  task: Task;
  className?: string;
}

const TaskCard: FC<IProps> = ({ task, className }) => {
  return (
    <div
      className={cn(
        "flex w-full flex-col gap-3 rounded-2xl border border-border-subheader bg-white py-4 text-primary duration-300 hover:cursor-pointer hover:shadow-lg",
        className,
      )}
    >
      <p className="flex gap-2 px-4 text-secondary">
        Team{" "}
        <Button variant={"unit"} className="h-7 px-3 text-xs">
          {task.unit}
        </Button>
      </p>
      <h2 className="px-4 text-lg font-semibold">{task.title}</h2>
      <p className="px-4 text-tertiary">{task.description}</p>
      <span className="flex w-full items-center gap-2 px-4 text-xs">
        <Progress className="mr-2 h-2" value={task.progressValue} />{" "}
        {task.progressValue}%
      </span>
      <span className="flex h-1 w-full bg-border-subheader"></span>
      <div className="flex items-center justify-between px-4 text-tertiary md:flex-col md:gap-1 lg:flex-row lg:gap-0">
        <Image src={task.members} alt="member" className="h-auto w-32" />
        {/* Replace 4 with {task.noOfMembers - 1} */}
        <p>You & 4 others</p>
      </div>
    </div>
  );
};

export default TaskCard;
