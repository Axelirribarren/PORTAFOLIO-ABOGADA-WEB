const Services = () => {
  return (
    <section id="servicios" className="bg-[#f4f4f4] py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-12">
          Áreas de Especialización
        </h2>

        {/*TARJETAS*/}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Divorcios",
              desc: "Acompañamiento legal en procesos de divorcio, garantizando acuerdos justos y soluciones efectivas para ambas partes.",
            },
            {
              title: "Sucesiones",
              desc: "Gestión integral de herencias y testamentos, asegurando la correcta distribución del patrimonio familiar.",
            },
            {
              title: "Trámites Administrativos",
              desc: "Asesoría en trámites legales familiares, como adopciones, tutelas y cambios de régimen patrimonial.",
            },
            {
              title: "Alimentos",
              desc: "Defensa y gestión de trámites alimentarios, velando por el bienestar y los derechos de los menores.",
            },
            {
              title: "Contratos en General",
              desc: "Redacción y revisión de acuerdos familiares, como convenios de convivencia, capitulaciones matrimoniales y más.",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 sm:p-8 rounded-xl shadow-md border border-gray-300 
                         hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 font-medium leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
