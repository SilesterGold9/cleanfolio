import { Code, GitBranch, Box } from "lucide-react";
import SkillCard from "../components/SkillCard";

const Skills = () => {
  const skills = [
    {
      name: "React",
      icon: Code,
      level: "Advanced",
      description: "Building modern SPAs and components",
    },
    {
      name: "TailwindCSS",
      icon: Box,
      level: "Intermediate",
      description: "Rapid UI prototyping with utility classes",
    },
    {
      name: "JavaScript",
      icon: Code,
      level: "Advanced",
      description: "Vanilla JS, ES6+, async programming",
    },
    {
      name: "Node.js",
      icon: Code,
      level: "Intermediate",
      description: "Backend APIs and server-side logic",
    },
    {
      name: "Git",
      icon: GitBranch,
      level: "Advanced",
      description: "Version control and collaboration workflow",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto py-20 px-6">
      <h2 className="text-3xl font-bold mb-10 text-[#9ef01a] tracking-wide">
        Skills
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
