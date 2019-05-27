import React, { Fragment } from 'react';

import { Icon } from '../../components';

import SearchCnpjForm from './SearchCnpjForm';

import './SearchCnpj.css';

const SearchCnpj = () => (

    <div className="search-cnpj">

        <div className="header">

            <div className="heading">

                <Icon
                    className="chart-icon" 
                    data-test="chartIcon" 
                    src="line-chart" />

                <div data-test="title" className="title">
                    Nova Cotação <small data-test="subtitle">#980</small>
                </div>

            </div>

            <div data-test="avatar" className="avatar" />

        </div>

        <div className="step">

            <div 
                data-test="stepNumber"
                className="step-number">
                1
            </div>

            Busca por CNPJ ou empresa

        </div>

        <SearchCnpjForm/>

    </div>

);

export default SearchCnpj;
