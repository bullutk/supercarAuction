//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//********************ROOT REDUCER******************
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

import { combineReducers } from 'redux';
import GetHomeReducer from './GetHomeReducer';

const rootReducer = combineReducers({
	home: GetHomeReducer
})

export default rootReducer;