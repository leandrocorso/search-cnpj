import React from 'react';

import { Auth } from '../../utils';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Home from '../Home';
import SearchCnpj from '../SearchCnpj';

import './App.css';

Auth.setToken();

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route { ...rest } render={ props => (
        Auth.isLogged() 
            ? ( <Component { ...props } /> ) 
            : ( <Redirect to={{ pathname: '/', state: { from: props.location } }} /> )
    )} />
);



const App = () => (
    <BrowserRouter data-test="browserRouter">
        <Switch data-test="appWrapper">
            <Route data-test="homeRouter" exact path="/" component={Home} />
            <PrivateRoute data-test="searchRouter" exact path="/search-cnpj" component={SearchCnpj} />
        </Switch>
    </BrowserRouter>
);

export default App;
