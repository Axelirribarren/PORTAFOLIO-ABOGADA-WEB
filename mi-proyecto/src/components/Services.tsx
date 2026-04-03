import { motion } from "framer-motion";
import { Scale, FileText, Users, HeartHandshake, Gavel } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Services = () => {
  const services = [
    {
      title: "Divorcios",
      desc: "Acompañamiento legal en procesos de divorcio, garantizando acuerdos justos y soluciones efectivas para ambas partes.",
      icon: <HeartHandshake className="w-10 h-10 text-yellow-500Group-hover:text-yellow-600 transition-colors" />,
    },
    {
      title: "Sucesiones",
      desc: "Gestión integral de herencias y testamentos, asegurando la correcta distribución del patrimonio familiar.",
      icon: <FileText className="w-10 h-10 text-yellow-500 group-hover:text-yellow-600 transition-colors" />,
    },
    {
      title: "Trámites Administrativos",
      desc: "Asesoría en trámites legales familiares, como adopciones, tutelas y cambios de régimen patrimonial.",
      icon: <Scale className="w-10 h-10 text-yellow-500 group-hover:text-yellow-600 transition-colors" />,
    },
    {
      title: "Alimentos",
      desc: "Defensa y gestión de trámites alimentarios, velando por el bienestar y los derechos de los menores.",
      icon: <Users className="w-10 h-10 text-yellow-500 group-hover:text-yellow-600 transition-colors" />,
    },
    {
      title: "Contratos en General",
      desc: "Redacción y revisión de acuerdos familiares, como convenios de convivencia, capitulaciones matrimoniales y más.",
      icon: <Gavel className="w-10 h-10 text-yellow-500 group-hover:text-yellow-600 transition-colors" />,
    },
  ];

  return (
    <section id="servicios" className="bg-slate-50 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-slate-900 mb-4">
            Áreas de Práctica
          </h2>
          <div className="w-24 h-1.5 bg-yellow-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Soluciones legales integrales adaptadas a sus necesidades específicas con un enfoque humano y profesional.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-50/50 rounded-bl-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-500"></div>
              
              <div className="relative z-10">
                <div className="mb-8 p-4 bg-slate-50 rounded-2xl inline-block group-hover:bg-yellow-100 transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-yellow-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-base">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
