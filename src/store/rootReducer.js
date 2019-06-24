import { combineReducers } from 'redux';

import { menuRreducer, loginRreducer } from './reducers';

const rootReducer = combineReducers({
	menu: menuRreducer,
	login: loginRreducer,
});

export default rootReducer;
