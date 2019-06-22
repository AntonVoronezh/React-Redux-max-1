import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { LoginPage } from '../../../components/pages';
import { changeUsernameTextAC, changePasswordTextAC } from '../../../store/actions';
import { Spinner } from '../../../components/elements';
import { ErrorIndicator } from '../../../components/errors'


class LoginPageContainer extends Component {
	render() {
		if (this.props.isLoading) {
			return <Spinner />;
		}
		if (this.props.errorMsg) {
			return <ErrorIndicator />;
		}
		return <LoginPage {...this.props} />;
	}
}

const mapStateToProps = ({ login: { userNameText, passwordText, status, isLoggedIn, errorMsg, isLoading } }) => {
	return {
		userNameText,
		passwordText,
		status,
		isLoggedIn,
		errorMsg,
		isLoading,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onUsernameChange: text => dispatch(changeUsernameTextAC(text)),
		onPasswordChange: text => dispatch(changePasswordTextAC(text)),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(LoginPageContainer);
