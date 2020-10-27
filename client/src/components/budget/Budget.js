import React, {Component} from 'react';

class Budget extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: props.userInfo,
            coins: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log('new coin is submitted')
        const params = {
            date: event.target[0].value,
            name: event.target[1].value,
            value: event.target[2].value
        }
        fetch(`/api/budget?userName=${this.state.name}&date=${params.date}&name=${params.name}&value=${params.value}`,
            {
                method: 'POST'})
            .then(res => res.json())
            .then(res => this.setState({name: this.state.name, coins: res}));
    }


    render() {
        let coinsRepresentation = ''

        function represent(coin) {
            return `Date: ${coin.date}      Name: ${coin.name}     Value: ${coin.value}\n`
        }

        this.state.coins.forEach(coin => {coinsRepresentation += represent(coin)})
        return (
            <div className='App-form_wrapper'>
                <div>My coins: {coinsRepresentation}</div>
                <form className="App-form" onSubmit={this.handleSubmit}>
                    <p className="App-form_name">
                        Insert new coin, {this.state.name}!
                    </p>
                    <input type='date'
                           required='true'
                           className='App-form_input'
                           name='date'
                           placeholder='Date of coin'
                    />
                    <input type='text'
                           required='true'
                           className='App-form_input'
                           name='name'
                           placeholder='Name of coin'
                    />
                    <input type='number'
                           required='true'
                           className='App-form_input'
                           name='name'
                           placeholder='Value of coin'
                    />
                    <button className='App-form_submit-button'>Submit new coin</button>
                </form>
            </div>
        );
    }
}

export default Budget;
