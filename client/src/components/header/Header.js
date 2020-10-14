import React from 'react';
// import logo from './logo.svg';
import './Header.css';
import {Link} from "react-router-dom";

function Header() {
    return (
            <header className="App-header">
                <p className="App-header_name">
                    Coin
                </p>
                <Link
                    to={'/authorize'}
                    className='App-link'
                >
                    Authorize
                </Link>
            </header>
    );
}

export default Header;
