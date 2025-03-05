import { useState } from "react";
import { Phone, X, Mail,Facebook, Instagram, MessageSquareMore } from "lucide-react";

const Contact = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handlePopupToggle = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  return (
    <section
      id="contacto"
      className="rounded-2xl bg-gradient-to-b from-gray-100 to-gray-200 py-10 px-6"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/*CONTACTO*/}
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Contacto</h2>
        <p className="text-lg text-gray-700 mb-8">
          Para asesoramiento legal confiable y efectivo, agenda tu consulta
          conmigo.
        </p>

        <div className="bg-white shadow-lg rounded-2xl border border-gray-300">
          <div className="flex justify-center gap-10 mt-8">
            <a
              href="https://wa.me/XXXXXXXXXXX"
              target="_blank"
              className="text-green-600 hover:text-green-800 transition"
            >
              <Phone className="w-8 h-8" />
            </a>
            <a
              href="https://www.instagram.com/tuusuario"
              target="_blank"
              className="text-pink-600 hover:text-pink-800 transition"
            >
              <Instagram className="w-8 h-8" />
            </a>
            <a
              href="https://www.facebook.com/tuusuario"
              target="_blank"
              className="text-blue-600 hover:text-blue-800 transition"
            >
              <Facebook className="w-8 h-8" />
            </a>
          </div>

          {/*FORMULARIO*/}
          <form className="mt-6 flex flex-col gap-5 px-10 py-10">
            <input
              type="text"
              placeholder="Nombre"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500"
            />
            <input
              type="email"
              placeholder="Correo Electrónico"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500"
            />
            <textarea
              placeholder="Mensaje"
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500"
            ></textarea>

            <a
              href="mailto:contacto@estudiojuridico.com"
              className="flex items-center justify-center gap-2 bg-gray-900 text-white px-5 py-3 rounded-lg 
                       hover:bg-gray-700 transition duration-300 mx-auto w-64 font-semibold"
            >
              <Mail className="w-5 h-5" />
              Enviar un Correo
            </a>
          </form>

          {/*CONTACTOS*/}
        </div>
      </div>

      {/*AYUDA*/}
      <a
        onClick={handlePopupToggle}
        className="fixed bottom-6 right-6 bg-gray-900 text-white p-6 rounded-lg shadow-lg hover:bg-gray-500 transition cursor-pointer flex items-center space-x-3"
      >
        <MessageSquareMore className="w-6 h-6" />
        <div className="flex flex-col">
          <span className="text-sm font-semibold">¿Necesitas ayuda?</span>
          <span className="text-xs text-white opacity-80">
            Haz clic para más info
          </span>
        </div>
      </a>

      {isPopupVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-72 text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              ¿Necesitas ayuda?
            </h3>
            <p className="text-gray-700 mb-4">
              Si necesitas más información o deseas agendar una consulta, haz
              clic en el siguiente enlace.
            </p>
            <a
              href="#contacto"
              className="text-blue-600 hover:text-blue-800 transition mb-4 block"
              onClick={handlePopupToggle} 
            >
              Agendar consulta
            </a>
            <button
              onClick={handlePopupToggle}
              className="text-red-600 hover:text-red-800 transition font-semibold"
            >
              <X className="inline w-5 h-5 mr-2" />
              Cerrar
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
