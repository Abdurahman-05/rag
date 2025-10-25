// import Link from "next/link"
// import { MessageSquare } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Checkbox } from "@/components/ui/checkbox"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// export default function SignUpPage() {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
//       <Card className="w-full max-w-md">
//         <CardHeader className="space-y-4 text-center">
//           <div className="mx-auto w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
//             <MessageSquare className="w-6 h-6 text-white" />
//           </div>
//           <div>
//             <CardTitle className="text-3xl font-bold">Create Account</CardTitle>
//             <CardDescription className="text-base mt-2">Sign up to get started with Support AI</CardDescription>
//           </div>
//         </CardHeader>
//         <CardContent className="space-y-6">
//           <form className="space-y-4">
//             <div className="space-y-2">
//               <Label htmlFor="name">Full Name</Label>
//               <Input id="name" type="text" placeholder="Full Name" className="h-12" />
//             </div>
//             <div className="space-y-2">
//               <Label htmlFor="email">Email</Label>
//               <Input id="email" type="email" placeholder="Email" className="h-12" />
//             </div>
//             <div className="space-y-2">
//               <Label htmlFor="password">Password</Label>
//               <Input id="password" type="password" placeholder="Password" className="h-12" />
//             </div>
//             <div className="space-y-2">
//               <Label htmlFor="confirm-password">Confirm Password</Label>
//               <Input id="confirm-password" type="password" placeholder="Confirm Password" className="h-12" />
//             </div>
//             <div className="flex items-center space-x-2">
//               <Checkbox id="terms" />
//               <label
//                 htmlFor="terms"
//                 className="text-sm text-muted-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//               >
//                 I agree to the{" "}
//                 <Link href="/terms" className="text-primary hover:underline">
//                   Terms of Service
//                 </Link>{" "}
//                 and{" "}
//                 <Link href="/privacy" className="text-primary hover:underline">
//                   Privacy Policy
//                 </Link>
//               </label>
//             </div>
//             <Button type="submit" className="w-full h-12 text-base">
//               Sign Up
//             </Button>
//           </form>
//           <div className="text-center text-sm text-muted-foreground">
//             Already have an account?{" "}
//             <Link href="/login" className="text-primary hover:underline font-medium">
//               Login
//             </Link>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   )
// }
import Link from "next/link"
import Image from "next/image"
import { MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-xl overflow-hidden flex">
        {/* Left side - Form */}
        <div className="flex-1 flex items-center justify-center px-6 py-8">
          <div className="w-full max-w-md space-y-5">
            <div className="space-y-4 text-center">
              <div className="mx-auto w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <MessageSquare className="w-4 h-4 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold">Create Account</h1>
                <p className="text-muted-foreground text-base mt-2">Sign up to get started with Support AI</p>
              </div>
            </div>

            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" type="text" placeholder="Full Name" className="h-10" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Email" className="h-10" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="Password" className="h-10" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm Password</Label>
                <Input id="confirm-password" type="password" placeholder="Confirm Password" className="h-10" />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm text-muted-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I agree to the{" "}
                  <Link href="/terms" className="text-primary hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="text-primary hover:underline">
                    Privacy Policy
                  </Link>
                </label>
              </div>
              <Button type="submit" className="w-full h-12 text-base">
                Sign Up
              </Button>
            </form>

            <div className="text-center text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link href="/login" className="text-primary hover:underline font-medium">
                Login
              </Link>
            </div>
          </div>
        </div>

        {/* Right side - Image */}
        <div className="hidden lg:flex flex-1 bg-gradient-to-br from-blue-50 to-blue-100 items-center justify-center">
          <div className="relative w-full h-full max-w-2xl ">
            <Image
              src="https://res.cloudinary.com/djjasfjpr/image/upload/v1760524874/chat-bot_zljihl.webp"
              alt="AI Assistant"
              fill
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  )
}


