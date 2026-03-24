import { useState, FormEvent } from "react";
import { Send } from "lucide-react";

const ContactSection = () => {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
      setTimeout(() => setSent(false), 3000);
    }, 1800);
  };

  return (
    <section id="contato" className="py-24 scroll-mt-20">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="mb-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
          <span className="text-primary">$</span> ssh contact@natan_correa
        </h2>
        <h3 className="mb-12 text-2xl sm:text-3xl font-bold text-card-foreground">
          Protocolo de <span className="text-primary text-glow">Contato</span>
        </h3>

        <div className="rounded-lg border border-border bg-card p-6 sm:p-8">
          {/* Terminal bar */}
          <div className="mb-6 flex items-center gap-2 border-b border-border pb-4">
            <span className="text-[10px] tracking-widest text-muted-foreground uppercase">
              Relatório de Chamado Técnico
            </span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="mb-2 block text-[10px] uppercase tracking-widest text-muted-foreground">
                {">"} Identificação (Nome)
              </label>
              <input
                type="text"
                required
                className="w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm text-card-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-colors"
                placeholder="Seu nome completo"
              />
            </div>
            <div>
              <label className="mb-2 block text-[10px] uppercase tracking-widest text-muted-foreground">
                {">"} Canal de Resposta (E-mail)
              </label>
              <input
                type="email"
                required
                className="w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm text-card-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-colors"
                placeholder="seu@email.com"
              />
            </div>
            <div>
              <label className="mb-2 block text-[10px] uppercase tracking-widest text-muted-foreground">
                {">"} Relatório (Mensagem)
              </label>
              <textarea
                required
                rows={5}
                className="w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm text-card-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-colors resize-none"
                placeholder="Descreva sua solicitação..."
              />
            </div>

            {/* Loading bar */}
            {sending && (
              <div className="h-1 w-full overflow-hidden rounded-full bg-border">
                <div className="h-full animate-[loading_1.5s_ease-in-out] bg-primary rounded-full" />
              </div>
            )}

            <button
              type="submit"
              disabled={sending}
              className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-all hover:shadow-[0_0_20px_hsl(142_71%_45%/0.4)] disabled:opacity-60"
            >
              <Send size={14} />
              {sent ? "✓ Dados Transmitidos" : sending ? "Transmitindo..." : "Transmitir Dados [ENVIAR]"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
