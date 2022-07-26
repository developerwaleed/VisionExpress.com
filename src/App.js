import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './app/components/Header/Header';
import './App.css';
import Listitems from './app/components/Listitems/ListItems';
import ItemDetails from './app/components/ItemDetails/ItemDetails';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Listitems />} />
        <Route path="/product/:productId" element={<ItemDetails />} />
        <Route>404 Not Found!</Route>
      </Routes>
    </div>
  );
}

export default App;
