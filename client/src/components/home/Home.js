import React from 'react';
import '../app/App.css';
import {Link} from 'react-router-dom';
import greet from '../../utils/greeting'

const promoText = 'Coin is an app for your budget tracking. We call one expense Coin. Track your Coins with us!'

function Home(props) {
    let greeting = greet(props.userName);
    let promo = <div className='App-text_item'>{promoText}</div>
    let contentComponent = <div className='wrapper'>
        {greeting}
        {promo}
    </div>
    if (props.userName !== '') {
        contentComponent = <div className='wrapper'>
            {greeting}
            {promo}
            <Link
                to={'/budget'}
                id='link-to-budget'
            >
                To budget
            </Link>
        </div>
    }
    return (
        <div className='App-text'>
            {contentComponent}
        </div>
    );
}

export default Home;
