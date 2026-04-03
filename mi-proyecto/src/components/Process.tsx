import { motion } from 'framer-motion';
import { MessageSquare, Users, FileSearch, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    icon: <MessageSquare className="w-8 h-8" />,
    title: "Contacto Inicial",
    description: "Evaluamos tu consulta de forma gratuita a través de WhatsApp o nuestro formulario.",
    color: "bg-amber-100 text-amber-700"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Primer Entrevista",
    description: "Coordinamos una reunión presencial en Paraná o virtual para profundizar en el caso.",
    color: "bg-blue-100 text-blue-700"
  },
  {
    icon: <FileSearch className="w-8 h-8" />,
    title: "Plan de Acción",
    description: "Diseñamos una estrategia legal personalizada centrada en proteger tus derechos.",
    color: "bg-purple-100 text-purple-700"
  },
  {
    icon: <CheckCircle2 className="w-8 h-8" />,
    title: "Resolución",
    description: "Acompañamiento integral hasta la finalización del proceso o acuerdo judicial.",
    color: "bg-green-100 text-green-700"
  }
];

const Process = () => {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-slate-900 mb-4">¿Cómo trabajamos?</h2>
          <div className="w-24 h-1 bg-yellow-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Un proceso claro y transparente para que te sientas seguro en cada etapa legal.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative flex flex-col items-center text-center group"
            >
              {/* Connector Line (Desktop) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-slate-200 z-0"></div>
              )}

              <div className={`relative z-10 w-24 h-24 ${step.color} rounded-3xl flex items-center justify-center shadow-xl mb-8 group-hover:scale-110 transition-transform duration-300`}>
                {step.icon}
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-slate-900 font-bold border border-slate-100 shadow-md">
                  {i + 1}
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-4">{step.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
