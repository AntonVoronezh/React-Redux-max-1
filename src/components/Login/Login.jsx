import React from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';

export default ({ usernameText, passwordText, usernameTextCB, passwordTextCB, tryLoginCB, isLoginCB }) => {
	const submitFormHandler = () => {
		tryLoginCB();
		isLoginCB();
	};

	const usernameInputHandler = ({ nativeEvent: { data } }) => {
		usernameTextCB(data);
	};

	const passwordInputHandler = ({ nativeEvent: { data } }) => {
		passwordTextCB(data);
	};

	return (
		<Segment inverted>
			{/* {1 === 1 ? <Redirect to="/profile" /> : null} */}
			<Form inverted onSubmit={submitFormHandler}>
				<Form.Group widths="equal">
					<Form.Input
						fluid
						label="Username"
						placeholder="username"
						onChange={usernameInputHandler}
						value={usernameText}
					/>
					<Form.Input
						fluid
						label="Password"
						placeholder="password"
						onChange={passwordInputHandler}
						value={passwordText}
					/>
				</Form.Group>
				<Button type="submit">Submit</Button>
			</Form>
		</Segment>
	);
};
