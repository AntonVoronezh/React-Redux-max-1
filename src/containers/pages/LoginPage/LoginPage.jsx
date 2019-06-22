import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { LoginPage } from '../../../components/pages';
import { changeUsernameTextAC, changePasswordTextAC } from '../../../store/actions';
import { Spinner } from '../../../components/elements';
import { ErrorIndicator } from '../../../components/errors';

class LoginPageContainer extends Component {
	render() {
		const { isLoading, isLoggedIn, ...rest } = this.props;

		if (isLoading) {
			return <Spinner />;
		}
		// if (errorMsg) {
		// 	return <ErrorIndicator />;
		// }
		if (isLoggedIn) {
			return <Redirect to="/profile" />;
		}

		return <LoginPage {...rest} />;
	}
}

// const mapStateToProps = ({ login: { userNameText, passwordText, status, isLoggedIn, errorMsg, isLoading } }) => {
// 	return {
// 		userNameText,
// 		passwordText,
// 		status,
// 		isLoggedIn,
// 		errorMsg,
// 		isLoading,
// 	};
// };
const mapStateToProps = ({ login }) => {
	return {
		...login,
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
