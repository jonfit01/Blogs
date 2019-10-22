import { combineReducers } from 'redux';
import authReducer from './authReducer';
import { reducer as formReducer } from 'redux-form';
import blogReducer from './blogReducer';

export default combineReducers({
    auth: authReducer,
    form: formReducer,
    blogs: blogReducer
});