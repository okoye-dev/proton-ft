"use client";
import { ChangeEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

import plus from "@/assets/svgs/plus.svg";

const SendMessage = () => {
  const [message, setMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setMessage(value);
    setIsTyping(value.length > 0);
  };

  const sendMessage = () => {
    if (isTyping && message.trim()) {
      console.log("Message sent:", message.trim());
      setMessage("");
      setIsTyping(false);
    }
  };

  const handleSendDocument = () => {
    // Handle document upload logic here
    console.log("Document sent");
  };

  return (
    <div className="flex items-center space-x-2">
      {/* For sending documents */}
      <Image
        src={plus}
        alt="plus"
        onClick={handleSendDocument}
        className="cursor-pointer"
      />

      <div className="relative flex-1">
        <Input
          type="text"
          value={message}
          onChange={handleInputChange}
          placeholder="Type your message..."
        />
        <Button
          onClick={sendMessage}
          className={`${isTyping ? "h-8 w-20 opacity-100" : "h-8 w-20 opacity-0"} absolute right-1 top-1 rounded-lg text-white transition-all duration-300 hover:bg-green-bongs/90 hover:text-white`}
        >
          Send
        </Button>
      </div>
    </div>
  );
};

export default SendMessage;
