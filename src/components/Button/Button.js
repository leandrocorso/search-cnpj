import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Icon from '../Icon';

const ButtonStyle = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-decoration: none;
    font-weight: 700;
    color: ${p => p.theme.button[p.color].color};
    height: 5rem;
    padding: 1rem;
    background-color: ${p => p.theme.button[p.color].background};
`;

const ButtonIcon = styled(Icon)`
    fill: ${p => p.theme.button[p.color].color};
    height: 1rem;
    width: 1rem;
`;

const Button = ({ children, ...rest }) => (
  <ButtonStyle {...rest}>
    {children}
    {rest.icon && <ButtonIcon src={rest.icon} color={rest.color}/>}
  </ButtonStyle>
);

export default Button;
