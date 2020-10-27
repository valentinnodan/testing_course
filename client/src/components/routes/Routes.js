import React from 'react';
import {Route, Router, Switch} from "react-router-dom";
import Authorization from "../autorization/Authorization";
import Home from "../home/Home";
import Budget from "../budget/Budget";

function Routes(props) {
    const myOnNameChange = props.onNameChange;
    const userInfo = props.userInfo.name;
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
                           />)}/>
            </Switch>
        </main>
    );
}

export default Routes;
