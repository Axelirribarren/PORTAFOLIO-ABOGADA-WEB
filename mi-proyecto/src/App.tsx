import NavBar from './components/layout/NavBar';
import Hero from './features/hero/Hero';
import Services from './features/services/Services';
import Portfolio from './components/Portfolio';
import Contact from './features/contact/Contact';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-amber-200 selection:text-amber-900">
      <NavBar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      
      <footer className="bg-slate-900 text-slate-400 py-8 text-center text-sm">
        <div className="container mx-auto px-6">
          <p>&copy; {new Date().getFullYear()} Estudio Jurídico Irribarren. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;