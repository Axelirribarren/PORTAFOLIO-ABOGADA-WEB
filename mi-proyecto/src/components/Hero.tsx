import { MessageCircle } from "lucide-react";

const Hero = () => {
  const whatsappNumber = "3434802056";
  const message = encodeURIComponent("Hola, quisiera solicitar un turno.");

  return (
    <section
      className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden"
      id="inicio"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ca8a04_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">
        
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <div className="inline-block mb-4 px-4 py-1 rounded-full border border-yellow-600/50 bg-yellow-600/10 text-yellow-500 text-sm font-medium tracking-wider uppercase">
            Abogada Especialista
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Vanesa S. <span className="text-yellow-500">Irribarren</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
            Defendiendo tus derechos con compromiso y experiencia. Especializada en Derecho de Familia y Divorcios.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-yellow-600/20"
            >
              <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
              Solicitar Turno
            </a>
            <a
              href="#servicios"
              className="flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-lg border border-slate-600 hover:bg-slate-800 hover:border-slate-500 transition-all duration-300"
            >
              Conocer Servicios
            </a>
          </div>
        </div>

        {/* Image Content */}
        <div className="flex-1 relative">
          <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
            <div className="absolute inset-0 rounded-full border-2 border-yellow-500/30 animate-[spin_10s_linear_infinite]"></div>
            <div className="absolute inset-4 rounded-full border-2 border-slate-500/30 animate-[spin_15s_linear_infinite_reverse]"></div>
            <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-slate-700 shadow-2xl">
              <img
                src="/perfil.png"
                alt="Vanesa S. Irribarren"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
