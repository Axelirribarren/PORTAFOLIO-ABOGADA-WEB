<<<<<<< HEAD
import Navbar from './components/NavBar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
=======
import NavBar from './components/layout/NavBar';
import Hero from './features/hero/Hero';
import Services from './features/services/Services';
import Contact from './features/contact/Contact';
>>>>>>> 3a10cc3481a204d541a47310f4597c4ae851c58d
import './App.css';

function App() {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-white text-gray-900 transition-all duration-300 font-sans">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Contact />
=======
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-amber-200 selection:text-amber-900">
      <NavBar />
      <main>
        <Hero />
        <Services />
        <Contact />
      </main>
      
      <footer className="bg-slate-900 text-slate-400 py-8 text-center text-sm">
        <div className="container mx-auto px-6">
          <p>&copy; {new Date().getFullYear()} Estudio Jurídico Irribarren. Todos los derechos reservados.</p>
        </div>
      </footer>
>>>>>>> 3a10cc3481a204d541a47310f4597c4ae851c58d
    </div>
  );
}

export default App;