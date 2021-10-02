import React, { useContext, useEffect, useRef, useState } from 'react';
import { Alert, Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import AuthContext from '../../../context/auth/authContext';
export const Login = () => {
	const history = useHistory()
	const authContext = useContext(AuthContext);
	const [error, setError] = useState()
	const [loading, setLoading] = useState(false)
	const email = useRef();
	const password = useRef();
	const { login, isAuthenticated } = authContext;
	useEffect(() => {
		isAuthenticated && history.push('/')
		// eslint-disable-next-line
	}, [isAuthenticated]);

	const clear = () => {
		setLoading(false);
		setError();
	};

	const onSubmit = (e) => {
		e.preventDefault();
		try {
			setLoading(true)
			login(email.current.value, password.current.value)
			.catch(error => {
				setError(error.message)
				setTimeout(() => clear(), 2500)
			})
		} catch (error) {
			setError('Error logging in')
			console.error(error)
			setTimeout(() => clear(), 2500)
		}
	};

	return (
		<Container>
			{error && <Row><Col md={6} className='offset-md-3 mt-3'><Alert variant='danger'>{error}</Alert></Col></Row>}
			<Row>
				<Col md={6} className='offset-md-3'>
					<Card className='mt-3'>
						<Card.Body>
							<Card.Title className='text-center'>
								<h1>Log in</h1>
							</Card.Title>
							<Form onSubmit={onSubmit}>
								<Form.Group id='email'>
									<Form.Label>Email</Form.Label>
									<Form.Control type='email' ref={email} autoComplete="username" required />
								</Form.Group>
								<Form.Group id='password'>
									<Form.Label>Password</Form.Label>
									<Form.Control type='password' autoComplete="current-password" ref={password} required />
								</Form.Group>
								<Button type='submit' className={`w-100 mt-2 ${loading && ('disabled')}`}>
									Log in
								</Button>
							</Form>
					<div className='w-100 text-center mt-2'><Link to='/forgot-password' >Forgot password?</Link> </div>
						</Card.Body>
					</Card>
					<div className='w-100 text-center mt-2'>Need an account? <Link to='/signup' >Sign up</Link> </div>
				</Col>
			</Row>
		</Container>
	);
};
