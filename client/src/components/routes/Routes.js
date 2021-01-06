import React from 'react';
import {HashRouter, Route, Router, Switch} from 'react-router-dom';
import Authorization from '../authorization/Authorization';
import Home from '../home/Home';
import Budget from '../budget/Budget';
import Register from '../Register/Register';

function Routes(props) {
    const myOnNameChange = props.onNameChange;
    const userInfo = props.userInfo.name;
    const userLogin = props.userInfo.login;
    return (
        <main>
            <Switch>
                <Route exact path='/'
                       render={(props) =>
                           (<Home {...props}
                                  userName={userInfo}

                           />)}/>
                <Route path='/authorize'
                       render={(props) =>
                           (<Authorization {...props}
                                           onNameChange={myOnNameChange}
                           />)}
                />
                <Route path='/budget'
                       render={(props) =>
                           (<Budget {...props}
                                    userInfo={userInfo}
                                    userLogin={userLogin}
                           />)}/>
                <Route path='/register'
                       render={(props) =>
                           (<Register {...props}
                                      userInfo={userInfo}
                                      onNameChange={myOnNameChange}
                           />)}
                />
            </Switch>
        </main>
    );
}

export default Routes;
