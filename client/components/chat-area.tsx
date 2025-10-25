"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MessageSquare, Send } from "lucide-react"
import { ChatMessage } from "@/components/chat-message"
import Link from "next/link"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
  avatar?: string
}

interface ChatSidebarProps {
  isOpen: boolean
  onToggle: () => void

}


export function ChatArea({ isOpen, onToggle }: ChatSidebarProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "Hello! How can I help you today?",
      avatar: "/bot.jpg",
    },
    {
      id: "2",
      role: "user",
      content: "Hi, I'm having trouble with my account.",
      avatar: "/user.jpg",
    },
    {
      id: "3",
      role: "assistant",
      content: "I understand. Can you please provide more details about the issue you're experiencing?",
      avatar: "/bot.jpg",
    },
  ])

  const [input, setInput] = useState("")

  const handleSend = () => {
    if (input.trim()) {
      const newMessage: Message = {
        id: Date.now().toString(),
        role: "user",
        content: input,
        avatar: "/user.jpg",
      }
      setMessages([...messages, newMessage])
      setInput("")

      setTimeout(() => {
        const aiResponse: Message = {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: "Thank you for providing that information. How else can I assist you?",
          avatar: "/bot.jpg",
        }
        setMessages((prev) => [...prev, aiResponse])
      }, 500)
    }
  }

  return (
    <div className="flex-1 flex flex-col overflow-hidden ">


      {
        isOpen ?
          <span className={`text-xl font-bold pl-2 py-3 border-b-1`}>
            <button className="flex" onClick={onToggle}>
              <img className="h-5 w-5 justify-center items-center " src='sidebar1.png' />
            </button >
          </span>
          :
          <div className="flex items-center pl-3 gap-3 py-3 border-1">

            <MessageSquare className={`h-5 w-5 text-primary `} />
            <span className={`text-xl font-extrabold text-primary`}>SupportAI</span>
          </div>

      }




      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
      </div>

      <div className="border-t border-border bg-card p-4">
        <div className="flex gap-3">
          <Input
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            className="flex-1"
          />
          <Button onClick={handleSend} className="bg-primary hover:bg-primary/90 text-primary-foreground px-6">
            <Send className="w-4 h-4 mr-2" />
            Send
          </Button>
        </div>
      </div>
    </div>
  )
}
