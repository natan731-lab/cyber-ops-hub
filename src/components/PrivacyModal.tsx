// [SEGMENTO_08]: CENTRO_DE_PRIVACIDADE - COMPLIANCE_MODAL
import { X, ShieldCheck } from "lucide-react";

interface PrivacyModalProps {
  open: boolean;
  onClose: () => void;
}

const PrivacyModal = ({ open, onClose }: PrivacyModalProps) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      <div
        className="relative max-h-[80vh] w-full max-w-2xl overflow-y-auto rounded-lg border border-primary/30 bg-card p-6 sm:p-8 shadow-[0_0_40px_hsl(142_71%_45%/0.1)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="mb-6 flex items-center justify-between border-b border-border pb-4">
          <div className="flex items-center gap-2">
            <ShieldCheck size={18} className="text-primary" />
            <span className="text-[10px] font-semibold uppercase tracking-widest text-primary">
              [DOCUMENTO_DE_AUDITORIA_OFICIAL]
            </span>
          </div>
          <button
            onClick={onClose}
            className="flex h-7 w-7 items-center justify-center rounded border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
            aria-label="Fechar"
          >
            <X size={14} />
          </button>
        </div>

        {/* Content */}
        <div className="space-y-5 font-mono text-xs leading-relaxed text-muted-foreground">
          <h2 className="text-sm font-bold uppercase tracking-widest text-card-foreground">
            🛡️ TERMOS DE USO E POLÍTICA DE <span className="text-primary">PRIVACIDADE</span>
          </h2>
          <p className="text-[10px] tracking-wider text-primary/60">
            Operador do Sistema: Natan Dias Corrêa
          </p>

          <div>
            <h3 className="mb-1 text-xs font-bold text-card-foreground">1. Finalidade do Site</h3>
            <p>
              Este portfólio digital tem fins exclusivamente profissionais e informativos, servindo como demonstração de competências técnicas em Análise de Sistemas, Cybersecurity e GRC.
            </p>
          </div>

          <div>
            <h3 className="mb-1 text-xs font-bold text-card-foreground">2. Propriedade Intelectual</h3>
            <p>
              Todo o conteúdo visual, logotipos (Vibrato Digital) e o código customizado deste site são de propriedade intelectual de Natan Dias Corrêa, protegidos pelas leis de direitos autorais. A reprodução não autorizada para fins comerciais é proibida.
            </p>
          </div>

          <div>
            <h3 className="mb-1 text-xs font-bold text-card-foreground">3. Proteção de Dados (LGPD)</h3>
            <p className="mb-2">Em total conformidade com a Lei 13.709/2018 (LGPD):</p>
            <ul className="ml-4 space-y-1.5 list-none">
              <li><span className="text-primary">▸</span> <strong className="text-card-foreground">Coleta Mínima:</strong> Este site não utiliza cookies de rastreamento invasivos ou coleta de dados pessoais sem consentimento.</li>
              <li><span className="text-primary">▸</span> <strong className="text-card-foreground">Formulário de Contato:</strong> Ao utilizar o "Protocolo de Contato", você fornece voluntariamente seu nome e e-mail apenas para fins de comunicação profissional. Esses dados não são compartilhados com terceiros.</li>
              <li><span className="text-primary">▸</span> <strong className="text-card-foreground">Direito do Titular:</strong> O visitante pode solicitar a exclusão de qualquer mensagem enviada a qualquer momento através do e-mail oficial: natandias735@gmail.com.</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-1 text-xs font-bold text-card-foreground">4. Isenção de Responsabilidade</h3>
            <p>
              O desenvolvedor não se responsabiliza por danos decorrentes de falhas técnicas externas, ataques de terceiros à infraestrutura do hospedeiro (GitHub Pages) ou uso indevido das informações aqui contidas.
            </p>
          </div>
        </div>

        {/* Footer Button */}
        <div className="mt-8 border-t border-border pt-5">
          <button
            onClick={onClose}
            className="w-full rounded-md bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-all hover:shadow-[0_0_20px_hsl(142_71%_45%/0.4)]"
          >
            [ENTENDIDO_E_ACEITO]
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyModal;
