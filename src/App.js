import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Cart from './components/Cart';
import './styles/index.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Products />
      <Cart />
    </div>
  );
}

export default App;
