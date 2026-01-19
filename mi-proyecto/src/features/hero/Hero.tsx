import { ArrowRight, Scale } from "lucide-react";
import { Button } from "../../components/ui/Button";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center bg-slate-50 overflow-hidden pt-28 pb-12 lg:pt-20 lg:pb-0"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-100 skew-x-12 translate-x-20 z-0 hidden lg:block" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6 lg:space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-slate-100 text-slate-600 text-xs md:text-sm font-medium mx-auto lg:mx-0 max-w-full">
              <Scale className="w-4 h-4 text-amber-600 flex-shrink-0" />
              <span className="truncate">Derecho de Familia y Divorcios</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-slate-900 leading-tight">
              Vanesa S. Irribarren <br />
              <span className="text-amber-600 text-3xl md:text-4xl lg:text-5xl block mt-2">Abogada</span>
            </h1>
            
            <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Mi compromiso es ofrecer soluciones legales efectivas con un enfoque humano y compasivo. 
              Cada caso es único, por lo que brindo una atención personalizada, asegurando que mis clientes 
              se sientan escuchados y comprendidos en todo momento.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto" onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}>
                Agendar Consulta
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto" onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}>
                Áreas de Práctica
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>

            <div className="pt-4 lg:pt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-8 text-slate-500 text-sm font-medium">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span>Atención Personalizada</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span>Enfoque Humano</span>
              </div>
            </div>
          </div>

          {/* Image/Visual Content */}
          <div className="w-full lg:w-1/2 relative animate-fade-in-left delay-200 mt-8 lg:mt-0">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[3/4] max-w-sm mx-auto lg:max-w-md">
              <img
                src="/profile.png"
                alt="Vanesa S. Irribarren"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
            </div>
            
            
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
