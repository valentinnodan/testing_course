import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

function Header(props) {
    let authComponent = <Link
        to={'/authorize'}
        className='App-link'
        id='App-header-link-auth'
    >
        Authorize
    </Link>
    if (props.userInfo.isAuthorized) {
        authComponent = <button className='App-button' id='App-header-button' onClick={props.dropState}>Log out</button>
    }
    return (
            <header className='App-header'>
                <Link to={'/'}
                    className='App-header_name'
                      id='App-header-link'
                >
                    Coin
                </Link>
                {authComponent}
            </header>
    );
}

export default Header;
