import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { GlobalStyle } from '../../styles';

import Wrapper from './Wrapper';
import Home from '../Home';
import SearchCnpj from '../SearchCnpj';

const App = () => (
    <BrowserRouter>
        <Wrapper>
            <GlobalStyle />
            <Switch>
                <Route className="testHome" exact path="/" component={Home} />
                <Route className="testSearch" exact path="/busca-cnpj" component={SearchCnpj} />
            </Switch>
        </Wrapper>
    </BrowserRouter>
);

export default App;
