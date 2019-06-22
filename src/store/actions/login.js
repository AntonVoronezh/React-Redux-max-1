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
const fetchLoginSuccessAC = () => ({
	type: FETCH_LOGIN_SUCCESS,
});

const FETCH_LOGIN_FAILURE = 'FETCH_LOGIN_FAILURE';
const fetchLoginFailureAC = () => ({
	type: FETCH_LOGIN_FAILURE,
});

// const fetchLogin = () =>

export { FETCH_LOGIN_REQUEST, FETCH_LOGIN_SUCCESS, FETCH_LOGIN_FAILURE };
