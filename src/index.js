import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Perfil from './Pages/Perfil';
import Produtos from './Pages/Produtos';
import FaleConosco from './Pages/FaleConosco/index.js';
import PerfisEspeciais from './Pages/ProdutosList/PerfisEspeciais';
import PerfisTubular from './Pages/ProdutosList/PerfisTubular';
import PerfisPerfiladeira from './Pages/ProdutosList/PerfisPerfiladeira';
import PerfilSoldado from './Pages/ProdutosList/PerfisSoldado';
import TubosIndustriais from './Pages/ProdutosList/TubosIndustriais';
import Laminado from './Pages/ProdutosList/Laminado';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Perfil" element={<Perfil />} />
      <Route path="/Produtos" element={<Produtos />} />
      <Route path="/FaleConosco" element={<FaleConosco />} />
      <Route path="/PerfisEspeciais" element={<PerfisEspeciais />} />
      <Route path="/PerfisTubular" element={<PerfisTubular />} />
      <Route path="/PerfisPerfiladeira" element={<PerfisPerfiladeira />} />
      <Route path="/PerfilSoldado" element={ <PerfilSoldado />} />
      <Route path="/TubosIndustriais" element={ <TubosIndustriais />} />
      <Route path="/Laminado" element={ <Laminado />} />
    </Routes>
  </BrowserRouter>
</React.StrictMode>,
document.getElementById('root')
);
