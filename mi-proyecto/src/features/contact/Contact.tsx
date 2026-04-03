import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Facebook, Instagram, Clock, MapPin, Send, AlertCircle, Loader2 } from "lucide-react";
import { useBusinessHours } from "../../hooks/useBusinessHours";
import { BUSINESS_HOURS, CONTACT_INFO } from "../../utils/constants";
import { Button } from "../../components/ui/Button";

const Contact = () => {
  const isOpen = useBusinessHours();
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isOpen) {
      setShowOutOfHoursModal(true);
      return;
    }

    setIsSubmitting(true);
    
    // Simular un pequeño delay para feedback visual premium
    await new Promise(resolve => setTimeout(resolve, 1500));

    const { name, email, message } = formData;
    const whatsappMessage = `Hola, soy ${name}. Mi email es ${email}. Consulta: ${message}`;
    const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;
    
    window.open(whatsappUrl, "_blank");
    setIsSubmitting(false);
  };

  return (
    <section id="contacto" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-600/20 to-transparent"></div>
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/3 space-y-10"
          >
            <div>
              <h2 className="text-sm font-bold text-yellow-600 uppercase tracking-widest mb-2">Contacto</h2>
              <h3 className="text-4xl md:text-5xl font-playfair font-bold text-slate-900 mb-6">
                Hablemos de su Caso
              </h3>
              <p className="text-xl text-slate-600 leading-relaxed">
                Estamos aquí para escucharle y brindarle la mejor estrategia legal. 
                Contáctenos hoy mismo para una evaluación inicial.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-5 p-6 bg-white rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="bg-yellow-100 p-4 rounded-2xl text-yellow-600 border border-yellow-200">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Horario de Atención</h4>
                  <p className="text-slate-600">Lunes a Viernes</p>
                  <p className="text-slate-900 font-medium">{BUSINESS_HOURS.start}:00 - {BUSINESS_HOURS.end}:00 hs</p>
                  <div className={`mt-3 inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full ${isOpen ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${isOpen ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></span>
                    {isOpen ? 'ABIERTO AHORA' : 'CERRADO AHORA'}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-5 p-6 bg-white rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="bg-slate-100 p-4 rounded-2xl text-slate-900 border border-slate-200">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Ubicación</h4>
                  <p className="text-slate-600">Paraná, Entre Ríos</p>
                  <p className="text-slate-600">Argentina</p>
                </div>
              </div>
              
              <div className="flex gap-4 pt-4">
                 {[
                   { href: CONTACT_INFO.instagram, icon: <Instagram className="w-6 h-6" />, color: "text-pink-600 hover:bg-pink-50" },
                   { href: CONTACT_INFO.facebook, icon: <Facebook className="w-6 h-6" />, color: "text-blue-600 hover:bg-blue-50" },
                   { href: `mailto:${CONTACT_INFO.email}`, icon: <Mail className="w-6 h-6" />, color: "text-slate-900 hover:bg-slate-100" }
                 ].map((social, i) => (
                   <motion.a 
                    key={i}
                    whileHover={{ y: -5 }}
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`bg-white p-4 rounded-2xl shadow-sm border border-slate-100 transition-colors ${social.color}`}
                   >
                     {social.icon}
                   </motion.a>
                 ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-2/3"
          >
            <div className="bg-white p-8 lg:p-12 rounded-[2.5rem] shadow-xl border border-slate-100 relative">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label htmlFor="name" className="text-sm font-bold text-slate-700 uppercase tracking-wider ml-1">Nombre Completo</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:border-yellow-600 focus:ring-4 focus:ring-yellow-600/10 outline-none transition-all placeholder:text-slate-400"
                      placeholder="Juan Pérez"
                    />
                  </div>
                  <div className="space-y-3">
                    <label htmlFor="email" className="text-sm font-bold text-slate-700 uppercase tracking-wider ml-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:border-yellow-600 focus:ring-4 focus:ring-yellow-600/10 outline-none transition-all placeholder:text-slate-400"
                      placeholder="juan@ejemplo.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <label htmlFor="message" className="text-sm font-bold text-slate-700 uppercase tracking-wider ml-1">Mensaje</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:border-yellow-600 focus:ring-4 focus:ring-yellow-600/10 outline-none transition-all resize-none placeholder:text-slate-400"
                    placeholder="Describa brevemente su consulta legal..."
                  ></textarea>
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                  type="submit" 
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white px-10 py-5 rounded-2xl font-bold transition-all flex items-center justify-center gap-3 shadow-xl shadow-slate-900/20 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Procesando...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Enviar Consulta por WhatsApp
                    </>
                  )}
                </motion.button>
                
                <p className="text-xs text-slate-500 mt-6 text-center italic">
                  * Al enviar este formulario, se abrirá WhatsApp para finalizar el contacto.
                </p>
              </form>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Out of Hours Modal */}
      {showOutOfHoursModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-fade-in">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-[2rem] shadow-2xl max-w-md w-full p-10 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-yellow-600"></div>
            
            <button 
              onClick={() => setShowOutOfHoursModal(false)}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors"
            >
              <span className="sr-only">Cerrar</span>
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-yellow-100 rounded-3xl flex items-center justify-center mx-auto text-yellow-600 shadow-inner">
                <Clock className="w-10 h-10" />
              </div>
              
              <div className="space-y-2">
                <h3 className="text-3xl font-playfair font-bold text-slate-900">
                  Fuera de Horario
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Para una atención inmediata, nuestro horario de WhatsApp es de <br/> 
                  <strong className="text-slate-900 text-lg">Lunes a Viernes <br/> {BUSINESS_HOURS.start}:00 a {BUSINESS_HOURS.end}:00 hs</strong>.
                </p>
              </div>
              
              <div className="bg-slate-50 p-6 rounded-2xl text-sm text-slate-700 text-left border border-slate-100">
                <p className="font-bold mb-3 flex items-center gap-2 text-slate-900">
                  <AlertCircle className="w-4 h-4 text-yellow-600" />
                  ¿Cómo continuar?
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-yellow-600 rounded-full"></div>
                    <span>Envía un email: <a href={`mailto:${CONTACT_INFO.email}`} className="font-bold hover:underline">{CONTACT_INFO.email}</a></span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-yellow-600 rounded-full"></div>
                    <span>Escríbenos en redes sociales.</span>
                  </li>
                </ul>
              </div>

              <div className="pt-2">
                <Button onClick={() => setShowOutOfHoursModal(false)} className="w-full py-4 rounded-xl">
                  Entendido
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Contact;
