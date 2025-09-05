const Contact = () => {
  return (
    <section className="max-w-3xl mx-auto py-20 px-6 text-center">
      <h2 className="text-3xl font-bold mb-6 text-[#9ef01a]">
        Entre em Contato
      </h2>
      <p className="text-gray-400 mb-8">
        Interessado em trabalhar junto ou só quer dizer oi? Envie uma mensagem
        abaixo 👇
      </p>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Seu Nome"
          className="w-full p-3 rounded-lg bg-[#161922] border border-gray-800 focus:border-[#9ef01a] outline-none"
        />
        <input
          type="email"
          placeholder="Seu Email"
          className="w-full p-3 rounded-lg bg-[#161922] border border-gray-800 focus:border-[#9ef01a] outline-none"
        />
        <textarea
          placeholder="Sua Mensagem"
          rows="5"
          className="w-full p-3 rounded-lg bg-[#161922] border border-gray-800 focus:border-[#9ef01a] outline-none"
        />
        <button className="px-6 py-3 bg-[#9ef01a] text-black rounded-lg font-semibold hover:bg-lime-400 transition">
          Enviar Mensagem
        </button>
      </form>
    </section>
  );
};

export default Contact;
