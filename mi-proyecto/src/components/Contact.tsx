import { Mail, Facebook, Instagram, Phone, Send } from "lucide-react";

const Contact = () => {
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

        <div className="bg-white shadow-lg rounded-2xl p-8 border border-gray-300">
          <a
            href="mailto:contacto@estudiojuridico.com"
            className="flex items-center justify-center gap-2 bg-gray-900 text-white px-5 py-3 rounded-lg 
                       hover:bg-gray-700 transition duration-300 mx-auto w-64 font-semibold"
          >
            <Mail className="w-5 h-5" />
            Enviar un Correo
          </a>

          {/*FORMULARIO*/}
          <form className="mt-6 flex flex-col gap-4">
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

            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-gray-900 text-white px-5 py-3 rounded-lg 
                         hover:bg-gray-700 transition duration-300 font-semibold"
            >
              <Send className="w-5 h-5" />
              Enviar Mensaje
            </button>
          </form>

          {/*CONTACTOS*/}
          <div className="flex justify-center gap-6 mt-8">
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
        </div>
      </div>

      <a
        href="https://wa.me/XXXXXXXXXXX"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition"
      >
        <Phone className="w-6 h-6" />
      </a>
    </section>
  );
};

export default Contact;
