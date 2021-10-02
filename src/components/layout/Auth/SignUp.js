import React, { useContext, useEffect, useRef, useState } from 'react';
import { Alert, Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import AuthContext from '../../../context/auth/authContext';

export const SignUp = () => {
	const history = useHistory()
	const authContext = useContext(AuthContext);
	const [error, setError] = useState();
	const [loading, setLoading] = useState(false);
	const email = useRef();
	const password = useRef();
	const passwordConfirm = useRef();
	const { signUp, isAuthenticated } = authContext;

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
		if (password.current.value !== passwordConfirm.current.value) {
			return setError('Passwords do not match');
		}
		try {
			setLoading(true);
			signUp(email.current.value, password.current.value).catch((error) => {
				setError(error.message);
				setTimeout(() => clear(), 2500);
			});
		} catch (error) {
			setError('Error signing up');
		}
	};

	return (
		<Container>
			<Row>
				<Col md={6} className='offset-md-3'>
					<Card className='mt-3'>
						<Card.Body>
							<Card.Title className='text-center'>
								<h1>Sign Up</h1>
							</Card.Title>
							<Form onSubmit={onSubmit}>
								<Form.Group id='email'>
									<Form.Label>Email</Form.Label>
									<Form.Control type='email' ref={email} autoComplete="username" required />
								</Form.Group>
								<Form.Group id='password'>
									<Form.Label>Password</Form.Label>
									<Form.Control type='password' autoComplete="new-password" ref={password} required />
								</Form.Group>
								<Form.Group id='passwordConfirm'>
									<Form.Label>Confirm Password</Form.Label>
									<Form.Control type='password' autoComplete="new-password" ref={passwordConfirm} required />
								</Form.Group>
								<Button type='submit' className={`w-100 mt-2 ${loading && 'disabled'}`}>
									Sign up
								</Button>
								{error && (
									<Alert className='mt-2' variant='danger'>
										{error}
									</Alert>
								)}
							</Form>
						</Card.Body>
					</Card>
					<div className='w-100 text-center mt-2'>
						Already have an account? <Link to='/login'>Log In</Link>{' '}
					</div>
				</Col>
			</Row>
		</Container>
	);
};
