import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Plus, Minus } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between text-left focus:outline-none group"
      >
        <span className="text-lg font-semibold text-slate-800 group-hover:text-amber-700 transition-colors">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-slate-400 group-hover:text-amber-600"
        >
          {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="mt-4 text-slate-600 leading-relaxed pb-2">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "¿Cómo iniciar el trámite de divorcio?",
      answer: "El primer paso es una consulta inicial para analizar su situación particular (mutuo acuerdo o contradictorio). Necesitaremos el acta de matrimonio y, si hay hijos, sus actas de nacimiento. El proceso hoy es más ágil gracias al Código Civil y Comercial vigente.",
    },
    {
      question: "¿Qué documentos se necesitan para una sucesión?",
      answer: "Principalmente el acta de defunción del causante, las partidas que acrediten el vínculo (matrimonio, nacimiento de hijos) y los títulos de propiedad de los bienes a transmitir. Nosotros nos encargamos de toda la gestión ante el juzgado correspondiente.",
    },
    {
      question: "¿Cómo se calcula la cuota alimentaria?",
      answer: "Se calcula según el nivel de vida del alimentado y la capacidad económica de quien debe pagarla. Incluye gastos de educación, salud, vivienda, vestimenta y recreación. La justicia suele fijar un porcentaje de los ingresos del padre/madre no conviviente.",
    },
    {
      question: "¿Qué es la mediación familiar?",
      answer: "Es una instancia previa y obligatoria en muchos casos, donde las partes intentan llegar a un acuerdo con la ayuda de un mediador neutral. Evita el desgaste de un juicio largo y permite que los padres decidan lo mejor para sus hijos de forma consensuada.",
    },
    {
      question: "¿Puedo realizar una consulta virtual?",
      answer: "Sí, ofrecemos asesoramiento mediante plataformas seguras de videollamada. Es ideal para una primera orientación o para clientes que se encuentran fuera de la ciudad de Paraná.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl font-playfair font-bold text-slate-900 mb-4">
            Preguntas Frecuentes
          </h2>
          <div className="w-20 h-1 bg-amber-600 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600">
            Encuentre respuestas rápidas a las dudas más comunes sobre derecho de familia y procesos legales.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto bg-slate-50/50 p-8 rounded-3xl border border-slate-100 shadow-sm"
        >
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
