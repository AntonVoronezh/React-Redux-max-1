import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { LoginPage } from '../../../components/pages';
import { changeUsernameTextAC, changePasswordTextAC } from '../../../store/actions';

class LoginPageContainer extends Component {
	// if (loading) {
	// 	return <Spinner />;
	//   }

	//   if (error) {
	// 	return <ErrorIndicator />;
	//   }

	//   return <BookList books={books} onAddedToCart={onAddedToCart}/>;
	render() {
		return <LoginPage {...this.props} />;
	}
}

const mapStateToProps = ({ login: { userNameText, passwordText, status, isLoggedIn, errorMsg } }) => {
	return {
		userNameText,
		passwordText,
		status,
		isLoggedIn,
		errorMsg,
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
