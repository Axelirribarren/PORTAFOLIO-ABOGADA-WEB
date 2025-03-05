

const Hero = () => {

  return (
    <section className="text-center py-20 bg-[#f4f4f2] flex justify-center items-center flex-col" id="home">
      {/* Logo */}
      
      <img 
  src="/logo-negro.PNG" 
  alt="Logo" 
  className="w-80 h-auto mb-6 "
/>



        {/* Contenido principal */}
        <div className="text-center py-5 text-white">
          

          {/* Contenedor de perfil */}
          <div className="bg-[#858ba8] rounded-lg p-6 flex flex-col items-center">
            {/* Imagen de perfil centrada */}<h1 className="font-bold text-4xl italic text-gray-900 py-10">Vanesa S. Irribarren</h1>
            <img
              src="perfil.png"
              alt="Perfil"
              className="w-40 h-40 rounded-full object-cover mx-auto mb-4"
            />

            {/* Descripción */}
            <p className="text-10 font-bold text-gray-100 text-center px-5">
              Como abogada especializada en derecho de familia y divorcios, mi compromiso principal es ofrecer soluciones legales que no solo sean efectivas, sino también profundamente compasivas.
              Entiendo que los asuntos familiares a menudo están cargados de emociones y que cada caso es único. Por eso, me dedico a brindar una atención personalizada, asegurándome de que mis clientes se sientan escuchados y comprendidos en cada paso del proceso.
            </p>
          </div>
        </div>

    </section>
  );
};

export default Hero;