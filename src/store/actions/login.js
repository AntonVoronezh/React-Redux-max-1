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
