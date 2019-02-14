import React from 'react';
import styled from 'styled-components';

import { Container, Button, Icon } from '../../components';

const Wrapper = styled.div`
    display: flex;
    align-items: flex-end;
    height: 100%;
    text-align: center;
    color: ${p => p.theme.colors.c6}
    background-image: linear-gradient(${p => p.theme.colors.c1}, ${p => p.theme.colors.c2});
`;

const Heading = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 50%;
`;

const ChartIcon = styled(Icon)`
    width: 1rem;
    height: 1rem;
    margin: 0 auto;
    fill: ${p => p.theme.colors.c6};
`;

const Title = styled.p`
    font-size: 150%;

    small {
        font-size: 60%;
    }
`;

const Home = () => (
    <Wrapper>
        <Heading>
            <ChartIcon src="line-chart" />
            <Title>
                Cotação de seguros<br />
                <small>Solução inovadora da líder de mercado</small>
            </Title>
            <Container>
                <Button to="/busca-cnpj" icon="arrow-right2" color="primary">Iniciar</Button>
            </Container>
        </Heading>
    </Wrapper>
);

export default Home;
