import React from 'react';
import { Link } from 'react-router-dom';

import Icon from '../Icon';

import './Button.css';

const Button = ({ children, ...rest }) => (

	<Link

		{...rest} 
		data-test="button"
		className={`btn ${rest.className || 'default'}`}
		to={rest.to || '#'} 
		>

		<div 
			data-test="buttonText"
			className="btn-text"
			>
			{children || 'OK'}
		</div>

		{rest.icon && 
			<div 
				data-test="buttonIcon" 
				className="ico"
				>
				<Icon 
				src={rest.icon} 
				color={rest.color}
				/>
			</div>
		}

	</Link>

);

export default Button;
