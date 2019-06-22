import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';

const myLogger = ({ getState }) => dispatch => action => {
	console.log(action.type);
	console.log(getState());

	return dispatch(action);
};

export default () => createStore(rootReducer, applyMiddleware(myLogger));
