'use client'

import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"

const modules = [
  {
    number: "01",
    title: "O Agente Claude \"Cowork\" (Setup MCP)",
    description: "Configuração completa do ambiente e primeiros comandos"
  },
  {
    number: "02", 
    title: "Automação Upwork (Leitura e Resumo)",
    description: "Monitore propostas e oportunidades automaticamente"
  },
  {
    number: "03",
    title: "Integração Slack (Notificações em tempo real)",
    description: "Receba alertas importantes sem precisar checar manualmente"
  },
  {
    number: "04",
    title: "Adaptando para o SEU negócio",
    description: "Framework para personalizar em qualquer contexto"
  }
]

export function ModulesSection() {
  const scrollToPrice = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="px-4 py-16 md:py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-4 text-center text-2xl font-bold text-foreground md:text-3xl">
          O que você vai dominar
        </h2>
        <p className="mx-auto mb-12 max-w-xl text-center text-muted-foreground">
          Um treinamento 100% focado em execução. Assista à aula, baixe o blueprint e coloque o agente para trabalhar.
        </p>

        <div className="space-y-4">
          {modules.map((module) => (
            <div 
              key={module.number}
              className="flex items-start gap-4 rounded-lg border border-border bg-card p-5 transition-colors hover:border-accent/50"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-accent/10 text-sm font-bold text-accent">
                {module.number}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground">
                  {module.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {module.description}
                </p>
              </div>
              <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" />
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button 
            size="lg"
            onClick={scrollToPrice}
            className="group h-12 bg-accent px-8 text-base font-semibold text-accent-foreground hover:bg-accent/90"
          >
            Garantir Acesso — R$ 29
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  )
}
