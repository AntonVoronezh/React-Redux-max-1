import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { logout } from '../../../store/actions';

class LogoutPage extends Component {
	componentDidMount() {
		this.props.logout();
	}
	render() {
		return <Redirect to="/" />
	}
}

function mapDispatchToProps(dispatch) {
	return {
		logout: () => dispatch(logout()),
	};
}

export default connect(
	null,
	mapDispatchToProps
)(LogoutPage);
