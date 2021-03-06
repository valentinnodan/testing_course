import React, {Component} from 'react';
import './Budget.css';

function createCoinsRepresentation(coins) {
    function represent(coin) {
        const dateField = `Date: ${coin.date}`
        const nameField = `Name: ${coin.name}`
        const valueField = `Value: ${coin.value}`
        return (<li key={nameField} className='budget-coins_item'>
            <div className='budget-coins_item-field' id='coin-date'>{dateField}</div>
            <div className='budget-coins_item-field' id='coin-name'>{nameField}</div>
            <div className='budget-coins_item-field' id='coin-value'>{valueField}</div>
        </li>)
    }

    return (<ul className='budget-coins'>
        <div className='budget-coins_name'>My coins</div>
        <div className='budget-coins_amount' id='budget-amount'>Amount = {coins.length}</div>
        {coins.map(c => {
            return represent(c);
        })}
    </ul>)
}

class Budget extends Component {

    constructor(props) {
        super(props);
        console.log(props.userLogin)
        this.state = {
            name: props.userInfo,
            login: props.userLogin,
            coins: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        fetch(`/api/budget?userLogin=${this.state.login}`,
            {method: 'GET'})
            .then(res => res.json())
            .then(res => this.setState({name: this.state.name, coins: res}));
    }

    componentDidUpdate(prevProps) {
        if (prevProps.userInfo !== this.props.userInfo) {
            if (this.props.userInfo === '') {
                this.setState({
                    name: '',
                    coins: []
                });
            }
            this.forceUpdate();
        }
    }


    handleSubmit(event) {
        event.preventDefault();
        console.log('new coin is submitted')
        const params = {
            date: event.target[0].value,
            name: event.target[1].value,
            value: event.target[2].value
        }
        fetch(`/api/budget?userLogin=${this.state.login}&date=${params.date}&name=${params.name}&value=${params.value}`,
            {
                method: 'POST'
            })
            .then(res => res.json())
            .then(res => this.setState({name: this.state.name, login: this.state.login, coins: res}));
    }

    render() {

        if (this.state.login === '') {
            return <div className='App-text'>
                <div className='App-text_item' id='budget-empty'>You need to authorize</div>
            </div>
        }

        return (<div className='budget'>
                {createCoinsRepresentation(this.state.coins)}
                <div className='App-form_wrapper budget-form'>
                    <div className='App-form_wrapper-half'>
                        <form className='App-form' onSubmit={this.handleSubmit}>
                            <p className='App-form_name' id='budget-greeting'>
                                Insert new coin, {this.state.name}!
                            </p>
                            <input type='date'
                                   required='true'
                                   className='App-form_input'
                                   name='date'
                                   placeholder='Date of coin'
                                   id='budget-coin-date'
                            />
                            <input type='text'
                                   required='true'
                                   className='App-form_input'
                                   name='name'
                                   placeholder='Name of coin'
                                   id='budget-coin-name'
                            />
                            <input type='number'
                                   required='true'
                                   className='App-form_input'
                                   name='name'
                                   placeholder='Value of coin'
                                   id='budget-coin-value'
                            />
                            <button className='App-form_submit-button' id='budget-coin-submit'>Submit new coin</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Budget;