import React, { Component } from 'react';
import styled from 'styled-components';

import { Container, Button, InputText } from '../../components';

import Services from '../../services';

const Form = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100%;
`;

const InputCnpj = styled(InputText)`
	display: block;
	margin-top: .5rem;
	font-size: 120%;
	font-weight: 700;
	color: ${p => p.theme.themeDefault.colors.c8};

	&:focus {
		color: ${p => p.theme.themeDefault.colors.c8};
	}
`;

class SearchCnpjForm extends Component {

	constructor(props) {
		super(props);
		this.state = { isValid: '' }
	}

	getCnpj = async value => {
		this.setState({ isValid: false });
		const cnpj = value.replace(/\D/g, '');
		if (cnpj.length === 14) {
			try {
				const { isValid } = await Services.getCnpj(cnpj);
				this.setState({ isValid });
			} catch (e) {
				this.setState({ isValid: e.isValid });
			}
		}
	};

	render() {

		const { isValid } = this.state;

		return(
			<Form>
				<InputCnpj 
					id="cnpj" 
					name="cnpj" 
					label="CNPJ / Empresa" 
					placeholder="__.___.___/___-__"
					mask={[/\d/,/\d/,'.',/\d/,/\d/,/\d/,'.',/\d/,/\d/,/\d/,'/',/\d/,/\d/,/\d/,/\d/,'-',/\d/,/\d/,]}
					onChange={ this.getCnpj }
					autoComplete="off"
					isValid={isValid}
				/>
				<Container>
					<Button className="testButton" to="/" icon="arrow-right2" color={`${isValid ? 'success' : 'primary'}`}>Ok</Button>
				</Container>
			</Form>
		);
	}

}

export default SearchCnpjForm;
