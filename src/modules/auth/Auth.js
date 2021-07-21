import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import Login from './login/Login';
import { Register } from './registration/Register';

const Auth = () => {
    const match = useRouteMatch();
    return (
        <Switch>
            <Route path={`${match.path}/register`}>
                <Register />
            </Route>
            <Route path={`${match.path}/`}>
                <Login />
            </Route>
            
        </Switch>
    );
};

export default Auth;