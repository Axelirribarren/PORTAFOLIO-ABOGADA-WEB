import { Briefcase, Award, Clock, Users } from "lucide-react";

const Portfolio = () => {
  const stats = [
    {
      icon: <Clock className="w-8 h-8 text-yellow-500" />,
      value: "+10",
      label: "Años de Experiencia",
    },
    {
      icon: <Users className="w-8 h-8 text-yellow-500" />,
      value: "+500",
      label: "Casos Exitosos",
    },
    {
      icon: <Award className="w-8 h-8 text-yellow-500" />,
      value: "100%",
      label: "Compromiso",
    },
  ];

  return (
    <section id="trayectoria" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          
          {/* Left Content */}
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 text-yellow-600 font-semibold mb-4">
              <Briefcase className="w-5 h-5" />
              <span>Trayectoria Profesional</span>
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Experiencia que genera <span className="text-yellow-600">Confianza</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Mi enfoque se basa en la honestidad, la transparencia y la defensa incansable de los intereses de mis clientes. 
              Entiendo que detrás de cada expediente hay una historia de vida, una familia y un futuro que proteger.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center md:items-start p-4 bg-slate-50 rounded-lg border border-slate-100">
                  <div className="mb-3">{stat.icon}</div>
                  <span className="text-3xl font-bold text-slate-900">{stat.value}</span>
                  <span className="text-sm text-slate-500 font-medium">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image/Visual */}
          <div className="flex-1 relative">
            <div className="absolute -inset-4 bg-yellow-500/20 rounded-2xl transform rotate-3"></div>
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
