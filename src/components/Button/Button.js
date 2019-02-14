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
	color: ${p => p.theme.themeDefault.button[p.color].color};
	height: 5rem;
	padding: 1rem;
	background-color: ${p => p.theme.themeDefault.button[p.color].background};
`;

const ButtonIcon = styled(Icon)`
	fill: ${p => p.theme.themeDefault.button[p.color].color};
	height: 1rem;
	width: 1rem;
`;

const Button = ({ children, ...rest }) => (
	<React.Fragment>
		<ButtonStyle to={rest.to} icon={rest.icon} color={rest.color} {...rest} className="btn">
			{children}
			{rest.icon && <ButtonIcon src={rest.icon} color={rest.color}/>}
		</ButtonStyle>
	</React.Fragment>
);

export default Button;
