import React, { Component } from 'react';

import { Auth } from '../../utils';

class Wrapper extends Component {

	componentDidMount() {
		Auth.setToken();
	}

	render() {
		return (
			<React.Fragment>
				{this.props.children}
			</React.Fragment>
		);
	}
}

export default Wrapper;
