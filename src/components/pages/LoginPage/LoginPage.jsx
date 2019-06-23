import React, { Fragment } from 'react';
import './LoginPage.scss';
import PropTypes from 'prop-types';
import { ErrorButton } from '../../errors';
import { Button, Form, Segment } from 'semantic-ui-react';

const LoginPage = ({ userNameText, passwordText, onUsernameChange, onPasswordChange, errorMsg, onLogin }) => {
	const submitFormHandler = () => {
		onLogin();
	};

	const usernameInputHandler = ({ nativeEvent: { data } }) => {
		onUsernameChange(data);
	};
	const passwordInputHandler = ({ nativeEvent: { data } }) => {
		onPasswordChange(data);
	};

	const isDisabled = !(!!userNameText && !!passwordText);

	const error = errorMsg ? <div>Имя пользователя или пароль введены не верно </div> : null;

	return (
		<Fragment>
			<ErrorButton />
			{/* <button onClick={onLogin}> LogIn</button> */}
			<Segment>
				<Form onSubmit={submitFormHandler}>
					<Form.Group widths="equal">
						<Form.Input
							fluid
							label="Username"
							placeholder="username"
							onChange={usernameInputHandler}
							value={userNameText}
						/>
						<Form.Input
							fluid
							label="Password"
							placeholder="password"
							onChange={passwordInputHandler}
							value={passwordText}
						/>
					</Form.Group>
					<Button type="submit" disabled={isDisabled}>
						Submit
					</Button>
				</Form>
				{error}
			</Segment>
		</Fragment>
	);
};

PropTypes.LoginPage = {
	onLogin: PropTypes.func.isRequired,
	isLoggedIn: PropTypes.bool.isRequired,
};

export default LoginPage;
