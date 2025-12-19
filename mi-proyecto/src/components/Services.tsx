import { Scale, FileText, Users, HeartHandshake, Gavel } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Divorcios",
      desc: "Acompañamiento legal en procesos de divorcio, garantizando acuerdos justos y soluciones efectivas para ambas partes.",
      icon: <HeartHandshake className="w-10 h-10 text-yellow-500" />,
    },
    {
      title: "Sucesiones",
      desc: "Gestión integral de herencias y testamentos, asegurando la correcta distribución del patrimonio familiar.",
      icon: <FileText className="w-10 h-10 text-yellow-500" />,
    },
    {
      title: "Trámites Administrativos",
      desc: "Asesoría en trámites legales familiares, como adopciones, tutelas y cambios de régimen patrimonial.",
      icon: <Scale className="w-10 h-10 text-yellow-500" />,
    },
    {
      title: "Alimentos",
      desc: "Defensa y gestión de trámites alimentarios, velando por el bienestar y los derechos de los menores.",
      icon: <Users className="w-10 h-10 text-yellow-500" />,
    },
    {
      title: "Contratos en General",
      desc: "Redacción y revisión de acuerdos familiares, como convenios de convivencia, capitulaciones matrimoniales y más.",
      icon: <Gavel className="w-10 h-10 text-yellow-500" />,
    },
  ];

  return (
    <section id="servicios" className="bg-slate-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Áreas de Práctica
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Soluciones legales integrales adaptadas a sus necesidades específicas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="mb-6 p-4 bg-slate-50 rounded-full inline-block group-hover:bg-yellow-50 transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-yellow-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
