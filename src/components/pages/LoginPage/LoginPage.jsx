import React, { Fragment } from 'react';
import './LoginPage.scss';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { ErrorButton } from '../../errors';

const LoginPage = ({ onLogin, isLoggedIn }) => {
	if (isLoggedIn) {
		return <Redirect to="/profile" />;
	}

	return (
		<Fragment>
			<ErrorButton />
			<button onClick={onLogin}> LogIn</button>
		</Fragment>
	);
};

PropTypes.LoginPage = {
	onLogin: PropTypes.func.isRequired,
	isLoggedIn: PropTypes.bool.isRequired,
};

export default LoginPage;
