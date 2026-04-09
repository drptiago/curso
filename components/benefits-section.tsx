import { Bot, TrendingUp, Clock } from "lucide-react"

const benefits = [
  {
    icon: Bot,
    title: "IAs trabalhando 24/7",
    description: "Deixe os agentes de IA executarem tarefas repetitivas enquanto você foca na estratégia do seu negócio."
  },
  {
    icon: TrendingUp,
    title: "Escala sem contratações",
    description: "Aumente sua capacidade de entrega sem precisar inchar sua equipe ou sua folha de pagamento."
  },
  {
    icon: Clock,
    title: "Recupere 4h do seu dia",
    description: "Elimine o trabalho manual de busca de leads e resumos de mensagens. Foque apenas no fechamento."
  }
]

export function BenefitsSection() {
  return (
    <section className="border-t border-border bg-card px-4 py-16 md:py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-4 text-center text-2xl font-bold text-foreground md:text-3xl">
          Pronto para automatizar seu dia a dia?
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
          Pare de ser o gargalo da sua própria operação. Use a mesma stack que eu uso para escalar a Meerkat globalmente.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {benefits.map((benefit) => (
            <div 
              key={benefit.title}
              className="rounded-lg border border-border bg-background p-6 transition-colors hover:border-accent/50"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md bg-accent/10">
                <benefit.icon className="h-5 w-5 text-accent" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {benefit.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
