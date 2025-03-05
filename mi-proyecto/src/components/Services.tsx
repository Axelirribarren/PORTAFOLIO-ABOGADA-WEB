

const Services = () => {
    return (
        <section id="services" className="rounded-lg py-10 px-4 sm:px-8 bg-[#858ba8]">
          <div className="max-w-7xl  mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-100 mb-10">Asuntos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              
              {/* Bloques de servicios */}
              {[
                { title: "Divorcios", desc: "Acompañamiento legal en procesos de divorcio, garantizando acuerdos justos y soluciones efectivas para ambas partes." },
                { title: "Sucesiones", desc: "Gestión integral de herencias y testamentos, asegurando la correcta distribución del patrimonio familiar." },
                { title: "Trámites Administrativos", desc: "Asesoría en trámites legales familiares, como adopciones, tutelas y cambios de régimen patrimonial." },
                { title: "Alimentos", desc: "Defensa y gestión de tramites alimentarias, velando por el bienestar y los derechos de los menores." },
                { title: "Contratos en General", desc: "Redacción y revisión de acuerdos familiares, como convenios de convivencia, capitulaciones matrimoniales y más." }
                
              ].map((service, index) => (
                <div 
                  key={index} 
                  className="bg-[#565c78] p-6 sm:p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform md:hover:scale-105"
                >
                  <h3 className="text-2xl font-bold text-gray-100 mb-4">{service.title}</h3>
                  <p className="text-gray-300 font-semibold leading-relaxed text-lg">{service.desc}</p>
                </div>
              ))}
      
            </div>
          </div>
        </section>
      );
    }      
export default Services;
