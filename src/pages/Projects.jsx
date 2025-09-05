import { Code, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Landing SaaS",
      desc: "Uma landing page moderna para uma plataforma SaaS.",
      github: "https://github.com/SilesterGold9/saasy",
      live: "https://clean-saas.netlify.app",
    },
    {
      title: "Portfólio",
      desc: "Cleanfolio com modo escuro e destaque em verde ácido.",
      github: "https://github.com/SilesterGold9/cleanfolio",
      live: "https://cleanpfl.netlify.app",
    },
    {
      title: "Template Frontend",
      desc: "Um template inicial para React com Tailwind CSS.",
      github:
        "https://github.com/SilesterGold9/ecommerce-apphttps://github.com/SilesterGold9/react-tailwind-starter",
      live: "https://silester-cleanplate.netlify.app",
    },
    {
      title: "Site para Empresa de Blindagem de Celulares",
      desc: "Um site moderno e elegante para uma empresa de blindagem de celulares.",
      github: "https://github.com/SilesterGold9/aw",
      live: "https://aw-protection.netlify.app",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto py-20 px-6">
      <h2 className="text-3xl font-bold mb-12 text-[#9ef01a] tracking-wide">
        Projetos
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((p, i) => (
          <div
            key={i}
            className="p-6 rounded-xl border border-gray-800 bg-[#161922] shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-4 text-[#9ef01a]">
              {p.title}
            </h3>
            <p className="text-gray-400/80 mb-6">{p.desc}</p>
            <div className="flex gap-4">
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#9ef01a] transition-colors"
                title="Ver no GitHub"
              >
                <Code size={20} />
              </a>
              <a
                href={p.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#9ef01a] transition-colors"
                title="Ver ao Vivo"
              >
                <ExternalLink size={20} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
