import { getInStorage } from '../../helpers/login/localStorage';

const IS_LOGGED = 'IS_LOGGED';

const initialState = {
	isLogged: false,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case IS_LOGGED: {
			const type = getInStorage('isLogged');

			return {
				isLogged: type,
			};
		}
		default:
			return state;
	}
};

export const isLoggedAC = () => ({ type: IS_LOGGED });
