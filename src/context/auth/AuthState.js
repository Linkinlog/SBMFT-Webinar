import React, { useEffect, useReducer, useState } from 'react';
import AuthContext from './authContext';
import authReducer from './authReducer';
import { auth } from '../../Config';
// eslint-disable-next-line
import { REGISTER_SUCCESS, REGISTER_FAIL, USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, CLEAR_ERRORS } from '../types';

const AuthState = (props) => {
	const [loading, setLoading] = useState(true);
	const initialState = {
		isAuthenticated: null,
		user: null,
		// loading: true,
	};
	const [state, dispatch] = useReducer(authReducer, initialState);

	const signUp = (email, password) => {
		return auth.createUserWithEmailAndPassword(email, password);
	};

	const login = (email, password) => {
		return auth.signInWithEmailAndPassword(email, password);
	};

	const logout = () => {
		dispatch({ type: LOGOUT });
		return auth.signOut();
	};

	const resetPW = (email) => {
		return auth.sendPasswordResetEmail(email);
	};

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			if (user) {
				dispatch({ type: LOGIN_SUCCESS, payload: user.providerData[0] });
			} else {
				dispatch({ type: LOGOUT });
			}
			setLoading(false);
		});
		return unsubscribe;
	}, []);

	const value = {
		isAuthenticated: state.isAuthenticated,
		user: state.user,
		loading: state.loading,
		signUp,
		login,
		logout,
		resetPW,
	};

	return <AuthContext.Provider value={value}>{!loading && props.children}</AuthContext.Provider>;
};

export default AuthState;
