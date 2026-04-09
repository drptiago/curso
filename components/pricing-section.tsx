import { Button } from "@/components/ui/button"
import { Check, ArrowRight, Zap } from "lucide-react"

const features = [
  "Vídeos práticos (direto ao ponto)",
  "Prompts e Blueprints inclusos",
  "Acesso vitalício",
  "Suporte via comunidade"
]

export function PricingSection() {
  return (
    <section id="pricing" className="px-4 py-16 md:py-20">
      <div className="mx-auto max-w-xl">
        <h2 className="mb-4 text-center text-2xl font-bold text-foreground md:text-3xl">
          Comece a automatizar sua rotina hoje
        </h2>
        <p className="mb-10 text-center text-muted-foreground">
          Acesso completo ao treinamento Claude Cowork
        </p>

        {/* Pricing Card */}
        <div className="relative overflow-hidden rounded-xl border-2 border-accent bg-card p-6 md:p-8">
          {/* Badge */}
          <div className="absolute right-0 top-0">
            <div className="flex items-center gap-1 bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
              <Zap className="h-3 w-3" />
              Lançamento
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-bold text-foreground">
              Acesso Completo - Claude Cowork
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Domine o Claude Cowork
            </p>
          </div>

          {/* Price */}
          <div className="mb-6 flex items-baseline gap-2">
            <span className="text-4xl font-bold text-foreground md:text-5xl">R$29</span>
            <span className="text-lg text-muted-foreground line-through">R$499</span>
          </div>

          {/* Features */}
          <ul className="mb-8 space-y-3">
            {features.map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-sm text-foreground">
                <Check className="h-4 w-4 shrink-0 text-accent" />
                {feature}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <Button 
            size="lg" 
            className="group h-12 w-full bg-accent text-base font-semibold text-accent-foreground hover:bg-accent/90"
            asChild
          >
            <a href="https://tiagofelix.framer.website/" target="_blank" rel="noopener noreferrer">
              Quero o Claude Cowork
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>

          {/* Guarantee */}
          <p className="mt-4 text-center text-xs text-muted-foreground">
            Garantia de 7 dias ou seu dinheiro de volta
          </p>
        </div>
      </div>
    </section>
  )
}
