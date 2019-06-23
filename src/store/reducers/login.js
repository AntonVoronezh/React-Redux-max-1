import { CHANGE_USERNAME_TEXT, CHANGE_PASSWORD_TEXT } from '../actions';
import { statuses } from '../../helpers';
import { FETCH_LOGIN_REQUEST, FETCH_LOGIN_SUCCESS, FETCH_LOGIN_FAILURE } from '../actions';

const initialState = {
	userNameText: '',
	passwordText: '',
	// isLoading: false,
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
	const { type, text, errorMsg, data } = action;
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
		case FETCH_LOGIN_REQUEST: {
			return {
				...state,
				status: statuses.REQUEST,
				errorMsg: null,
			};
		}
		case FETCH_LOGIN_SUCCESS: {
			if (data.status === 'ok') {
				return {
					...state,
					status: statuses.SUCCESS,
					userNameText: '',
					passwordText: '',
					isLoggedIn: true,
					errorMsg: null,
				};
			} else if (data.status === 'err') {
				return {
					...state,
					status: statuses.FAILURE,
					userNameText: '',
					passwordText: '',
					errorMsg: data.message,
				};
			} else {
				return state;
			}
		}
		case FETCH_LOGIN_FAILURE: {
			return {
				...state,
				status: statuses.FAILURE,
				errorMsg: errorMsg.message,
				userNameText: '',
				passwordText: '',
			};
		}
		default:
			return state;
	}
};

export default loginRreducer;
