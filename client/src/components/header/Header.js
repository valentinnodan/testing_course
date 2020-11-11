import React from 'react';
import './Header.css';
import {Link} from "react-router-dom";

function Header(props) {
    let authComponent = <Link
        to={'/authorize'}
        className='App-link'
    >
        Authorize
    </Link>
    if (props.userInfo.isAuthorized) {
        authComponent = <button className='App-button' onClick={props.dropState}>Log out</button>
    }
    return (
            <header className="App-header">
                <Link to={'/'}
                    className="App-header_name"
                >
                    Coin
                </Link>
                {authComponent}
            </header>
    );
}

export default Header;
