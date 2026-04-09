import { HeroSection } from "@/components/hero-section"
import { BenefitsSection } from "@/components/benefits-section"
import { ModulesSection } from "@/components/modules-section"
import { MentorSection } from "@/components/mentor-section"
import { PricingSection } from "@/components/pricing-section"
import { FaqSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <BenefitsSection />
      <ModulesSection />
      <MentorSection />
      <PricingSection />
      <FaqSection />
      <Footer />
    </main>
  )
}
