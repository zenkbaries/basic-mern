import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import RandomeQuote from './components/RandomQuote';

function App() {
  return (
    <div className='App'>
        <Navigation />
        <RandomeQuote />
    </div>
  );
}

export default App;
