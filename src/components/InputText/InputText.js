import React, { Component } from 'react';
import MaskedInput from 'react-text-mask';

import { Icon } from '../../components';

import { int } from '../../utils';

import './InputText.css';

class InputText extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			value: ''
		}
	}
  
	handleChange = value => {
		const { onChange } = this.props;

		this.setState({ value: int(value) }, () => { 
			if (onChange) onChange(value);
		});
	};

	statusIcon = () => {
		const { isValid } = this.props;

		const status = isValid 
			? { className: 'icon success', src: 'checkmark' } 
			: { className: 'icon danger', src: 'cross' }

		return <Icon data-test="statusIcon" {...status} />;
	}

	render() {
		const { name, label, isValid, ...rest } = this.props;
		const { value } = this.state;

    	return (

			<div
				data-test="formGroup" 
				className="form-group"
				>

				<label
					data-test="formLabel"
					htmlFor={name}
					>
					{label}
				</label>

				<div 
					data-test="inputGroup"
					className="input-group"
					>

					<MaskedInput
						{...rest}
						data-test="inputText"
						className="inputTest"
						id={name}
						name={name}
						onChange={e => this.handleChange(e.target.value)}
						value={value}
						/>
						{ value.length === 14 && this.statusIcon() }

				</div>

    		</div>
		
    	);
	}
}

export default InputText;
