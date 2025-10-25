import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageSquare } from "lucide-react"

export function Header() {
    return (
        <header className="border-b bg-background">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <div className="flex items-center justify-between w-full ">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
                            <MessageSquare className="h-5 w-5 text-primary-foreground" />
                        </div>
                        <span className="text-xl font-bold">SupportAI</span>
                    </Link>
                    <nav className="hidden items-center gap-6 md:flex">
                        <Link href="#" className="text-md font-semibold text-foreground hover:text-primary">
                            Home
                        </Link>
                        <Link href="#features" className="text-md font-semibold text-foreground hover:text-primary">
                            Features
                        </Link>
                        <Link href="/pricing" className="text-md font-semibold text-foreground hover:text-primary">
                            Pricing
                        </Link>
                        <Link href="#contact" className="text-md font-semibold text-foreground hover:text-primary">
                            Contact
                        </Link>
                    </nav>
                    <div className="flex items-center gap-3">
                        <Link href="/login">
                            <Button variant="ghost" size="sm" >
                                Login
                            </Button>
                        </Link>
                        <Link href="/signup">
                            <Button size="sm">Sign Up</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}
