import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import RandomeQuote from './components/RandomQuote';
import AddQuote from "./components/AddQuote";
import Footer from './components/Footer';
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {

            // TODO: add routing for  home, add, and all

  return (
    <Router>
        <div className='App'>
            <Navigation />
            <Route path="/" exact component={RandomeQuote} />
            <Route path="/add" component={AddQuote} />
            <Footer />
        </div>
    </Router>
  );
}

export default App;
