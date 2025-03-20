import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import FAQ from './components/pages/FAQ';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/preguntas-frecuentes" element={<FAQ />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
