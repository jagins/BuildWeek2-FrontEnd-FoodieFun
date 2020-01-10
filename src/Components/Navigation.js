import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Registration from './Registration';
import Login from './Login';

function Navigation() {
    return(
        <Switch>
            <Route path='/register'>
                <Registration/>
            </Route>
            <Route path='/'>
                <Login/>
            </Route>
        </Switch>
    );
}

export default Navigation;