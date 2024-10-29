import { Button } from "@/components/ui/button";
import React, { FC } from "react";

interface IProps {
  title: string;
  description: string;
  unit: string;
}

const TitleAndDescriptionCell: FC<IProps> = ({ title, description, unit }) => {
  return (
    <div className="flex w-full max-w-[50vw] flex-col gap-1 py-2 text-primary">
      <div className="flex gap-2 font-semibold">
        <h2>{title}</h2>
        <Button
          variant={"unit"}
          size={"sm"}
          className={`font- h-6 text-[10px] ${unit === "Design" && "border-green-bright bg-green-bright/10 text-green-bright"}`}
        >
          {unit}
        </Button>
      </div>
      <p className="w-full truncate text-xs text-secondary sm:text-sm">
        {description}
      </p>
    </div>
  );
};

export default TitleAndDescriptionCell;
