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
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-900/95 backdrop-blur-md shadow-lg py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="bg-yellow-600 p-2 rounded-lg group-hover:bg-yellow-500 transition-colors">
            <Scale className="w-6 h-6 text-white" />
          </div>
          <span className={`text-xl font-bold tracking-wide ${scrolled ? 'text-white' : 'text-white'}`}>
            ESTUDIO <span className="text-yellow-500">IRRIBARREN</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-300 hover:text-yellow-500 font-medium transition-colors text-sm uppercase tracking-wider"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contacto"
            className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-2 rounded-full font-semibold transition-all hover:shadow-lg hover:shadow-yellow-600/20 text-sm"
          >
            Agendar Cita
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-slate-900/98 z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={toggleMenu}
            className="text-2xl text-white hover:text-yellow-500 font-semibold transition-colors"
          >
            {link.name}
          </a>
        ))}
        <a
          href="#contacto"
          onClick={toggleMenu}
          className="bg-yellow-600 text-white px-8 py-3 rounded-full text-lg font-semibold"
        >
          Agendar Cita
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
