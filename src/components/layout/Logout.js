import React, { useContext, useEffect } from 'react'
import { Button, Card } from 'react-bootstrap'
import { useHistory } from 'react-router'
import AuthContext from '../../context/auth/authContext'

export const Logout = () => {
	const authContext = useContext(AuthContext)
	const { logout, isAuthenticated } = authContext;
	const history = useHistory()
	const onClick = e => {
		e.preventDefault()
		logout()
	}

	useEffect(() => {
		!isAuthenticated && history.push('/')
		// eslint-disable-next-line
	}, [isAuthenticated]);
	
	return (
		<>
			<Card className='mt-4 text-center'>
				<Card.Body>
					<Card.Title><h2>Log Out</h2></Card.Title>
					<Card.Text>Click below to sign out</Card.Text>
					<Button variant='primary' onClick={onClick} >Log Out</Button>
				</Card.Body>
			</Card>
		</>
	)
}
