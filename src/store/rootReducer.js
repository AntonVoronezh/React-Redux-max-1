import { combineReducers, applyMiddleware } from 'redux';
import { menuRreducer } from './reducers';
import { loginRreducer } from './reducers';

const rootReducer = combineReducers({
	menu: menuRreducer,
	login: loginRreducer,
});

export default rootReducer;
