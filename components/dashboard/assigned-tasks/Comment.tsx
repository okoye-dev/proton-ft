import { CommentType } from "@/types";
import Image from "next/image";
import React, { FC } from "react";
import greenDot from "@/assets/svgs/greendot.svg";

interface IProps {
  comment: CommentType;
}

const Comment: FC<IProps> = ({ comment }) => {
  return (
    <div className="flex flex-col gap-3 py-3 ">
      <section className="flex justify-between">
        <div className="flex items-center gap-3">
          <Image src={comment.img} alt="profilePic" className="h-auto w-12" />
          <div className="flex flex-col gap-1 font-medium">
            <p className="text-secondary">{comment.name}</p>
            <small className="text-tertiary">{comment.time}</small>
          </div>
        </div>
        <span className="flex items-center gap-2">
          <Image src={greenDot} alt="greenDot" />
          <p className="text-green-bright">Active</p>
        </span>
      </section>
      <section className="text-secondary">{comment.comment}</section>
    </div>
  );
};

export default Comment;
