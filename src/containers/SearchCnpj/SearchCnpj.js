import React from 'react';
import styled from 'styled-components';

import { Icon } from '../../components';

import SearchCnpjForm from './SearchCnpjForm';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
`;

const Header = styled.div`
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    color: ${p => p.theme.colors.c6};
    background-image: linear-gradient(to right, ${p => p.theme.colors.c1}, ${p => p.theme.colors.c2});
`;

const Heading = styled.div`
    display: flex;
    align-items: center;
`;

const ChartIcon = styled(Icon)`
    width: 1rem;
    height: 1rem;
    margin-right: 1rem;
    fill: ${p => p.theme.colors.c6};
`;

const Title = styled.p`
    line-height: 120%
    
    small {
        display: block;
    }
`;

const Avatar = styled.div`
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    background-image: url(http://placebeard.it/50);
    background-size: cover;
`;

const Step = styled.div`
    display: flex;
    align-items: center;
    height: 4.5rem;
    padding: 1rem;
`;

const StepNumber = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1rem;
    height: 1rem;
    margin-right: 1rem;
    font-size: 70%;
    font-weight: 700;
    color: ${p => p.theme.colors.c1};
    border: 2px solid ${p => p.theme.colors.c1};
`;

const SearchCnpj = () => (
    <Wrapper>
        <Header>
            <Heading>
                <ChartIcon src="line-chart" />
                <Title>Nova Cotação <small>#980</small></Title>
            </Heading>
            <Avatar />
        </Header>
        <Step>
            <StepNumber>1</StepNumber>
            Busca por CNPJ ou empresa
        </Step>
        <SearchCnpjForm/>
    </Wrapper>
);

export default SearchCnpj;
