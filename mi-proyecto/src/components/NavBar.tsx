import  { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(currentScrollPos < 10 || currentScrollPos < prevScrollPos);
      prevScrollPos = currentScrollPos;
    };

    let prevScrollPos = window.scrollY;
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
    className={`bg-[#f4f4f2] text-gray-900 shadow-md hover:shadow-2xl 
        transition-all duration-500 ease-in-out 
        fixed top-0 left-0 w-full z-50 transform ${
          visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
      
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 lg:px-12 py-4">
        <a href="/" className="font-bold text-3xl italic text-gray-900">
          Estudio Pitos
        </a>

        <div className="hidden md:flex space-x-8">
          <a href="#home" className="font-bold text-gray-900 hover:text-black transition duration-300">Inicio</a>
          <a href="#services" className="font-bold text-gray-900 hover:text-black transition duration-300">Servicios</a>
          <a href="#team" className="font-bold text-gray-900 hover:text-black transition duration-300">Sobre mí</a>
          <a href="#contact" className="font-bold text-gray-900 hover:text-black transition duration-300">Contacto</a>
        </div>

        <button
          className="md:hidden text-gray-900 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#1a1a1a] py-4">
          <a href="#home" className="block text-gray-900 py-2 text-center hover:text-black transition">Inicio</a>
          <a href="#services" className="block text-gray-900 py-2 text-center hover:text-black transition">Servicios</a>
          <a href="#team" className="block text-gray-900 py-2 text-center hover:text-black transition">Sobre mí</a>
          <a href="#contact" className="block text-gray-900 py-2 text-center hover:text-black transition">Contacto</a>
        </div>
      )}
    </nav>
  );
}