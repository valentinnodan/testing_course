import React, {Component} from 'react';
import './components/app/App.css';
import Header from "./components/header/Header";
import Routes from "./components/routes/Routes";

class App extends Component {
    constructor(props) {
        super(props);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.dropState = this.dropState.bind(this);
        this.state = {name: '', login:''};
    }

    handleNameChange(myName, myLogin) {
        this.setState({name: myName, login: myLogin})
    }

    dropState() {
        this.setState({name: '', login: ''});
    }

    render() {
        const name = this.state.name;
        let headerProps = {isAuthorized: false, name: '', login: ''}
        if (name !== '') {
            headerProps.isAuthorized = true;
            headerProps.name = name;
            headerProps.login = this.state.login;
        }

        return (
            <div className="App">
                <Header userInfo={headerProps}
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
