"use client";

import React, { FC } from "react";
import ChatPreviewCard from "./ChatPreviewCard";
import useParseMessage from "@/app/dashboard/hooks/support/useParseMessage";

interface IProps {
  toggleCollapse: (shouldWait?: boolean) => void;
}

const ChatPreviewList: FC<IProps> = ({ toggleCollapse }) => {
  const chatPreviews = useParseMessage();

  return (
    <div className="space-y-2">
      {chatPreviews.map((chat) => (
        <ChatPreviewCard
          key={chat.id}
          toggleCollapse={toggleCollapse}
          chat={chat}
        />
      ))}
    </div>
  );
};

export default ChatPreviewList;
