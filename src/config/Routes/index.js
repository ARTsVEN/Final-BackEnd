import React from 'react';
import {
    BrowserRouter as Router,Route, Switch} from "react-router-dom";
import About from '../../components/pages/About';
import Dashboard from '../../components/pages/Dashboard';
import Login from '../../components/pages/Login';
import Register from '../../components/pages/Register';
import Input from '../../components/pages/Input';




const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/register">
                    <Register />
                </Route> 
                <Route path="/login">
                    <Login title="Login"/>
                </Route>
                <Route exact path="/">
                    <Dashboard />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/input">
                    <Input/>
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes;