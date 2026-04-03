import { useState, useEffect } from "react";
import { Menu, X, Scale } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Servicios", href: "#servicios" },
    { name: "Trayectoria", href: "#trayectoria" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-slate-900/80 backdrop-blur-lg border-b border-white/10 shadow-xl py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="bg-yellow-600 p-2 rounded-xl group-hover:bg-yellow-500 transition-all duration-300 shadow-lg group-hover:shadow-yellow-600/30">
            <Scale className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">
            ESTUDIO <span className="text-yellow-500">IRRIBARREN</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-200 hover:text-yellow-500 font-medium transition-all duration-300 text-sm uppercase tracking-widest relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a
            href="#contacto"
            className="bg-yellow-600 hover:bg-yellow-700 text-white px-7 py-2.5 rounded-full font-bold transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-600/40 hover:-translate-y-0.5 text-sm"
          >
            Agendar Cita
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none p-2 rounded-lg bg-white/5"
          onClick={toggleMenu}
        >
          {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-slate-950/95 backdrop-blur-2xl z-40 flex flex-col items-center justify-center space-y-10 transition-all duration-500 md:hidden ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={toggleMenu}
            className="text-3xl text-white hover:text-yellow-500 font-bold transition-all duration-300 tracking-wider"
          >
            {link.name}
          </a>
        ))}
        <a
          href="#contacto"
          onClick={toggleMenu}
          className="bg-yellow-600 text-white px-10 py-4 rounded-full text-xl font-bold hover:bg-yellow-700 transition-all"
        >
          Agendar Cita
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
