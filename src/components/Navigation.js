import React from 'react';
import { useAuth0 } from "../react-auth0-spa";
import { Link } from "react-router-dom";


// TODO: Check accessibililty here

const Navigation = () => {

    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">QuoteTime</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Link</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="/">Action</a>
                            <a className="dropdown-item" href="/">Another action</a>
                        <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="/">Something else here</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="/">Disabled</a>
                    </li>
                </ul>
                {/* <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>

                </form> */}


            </div>
            <div>
                    {!isAuthenticated && (
                        <button onClick={() => loginWithRedirect({})}>Log in</button>
                    )}

                    {isAuthenticated && (
                        <button onClick={() => logout()}>Log out</button>
                    )}

                    {isAuthenticated &&
                    // <button onClick={() => logout()}>Log out</button>}
                    (
                        <span>
                            <Link to="/">Home</Link>&nbsp;
                            <Link to="/profile">Profile</Link>
                        </span>
                    )
                    }
                </div>
        </nav>

    );

};

export default Navigation;
