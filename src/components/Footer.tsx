import { Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-4 text-center">
        {/* Social Links */}
        <div className="mb-6 flex items-center justify-center gap-4">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-all hover:border-primary/40 hover:text-primary"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-all hover:border-primary/40 hover:text-primary"
          >
            <Github size={16} />
          </a>
        </div>

        <p className="mb-3 text-sm font-semibold text-card-foreground tracking-wider">
          🛡️ NATAN DIAS CORRÊA // SEGURANÇA DA INFORMAÇÃO // 2026
        </p>

        <p className="text-xs italic text-muted-foreground">
          "A segurança é um processo, não um produto." — Bruce Schneier
        </p>
      </div>
    </footer>
  );
};

export default Footer;
