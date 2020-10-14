import React from 'react';
import {Route, Router, Switch} from "react-router-dom";
import Authorization from "../autorization/Authorization";
import Home from "../home/Home";

function Routes() {
    return (
        <main>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/authorize' component={Authorization} />
            </Switch>
        </main>
    );
}

export default Routes;
