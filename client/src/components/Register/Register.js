import React, {Component} from 'react';

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: props.userInfo
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log('form is submitted')
        const params = {login: event.target[0].value, name: event.target[1].value}
        if (this.state.name !== '') {
            alert('You are already authorized');
        }
        fetch(`/api/register?login=${params.login}&name=${params.name}`, {method: 'POST'}).then(res => res.json())
            .then(res => this.setState(res))
            .then((_) => this.props.onNameChange(params.name, params.login))
    }

    render() {
        return (
            <div className='App-form_wrapper'>
                <div className='App-form_wrapper-full'>
                    <form className='App-form' onSubmit={this.handleSubmit}>
                        <p className='App-form_name'>
                            Log in
                            <div>Hello {this.state.name}!</div>
                        </p>
                        <input type='text'
                               required='true'
                               className='App-form_input'
                               name='login'
                               placeholder='Your login'
                        />
                        <input type='text'
                               required='true'
                               className='App-form_input'
                               name='name'
                               placeholder='Your name'
                        />
                        <button className='App-form_submit-button'>Register</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Register;
