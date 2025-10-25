"use client";

import { Divide } from "lucide-react";

interface ChatMessageProps {
  message: {
    id: string;
    role: "user" | "assistant";
    content: string;
    avatar?: string;
  };
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === "user";

  return (
    <div
      className={`flex  gap-3 px-6 ${
        isUser ? " flex-row-reverse " : "justify-start"
      }`}
    >
      <div className="pt-2">
        {!isUser ? (
          <img
            className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 text-sm"
            src={message.avatar}
          />
        ) : (
          <img
            className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 text-sm"
            src={message.avatar}
          />
        )}
      </div>
      <div className="flex flex-col gap-1 mb-2">
        <div className="font-medium text-sm text-black/80">
          {isUser ? (
            <div className="text-right  ">You</div>
          ) : (
            <div>SupportAI</div>
          )}
        </div>
        <div
          className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
            isUser
              ? "bg-primary text-primary-foreground rounded-tr-none"
              : "bg-secondary text-foreground rounded-tl-none"
          }`}
        >
          <p className="text-sm leading-relaxed">{message.content}</p>
          
        </div>
      </div>
    </div>
  );
}

{
  /* {isUser && (
  <img
    className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 text-sm"
    src={message.avatar}
  />
)} */
}
// <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0 text-sm">
//   {message.avatar}
// </div>
