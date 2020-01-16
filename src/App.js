import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import RandomeQuote from './components/RandomQuote';
import Footer from './components/Footer';

function App() {
  return (

    // TODO: add routing for  home, add, and all
    <div className='App'>
        <Navigation />
        <RandomeQuote />
        <Footer />
    </div>
  );
}

export default App;
