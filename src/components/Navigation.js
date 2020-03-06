import React from 'react';
import { useAuth0 } from "../react-auth0-spa";
import { Link } from "react-router-dom";


// TODO: Check accessibililty here

const Navigation = () => {

    const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">QuoteTime</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/add">Add Quote<span className="sr-only">(current)</span></a>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                    {isAuthenticated && (
                        <span>
                            <Link className="nav-link" to="/profile">{user.name}</Link>
                        </span>
                    )}
                    </li>
                    <li className="nav-item">
                    {!isAuthenticated && (
                        <button className="btn btn-light my-2 my-sm-0" onClick={() => loginWithRedirect({})}>Log in</button>
                    )}
                    </li>
                    <li className="nav-item">
                    {isAuthenticated && (
                        <button className="btn btn-light my-2 my-sm-0" onClick={() => logout()}>Log out</button>
                    )}
                    </li>
                </ul>
            </div>
        </nav>

    );

};

export default Navigation;
