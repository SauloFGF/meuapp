import React from 'react';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Produtos from './compnents/Produtos';
import Header from './compnents/Header';
import Footer from './compnents/Footer'
import Contato from './compnents/Contato';
import Produto from './compnents/Produto';

const App = () => {
  
    return <div className='App'>
      <BrowserRouter>
        <Header />
        <div className='content'>
         <Routes>
            <Route path="/" element={<Produtos />} />
            <Route path="produto/:id" element={<Produto />} />
            <Route path="contato" element={<Contato />} />
         </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
};


export default App;
