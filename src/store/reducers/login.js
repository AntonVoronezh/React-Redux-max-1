import { CHANGE_USERNAME_TEXT, CHANGE_PASSWORD_TEXT } from '../actions';

const initialState = {
	userNameText: '',
	passwordText: '',
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
		default:
			return state;
	}
};

export default loginRreducer;
