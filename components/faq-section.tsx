'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Preciso saber programar?",
    answer: "Não! O treinamento é focado em execução prática. Você vai copiar e colar os blueprints prontos e adaptar para seu contexto. Nenhum conhecimento técnico avançado é necessário."
  },
  {
    question: "Tenho suporte?",
    answer: "Sim, você terá acesso à comunidade exclusiva onde pode tirar dúvidas e trocar experiências com outros alunos. Eu também participo ativamente."
  },
  {
    question: "As ferramentas são pagas?",
    answer: "O Claude tem um plano gratuito que permite começar. Para uso mais avançado, existe o plano Pro. As integrações com Slack e Upwork são gratuitas."
  },
  {
    question: "Por quanto tempo tenho acesso?",
    answer: "Acesso vitalício. Uma vez que você compra, o conteúdo é seu para sempre, incluindo atualizações futuras."
  }
]

export function FaqSection() {
  return (
    <section className="border-t border-border bg-card px-4 py-16 md:py-20">
      <div className="mx-auto max-w-2xl">
        <h2 className="mb-4 text-center text-2xl font-bold text-foreground md:text-3xl">
          Dúvidas frequentes
        </h2>
        <p className="mb-10 text-center text-muted-foreground">
          Tudo que você precisa saber antes de começar
        </p>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="rounded-lg border border-border bg-background px-4 data-[state=open]:border-accent/50"
            >
              <AccordionTrigger className="py-4 text-left text-base font-medium text-foreground hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-sm leading-relaxed text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
