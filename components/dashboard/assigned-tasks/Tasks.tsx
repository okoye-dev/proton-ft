import Image from "next/image";
import React, { FC } from "react";
import redDot from "@/assets/svgs/reddot.svg";
import blueDot from "@/assets/svgs/bluedot.svg";
import greenDot from "@/assets/svgs/greendot.svg";
import ellipses from "@/assets/svgs/ellipses.svg";
import TaskCard from "./TaskCard";
import TaskCardDialog from "./TaskCardDialog";
import ExpandedTaskCard from "./ExpandedTaskCard";
import { useGetTaskCardData } from "@/app/dashboard/hooks/assigned-tasks";

interface IProps {}

const Tasks: FC<IProps> = (props) => {
  const data = useGetTaskCardData();
  const newTasks = data.filter((entry) => entry.status === "Not Started");
  const ongoingTasks = data.filter((entry) => entry.status === "In Progress");
  const completedTasks = data.filter((entry) => entry.status === "Completed");

  return (
    <div className="flex flex-col gap-5 md:flex-row">
      {/* New Tasks */}
      <section className="flex flex-col gap-5 md:w-1/3">
        <h1 className="flex items-center justify-between gap-1 text-secondary">
          <span className="flex gap-1 font-semibold">
            <Image src={redDot} alt="redDot" />
            New Tasks
          </span>
          <Image src={ellipses} alt="ellipses" />
        </h1>
        {newTasks.map((task, i) => (
          <div className="w-full" key={i}>
            <TaskCardDialog task={task}>
              <ExpandedTaskCard task={task} />
            </TaskCardDialog>
          </div>
        ))}
      </section>

      {/* Ongoing Tasks */}
      <section className="flex flex-col gap-5 md:w-1/3">
        <h1 className="flex items-center justify-between gap-1 text-secondary">
          <span className="flex gap-1 font-semibold">
            <Image src={blueDot} alt="redDot" />
            Ongoing Tasks
          </span>
          <Image src={ellipses} alt="ellipses" />
        </h1>
        {ongoingTasks.map((task, i) => (
          <div key={i}>
            <TaskCardDialog task={task}>
              <ExpandedTaskCard task={task} />
            </TaskCardDialog>{" "}
          </div>
        ))}
      </section>

      {/* Completed Tasks */}
      <section className="flex flex-col gap-5 md:w-1/3">
        <h1 className="flex items-center justify-between gap-1 text-secondary">
          <span className="flex gap-1 font-semibold">
            <Image src={greenDot} alt="redDot" />
            Completed Tasks
          </span>
          <Image src={ellipses} alt="ellipses" />
        </h1>
        {completedTasks.map((task, i) => (
          <div key={i}>
            <TaskCardDialog task={task}>
              <ExpandedTaskCard task={task} />
            </TaskCardDialog>{" "}
          </div>
        ))}
      </section>
    </div>
  );
};

export default Tasks;
