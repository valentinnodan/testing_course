import React from 'react';
// import logo from './logo.svg';
import './Authorization.css';

function Authorization() {
    return (
        <div className='App-form_wrapper'>
            <form className="App-form">
                <p className="App-form_name">
                    Log in
                </p>
                <input type='text'
                       required='true'
                       className='App-form_input'
                       name='login'
                       placeholder='Your login'
                />
                <input type='password'
                       required='true'
                       className='App-form_input'
                       name='password'
                       placeholder='Your password'
                />
                <input type='submit' className='App-form_submit-button'/>
            </form>
        </div>
    );
}

export default Authorization;
