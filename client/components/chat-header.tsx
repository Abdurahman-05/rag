"use client"

import { Menu, MessageSquare, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"


interface ChatHeaderProps {
    isHovering: boolean
    setIsHovering: (value: boolean) => void
    sidebarOpen: boolean
    onToggleSidebar: () => void
}

export function ChatHeader({ isHovering, setIsHovering, sidebarOpen, onToggleSidebar }: ChatHeaderProps) {
    return (
        <div className="border-b border-border bg-card p-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
                <div
                    className="relative w-10 h-10 rounded-full bg-primary flex items-center justify-center cursor-pointer transition-all duration-200 hover:scale-110"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                >
                    <span className="text-primary-foreground font-bold text-lg">{
                        <button className="flex" onClick={onToggleSidebar}>
                            <img className="h-5 w-5 justify-center items-center" src='sidebar.png' />
                        </button >}
                    </span>
                </div>
                <Link href="/" className="flex items-center gap-2">

                    <span className="text-xl font-bold">SupportAI</span>
                </Link>

            </div>

            <Button variant="ghost" size="icon" onClick={onToggleSidebar} className="hover:bg-secondary">
                {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
        </div>
    )
}
