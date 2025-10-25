import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="bg-background py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid  gap-12 lg:grid-cols-2 px-4 md:px-0">
          <div className="space-y-6">
            <h1 className="text-balance text-5xl font-bold leading-tight tracking-tight lg:text-6xl">
              Your Smart <span className="text-primary font-ex">24/7</span>
              <br />
              Support Assistant
            </h1>
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
              Enhance your customer service with our AI-powered chatbot. Provide
              instant, accurate support around the clock, improving customer
              satisfaction and reducing response times.
            </p>
            <div>
              <Link href="/chat">
                <Button
                  size="lg"
                  className="text-base  transform transition duration-300 ease-in-out 
  hover:scale-110"
                >
                  Get Started for Free
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-3xl bg-gradient-to-br from-teal-400 to-teal-600 p-8">
              <img
                src="/cute-white-robot-assistant-with-antenna.jpg"
                alt="AI Support Assistant Robot"
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
