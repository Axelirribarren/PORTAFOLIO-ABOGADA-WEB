const Hero = () => {
  return (
    <section className="text-center py-20 bg-[#f4f4f2] flex flex-col items-center" id="inicio">
      {/* Logo con animación */}
      <img 
        src="/logo-negro.PNG" 
        alt="Logo" 
        className="w-60 md:w-80 h-auto mb-8 transition-transform duration-500 hover:scale-105"
      />

      {/* Tarjeta de Presentación */}
      <div className="bg-white shadow-lg rounded-2xl p-10 md:p-10 flex flex-col items-center max-w-lg mx-auto border border-gray-300">
        
        {/* Nombre */}
        <h1 className="font-bold text-3xl md:text-4xl text-gray-900 mb-4 tracking-wide">
          Vanesa S. Irribarren
        </h1>

        {/* Imagen de perfil con borde profesional */}
        <div className="w-36 h-36 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-[#858ba8] shadow-md">
          <img 
            src="perfil.png" 
            alt="Perfil" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Descripción */}
        <p className="text-gray-700 text-lg text-center leading-relaxed mt-6">
          Como abogada especializada en <strong>derecho de familia y divorcios</strong>, mi compromiso es ofrecer soluciones legales efectivas con un enfoque humano y compasivo.
          Cada caso es único, por lo que brindo una <strong>atención personalizada</strong>, asegurando que mis clientes se sientan escuchados y comprendidos en todo momento.
        </p>
      </div>
    </section>
  );
};

export default Hero