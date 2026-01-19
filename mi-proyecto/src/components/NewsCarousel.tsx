import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { noticias } from '../lib/noticias';

const NewsCarousel = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const { current } = scrollContainerRef;
            const scrollAmount = 340; // Adjust based on card width + gap
            if (direction === 'left') {
                current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    return (
        <section className="w-full max-w-full py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-sm font-bold text-amber-600 uppercase tracking-widest mb-2">
                            Actualidad Jurídica
                        </h2>
                        <h3 className="text-3xl md:text-4xl font-playfair font-bold text-slate-900">
                            Noticias y Artículos de Interés
                        </h3>
                    </div>
                    
                    <div className="flex items-center gap-4">
                        <div className="flex gap-2">
                            <button 
                                onClick={() => scroll('left')}
                                className="p-2 rounded-full border border-slate-200 hover:bg-slate-50 text-slate-600 transition-colors"
                                aria-label="Anterior"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button 
                                onClick={() => scroll('right')}
                                className="p-2 rounded-full border border-slate-200 hover:bg-slate-50 text-slate-600 transition-colors"
                                aria-label="Siguiente"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                        <Link 
                            to="/noticias" 
                            className="hidden md:flex items-center gap-2 text-amber-600 font-semibold hover:text-amber-700 transition-colors"
                        >
                            Ver todas <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>

                {/* Carousel */}
                <div 
                    ref={scrollContainerRef}
                    className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {noticias.map((noticia) => (
                        <div 
                            key={noticia.slug} 
                            className="min-w-[260px] md:min-w-[320px] snap-start"
                        >
                             <Link to={`/noticias/${noticia.slug}`} className="group block h-full">
                                <article className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 hover:shadow-lg hover:border-amber-200 transition-all duration-300 h-full flex flex-col">
                                    <div className="relative aspect-video overflow-hidden">
                                        <img 
                                            src={noticia.cover} 
                                            alt={noticia.title}
                                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-amber-700 shadow-sm">
                                            {noticia.date}
                                        </div>
                                    </div>
                                    
                                    <div className="p-6 flex flex-col flex-grow">
                                        <h4 className="text-xl font-playfair font-bold text-slate-900 group-hover:text-amber-700 transition-colors mb-3 line-clamp-2">
                                            {noticia.title}
                                        </h4>
                                        <p className="text-slate-600 text-sm mb-4 line-clamp-2 flex-grow">
                                            {noticia.excerpt}
                                        </p>
                                        <span className="text-amber-600 font-medium text-sm inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                                            Leer más <ArrowRight className="w-3 h-3" />
                                        </span>
                                    </div>
                                </article>
                            </Link>
                        </div>
                    ))}
                </div>
                
                <div className="mt-6 md:hidden text-center">
                    <Link 
                        to="/noticias" 
                        className="inline-flex items-center gap-2 text-amber-600 font-semibold hover:text-amber-700 transition-colors"
                    >
                        Ver todas las noticias <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default NewsCarousel;
