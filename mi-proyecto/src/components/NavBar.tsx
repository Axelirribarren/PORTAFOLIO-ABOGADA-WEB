import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(currentScrollPos < 10 || currentScrollPos < prevScrollPos);
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`bg-[#f4f4f2] text-gray-900 shadow-md fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out 
        ${visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 lg:px-12 py-4">
        <a
          href="/"
          className="font-bold text-3xl italic text-gray-900 tracking-wide hover:opacity-80 transition duration-300"
        >
          Estudio Jurídico
        </a>

        {/*MENU*/}
        <div className="hidden md:flex space-x-8">
          {["Inicio", "Servicios", "Sobre mí", "Contacto"].map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase().replace(" ", "")}`}
              className="relative font-semibold text-gray-900 hover:text-black transition duration-300
                after:content-[''] after:absolute after:w-0 after:h-[2px] after:bottom-[-4px] after:left-0 after:bg-gray-900 
                hover:after:w-full after:transition-all after:duration-300"
            >
              {item}
            </a>
          ))}
        </div>

        {/*CELULAR*/}
        <button
          className="md:hidden text-gray-900 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/*DESPLEGABLE*/}
      <div
        className={`md:hidden bg-[#f4f4f2] fixed w-full top-16 left-0 px-6 py-4 shadow-lg transition-all duration-500 ease-in-out
          ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"}`}
      >
        {["Inicio", "Servicios", "Sobre mí", "Contacto"].map((item, index) => (
          <a
            key={index}
            href={`#${item.toLowerCase().replace(" ", "")}`}
            className="block text-gray-900 text-center py-2 font-semibold hover:text-black transition duration-300 border-b border-gray-300"
            onClick={() => setIsOpen(false)}
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
