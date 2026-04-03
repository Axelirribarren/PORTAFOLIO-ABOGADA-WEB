import { motion } from "framer-motion";
import { MessageCircle, Scale, HeartHandshake, Video, ArrowRight } from "lucide-react";

const Hero = () => {
    const whatsappNumber = "3434802056";
    const message = encodeURIComponent("Hola, quisiera solicitar una consulta de familia.");

    return (
        <section
            className="w-full max-w-full relative min-h-[90vh] flex items-center bg-[#FDFCF8] text-slate-800 overflow-hidden"
            id="inicio"
        >
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-50/50 -skew-x-12 transform origin-top translate-x-32 md:block hidden"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 hidden md:block"></div>
            
            <div className="container mx-auto px-4 lg:px-6 pt-28 pb-12 lg:pt-32 lg:pb-20 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    
                    {/* Left Column: Content */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex-1 text-center lg:text-left space-y-8"
                    >
                        
                        {/* Badge & Headings Group */}
                        <div className="space-y-4">
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 }}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-yellow-600/20 shadow-sm text-yellow-700 text-sm font-medium tracking-wide mx-auto lg:mx-0"
                            >
                                <Scale className="w-4 h-4" />
                                <span>Derecho de Familia y Divorcios</span>
                            </motion.div>

                            <div className="space-y-2">
                                <h1 className="text-5xl lg:text-8xl font-playfair font-bold text-slate-900 leading-tight">
                                    Vanesa S. <br/><span className="text-yellow-600 italic">Irribarren</span>
                                </h1>
                                <p className="text-2xl text-slate-500 font-medium pt-2">
                                    Abogada de Familia & Mediadora
                                </p>
                            </div>
                        </div>

                        {/* Description */}
                        <p className="text-xl text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                            Entiendo que detrás de cada caso hay una historia y una familia. 
                            Te acompaño con contención, claridad y seriedad profesional para 
                            proteger lo que más importa.
                        </p>

                        {/* Benefits */}
                        <ul className="flex flex-col gap-4 max-w-md mx-auto lg:mx-0 text-slate-700">
                            {[
                                { icon: <HeartHandshake className="w-5 h-5" />, text: "Acompañamiento humano y personalizado" },
                                { icon: <Video className="w-5 h-5" />, text: "Consultas virtuales y presenciales" }
                            ].map((item, i) => (
                                <motion.li 
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5 + (i * 0.1) }}
                                    className="flex items-center gap-3"
                                >
                                    <span className="p-2 rounded-full bg-yellow-100 text-yellow-700 shadow-sm">
                                        {item.icon}
                                    </span>
                                    <span className="text-base font-semibold">{item.text}</span>
                                </motion.li>
                            ))}
                        </ul>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start pt-6">
                            <motion.a
                                whileHover={{ scale: 1.05, translateY: -5 }}
                                whileTap={{ scale: 0.95 }}
                                href={`https://wa.me/${whatsappNumber}?text=${message}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-center gap-3 bg-slate-900 hover:bg-slate-800 text-white px-10 py-5 rounded-2xl font-bold transition-all duration-300 shadow-2xl hover:shadow-slate-900/40"
                            >
                                <MessageCircle className="w-6 h-6" />
                                Solicitar Consulta
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.05, border: '1px solid #d97706' }}
                                href="#servicios"
                                className="group flex items-center justify-center gap-2 px-10 py-5 rounded-2xl font-bold text-slate-700 border border-slate-200 hover:text-yellow-700 hover:bg-yellow-50 transition-all duration-300"
                            >
                                Conocer Servicios
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* Right Column: Image */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="flex-1 relative lg:pl-12 mt-16 lg:mt-0"
                    >
                        <div className="relative w-full max-w-[550px] mx-auto">
                            {/* Abstract Shapes/Blob Background */}
                            <motion.div 
                                animate={{ 
                                    rotate: [3, -3, 3],
                                    scale: [1, 1.05, 1]
                                }}
                                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute inset-0 bg-[#E8E6D9] rounded-[60%_40%_30%_70%/60%_30%_70%_40%] shadow-inner z-0"
                            ></motion.div>
                            <div className="absolute -inset-6 border border-yellow-600/10 rounded-[50%_50%_40%_60%/50%_40%_60%_50%] -rotate-6 z-0"></div>
                            
                            {/* Image Container with organic mask */}
                            <div className="relative rounded-[60%_40%_30%_70%/60%_30%_70%_40%] overflow-hidden shadow-2xl z-10 bg-white">
                                <img
                                    src="/profile.png"
                                    alt="Vanesa S. Irribarren"
                                    className="w-full h-auto object-cover hover:scale-110 transition-transform duration-1000"
                                    loading="eager"
                                />
                            </div>

                            {/* Floating Card */}
                            <motion.div 
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.8 }}
                                className="absolute -bottom-8 -left-8 bg-white p-5 rounded-3xl shadow-2xl border border-slate-100 z-20 flex items-center gap-4"
                            >
                                <div className="p-3 bg-green-100 text-green-700 rounded-2xl shadow-inner">
                                    <MessageCircle className="w-6 h-6"/>
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 font-bold uppercase tracking-tighter">Respuesta Rápida</p>
                                    <p className="text-base font-black text-slate-900">Atención Online</p>
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
