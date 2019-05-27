import React, { Component } from 'react';

import { Button, InputText } from '../../components';

import Services from '../../services';

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

		const buttonProps = isValid 
			? { className: 'primary', to: '/' }
			: { className: 'default disabled', to: '#' }

		return(
			<form data-test="searchForm">

				<InputText 
					data-test="inputCnpj"
					className="input-cnpj"
					id="cnpj" 
					name="cnpj" 
					label="CNPJ / Empresa" 
					placeholder="__.___.___/___-__"
					mask={[/\d/,/\d/,'.',/\d/,/\d/,/\d/,'.',/\d/,/\d/,/\d/,'/',/\d/,/\d/,/\d/,/\d/,'-',/\d/,/\d/,]}
					onChange={ this.getCnpj }
					autoComplete="off"
					isValid={isValid}
				/>

				<div className="container">

					<Button 
						data-test="submitButton"
						icon="arrow-right2" 
						{ ...buttonProps }
						>
						Ok
					</Button>

				</div>

			</form>
		);
	}

}

export default SearchCnpjForm;
