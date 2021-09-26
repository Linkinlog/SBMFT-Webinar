import React, { useReducer } from 'react';
import AuthContext from './authContext';
import authReducer from './authReducer';
// eslint-disable-next-line
import { REGISTER_SUCCESS, REGISTER_FAIL, USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, CLEAR_ERRORS } from '../types';

const AuthState = (props) => {
	const initialState = {
		isAuthenticated: null,
		user: null,
	};
	const [state, dispatch] = useReducer(authReducer, initialState);

	const login = (user) => {
		dispatch({ type: LOGIN_SUCCESS, payload: user });
	};

	return (
		<AuthContext.Provider
			value={{
				isAuthenticated: state.isAuthenticated,
				user: state.user,
				login,
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthState;
