import React, {Component} from 'react';
import './Authorization.css';
import {Link} from 'react-router-dom';
import greet from '../../utils/greeting'


class Authorization extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            value: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log('form is submitted')
        if (this.state.name !== '') {
            alert('You are already authorized');
        }
        fetch(`/api/authorize?login=${this.state.value}`).then(res => res.json())
            .then(res => {
                this.setState({name: res.name, value: this.state.value})
            })
            .then((_) => {
                this.props.onNameChange(this.state.name, this.state.value)
            })
    }

    handleChange(event) {
        this.setState({name: this.state.name, value: event.target.value});
    }

    render() {
        return (
            <div className='App-form_wrapper'>
                <div className='App-form_wrapper-full'>
                    <form className='App-form' onSubmit={this.handleSubmit}>
                        <p className='App-form_name'>
                            Log in
                            <div>{greet(this.state.name)}</div>
                        </p>
                        <input type='text'
                               required='true'
                               className='App-form_input'
                               name='login'
                               placeholder='Your login'
                               data-testid='auth-input'
                               onChange={this.handleChange}
                        />
                        <button className='App-form_submit-button'>Log in</button>
                    </form>
                </div>
                <div className='auth-alt'>
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
