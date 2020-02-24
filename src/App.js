import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import RandomQuote from './components/RandomQuote';
import AddQuote from './components/AddQuote';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useAuth0 } from './react-auth0-spa';

import Profile from './components/Profile';
import history from './utils/history';
import PrivateRoute from "./components/PrivateRoute";


function App() {

        // TODO: Need to move useAuth0 to here as top left and pass it on as props

    const { loading, user } = useAuth0();
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
                <Route
                    path="/"
                    exact
                    component={RandomQuote}
                />
                <PrivateRoute
                    path="/add"
                    render={(props)=> <AddQuote {...props} user={user} />}
                />
                <PrivateRoute
                    path="/profile"
                    component={Profile}
                />
            </Switch>
            <Footer />
        </div>
    </Router>
  );
}

export default App;
