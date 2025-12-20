import { ArrowRight, Scale } from "lucide-react";
import { Button } from "../../components/ui/Button";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center bg-slate-50 overflow-hidden pt-20"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-100 skew-x-12 translate-x-20 z-0 hidden lg:block" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-slate-100 text-slate-600 text-sm font-medium">
              <Scale className="w-4 h-4 text-amber-600" />
              <span>Defensa Legal Especializada</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-playfair font-bold text-slate-900 leading-tight">
              Justicia y Compromiso <br />
              <span className="text-amber-600">A Su Servicio</span>
            </h1>
            
            <p className="text-lg text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Brindamos asesoramiento jurídico integral con un enfoque humano y profesional. 
              Su tranquilidad y la defensa de sus derechos son nuestra prioridad absoluta.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}>
                Agendar Consulta
              </Button>
              <Button variant="outline" size="lg" onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}>
                Nuestros Servicios
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>

            <div className="pt-8 flex items-center justify-center lg:justify-start gap-8 text-slate-500 text-sm font-medium">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span>Atención Personalizada</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span>Confidencialidad</span>
              </div>
            </div>
          </div>

          {/* Image/Visual Content */}
          <div className="lg:w-1/2 relative animate-fade-in-left delay-200">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Abogada profesional en su despacho"
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-slate-100 hidden sm:block">
              <div className="flex items-center gap-4">
                <div className="bg-amber-100 p-3 rounded-full text-amber-600">
                  <Scale className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Experiencia</p>
                  <p className="text-xl font-bold text-slate-900">+10 Años</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
