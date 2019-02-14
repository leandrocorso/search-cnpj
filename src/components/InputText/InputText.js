import React, { Component } from 'react';
import MaskedInput from 'react-text-mask';
import styled from 'styled-components';

import { Icon } from '../../components';

const FormGroup = styled.div`
	height: 4.5rem;
	padding: 1rem;
	background-color: ${p => p.theme.colors.c4};

	label {
		font-size: 80%;
		color: ${p => p.theme.colors.c7};
	}
`;

const InputGroup = styled.div`
	width: 100%;
	display: flex;
	align-items: baseline;
	justify-content: space-between;
`;

const CheckIcon = styled(Icon)`
	width: .8rem;
	height: .8rem;
	fill: ${ p => p.theme.colors.c3 };
`;

class InputText extends Component {
	constructor(props) {
		super(props);
		this.state = { value: '' }
	}
  
	handleChange = value => {
		const { onChange } = this.props;

		this.setState({ value }, () => { 
			if (onChange) onChange(value);
		});
	};

  render() {
    const { name, label, isValid, ...rest } = this.props;
console.log(isValid)
    return (
    	<FormGroup>
    		<label htmlFor={name}>{label}</label>
			<InputGroup>
				<MaskedInput
					{...rest}
					id={name}
					name={name}
					onChange={e => this.handleChange(e.target.value)}
					value={this.state.value}
					/>
				{ isValid && <CheckIcon src="check-alt" /> }
			</InputGroup>
    	</FormGroup>
    	);
	}
}

export default InputText;
