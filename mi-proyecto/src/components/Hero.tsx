import { motion } from "framer-motion";
import { MessageCircle, Scale, HeartHandshake, Video, ArrowRight } from "lucide-react";

const Hero = () => {
    const whatsappNumber = "3434802056";
    const message = encodeURIComponent("Hola, quisiera solicitar una consulta de familia.");

    return (
        <section
            className="relative min-h-[90vh] flex items-center bg-[#FDFCF8] text-slate-800 overflow-hidden"
            id="inicio"
        >
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-50/50 -skew-x-12 transform origin-top translate-x-32 md:block hidden"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
            
            <div className="container mx-auto px-6 py-12 lg:py-20 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    
                    {/* Left Column: Content */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex-1 text-center lg:text-left space-y-8"
                    >
                        
                        {/* Badge */}
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-yellow-600/20 shadow-sm text-yellow-700 text-sm font-medium tracking-wide mx-auto lg:mx-0"
                        >
                            <Scale className="w-4 h-4" />
                            <span>Derecho de Familia y Divorcios</span>
                        </motion.div>

                        {/* Headings */}
                        <div className="space-y-4">
                            <motion.h1 
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                                className="text-5xl lg:text-7xl font-playfair font-bold text-slate-900 leading-tight"
                            >
                                Vanesa S. <br/><span className="text-yellow-600 italic">Irribarren</span>
                            </motion.h1>
                            <motion.p 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.6 }}
                                className="text-xl text-slate-500 font-medium"
                            >
                                Abogada de Familia & Mediadora
                            </motion.p>
                        </div>

                        {/* Description */}
                        <motion.p 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                            className="text-lg text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0"
                        >
                            Entiendo que detrás de cada caso hay una historia y una familia. 
                            Te acompaño con contención, claridad y seriedad profesional para 
                            proteger lo que más importa.
                        </motion.p>

                        {/* Benefits */}
                        <motion.ul 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7, duration: 0.6 }}
                            className="flex flex-col gap-3 max-w-md mx-auto lg:mx-0 text-slate-700"
                        >
                            <li className="flex items-center gap-3">
                                <span className="p-1.5 rounded-full bg-yellow-100 text-yellow-700">
                                    <HeartHandshake className="w-5 h-5" />
                                </span>
                                <span className="text-sm font-medium">Acompañamiento humano y personalizado</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="p-1.5 rounded-full bg-yellow-100 text-yellow-700">
                                    <Video className="w-5 h-5" />
                                </span>
                                <span className="text-sm font-medium">Consultas virtuales y presenciales</span>
                            </li>
                        </motion.ul>

                        {/* Buttons */}
                        <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.5 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4"
                        >
                            <a
                                href={`https://wa.me/${whatsappNumber}?text=${message}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-center gap-3 bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
                            >
                                <MessageCircle className="w-5 h-5" />
                                Solicitar Consulta
                            </a>
                            <a
                                href="#servicios"
                                className="group flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-medium text-slate-700 border border-slate-200 hover:border-yellow-600 hover:text-yellow-700 hover:bg-yellow-50 transition-all duration-300"
                            >
                                Conocer Servicios
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Right Column: Image */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="flex-1 relative pl-8"
                    >
                        <div className="relative w-full max-w-[500px] mx-auto">
                            {/* Abstract Shapes/Blob Background */}
                            <motion.div 
                                animate={{ 
                                    rotate: [3, -3, 3],
                                    scale: [1.1, 1.15, 1.1]
                                }}
                                transition={{ 
                                    duration: 10, 
                                    repeat: Infinity, 
                                    ease: "easeInOut" 
                                }}
                                className="absolute inset-0 bg-[#E8E6D9] rounded-[60%_40%_30%_70%/60%_30%_70%_40%] shadow-inner z-0"
                            ></motion.div>
                            <div className="absolute -inset-4 border border-yellow-600/10 rounded-[50%_50%_40%_60%/50%_40%_60%_50%] -rotate-6 scale-110 z-0"></div>
                            
                            {/* Image Container with organic mask */}
                            <div className="relative rounded-[60%_40%_30%_70%/60%_30%_70%_40%] overflow-hidden shadow-2xl z-10 bg-white">
                                <motion.img
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.7 }}
                                    src="/perfil.png"
                                    alt="Vanesa S. Irribarren"
                                    className="w-full h-auto object-cover"
                                    loading="eager"
                                />
                            </div>

                            {/* Floating Card */}
                            <motion.div 
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1, duration: 0.5 }}
                                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 z-20 flex items-center gap-3"
                            >
                                <div className="p-2 bg-green-100 text-green-700 rounded-full">
                                    <MessageCircle className="w-5 h-5"/>
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 font-medium uppercase">Respuesta Rápida</p>
                                    <p className="text-sm font-bold text-slate-800">Atención Online</p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
