import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import './styles/index.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Products />
    </div>
  );
}

export default App;
