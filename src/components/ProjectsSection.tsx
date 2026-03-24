import { ExternalLink, Github, Terminal, Music, Lock, Layout } from "lucide-react";

const features = [
  { icon: Music, label: "Monitoramento de Prática Musical" },
  { icon: Lock, label: "Criptografia de Dados do Usuário" },
  { icon: Layout, label: "Interface Otimizada (UI/UX)" },
];

const ProjectsSection = () => {
  return (
    <section id="projetos" className="py-24 scroll-mt-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
          <span className="text-primary">$</span> ls ~/projects --classified
        </h2>
        <h3 className="mb-12 text-2xl sm:text-3xl font-bold text-card-foreground">
          Terminal de <span className="text-primary text-glow">Projetos</span>
        </h3>

        {/* Vibrato Digital Highlight */}
        <div className="relative rounded-lg border border-primary/30 bg-card p-1 box-glow">
          <div className="rounded-md border border-border bg-background p-6 sm:p-8">
            {/* Top bar */}
            <div className="mb-6 flex items-center gap-2 border-b border-border pb-4">
              <Terminal size={14} className="text-primary" />
              <span className="text-[11px] font-semibold tracking-widest text-primary">
                [LOG_PROJETO_01: VIBRATO_DIGITAL]
              </span>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {/* Left: Description */}
              <div>
                <h4 className="mb-3 text-lg font-bold text-card-foreground">
                  Vibrato <span className="text-primary">Digital</span>
                </h4>
                <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                  Aplicação de produtividade para músicos focada em{" "}
                  <span className="text-primary font-medium">Segurança por Design</span>{" "}
                  (Privacy by Design). O projeto utiliza arquitetura resiliente para garantir a
                  integridade dos dados e a disponibilidade das informações musicais.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://natan731-lab.github.io/vibrato-digital-app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-primary-foreground transition-all hover:shadow-[0_0_20px_hsl(142_71%_45%/0.4)]"
                  >
                    <ExternalLink size={14} />
                    Acessar Deploy [LIVE]
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-md border border-primary/40 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-primary transition-all hover:bg-primary/10"
                  >
                    <Github size={14} />
                    Inspecionar Código [GitHub]
                  </a>
                </div>
              </div>

              {/* Right: Features */}
              <div className="flex flex-col justify-center">
                <h5 className="mb-4 text-[10px] uppercase tracking-widest text-muted-foreground">
                  {">"} Funcionalidades em Destaque
                </h5>
                <div className="space-y-3">
                  {features.map((feat) => {
                    const Icon = feat.icon;
                    return (
                      <div
                        key={feat.label}
                        className="flex items-center gap-3 rounded-md border border-border bg-secondary/30 px-4 py-3 transition-colors hover:border-primary/30"
                      >
                        <Icon size={16} className="text-primary flex-shrink-0" />
                        <span className="text-xs text-card-foreground">{feat.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
