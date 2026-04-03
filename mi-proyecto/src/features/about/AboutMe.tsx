import { motion } from "framer-motion";
import { Award } from "lucide-react";

export const AboutMe = () => {
  return (
    <section id="sobre-mi" className="section-padding bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          {/* Image Container */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-5/12 lg:w-4/12 flex justify-center"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl group border border-slate-100 max-w-[280px]">
              <img 
                src="/profile.png" 
                alt="Dra. Vanesa S. Irribarren" 
                className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-100 group-hover:scale-105"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl pointer-events-none"></div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-6"
          >
            <div>
              <h2 className="text-sm font-bold text-yellow-600 uppercase tracking-widest mb-2">Sobre Mí</h2>
              <h3 className="text-3xl lg:text-4xl font-playfair font-bold text-slate-900 mb-6 leading-tight">
                Compromiso y experiencia <br/> al servicio de tu familia
              </h3>
            </div>
            
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                Soy Vanesa S. Irribarren, abogada y mediadora enfocada en Derecho de Familia. Mi trayectoria profesional se ha construido sobre la base de la empatía, la ética y la búsqueda incansable de soluciones justas.
              </p>
              <p>
                Entiendo que los conflictos familiares requieren no solo un abordaje jurídico impecable, sino también una contención humana que permita transitar los procesos con la mayor tranquilidad posible.
              </p>
            </div>

            <div className="mt-8">
              <div className="inline-flex items-start gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm transition-all hover:bg-white hover:shadow-md">
                <div className="p-2 bg-white shadow-sm rounded-lg text-yellow-600">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Trayectoria y Formación</h4>
                  <p className="text-sm text-slate-500">Años de experiencia logrando acuerdos y soluciones efectivas.</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutMe;
