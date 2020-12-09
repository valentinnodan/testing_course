import React, {Component} from 'react';
import './Authorization.css';
import {Link} from "react-router-dom";
import greet from '../../utils/greeting'


class Authorization extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log('form is submitted')
        const params = {login: event.target[0].value}
        if (this.state.name !== '') {
            alert('You are already authorized');
        }
        fetch(`/api/authorize?login=${params.login}`).then(res => res.json())
            .then(res => this.setState(res))
            .then((_) => this.props.onNameChange(this.state.name, params.login))
    }

    render() {
        return (
            <div className='App-form_wrapper'>
                <div className='App-form_wrapper-full'>
                    <form className="App-form" onSubmit={this.handleSubmit}>
                        <p className="App-form_name">
                            Log in
                            <div>{greet(this.state.name)}</div>
                        </p>
                        <input type='text'
                               required='true'
                               className='App-form_input'
                               name='login'
                               placeholder='Your login'
                        />
                        <button className='App-form_submit-button'>Log in</button>
                    </form>
                </div>
                <div className="auth-alt">
                    Or&nbsp;
                    <Link
                        to={'/register'}
                        className='App-link'
                    >
                        Register
                    </Link>
                </div>
            </div>
        );
    }
}

export default Authorization;
