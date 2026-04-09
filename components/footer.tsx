import { ExternalLink } from "lucide-react"

const links = [
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Upwork", href: "https://upwork.com" },
  { label: "Meerkat Coding", href: "https://tiagofelix.framer.website/" }
]

export function Footer() {
  return (
    <footer className="border-t border-border px-4 py-8">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Tiago Félix. Todos os direitos reservados.
        </p>
        
        <div className="flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
              <ExternalLink className="h-3 w-3" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
