import { Code, GitBranch, Box } from "lucide-react";
import SkillCard from "../components/SkillCard";

const Skills = () => {
  const skills = [
    {
      name: "React",
      icon: Code,
      level: "Avançado",
      description: "Construção de SPAs modernas e componentes",
    },
    {
      name: "TailwindCSS",
      icon: Box,
      level: "Intermediário",
      description: "Protótipos rápidos de UI com classes utilitárias",
    },
    {
      name: "JavaScript",
      icon: Code,
      level: "Avançado",
      description: "JavaScript puro, ES6+, programação assíncrona",
    },
    {
      name: "Node.js",
      icon: Code,
      level: "Intermediário",
      description: "APIs backend e lógica do lado do servidor",
    },
    {
      name: "Git",
      icon: GitBranch,
      level: "Avançado",
      description: "Controle de versão e fluxo de colaboração",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto py-20 px-6">
      <h2 className="text-3xl font-bold mb-10 text-[#9ef01a] tracking-wide">
        Habilidades
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((s, i) => (
          <SkillCard
            key={i}
            icon={s.icon}
            name={s.name}
            level={s.level}
            description={s.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
