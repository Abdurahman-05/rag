"use client"

import { MessageSquare, History, Settings, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface ChatSidebarProps {
  isOpen: boolean
  onToggle: () => void
  isHovering: boolean
  setIsHovering: (value: boolean) => void
  sidebarOpen: boolean

}



export function ChatSidebar({ isOpen, onToggle, isHovering, setIsHovering, sidebarOpen }: ChatSidebarProps) {

  const menuItems = [
    { icon: MessageSquare, label: "New chat", id: "new-chat" },
    { icon: History, label: "History", id: "history" },
    { icon: Settings, label: "Settings", id: "settings" },
    { icon: Info, label: "No About", id: "about" },
  ]

  return (
    <>
      <div
        className={`${isOpen ? "w-64" : "w-20"
          } bg-primary text-primary-foreground transition-all duration-300 overflow-hidden flex flex-col border-r border-border`}
      >
        <div className={` flex items-center gap-4  ${!isOpen ? 'mx-auto' : "pl-6 pb-3 border-b-1 border-white"}`}>
          <div
            className=
            {`relative w-10 h-10 rounded-full bg-primary flex items-center justify-center cursor-pointer transition-all duration-200  ${isOpen ? '' : "hover:scale-110"}`}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <span className={` text-primary-foreground font-bold text-lg ${!isOpen ? 'mx-auto' : "flex"}`}>
              {
                
                  isOpen ?
                    <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
                      <MessageSquare className={`h-5 w-5 text-primary-foreground `} />
                    </div>
                    :
                    <button className="flex" onClick={onToggle}>
                      <img className="h-5 w-5 justify-center items-center" src='sidebar.png' />
                    </button >
                  
                


              }
            </span>
          </div>

          <Link href="/" className="flex items-center gap-2">
            <span className={`text-xl font-extrabold ${!isOpen ? 'hidden' : "flex"}`}>SupportAI</span>
          </Link>

        
        </div>
        <div className="p-4 space-y-4 flex-1">
          {menuItems.map((item) => {
            const Icon = item.icon
            return (
              <Button
                key={item.id}
                variant="ghost"
                className="w-full justify-start text-primary-foreground "
              >
                <Icon className="w-5 h-5 mr-2" />
                <span className={` font-medium ${!isOpen ? 'hidden' : "flex  pr-2"}`}>
                  {item.label}
                </span>
              </Button>
            )
          })}
        </div>
      </div>

      {isOpen && <div className="fixed inset-0 bg-black/50 md:hidden" onClick={onToggle} />}
    </>
  )
}
