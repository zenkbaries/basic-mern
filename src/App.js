import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import RandomeQuote from './components/RandomQuote';
import AddQuote from './components/AddQuote';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useAuth0 } from './react-auth0-spa';

import Profile from './components/Profile';
import history from './utils/history';


function App() {

    const { loading } = useAuth0();
    console.log(useAuth0());

    if (loading) {
      return <div>Loading App...</div>;
    }

            // TODO: add routing for  home, add, and all

  return (
    <Router  history={history}>
        <div className='App'>
            <header>
                <Navigation />
            </header>
            <Switch>
                <Route path="/" exact component={RandomeQuote} />
                <Route path="/add" component={AddQuote} />
                <Route path="/profile" component={Profile} />
            </Switch>
            <Footer />
        </div>
    </Router>
  );
}

export default App;
