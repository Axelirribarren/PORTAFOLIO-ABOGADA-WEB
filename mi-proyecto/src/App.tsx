import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NewsPage from './pages/NewsPage';
import NewsDetailPage from './pages/NewsDetailPage';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/noticias" element={<NewsPage />} />
      <Route path="/noticias/:slug" element={<NewsDetailPage />} />
    </Routes>
  );
}

export default App;