import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router'
import AuthContext from '../context/auth/authContext'

export const PrivateRoute = ({component: Component, ...rest}) => {
	const authContext = useContext(AuthContext)
	const { user } = authContext;
	
	return (
		<Route {...rest} render={props => {
			user ? (
				<Component {...props} />
			) : (
				<Redirect to='/login' />
			)
		}}>
			
		</Route>
	)
}
