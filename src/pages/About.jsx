const About = () => {
  return (
    <section className="max-w-6xl mx-auto py-20 px-6 flex flex-col md:flex-row gap-12 items-start">
      {/* Texto */}
      <div className="flex-1">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#9ef01a] tracking-wide">
          About Me
        </h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Hi, I’m{" "}
          <span className="text-[#9ef01a] font-semibold">
            Silvestre Dourado
          </span>
          , a passionate{" "}
          <span className="font-medium">Full Stack Developer</span> who loves
          building clean, modern, and scalable digital experiences.
        </p>
        <p className="text-gray-400 leading-relaxed mb-4">
          My journey started with curiosity for how things work under the hood.
          Since then, I’ve been exploring technologies from{" "}
          <span className="text-[#9ef01a]">frontend frameworks</span> to{" "}
          <span className="text-[#9ef01a]">backend systems</span>, always
          looking for ways to improve performance, accessibility, and user
          experience.
        </p>
        <p className="text-gray-400 leading-relaxed">
          Outside of coding, I enjoy learning about design, automating
          workflows, and sharing knowledge with the community. My goal is to
          keep creating tools and apps that feel{" "}
          <span className="italic">intentional</span> and actually make people’s
          lives easier. 🚀
        </p>
      </div>

      {/* Minimalist illustration / geometric placeholder */}
      <div className="flex-1 flex justify-center">
        <div className="w-80 h-80 md:w-96 md:h-96 rounded-2xl border border-gray-800 flex items-center justify-center bg-gradient-to-br from-[#161922] to-[#1f2028]">
          <div className="w-32 h-32 border-4 border-[#9ef01a] rounded-lg animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default About;
