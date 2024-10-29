import { useMemo } from "react";
import { useMockChats } from "./useMockChats";
import { ChatPreview } from "@/types";
import pfp from "@/assets/images/pfp.png";

const useParseMessage = (): ChatPreview[] => {
  const messages = useMockChats();

  // Parse the messages to ChatPreview format
  const chatPreviews: ChatPreview[] = useMemo(() => {
    const chatMap: { [key: string]: ChatPreview } = {};

    messages.forEach((msg) => {
      const existingChat = chatMap[msg.from.id];

      // Update or create the ChatPreview object for each unique user
      if (!existingChat) {
        chatMap[msg.from.id] = {
          id: String(msg.from.id),
          name: msg.from.name,
          lastMessage: msg.message,
          time: msg.time,
          img: msg.from.img ?? pfp,
        };
      } else {
        // Update only the lastMessage and time if it's a newer message
        chatMap[msg.from.id].lastMessage = msg.message;
        chatMap[msg.from.id].time = msg.time;
      }
    });

    return Object.values(chatMap);
  }, [messages]);

  return chatPreviews;
};

export default useParseMessage;
