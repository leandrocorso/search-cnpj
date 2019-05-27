import React, { Fragment } from 'react';

import { Button, Icon } from '../../components';

import './Home.css';

const Home = () => (

    <div className="home">

        <div className="heading">

            <Icon 
                className="chart-icon"
                data-test="chartIcon" 
                src="line-chart" />
            
            <div className="title">
                Cotação de seguros<br />
                <small>Solução inovadora da líder de mercado</small>
            </div>

            <div className="container">

                <Button 
                    data-test="testSearch"
                    className="testSearch default" 
                    to="/search-cnpj" 
                    icon="arrow-right2"
                    >
                </Button>

            </div>

        </div>
    </div>
);

export default Home;
