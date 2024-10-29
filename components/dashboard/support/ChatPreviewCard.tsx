"use client";
import { ChatPreview } from "@/types";
import Image from "next/image";
import React, { FC } from "react";
import pfp from "@/assets/images/pfp.png";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/_state/store";
import { setActiveChat } from "@/app/_state/support/chatSlice";

interface IProps {
  chat: ChatPreview;
  toggleCollapse: (shouldWait?: boolean) => void;
}

const ChatPreviewCard: FC<IProps> = ({ chat, toggleCollapse }) => {
  const chatId = Number(chat.id);
  const activeChat = useSelector((state: RootState) => state.chat.activeChat);
  const dispatch = useDispatch();

  const handleClick = (chatId: number) => {
    dispatch(setActiveChat(chatId));
    toggleCollapse(true);
  };

  return (
    <div
      className={`flex cursor-pointer items-center justify-between gap-2 truncate rounded-2xl border p-2 duration-300 hover:bg-subheader-lightblue/45 ${activeChat === chatId ? "border-border-subheader bg-subheader-lightblue/60 text-white" : "border-transparent bg-white text-primary"} `}
      onClick={() => handleClick(chatId)}
    >
      <div className="flex items-center gap-2 truncate">
        <Image src={chat.img ?? pfp} alt="avatar" width={40} height={40} />
        <div className="space-y-1 truncate">
          <p className="text-sm font-semibold text-primary">{chat.name}</p>
          <p className="truncate text-xs text-tertiary">{chat.lastMessage}</p>
        </div>
      </div>
      <p className="text-xs text-tertiary">{chat.time}</p>
    </div>
  );
};

export default ChatPreviewCard;
