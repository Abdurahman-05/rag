import { CtaSection } from "@/components/cta-section";
import { FeaturesSection } from "@/components/features-section";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header/>
      <main>
        <HeroSection />
        <FeaturesSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}
