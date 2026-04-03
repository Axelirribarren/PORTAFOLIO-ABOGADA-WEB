import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: "María G.",
    location: "Paraná",
    text: "Excelente profesional. Me acompañó en todo mi proceso de divorcio con mucha paciencia y claridad. La recomiendo totalmente.",
    rating: 5
  },
  {
    name: "Ricardo S.",
    location: "Entre Ríos",
    text: "Muy conforme con la mediación. Logramos un acuerdo justo para mis hijos sin necesidad de ir a un juicio largo.",
    rating: 5
  },
  {
    name: "Elena P.",
    location: "Paraná",
    text: "Vanesa es muy humana y profesional. Me sentí contenida en un momento muy difícil de mi vida familiar.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-slate-900 mb-4">Lo que dicen mis clientes</h2>
          <div className="w-24 h-1 bg-yellow-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            La confianza y tranquilidad de quienes eligen mi asesoramiento son mi mayor prioridad.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="absolute -top-4 left-8 bg-yellow-600 text-white p-3 rounded-2xl shadow-lg">
                <Quote className="w-6 h-6" />
              </div>
              
              <div className="flex gap-1 mb-4 pt-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                ))}
              </div>

              <p className="text-slate-700 italic mb-6 leading-relaxed">
                "{t.text}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-500">
                  {t.name[0]}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{t.name}</h4>
                  <p className="text-xs text-slate-500 uppercase tracking-wider">{t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
