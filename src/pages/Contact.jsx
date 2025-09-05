const Contact = () => {
  return (
    <section className="max-w-3xl mx-auto py-20 px-6 text-center">
      <h2 className="text-3xl font-bold mb-6 text-[#9ef01a]">Get in Touch</h2>
      <p className="text-gray-400 mb-8">
        Interested in working together or just want to say hi? Drop a message
        below 👇
      </p>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 rounded-lg bg-[#161922] border border-gray-800 focus:border-[#9ef01a] outline-none"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 rounded-lg bg-[#161922] border border-gray-800 focus:border-[#9ef01a] outline-none"
        />
        <textarea
          placeholder="Your Message"
          rows="5"
          className="w-full p-3 rounded-lg bg-[#161922] border border-gray-800 focus:border-[#9ef01a] outline-none"
        />
        <button className="px-6 py-3 bg-[#9ef01a] text-black rounded-lg font-semibold hover:bg-lime-400 transition">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
