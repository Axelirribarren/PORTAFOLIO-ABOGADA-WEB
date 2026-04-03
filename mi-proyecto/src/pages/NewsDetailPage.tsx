import { useParams, Link } from "react-router-dom";
import { noticias } from "../lib/noticias";
import NavBar from "../components/layout/NavBar";
import Footer from "../components/layout/Footer";
import { ArrowLeft } from "lucide-react";
import ReactMarkdown from "react-markdown";

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

            {/* Content Markdown */}
            <div className="prose prose-slate prose-lg max-w-none 
                prose-headings:font-playfair prose-headings:font-bold prose-headings:text-slate-900
                prose-p:text-slate-600 prose-p:leading-relaxed prose-p:mb-6
                prose-li:text-slate-600 prose-li:my-2
                prose-strong:text-slate-800 prose-strong:font-bold
                prose-a:text-amber-600 prose-a:no-underline hover:prose-a:underline prose-a:font-medium
                prose-img:rounded-2xl prose-img:shadow-lg prose-img:my-10
                prose-blockquote:border-l-4 prose-blockquote:border-amber-500 prose-blockquote:bg-amber-50/50 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-xl prose-blockquote:italic
                prose-table:border prose-table:border-slate-200 prose-table:rounded-xl prose-table:overflow-hidden
                prose-th:bg-slate-100 prose-th:px-4 prose-th:py-3 prose-th:text-slate-900
                prose-td:px-4 prose-td:py-3 prose-td:border-t prose-td:border-slate-100
            ">
                <ReactMarkdown>{noticia.content}</ReactMarkdown>
            </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
