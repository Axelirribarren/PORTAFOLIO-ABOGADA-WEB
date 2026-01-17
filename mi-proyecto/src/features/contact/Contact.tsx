import React, { useState } from "react";
import { Mail, Facebook, Instagram, Clock, MapPin, Send, AlertCircle } from "lucide-react";
import { useBusinessHours } from "../../hooks/useBusinessHours";
import { BUSINESS_HOURS, CONTACT_INFO } from "../../utils/constants";
import { Button } from "../../components/ui/Button";
import { Card } from "../../components/ui/Card";

const Contact = () => {
  const isOpen = useBusinessHours();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [showOutOfHoursModal, setShowOutOfHoursModal] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isOpen) {
      setShowOutOfHoursModal(true);
      return;
    }

    const { name, email, message } = formData;
    const whatsappMessage = `Hola, soy ${name}. Mi email es ${email}. Consulta: ${message}`;
    const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;
    
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="contacto" className="py-12 lg:py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Contact Info */}
          <div className="lg:w-1/3 space-y-8">
            <div>
              <h2 className="text-sm font-bold text-amber-600 uppercase tracking-widest mb-2">Contacto</h2>
              <h3 className="text-3xl md:text-4xl font-playfair font-bold text-slate-900 mb-6">
                Hablemos de su Caso
              </h3>
              <p className="text-slate-600 mb-8">
                Estamos aquí para escucharle y brindarle la mejor estrategia legal. 
                Contáctenos hoy mismo para una evaluación inicial.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="flex items-start gap-4 p-5" hoverEffect={false}>
                <div className="bg-amber-100 p-3 rounded-full text-amber-600">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Horario de Atención</h4>
                  <p className="text-slate-600 text-sm">Lunes a Viernes</p>
                  <p className="text-slate-600 text-sm">{BUSINESS_HOURS.start}:00 - {BUSINESS_HOURS.end}:00 hs</p>
                  <div className={`mt-2 inline-flex items-center text-xs font-bold px-2 py-1 rounded-full ${isOpen ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {isOpen ? 'ABIERTO AHORA' : 'CERRADO AHORA'}
                  </div>
                </div>
              </Card>

              <Card className="flex items-start gap-4 p-5" hoverEffect={false}>
                <div className="bg-slate-100 p-3 rounded-full text-slate-900">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Ubicación</h4>
                  <p className="text-slate-600 text-sm">Paraná, Entre Ríos</p>
                  <p className="text-slate-600 text-sm">Argentina</p>
                </div>
              </Card>
              
              <div className="flex gap-4 pt-4">
                 <a href={CONTACT_INFO.instagram} target="_blank" rel="noopener noreferrer" className="bg-white p-3 rounded-full shadow-sm text-pink-600 hover:bg-pink-50 transition-colors">
                   <Instagram className="w-6 h-6" />
                 </a>
                 <a href={CONTACT_INFO.facebook} target="_blank" rel="noopener noreferrer" className="bg-white p-3 rounded-full shadow-sm text-blue-600 hover:bg-blue-50 transition-colors">
                   <Facebook className="w-6 h-6" />
                 </a>
                 <a href={`mailto:${CONTACT_INFO.email}`} className="bg-white p-3 rounded-full shadow-sm text-slate-900 hover:bg-slate-100 transition-colors">
                   <Mail className="w-6 h-6" />
                 </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-2/3">
            <Card className="p-6 lg:p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-slate-700">Nombre Completo</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
                      placeholder="Juan Pérez"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-slate-700">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
                      placeholder="juan@ejemplo.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-700">Mensaje</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all resize-none"
                    placeholder="Describa brevemente su consulta legal..."
                  ></textarea>
                </div>

                <Button type="submit" className="w-full md:w-auto flex items-center gap-2">
                  <Send className="w-4 h-4" />
                  Enviar Consulta por WhatsApp
                </Button>
                
                <p className="text-xs text-slate-500 mt-4">
                  * Al enviar este formulario, será redirigido a WhatsApp para continuar la conversación.
                </p>
              </form>
            </Card>
          </div>

        </div>
      </div>

      {/* Out of Hours Modal */}
      {showOutOfHoursModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative animate-scale-in">
            <button 
              onClick={() => setShowOutOfHoursModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
            >
              <span className="sr-only">Cerrar</span>
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto text-amber-600">
                <Clock className="w-8 h-8" />
              </div>
              
              <h3 className="text-2xl font-playfair font-bold text-slate-900">
                Fuera de Horario
              </h3>
              
              <p className="text-slate-600">
                Nuestro horario de atención para consultas inmediatas por WhatsApp es de <strong>Lunes a Viernes de {BUSINESS_HOURS.start}:00 a {BUSINESS_HOURS.end}:00 hs</strong>.
              </p>
              
              <div className="bg-slate-50 p-4 rounded-lg text-sm text-slate-700 text-left">
                <p className="font-semibold mb-2 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-600" />
                  Opciones disponibles:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-1">
                  <li>Envíenos un email a <a href={`mailto:${CONTACT_INFO.email}`} className="text-amber-600 hover:underline">{CONTACT_INFO.email}</a></li>
                  <li>Intente nuevamente dentro del horario de atención.</li>
                </ul>
              </div>

              <div className="pt-4">
                <Button onClick={() => setShowOutOfHoursModal(false)} variant="outline" className="w-full">
                  Entendido
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
