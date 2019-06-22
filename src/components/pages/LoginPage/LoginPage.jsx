import React, { Fragment } from 'react';
import './LoginPage.scss';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { ErrorButton } from '../../errors';
import { Button, Form, Segment } from 'semantic-ui-react';

const LoginPage = ({ userNameText, passwordText, onUsernameChange, onPasswordChange }) => {
	const submitFormHandler = () => {
		console.log('submitFormHandler');
	};

	// if (isLoggedIn) {
	// 	return <Redirect to="/profile" />;
	// }

	const usernameInputHandler = ({ nativeEvent: { data } }) => {
		onUsernameChange(data);
	};
	const passwordInputHandler = ({ nativeEvent: { data } }) => {
		onPasswordChange(data);
	};

	return (
		<Fragment>
			<ErrorButton />
			{/* <button onClick={onLogin}> LogIn</button> */}
			<Segment>
				{/* {error && !isLogged ? <div className={classes.error}>Имя пользователя или пароль введены не верно </div> : null} */}

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
					<Button type="submit">
						{/* <Button type="submit" disabled={!(!!usernameText && !!passwordText)}> */}
						Submit
					</Button>
				</Form>
			</Segment>
		</Fragment>
	);
};

PropTypes.LoginPage = {
	onLogin: PropTypes.func.isRequired,
	isLoggedIn: PropTypes.bool.isRequired,
};

export default LoginPage;
