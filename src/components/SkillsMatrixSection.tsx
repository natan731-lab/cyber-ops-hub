import { useState } from "react";
import { Shield, Radar, Code2 } from "lucide-react";

interface Skill {
  name: string;
  level: number;
}

const columns = [
  {
    icon: Radar,
    title: "Cibersegurança",
    skills: [
      { name: "Defesa de Perímetro", level: 85 },
      { name: "Análise de Vulnerabilidades", level: 80 },
      { name: "Resposta a Incidentes (SIEM)", level: 75 },
    ],
  },
  {
    icon: Shield,
    title: "GRC & Riscos",
    skills: [
      { name: "Conformidade LGPD", level: 90 },
      { name: "Frameworks NIST/ISO 27001", level: 85 },
      { name: "Gestão de Riscos Operacionais", level: 88 },
    ],
  },
  {
    icon: Code2,
    title: "Desenvolvimento",
    skills: [
      { name: "Python p/ Segurança", level: 70 },
      { name: "Arquitetura de Sistemas (ADS)", level: 75 },
      { name: "SQL & Integridade de BD", level: 72 },
    ],
  },
];

const SkillItem = ({ skill }: { skill: Skill }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group rounded-md border border-border bg-secondary/20 px-4 py-3 transition-all hover:border-primary/30 cursor-default"
    >
      <div className="flex items-center justify-between mb-1">
        <span className="text-xs text-card-foreground">{skill.name}</span>
        {hovered && (
          <span className="text-[10px] text-primary font-medium animate-fade-in">
            Status: Otimizado
          </span>
        )}
      </div>
      <div className="h-1.5 w-full rounded-full bg-border overflow-hidden">
        <div
          className="h-full rounded-full bg-primary transition-all duration-700 ease-out"
          style={{ width: hovered ? `${skill.level}%` : "0%" }}
        />
      </div>
    </div>
  );
};

const SkillsMatrixSection = () => {
  return (
    <section id="grc" className="py-24 scroll-mt-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
          <span className="text-primary">$</span> nmap --scan-skills --verbose
        </h2>
        <h3 className="mb-12 text-2xl sm:text-3xl font-bold text-card-foreground">
          Matriz de Habilidades &{" "}
          <span className="text-primary text-glow">Compliance</span>
        </h3>

        <div className="grid gap-8 md:grid-cols-3">
          {columns.map((col) => {
            const Icon = col.icon;
            return (
              <div key={col.title} className="rounded-lg border border-border bg-card p-6">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10">
                    <Icon size={20} className="text-primary" />
                  </div>
                  <h4 className="text-sm font-bold text-card-foreground">{col.title}</h4>
                </div>
                <div className="space-y-3">
                  {col.skills.map((skill) => (
                    <SkillItem key={skill.name} skill={skill} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsMatrixSection;
