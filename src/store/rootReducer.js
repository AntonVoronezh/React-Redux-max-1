import { combineReducers } from 'redux';
import { menuRreducer } from './reducers';

const rootReducer = combineReducers({
	menu: menuRreducer,
});

export default rootReducer;
