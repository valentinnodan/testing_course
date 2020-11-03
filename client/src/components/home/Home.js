import React from 'react';
import '../app/App.css';
import Header from "../header/Header";
import {Link} from "react-router-dom";


const promoText = 'Coin is an app for your budget tracking. We call one expense Coin. Track your Coins with us!'

function Home(props) {
    let contentComponent = <div className="App-text">Hello, guest!</div>
    if (props.userName !== '') {
        let contentComponentText = `Hello, ${props.userName}!`
        contentComponent = <div className="wrapper">
            <div className="App-text">{contentComponentText}</div>
            <Link
                to={'/budget'}
            >
                To budget
            </Link>
        </div>
    }
    return (
        <div className="App">
            {contentComponent}
            {promoText}
        </div>
    );
}

export default Home;
