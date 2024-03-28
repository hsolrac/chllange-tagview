import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PageNotFound from './pages/PageNotFound';
import ProductForm from './pages/forms/ProductForm'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/produtos/cadastro" element={<ProductForm />} />
          <Route path="/produtos/exibir" element={<HomePage />} />
          <Route path="/" element={<Navigate to="produtos/exibir"/>} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

