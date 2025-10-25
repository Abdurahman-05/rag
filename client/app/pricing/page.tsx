import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-10">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-5xl font-bold leading-tight text-balance">Choose the plan that's right for you</h1>
          <p className="text-lg text-muted-foreground">
            Simple, transparent pricing for your AI customer support needs.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          {/* Free Plan */}
          <Card className="relative flex flex-col">
            <CardHeader>
              <CardTitle className="text-2xl">Free</CardTitle>
              <div className="mt-4">
                <span className="text-5xl font-bold">$0</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <CardDescription className="mt-4 text-base">
                Perfect for getting started and exploring our features.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm">1,000 messages per month</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm">Basic reporting and analytics</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm">Community support</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full bg-transparent" size="lg">
                Get Started Free
              </Button>
            </CardFooter>
          </Card>

          {/* Pro Plan */}
          <Card className="relative flex flex-col border-2 border-primary shadow-lg">
            <div className="absolute -top-4 right-6">
              <span className="rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground">
                Best Value
              </span>
            </div>
            <CardHeader>
              <CardTitle className="text-2xl">Pro</CardTitle>
              <div className="mt-4">
                <span className="text-5xl font-bold">$49</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <CardDescription className="mt-4 text-base">
                For businesses that need advanced features and priority support.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm">Unlimited messages</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm">Advanced reporting and analytics</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm">Priority email & chat support</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm">API Access & Integrations</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" size="lg">
                Go Pro
              </Button>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  )
}
