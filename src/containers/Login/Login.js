import React from 'react';
import { connect } from 'react-redux';
import LoginForm from '../../components/Login/Login.jsx';
import { usernameTextAC, passwordTextAC, tryLoginAC } from '../../store/reducers/reducerForm';
import { isLoggedAC } from '../../store/reducers/loginReducer';

const Login = props => {
	return <LoginForm {...props} />;
};

const mapStateToProps = state => {
	return {
		...state.form,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		usernameTextCB: text => dispatch(usernameTextAC(text)),
		passwordTextCB: text => dispatch(passwordTextAC(text)),
		tryLoginCB: () => dispatch(tryLoginAC()),
		isLoginCB: () => dispatch(isLoggedAC()),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Login);
