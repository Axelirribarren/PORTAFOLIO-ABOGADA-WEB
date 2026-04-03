import { motion } from "framer-motion";
import { Scale, HeartHandshake, FileText, Gavel } from "lucide-react";

const Services = () => {
    const services = [
        {
            icon: <Scale className="w-8 h-8 text-yellow-600" />,
            title: "Derecho de Familia",
            description: "Divorcios vinculares, régimen de comunicación, responsabilidad parental y procesos de adopción.",
            color: "bg-blue-50"
        },
        {
            icon: <HeartHandshake className="w-8 h-8 text-yellow-600" />,
            title: "Mediación Familiar",
            description: "Resolución de conflictos de manera pacífica y consensuada, priorizando el bienestar de los menores.",
            color: "bg-red-50"
        },
        {
            icon: <FileText className="w-8 h-8 text-yellow-600" />,
            title: "Sucesiones",
            description: "Tramitación de declaratoria de herederos, inscripciones y partición de bienes herederos.",
            color: "bg-green-50"
        },
        {
            icon: <Gavel className="w-8 h-8 text-yellow-600" />,
            title: "Asesoramiento Legal",
            description: "Consultas integrales preventivas y representación en procesos judiciales y administrativos.",
            color: "bg-purple-50"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };

    return (
        <section id="servicios" className="py-24 bg-[#FDFCF8]">
            <div className="container mx-auto px-6">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-playfair font-bold text-slate-900 mb-4">Servicios Profesionales</h2>
                    <div className="w-24 h-1 bg-yellow-600 mx-auto rounded-full mb-6"></div>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        Brindo soluciones legales enfocadas en la protección de sus derechos y la armonía familiar.
                    </p>
                </motion.div>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
                            className="bg-white p-8 rounded-3xl border border-slate-100 transition-all duration-300"
                        >
                            <div className={`mb-6 p-4 rounded-2xl w-fit ${service.color} shadow-sm border border-slate-50`}>
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                            <p className="text-slate-600 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
