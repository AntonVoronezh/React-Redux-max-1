import { FETCH_NEWS_REQUEST, FETCH_NEWS_SUCCESS, FETCH_NEWS_FAILURE } from '../actions';

import { statuses } from '../../helpers';

const initialState = {
	news: [],
	status: statuses.INIT,
	errorMsg: null,
};

const newsRreducer = (state = initialState, action) => {
	const { type, text, errorMsg } = action;

	switch (type) {
		case FETCH_NEWS_REQUEST: {
			return {
				...state,
				status: statuses.REQUEST,
				errorMsg: null,
			};
		}
		case FETCH_NEWS_SUCCESS: {
			return {
				...state,
				status: statuses.SUCCESS,
				userNameText: '',
				passwordText: '',
				isLoggedIn: true,
				errorMsg: null,
			};
		}
		case FETCH_NEWS_FAILURE: {
			return {
				...state,
				status: statuses.FAILURE,
				errorMsg,
				userNameText: '',
				passwordText: '',
			};
		}
		default:
			return state;
	}
};

export default newsRreducer;
