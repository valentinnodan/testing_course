import React from 'react';
import './components/app/App.css';
import Header from "./components/header/Header";
import Routes from "./components/routes/Routes";

function App() {
    return (
        <div className="App">
            <Header/>
            <Routes/>
        </div>
    );
}

export default App;
