import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const linkBase =
    "transition-colors duration-200 hover:text-[#9ef01a] font-mono";
  const linkActive = "text-[#9ef01a] font-semibold font-mono";

  // Links estilo terminal
  const links = [
    { to: "/about", label: "whoami" },
    { to: "/projects", label: "ls projects/" },
    { to: "/skills", label: "cat skills.txt" },
    { to: "/contact", label: "ping me" },
  ];

  return (
    <header className="border-b border-gray-800 bg-[#0f1117]/80 backdrop-blur-sm sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo estilo prompt */}
        <Link
          to="/"
          className="text-xl font-bold text-[#9ef01a] tracking-tight font-mono"
        >
          &gt;cleanfolio:~$
          <span className="animate-pulse ml-1">_</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 text-sm md:text-base">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                isActive ? linkActive : "text-gray-300 " + linkBase
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-gray-300 hover:text-[#9ef01a] transition"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#0f1117] border-t border-gray-800 px-6 py-4 space-y-4">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? linkActive + " block"
                  : "text-gray-300 block " + linkBase
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
