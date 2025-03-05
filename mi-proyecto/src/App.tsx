
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';

import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 transition-all duration-300">
      <NavBar />
      <Hero />
      <Services />
      <Contact />
    </div>
  );
}

export default App;