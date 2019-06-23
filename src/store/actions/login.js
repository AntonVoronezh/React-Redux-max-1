const CHANGE_USERNAME_TEXT = 'CHANGE_USERNAME_TEXT';
const changeUsernameTextAC = text => ({
	type: CHANGE_USERNAME_TEXT,
	text,
});

const CHANGE_PASSWORD_TEXT = 'CHANGE_PASSWORD_TEXT';
const changePasswordTextAC = text => ({
	type: CHANGE_PASSWORD_TEXT,
	text,
});

export { changeUsernameTextAC, CHANGE_USERNAME_TEXT, changePasswordTextAC, CHANGE_PASSWORD_TEXT };

const FETCH_LOGIN_REQUEST = 'FETCH_LOGIN_REQUEST';
const fetchLoginRequestAC = () => ({
	type: FETCH_LOGIN_REQUEST,
});

const FETCH_LOGIN_SUCCESS = 'FETCH_LOGIN_SUCCESS';
const fetchLoginSuccessAC = data => ({
	type: FETCH_LOGIN_SUCCESS,
	data
});

const FETCH_LOGIN_FAILURE = 'FETCH_LOGIN_FAILURE';
const fetchLoginFailureAC = errorMsg => ({
	type: FETCH_LOGIN_FAILURE,
	errorMsg,
});

const fetchLogin = service => () => (dispatch, getState) => {
	const {
		login: { userNameText, passwordText },
	} = getState();

	console.log('fetchLogin');
	dispatch(fetchLoginRequestAC());
	service
		.tryLogin(userNameText, passwordText)
		.then(data => dispatch(fetchLoginSuccessAC(data)))
		.catch(err => dispatch(fetchLoginFailureAC(err)));
};

export { FETCH_LOGIN_REQUEST, FETCH_LOGIN_SUCCESS, FETCH_LOGIN_FAILURE, fetchLogin };
