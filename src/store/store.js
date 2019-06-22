import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';

export default () => createStore(rootReducer, applyMiddleware(logger));

function logger({ getState }) {
	return dispatch => action => {
		console.log(getState());

		dispatch(action);
	};
}
