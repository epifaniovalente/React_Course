export function Footer() {
    return(
        <footer className="py-8 px-6 border-t border-foreground/[0.06]">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-xs text-muted-foreground font-mono">
          © {new Date().getFullYear()} — Feito com React & Tailwind
        </span>
        <span className="text-xs text-muted-foreground/60 font-mono">
          Desenhado e desenvolvido com ❤️
        </span>
      </div>
    </footer>
    )
}