import Navbar from './components/NavBar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 transition-all duration-300 font-sans">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;