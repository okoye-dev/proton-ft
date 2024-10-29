import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Task } from "@/types";
import { FC, ReactNode } from "react";
import TaskCard from "./TaskCard";
import { CommentForm } from "./CommentForm";

interface IProps {
  task: Task;
  children: ReactNode;
}

const TaskCardDialog: FC<IProps> = ({ task, children }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div>
          <TaskCard task={task} />
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg md:max-w-xl">
        <DialogHeader>
          <DialogTitle>
            <p className="flex items-center gap-2 text-secondary">
              Team{" "}
              <Button variant={"unit"} className="h-7 px-3 text-xs">
                {task.unit}
              </Button>
            </p>
          </DialogTitle>
        </DialogHeader>
        {children}
        <DialogFooter className="sm:justify-start">
          <CommentForm />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default TaskCardDialog;
