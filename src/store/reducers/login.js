import { CHANGE_USERNAME_TEXT, CHANGE_PASSWORD_TEXT } from '../actions';
import { statuses } from '../../helpers';

const initialState = {
	userNameText: '',
	passwordText: '',
	isLoading: true,
	status: statuses.INIT,
	isLoggedIn: false,
	errorMsg: null,
};

const updateText = (oldText, payload) => {
	if (payload === null) {
		return oldText(0, oldText.length - 1);
	}
	return oldText + payload;
};

const loginRreducer = (state = initialState, action) => {
	const { type, text } = action;
	const { userNameText, passwordText } = state;

	switch (type) {
		case CHANGE_USERNAME_TEXT: {
			return {
				...state,
				userNameText: updateText(userNameText, text),
			};
		}
		case CHANGE_PASSWORD_TEXT: {
			return {
				...state,
				passwordText: updateText(passwordText, text),
			};
		}
		default:
			return state;
	}
};

export default loginRreducer;
