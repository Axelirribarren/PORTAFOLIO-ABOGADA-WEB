import { Scale, Gavel, FileText, Users, Briefcase, ShieldCheck } from "lucide-react";
import { Card } from "../../components/ui/Card";

const services = [
  {
    title: "Derecho Civil",
    description: "Asesoramiento en contratos, obligaciones, daños y perjuicios, y sucesiones.",
    icon: Scale,
  },
  {
    title: "Derecho Laboral",
    description: "Defensa de trabajadores y empleadores, despidos, indemnizaciones y accidentes laborales.",
    icon: Briefcase,
  },
  {
    title: "Derecho de Familia",
    description: "Divorcios, cuota alimentaria, régimen de comunicación y filiación.",
    icon: Users,
  },
  {
    title: "Derecho Penal",
    description: "Defensa técnica en procesos penales, excarcelaciones y asesoramiento preventivo.",
    icon: Gavel,
  },
  {
    title: "Contratos",
    description: "Redacción y revisión de contratos comerciales, alquileres y compraventas.",
    icon: FileText,
  },
  {
    title: "Amparos y Salud",
    description: "Reclamos ante obras sociales y prepagas, amparos por salud y discapacidad.",
    icon: ShieldCheck,
  },
];

const Services = () => {
  return (
    <section id="servicios" className="py-12 lg:py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-amber-600 uppercase tracking-widest mb-2">Áreas de Práctica</h2>
          <h3 className="text-3xl md:text-4xl font-playfair font-bold text-slate-900 mb-6">
            Soluciones Legales Integrales
          </h3>
          <p className="text-slate-600 text-lg">
            Ofrecemos un servicio jurídico de excelencia, abarcando diversas ramas del derecho para proteger sus intereses con profesionalismo y dedicación.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:border-amber-200">
              <div className="mb-6 inline-block p-4 rounded-lg bg-slate-50 text-slate-900 group-hover:bg-amber-600 group-hover:text-white transition-colors duration-300">
                <service.icon className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">
                {service.title}
              </h4>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
