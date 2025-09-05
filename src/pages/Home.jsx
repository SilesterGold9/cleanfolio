import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="flex flex-col min-h-screen bg-gradient-to-br from-[#0d0d0d] to-[#1a1a1a] text-[#ccc] font-jetbrains relative overflow-hidden">
      {/* Hero principal */}
      <section className="flex flex-col items-center justify-center flex-1 text-center relative z-10">
        {/* Placeholder Logo */}
        <div className="w-24 h-24 mb-6 border-4 border-[#9ef01a] rounded-full animate-pulse" />

        {/* Título */}
        <h1 className="text-6xl md:text-8xl font-extrabold leading-[0.9] uppercase text-wheat tracking-wide">
          FULL <br /> STACK <br /> DEVELOPER
        </h1>

        {/* Placeholder Avatar / geometria */}
        <div className="w-56 h-64 mt-8 bg-gradient-to-br from-[#161922] to-[#1f2028] border-4 border-[#9ef01a] rounded-2xl flex items-center justify-center">
          <div className="w-32 h-32 border-4 border-[#9ef01a] rounded-lg animate-pulse" />
        </div>

        {/* Textos inferiores */}
        <div className="absolute bottom-28 left-4 text-xs uppercase text-left text-gray-400">
          <span>
            Currently Making
            <br />
            Cool Sh*t For Everyone
          </span>
        </div>

        <div className="absolute bottom-28 right-4 flex flex-col items-end gap-1 text-xs uppercase">
          <span className="text-gray-400">(2022 - Present)</span>
          <Link
            to="/contact"
            id="contact"
            className="flex items-center gap-2 font-bold text-lime-500 cursor-pointer hover:underline"
          >
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-lime-500 animate-pulse"></span>
            Get in Touch!
          </Link>
        </div>
      </section>

      {/* Background decorativo (opcional) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/4 w-60 h-60 border-2 border-[#9ef01a] rounded-full opacity-20 animate-spin-slow" />
        <div className="absolute bottom-20 right-1/3 w-72 h-72 border-2 border-[#9ef01a] rounded-lg opacity-15 animate-ping-slow" />
      </div>
    </main>
  );
};

export default Home;
