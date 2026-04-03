import { motion } from 'framer-motion';
import { MapPin, Navigation } from 'lucide-react';

const LocationMap = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 space-y-8"
          >
            <div>
              <h2 className="text-sm font-bold text-yellow-600 uppercase tracking-widest mb-2">Ubicación</h2>
              <h3 className="text-4xl md:text-5xl font-playfair font-bold text-slate-900 mb-6">
                En el corazón <br/> de Paraná
              </h3>
              <p className="text-xl text-slate-600 leading-relaxed">
                Nuestra oficina se encuentra en una ubicación estratégica de la capital entrerriana, facilitando el acceso para consultas presenciales y trámites judiciales.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="bg-yellow-100 p-3 rounded-xl text-yellow-600">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Dirección</h4>
                  <p className="text-slate-600">Paraná, Entre Ríos, Argentina</p>
                </div>
              </div>
              
              <a 
                href="https://www.google.com/maps/search/abogados+parana+entre+rios" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-yellow-600 font-bold hover:text-yellow-700 transition-colors"
              >
                <Navigation className="w-5 h-5" />
                Cómo llegar con Google Maps
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full h-[450px] rounded-[2rem] overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 border-4 border-white"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54295.45266479599!2d-60.551187445353526!3d-31.733333332148404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b45289069d3065%3A0x67305d2146903673!2sParan%C3%A1%2C%20Entre%20R%C3%ADos!5e0!3m2!1ses-419!2sar!4v1712061000000!5m2!1ses-419!2sar" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de ubicación en Paraná"
            ></iframe>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default LocationMap;
