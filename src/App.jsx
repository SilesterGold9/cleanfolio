import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";

// Pages
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Skills from "./pages/Skills.jsx";
import Contact from "./pages/Contact.jsx";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#0f1117] text-[#f8f9fb] font-['JetBrains_Mono']">
      {/* Navbar */}
      <Navbar />

      {/* Main */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="p-6 text-center text-sm text-gray-400 border-t border-gray-800">
        © {new Date().getFullYear()} Cleanfolio. Feito com ❤️ e JetBrains Mono.
      </footer>
    </div>
  );
};

export default App;
