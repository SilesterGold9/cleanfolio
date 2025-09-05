const About = () => {
  return (
    <section className="max-w-6xl mx-auto py-20 px-6 flex flex-col md:flex-row gap-12 items-start">
      {/* Texto */}
      <div className="flex-1">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#9ef01a] tracking-wide">
          Sobre Mim
        </h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Olá, eu sou{" "}
          <span className="text-[#9ef01a] font-semibold">
            Silvestre Dourado
          </span>
          , um apaixonado{" "}
          <span className="font-medium">Desenvolvedor Full Stack</span> que
          adora criar experiências digitais limpas, modernas e escaláveis.
        </p>
        <p className="text-gray-400 leading-relaxed mb-4">
          Minha jornada começou com a curiosidade de entender como as coisas
          funcionam por trás dos bastidores. Desde então, venho explorando
          tecnologias desde{" "}
          <span className="text-[#9ef01a]">frameworks de frontend</span> até{" "}
          <span className="text-[#9ef01a]">sistemas backend</span>, sempre
          buscando maneiras de melhorar desempenho, acessibilidade e experiência
          do usuário.
        </p>
        <p className="text-gray-400 leading-relaxed">
          Fora do código, gosto de aprender sobre design, automatizar fluxos de
          trabalho e compartilhar conhecimento com a comunidade. Meu objetivo é
          continuar criando ferramentas e aplicativos que sejam{" "}
          <span className="italic">intencionais</span> e realmente facilitem a
          vida das pessoas. 🚀
        </p>
      </div>

      {/* Ilustração minimalista / placeholder geométrico */}
      <div className="flex-1 flex justify-center">
        <div className="w-80 h-80 md:w-96 md:h-96 rounded-2xl border border-gray-800 flex items-center justify-center bg-gradient-to-br from-[#161922] to-[#1f2028]">
          <div className="w-32 h-32 border-4 border-[#9ef01a] rounded-lg animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default About;
