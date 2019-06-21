import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import reducerUi from './reducerUi';
import reducerForm from './reducerForm';

export default combineReducers({ login: loginReducer, ui: reducerUi, form: reducerForm });
