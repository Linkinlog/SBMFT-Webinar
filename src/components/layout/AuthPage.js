import React, { useContext, useEffect } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { app, uiConfig } from '../../Config';
import AuthContext from '../../context/auth/authContext';
export const AuthPage = () => {
	const authContext = useContext(AuthContext);
	const { login } = authContext
	// Listen to the Firebase Auth state and set the local state.
	useEffect(() => {
		const unregisterAuthObserver = app.auth().onAuthStateChanged((user) => {
			console.log(user.providerData[0].email);
			console.log(app.auth());
			login(user.providerData[0])
		});
		return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
		// eslint-disable-next-line
	}, []);
	
	return (
		<div>
			<StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={app.auth()} />
		</div>
	);
};
