// eslint-disable-next-line
import { REGISTER_SUCCESS, REGISTER_FAIL, USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, CLEAR_ERRORS } from '../types';

// eslint-disable-next-line
export default (state, action) => {
	switch (action.type) {
		case LOGIN_SUCCESS :
			return {
				isAuthenticated : true,
				user : action.payload
			}
		default:
			return state;
	}
}