import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import FAQ from './components/pages/FAQ';
import QuienesSomos from './components/pages/QuienesSomos';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/preguntas-frecuentes" element={<FAQ />} />
        <Route path="/quienes-somos" element={<QuienesSomos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
