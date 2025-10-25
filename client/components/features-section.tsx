import { Card, CardContent } from "@/components/ui/card"
import { Zap, Clock, Lightbulb, Globe } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Instant Replies",
    description: "Provide immediate responses to customer queries, reducing wait times and improving satisfaction.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Offer continuous support, ensuring your customers receive assistance whenever they need it.",
  },
  {
    icon: Lightbulb,
    title: "Smart Knowledge Base",
    description: "Access a smart knowledge base that learns and adapts, providing accurate and relevant information.",
  },
  {
    icon: Globe,
    title: "Multilingual Support",
    description: "Support multiple languages, catering to a global customer base and enhancing accessibility.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-balance text-4xl font-bold tracking-tight">Everything you need to succeed</h2>
          <p className="text-pretty text-lg text-muted-foreground">
            Our AI chatbot is designed to provide exceptional customer support.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card key={index} className="border-border bg-card">
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                <p className="text-pretty leading-relaxed text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
