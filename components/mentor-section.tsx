const timeline = [
  {
    year: "2016",
    title: "O Início",
    description: "Fundei minha primeira empresa de automação, pioneira em Chatbots e atendimento inteligente no Brasil."
  },
  {
    year: "2019",
    title: "Expansão Global",
    description: "Transição total para o mercado internacional, operando exclusivamente com clientes 'gringos'."
  },
  {
    year: "2024",
    title: "Meerkat Coding",
    description: "Com experiência em projetos em 36 países, fundei a Meerkat para escalar automações de IA de alto nível."
  },
  {
    year: "2026",
    title: "Democratização",
    description: "Decidi abrir a 'caixa preta' e compartilhar workflows reais com quem busca dar os primeiros passos."
  }
]

export function MentorSection() {
  return (
    <section className="border-t border-border bg-card px-4 py-16 md:py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-2 text-center text-2xl font-bold text-foreground md:text-3xl">
          Seu Mentor — Tiago Félix
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
          Fundador da Meerkat Coding. Desenvolvo automações de IA para empresas em 36 países e decidi abrir meus processos internos para você.
        </p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 h-full w-px bg-border md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div 
                key={item.year}
                className={`relative flex items-start gap-6 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Year badge */}
                <div className="z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground md:absolute md:left-1/2 md:-translate-x-1/2">
                  {item.year.slice(2)}
                </div>

                {/* Content */}
                <div className={`ml-10 flex-1 md:ml-0 md:w-[calc(50%-2rem)] ${
                  index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'
                }`}>
                  <h3 className="text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
