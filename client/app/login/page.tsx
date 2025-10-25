import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="space-y-4 text-center pb-8">
          <div className="mx-auto w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-primary-foreground">
              <path d="M12 2C10.34 2 9 3.34 9 5C9 6.66 10.34 8 12 8C13.66 8 15 6.66 15 5C15 3.34 13.66 2 12 2ZM12 14C8.13 14 5 15.79 5 18V20H19V18C19 15.79 15.87 14 12 14Z" />
            </svg>
          </div>
          <div>
            <CardTitle className="text-3xl font-bold">Welcome Back</CardTitle>
            <CardDescription className="text-base mt-2">Sign in to continue to Support AI</CardDescription>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="sr-only">
                Email or Username
              </Label>
              <Input id="email" type="text" placeholder="Email or Username" className="h-12" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="sr-only">
                Password
              </Label>
              <Input id="password" type="password" placeholder="Password" className="h-12" />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <label
                  htmlFor="remember"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Remember me
                </label>
              </div>
              <Link href="/forgot-password" className="text-sm text-primary hover:underline">
                Forgot password?
              </Link>
            </div>
            <Button type="submit" className="w-full h-12 text-base font-medium">
              Login
            </Button>
          </form>
          <div className="text-center text-sm text-muted-foreground">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-primary hover:underline font-medium">
              Sign Up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
