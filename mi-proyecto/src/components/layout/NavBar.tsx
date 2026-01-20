import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "/#inicio" },
    { name: "Servicios", href: "/#servicios" },
    { name: "Sobre Mí", href: "/#sobre-mi" },
    { name: "Noticias", href: "/noticias" },
    { name: "Contacto", href: "/#contacto" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <img 
            src="./logo-negro.png" 
            alt="Estudio Irribarren" 
            className="h-15 w-auto object-contain"
          />
          <span className={`text-lg md:text-xl font-playfair font-bold tracking-wide ${scrolled ? 'text-slate-900' : 'text-slate-900'}`}>
            Estudio Irribarren
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium tracking-wide hover:text-amber-600 transition-colors relative group ${
                scrolled ? "text-slate-700" : "text-slate-800"
              }`}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-slate-900 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 animate-fade-in-down">
          <div className="flex flex-col py-6 px-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-700 hover:text-amber-600 hover:bg-slate-50 font-medium py-3 px-4 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 mt-2 border-t border-gray-100">
               <a 
                 href="#contacto"
                 className="block w-full text-center bg-slate-900 text-white font-medium py-3 rounded-lg hover:bg-slate-800 transition-colors"
                 onClick={() => setIsOpen(false)}
               >
                 Agendar Consulta
               </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
