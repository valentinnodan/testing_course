import React, {Component} from 'react';
// import logo from './logo.svg';
import './Authorization.css';

class Authorization extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            surname: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    handleSubmit(event) {
        event.preventDefault()
        console.log('form is submitted')
        const params = {login: event.target[0].value, password: event.target[1].value}
        fetch('/api/authorize?login=1&password=1').then(res => res.json())
            .then(res => this.setState(res))
            .then((_) => console.log(this.state))
    }

    render() {
        return (
            <div className='App-form_wrapper'>
                <form className="App-form" onSubmit={this.handleSubmit}>
                    <p className="App-form_name">
                        Log in
                        <div>Hello {this.state.name}!</div>
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
                    <button className='App-form_submit-button'>Log in</button>
                </form>
            </div>
        );
    }
}

export default Authorization;
