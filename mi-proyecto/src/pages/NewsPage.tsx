import { noticias } from "../../lib/noticias";
import { Link } from "react-router-dom";
import NavBar from "../../components/layout/NavBar";
import Footer from "../../components/layout/Footer";

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <NavBar />
      <main className="flex-grow pt-24 pb-20">
        <section className="max-w-6xl mx-auto px-6">
          <div className="mb-12 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-slate-900 mb-4">
              Noticias & Artículos
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl">
              Información legal actualizada y consejos prácticos para navegar situaciones familiares complejas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {noticias.map((n) => (
              <Link key={n.slug} to={`/noticias/${n.slug}`} className="group">
                <article className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:border-amber-200 transition-all duration-300 h-full flex flex-col">
                  <div className="relative overflow-hidden rounded-xl mb-6 aspect-video">
                    <img
                      src={n.cover}
                      alt={n.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-slate-500 mb-3">
                    <span className="font-medium text-amber-600">{n.date}</span>
                    <span>•</span>
                    <span>{n.time}</span>
                  </div>

                  <h2 className="text-2xl font-playfair font-bold text-slate-900 group-hover:text-amber-700 transition-colors mb-3">
                    {n.title}
                  </h2>
                  <p className="text-slate-600 font-medium mb-3">{n.subtitle}</p>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-grow">
                    {n.excerpt}
                  </p>
                  
                  <span className="inline-flex items-center text-amber-700 font-semibold text-sm group-hover:translate-x-1 transition-transform">
                    Leer artículo completo →
                  </span>
                </article>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
