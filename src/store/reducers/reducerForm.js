import { validationForm } from '../../helpers/form/formValidation';
import { setInStorage } from '../../helpers/login/localStorage';

const USERNAME_TEXT = 'USERNAME_TEXT';
const PASSWORD_TEXT = 'PASSWORD_TEXT';
const TRY_LOGIN = 'TRY_LOGIN';

const initialState = {
	usernameText: '',
	passwordText: '',
	isLogin: false,
	username: 'Admin',
	password: '12345',
};

export default (state = initialState, action) => {
	switch (action.type) {
		case USERNAME_TEXT:
			return {
				...state,
				usernameText: state.usernameText + action.payload,
			};
		case PASSWORD_TEXT:
			return {
				...state,
				passwordText: state.passwordText + action.payload,
			};
		case TRY_LOGIN: {
			const loginFlag = validationForm({
				userLogin: state.username,
				userPassword: state.password,
				someLogin: state.usernameText,
				somePassword: state.passwordText,
			});

			setInStorage('isLogged', loginFlag);

			return {
				...state,
				usernameText: '',
				passwordText: '',
				isLogin: loginFlag,
			};
		}

		default:
			return state;
	}
};

export const usernameTextAC = text => ({ type: USERNAME_TEXT, payload: text });
export const passwordTextAC = text => ({ type: PASSWORD_TEXT, payload: text });
export const tryLoginAC = () => ({ type: TRY_LOGIN });
