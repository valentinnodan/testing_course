import React from 'react';
import {Route, Router, Switch} from "react-router-dom";
import Authorization from "../autorization/Autorization";
import Home from "../home/Home";

function Routes() {
    return (
        <main>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/authorize' component={Authorization} />
            </Switch>
        </main>
    );
}

export default Routes;
