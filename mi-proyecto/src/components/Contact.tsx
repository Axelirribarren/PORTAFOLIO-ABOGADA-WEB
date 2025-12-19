import { useState } from "react";
import { Phone, X, Mail, Facebook, Instagram, MessageSquareMore, Send } from "lucide-react";

const Contact = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: ""
  });

  const handlePopupToggle = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappNumber = "3434802056";
    const text = `Hola, mi nombre es ${formData.nombre}. Email: ${formData.email}. Mensaje: ${formData.mensaje}`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <section
      id="contacto"
      className="relative py-20 px-6 bg-slate-900 text-white overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Info Column */}
          <div>
            <div className="inline-block mb-4 px-4 py-1 rounded-full border border-yellow-600/50 bg-yellow-600/10 text-yellow-500 text-sm font-medium tracking-wider uppercase">
              Contacto
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Hablemos de tu caso
            </h2>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              Para asesoramiento legal confiable y efectivo, agenda tu consulta conmigo. 
              Estoy aquí para escucharte y brindarte la mejor solución.
            </p>

            <div className="space-y-6">
              <a
                href="https://wa.me/3434802056"
                target="_blank"
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-yellow-600/50 transition-all group"
              >
                <div className="p-3 rounded-full bg-green-600/20 text-green-500 group-hover:bg-green-600 group-hover:text-white transition-colors">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">WhatsApp</h4>
                  <p className="text-slate-400 text-sm">+54 343 480 2056</p>
                </div>
              </a>

              <div className="flex gap-4 mt-8">
                <a
                  href="https://www.instagram.com/abogada.irribarren?igsh=MXNnNW05OTE4cTE0bw=="
                  target="_blank"
                  className="p-3 rounded-full bg-slate-800 text-pink-500 hover:bg-pink-600 hover:text-white transition-all"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100004425076422"
                  target="_blank"
                  className="p-3 rounded-full bg-slate-800 text-blue-500 hover:bg-blue-600 hover:text-white transition-all"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href="mailto:contacto@estudiojuridico.com"
                  className="p-3 rounded-full bg-slate-800 text-yellow-500 hover:bg-yellow-600 hover:text-white transition-all"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl text-slate-900">
            <h3 className="text-2xl font-bold mb-6">Envíame un mensaje</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Nombre Completo</label>
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all bg-slate-50"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Correo Electrónico</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all bg-slate-50"
                  placeholder="tucorreo@ejemplo.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Mensaje</label>
                <textarea
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all bg-slate-50 resize-none"
                  placeholder="¿En qué puedo ayudarte?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="flex items-center justify-center gap-2 bg-slate-900 text-white px-6 py-4 rounded-lg hover:bg-slate-800 transition duration-300 font-semibold mt-2 group"
              >
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                Enviar por WhatsApp
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* Floating Action Button */}
      <button
        onClick={handlePopupToggle}
        className="fixed bottom-6 right-6 bg-yellow-600 text-white p-4 rounded-full shadow-lg hover:bg-yellow-700 transition-all hover:scale-110 z-50 animate-bounce"
      >
        <MessageSquareMore className="w-6 h-6" />
      </button>

      {isPopupVisible && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 p-4">
          <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-sm text-center relative animate-fade-in">
            <button
              onClick={handlePopupToggle}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4 text-yellow-600">
              <MessageSquareMore className="w-8 h-8" />
            </div>
            
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              ¿Necesitas ayuda inmediata?
            </h3>
            <p className="text-slate-600 mb-6">
              Estoy disponible para responder tus consultas directamente por WhatsApp.
            </p>
            
            <a
              href="https://wa.me/3434802056"
              target="_blank"
              onClick={handlePopupToggle}
              className="flex items-center justify-center gap-2 w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition font-semibold"
            >
              <Phone className="w-5 h-5" />
              Chat en WhatsApp
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
