import React from 'react';
import { BrowserRouter as Router, Link, } from 'react-router-dom';
import './navBar.css';
import HomePage from '../../pages/HomePage/HomePage';

export default function navBar() {


    return (
        <Router>
            <div className="navBarLink">
                <Link to='/' className="nav-logo">
                    <h3>vovMovies</h3>
                </Link>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/movieGenres">Genres</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </Router>
    )
}
