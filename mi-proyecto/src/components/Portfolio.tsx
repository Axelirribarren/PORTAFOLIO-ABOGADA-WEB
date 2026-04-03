import { motion } from "framer-motion";
import { Video, Globe, Calendar, Shield } from "lucide-react";

const Portfolio = () => {
  const benefits = [
    {
      icon: <Video className="w-8 h-8 text-amber-600" />,
      title: "Videollamadas",
      description: "Plataformas seguras",
    },
    {
      icon: <Globe className="w-8 h-8 text-amber-600" />,
      title: "Entre Ríos",
      description: "Atención local",
    },
    {
      icon: <Calendar className="w-8 h-8 text-amber-600" />,
      title: "Citas Flexibles",
      description: "Previa coordinación",
    },
  ];

  return (
    <section id="virtual" className="py-24 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
            <div className="flex flex-col items-center">
          
          {/* Left Content (Now Centered) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full text-center"
          >
            <div className="inline-flex items-center gap-2 text-amber-600 font-bold mb-6 tracking-wide uppercase text-sm">
              <Shield className="w-5 h-5" />
              <span>Atención Legal Virtual</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-slate-900 mb-8 leading-tight">
              Asesoramiento profesional <br />
              <span className="text-amber-600 italic">sin fronteras</span>
            </h2>
            
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
              <p>
                Ofrezco la posibilidad de encuentros legales virtuales, pensados para brindar una atención accesible, cómoda y eficiente, sin perder el trato personalizado y la seriedad profesional.
              </p>
              <p>
                Las reuniones se realizan previa coordinación, a través de plataformas seguras de videollamada, garantizando confidencialidad, claridad en la comunicación y un seguimiento responsable de cada caso.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {benefits.map((item, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="flex flex-col items-center p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-amber-200 hover:bg-amber-50/30 transition-all duration-300"
                >
                  <div className="mb-4 bg-white p-3 rounded-xl shadow-sm border border-slate-100">{item.icon}</div>
                  <span className="text-lg font-bold text-slate-900 mb-1">{item.title}</span>
                  <span className="text-sm text-slate-500 font-medium">{item.description}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
