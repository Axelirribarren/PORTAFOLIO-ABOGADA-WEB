import { Award, BookOpen, Scale } from "lucide-react";

const AboutMe = () => {
  return (
    <section id="sobre-mi" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image */}
          <div className="flex-1 relative order-2 lg:order-1">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/profile.png" 
                alt="Vanesa S. Irribarren" 
                className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Decorative background */}
            <div className="absolute top-10 -left-10 w-full h-full border-2 border-amber-200 rounded-2xl z-0 hidden lg:block"></div>
          </div>

          {/* Content */}
          <div className="flex-1 order-1 lg:order-2">
            <h2 className="text-sm font-bold text-amber-600 uppercase tracking-widest mb-2">Sobre Mí</h2>
            <h3 className="text-3xl md:text-4xl font-playfair font-bold text-slate-900 mb-6 leading-tight">
              Compromiso y experiencia <br/> al servicio de tu familia
            </h3>
            
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                Soy Vanesa S. Irribarren, abogada y mediadora especializada en Derecho de Familia. Mi trayectoria profesional se ha construido sobre la base de la empatía, la ética y la búsqueda incansable de soluciones justas.
              </p>
              <p>
                Entiendo que los conflictos familiares requieren no solo un abordaje jurídico impecable, sino también una contención humana que permita transitar los procesos con la mayor tranquilidad posible.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white shadow-sm rounded-lg text-amber-600">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Trayectoria</h4>
                  <p className="text-sm text-slate-500">Años de experiencia en litigios y acuerdos.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white shadow-sm rounded-lg text-amber-600">
                  <Scale className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Especialización</h4>
                  <p className="text-sm text-slate-500">Foco exclusivo en Derecho de Familia.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white shadow-sm rounded-lg text-amber-600">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Formación</h4>
                  <p className="text-sm text-slate-500">Actualización constante en normativa vigente.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
