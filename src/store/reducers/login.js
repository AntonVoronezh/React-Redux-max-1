import { CHANGE_ACTIVE_PAGE } from '../actions';

const initialState = {
	activePage: '/',
};

const loginRreducer = (state = initialState, action) => {
	switch (action.type) {
		case CHANGE_ACTIVE_PAGE: {
			return {
				...state,
				activePage: action.page,
			};
		}
		default:
			return state;
	}
};

export default loginRreducer;
