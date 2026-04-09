'use client'

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function HeroSection() {
  const scrollToPrice = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative px-4 pt-12 pb-16 md:pt-20 md:pb-24">
      <div className="mx-auto max-w-4xl text-center">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-sm text-muted-foreground">
          <Sparkles className="h-3.5 w-3.5 text-accent" />
          <span>Metodologia Meerkat Coding</span>
        </div>

        {/* Headline */}
        <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
          Domine o Claude{" "}
          <span className="text-accent">&apos;Cowork&apos;</span>:
          <br className="hidden sm:block" />
          Automatize tarefas reais agora.
        </h1>

        {/* Subheadline */}
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
          Vou abrir o bastidor da Meerkat e te entregar o agente que acessa meu Upwork e monitora meu Slack. 
          <strong className="text-foreground"> Copie e aplique.</strong>
        </p>

        {/* CTA */}
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button 
            size="lg" 
            onClick={scrollToPrice}
            className="group h-12 w-full bg-accent px-8 text-base font-semibold text-accent-foreground hover:bg-accent/90 sm:w-auto"
          >
            Garantir Acesso — R$ 29
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        {/* Trust indicator */}
        <p className="mt-6 text-sm text-muted-foreground">
          Testada em projetos reais em 36 países
        </p>
      </div>

      {/* Subtle grid background */}
      <div 
        className="pointer-events-none absolute inset-0 -z-10 opacity-30"
        style={{
          backgroundImage: `linear-gradient(to right, var(--border) 1px, transparent 1px),
                            linear-gradient(to bottom, var(--border) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />
    </section>
  )
}
