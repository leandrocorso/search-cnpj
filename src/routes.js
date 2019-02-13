import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Home } from './containers/Home';
import { SearchCnpj } from './containers/SearchCnpj';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/busca-cnpj" component={SearchCnpj} />
        </Switch>
    </BrowserRouter>
);

export default Routes;
