import { useParams, Link } from "react-router-dom";
import { noticias } from "../../lib/noticias";
import NavBar from "../../components/layout/NavBar";
import Footer from "../../components/layout/Footer";
import { ArrowLeft } from "lucide-react";

export default function NewsDetailPage() {
  const { slug } = useParams();
  const noticia = noticias.find((n) => n.slug === slug);

  if (!noticia) {
      return (
          <div className="min-h-screen flex items-center justify-center bg-slate-50">
              <div className="text-center">
                  <h1 className="text-2xl font-bold text-slate-900 mb-4">Artículo no encontrado</h1>
                  <Link to="/noticias" className="text-amber-600 hover:underline">Volver a noticias</Link>
              </div>
          </div>
      )
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <NavBar />
      <main className="flex-grow pt-24 pb-20">
        <article className="max-w-4xl mx-auto px-4 md:px-6">
            {/* Header */}
            <div className="mb-8">
                <Link to="/noticias" className="inline-flex items-center gap-2 text-slate-500 hover:text-amber-600 transition-colors mb-6 text-sm font-medium">
                    <ArrowLeft className="w-4 h-4" />
                    Volver a Noticias
                </Link>
                
                <div className="flex gap-3 text-sm text-slate-400 mb-3">
                    <span>{noticia.date}</span>
                    <span>•</span>
                    <span>{noticia.time}</span>
                </div>

                <h1 className="text-3xl md:text-5xl font-playfair font-bold text-slate-900 mb-4 leading-tight">
                    {noticia.title}
                </h1>
                <p className="text-xl text-slate-600 font-medium leading-relaxed">
                    {noticia.subtitle}
                </p>
            </div>

            {/* Content Iframe */}
            <div className="w-full bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
                <iframe
                    src={`/noticias/${noticia.slug}/index.html`}
                    className="w-full border-none"
                    style={{ minHeight: "80vh" }}
                    title={noticia.title}
                />
            </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
