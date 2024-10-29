"use client";

import { RootState } from "@/app/_state/store";
import { useMockChats } from "@/app/dashboard/hooks/support/useMockChats";
import Image from "next/image";
import React, { FC } from "react";
import { useSelector } from "react-redux";
import active from "@/assets/svgs/active.svg";
import search from "@/assets/svgs/search.svg";
import { Input } from "@/components/ui/input";
import SendMessage from "./SendMessage";

interface IProps {}

const ChatBox: FC<IProps> = () => {
  const activeChat = useSelector((state: RootState) => state.chat.activeChat);
  const data = useMockChats();
  const chat = data.find((chat) => chat.from.id === activeChat);

  return (
    <section
      className={`min-h-[30rem] w-full rounded-3xl border border-border-subheader bg-white p-4 transition-all duration-300`}
    >
      {chat && (
        <div className="flex h-full flex-col gap-4">
          <section className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image src={chat.from.img} alt="avatar" width={50} height={50} />
              <span className="font-semibold text-primary">
                {chat.from.name}
              </span>
              <Image src={active} alt="avatar" width={10} height={10} />
            </div>
            <small className="flex items-center gap-2 text-tertiary">
              Last seen at {chat.time}
              <Image
                src={search}
                alt="search"
                width={12}
                height={12}
                className="-translate-y-0.5 cursor-pointer"
              />
            </small>
          </section>
          <section className="S flex h-full w-full"></section>
          <SendMessage />
        </div>
      )}
    </section>
  );
};

export default ChatBox;
