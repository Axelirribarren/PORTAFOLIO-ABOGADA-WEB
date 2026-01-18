import NavBar from './components/layout/NavBar';
import Hero from './features/hero/Hero';
import Services from './features/services/Services';
import Portfolio from './components/Portfolio';
import Contact from './features/contact/Contact';
import './App.css';

import Footer from './components/layout/Footer';

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
      
      <Footer />
    </div>
  );
}

export default App;