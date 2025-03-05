

import { Mail, Facebook, Instagram, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="rounded-lg shadow-lg bg-[#b3b9d8] text-white py-10">
      <div className="container mx-auto text-center">
        
        {/* Título */}
        <h2 className="text-4xl font-bold mb-6 text-gray-700">Contacto</h2>
        <p className="text-lg mb-6 text-gray-700">
        Para asesoramiento legal confiable y efectivo, agenda tu consulta conmigo.
        </p>

        {/* Botón de Email */}
        <a 
          href="mailto:contacto@estudiojuridico.com" 
          className="flex items-center justify-center gap-2 bg-gold text-black px-5 py-3 rounded-lg hover:bg-[#565c78] transition duration-300 mx-auto w-64"
        >
          <Mail className="w-5 h-5" />
          Enviar un Correo
        </a>

        {/* Redes Sociales */}
        <div className="flex justify-center gap-6 mt-8">
          <a 
            href="https://wa.me/XXXXXXXXXXX" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#25D366] hover:text-[#1a7c3e] transition duration-300"
          >
            <Phone className="w-8 h-8" />
          </a>

          <a 
            href="https://www.instagram.com/tuusuario" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#E1306C] hover:text-[#B21F4A] transition duration-300"
          >
            <Instagram className="w-8 h-8" />
          </a>

          <a 
            href="https://www.facebook.com/tuusuario" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#1877F2] hover:text-[#0e5a9c] transition duration-300"
          >
            <Facebook className="w-8 h-8" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Contact;

