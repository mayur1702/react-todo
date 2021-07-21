import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Auth from '../auth/Auth';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/auth">
                    <Auth />                    
                </Route>
            </Switch>
        </Router>
    );
};

export default Routes;

