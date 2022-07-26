import React from 'react';
import Header from './app/components/Header/Header';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Listitems from './app/components/Listitems/ListItems';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Listitems />} />
        {/* <Route path="/product/:productId" element={<ProductDetails />} /> */}
        <Route>404 Not Found!</Route>
      </Routes>
    </div>
  );
}

export default App;
