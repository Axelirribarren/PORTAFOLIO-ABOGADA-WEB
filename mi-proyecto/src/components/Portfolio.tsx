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
      title: "Sin Fronteras",
      description: "Atención global",
    },
    {
      icon: <Calendar className="w-8 h-8 text-amber-600" />,
      title: "Citas Flexibles",
      description: "Previa coordinación",
    },
  ];

  return (
    <section id="virtual" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          
          {/* Left Content */}
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 text-amber-600 font-semibold mb-4">
              <Shield className="w-5 h-5" />
              <span>Atención Legal Virtual</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Asesoramiento profesional <br />
              <span className="text-amber-600">sin barreras geográficas</span>
            </h2>
            
            <div className="space-y-4 text-slate-600 text-lg leading-relaxed mb-8">
              <p>
                Ofrezco la posibilidad de encuentros legales virtuales, pensados para brindar una atención accesible, cómoda y eficiente, sin perder el trato personalizado y la seriedad profesional.
              </p>
              <p>
                Las reuniones se realizan previa coordinación, a través de plataformas seguras de videollamada, garantizando confidencialidad, claridad en la comunicación y un seguimiento responsable de cada caso.
              </p>
              <p>
                Esta modalidad permite acompañar a mis clientes estén donde estén, optimizando tiempos y facilitando el acceso a asesoramiento jurídico de calidad.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {benefits.map((item, index) => (
                <div key={index} className="flex flex-col items-center md:items-start p-4 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-shadow duration-300">
                  <div className="mb-3 bg-white p-2 rounded-lg shadow-sm">{item.icon}</div>
                  <span className="text-lg font-bold text-slate-900">{item.title}</span>
                  <span className="text-sm text-slate-500 font-medium">{item.description}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image/Visual */}
          <div className="flex-1 relative">
            <div className="absolute -inset-4 bg-amber-500/20 rounded-2xl transform rotate-3"></div>
            <img 
              src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Justicia y Derecho" 
              className="relative rounded-2xl shadow-xl w-full h-auto object-cover aspect-video md:aspect-square"
              loading="lazy"
            />
            <div className="absolute bottom-8 left-8 right-8 bg-slate-900/90 backdrop-blur-sm p-6 rounded-xl text-white">
              <p className="font-medium italic">
                "La justicia no es solo un trámite, es la garantía de tus derechos."
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Portfolio;
