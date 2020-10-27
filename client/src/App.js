import React, {Component} from 'react';
import './components/app/App.css';
import Header from "./components/header/Header";
import Routes from "./components/routes/Routes";

class App extends Component {
    constructor(props) {
        super(props);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.dropState = this.dropState.bind(this);
        this.state = {name: ''};
    }

    handleNameChange(myName) {
        this.setState({name: myName})
    }

    dropState() {
        this.handleNameChange('');
    }

    render() {
        const name = this.state.name;
        let headerProps = {isAuthorized: false, name: ''}
        if (name !== '') {
            headerProps.isAuthorized = true;
            headerProps.name = name;
        }

        return (
            <div className="App">
                <Header userInfo={headerProps}
                        onNameChange={this.handleNameChange}
                        dropState={this.dropState}
                />
                <Routes userInfo={headerProps}
                        onNameChange={this.handleNameChange}
                />
            </div>
        );
    }
}

export default App;
