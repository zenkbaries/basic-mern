import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import RandomeQuote from './components/RandomQuote';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
        <Navigation />
        <RandomeQuote />
        <Footer />
    </div>
  );
}

export default App;
