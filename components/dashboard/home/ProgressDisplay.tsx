import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import React, { FC } from "react";

interface IProps {
  title: string;
  content: string;
  progressValue?: number;
  className?: string;
}

const ProgressDisplay: FC<IProps> = ({
  title,
  content,
  progressValue,
  className,
}) => {
  return (
    <div
      className={cn(
        "w-full rounded-2xl border border-border-subheader p-4",
        className,
      )}
    >
      <h1 className="text-lg font-bold text-primary">{title}</h1>
      <p className="pb-4 pt-3 text-sm text-secondary">{content}</p>
      <span className="flex items-center gap-2 text-sm font-semibold text-primary">
        <Progress value={progressValue ?? 0} /> {progressValue ?? 0}%
      </span>
    </div>
  );
};

export default ProgressDisplay;
