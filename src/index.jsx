import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import APropos from './pages/A-Propos';
import Logement from './pages/Logement';
import Erreur from './pages/Erreur';
import Header from './components/Header'
import Footer from './components/Footer'
import GlobalStyle from './utils/styles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<APropos />} />
        <Route path='/logement:id' element={<Logement />} />
        <Route path='*' element={<Erreur />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
