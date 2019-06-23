import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { LoginPage } from '../../../components/pages';
import { changeUsernameTextAC, changePasswordTextAC, fetchLogin } from '../../../store/actions';
import { Spinner } from '../../../components/elements';
import { withAuthService } from '../../../hoc';

class LoginPageContainer extends Component {
	render() {
		// this.props.AuthService.tryLogin()
		const { isLoading, isLoggedIn, ...rest } = this.props;

		if (isLoading) {
			return <Spinner />;
		}
		if (isLoggedIn) {
			return <Redirect to="/profile" />;
		}

		return <LoginPage {...rest} />;
	}
}

const mapStateToProps = ({ login }) => {
	return {
		...login,
	};
};

const mapDispatchToProps = (dispatch, { authService }) => {
	return {
		onUsernameChange: text => dispatch(changeUsernameTextAC(text)),
		onPasswordChange: text => dispatch(changePasswordTextAC(text)),
		onLogin: () => dispatch(fetchLogin(authService)()),
	};
};

// const LoginWithAuthService = withAuthService()(LoginPageContainer);

export default withAuthService()(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(LoginPageContainer)
);
