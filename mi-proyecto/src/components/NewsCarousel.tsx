import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { noticias } from '../lib/noticias';

const NewsCarousel = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const { current } = scrollContainerRef;
            const scrollAmount = 340; 
            if (direction === 'left') {
                current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    return (
        <section className="w-full py-16 bg-white overflow-hidden">
            <div className="max-w-4xl mx-auto px-6">
                
                {/* Header */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-10 text-center"
                >
                    <h2 className="text-xs font-bold text-yellow-600 uppercase tracking-widest mb-2">
                        Actualidad Jurídica
                    </h2>
                    <h3 className="text-xl md:text-2xl font-playfair font-bold text-slate-900">
                        Noticias y Artículos de Interés
                    </h3>
                </motion.div>

                {/* News Display */}
                <div className="flex justify-center w-full">
                    <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        ref={scrollContainerRef}
                        className={`flex gap-6 pb-8 ${noticias.length === 1 ? 'justify-center w-full' : 'overflow-x-auto snap-x snap-mandatory scrollbar-hide'}`}
                    >
                        {noticias.map((noticia, index) => (
                            <motion.div 
                                key={noticia.slug}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`${noticias.length === 1 ? 'w-full max-w-[320px]' : 'min-w-[260px] md:min-w-[280px] max-w-[300px]'} snap-start`}
                            >
                                <Link to={`/noticias/${noticia.slug}`} className="group block h-full">
                                    <article className="bg-[#FAF9F6] rounded-xl overflow-hidden border border-slate-100 hover:shadow-md hover:border-yellow-200/40 transition-all duration-500 h-full flex flex-col">
                                        <div className="relative aspect-[16/9] overflow-hidden">
                                            <img 
                                                src={noticia.cover} 
                                                alt={noticia.title}
                                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                            />
                                            <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-2 py-1 rounded-md text-[9px] font-bold text-yellow-700 shadow-sm border border-yellow-100/50">
                                                {noticia.date}
                                            </div>
                                        </div>
                                        
                                        <div className="p-5 flex flex-col flex-grow">
                                            <h4 className="text-base font-playfair font-bold text-slate-900 group-hover:text-yellow-700 transition-colors mb-2 line-clamp-2 leading-snug">
                                                {noticia.title}
                                            </h4>
                                            <p className="text-slate-500 text-[11px] mb-4 line-clamp-2 flex-grow leading-relaxed">
                                                {noticia.excerpt}
                                            </p>
                                            <div className="pt-3 border-t border-slate-100/50">
                                                <span className="text-yellow-600 font-bold text-[10px] inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform uppercase tracking-wider">
                                                    Leer artículo <ArrowRight className="w-3 h-3" />
                                                </span>
                                            </div>
                                        </div>
                                    </article>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {noticias.length > 1 && (
                    <div className="flex justify-center gap-3 mt-4">
                        <button 
                            onClick={() => scroll('left')}
                            className="p-2 rounded-full border border-slate-200 hover:bg-slate-50 text-slate-600 transition-colors"
                            aria-label="Anterior"
                        >
                            <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button 
                            onClick={() => scroll('right')}
                            className="p-2 rounded-full border border-slate-200 hover:bg-slate-50 text-slate-600 transition-colors"
                            aria-label="Siguiente"
                        >
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                )}
                
                <div className="mt-8 text-center" id="ver-todas-container">
                    <Link 
                        to="/noticias" 
                        className="inline-flex items-center gap-2 text-yellow-600 text-xs font-bold hover:text-yellow-700 transition-colors uppercase tracking-widest"
                    >
                        Ver todas <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default NewsCarousel;
