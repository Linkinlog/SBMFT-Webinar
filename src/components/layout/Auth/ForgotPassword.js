import React, { useContext, useRef, useState } from 'react';
import { Alert, Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AuthContext from '../../../context/auth/authContext';
export const ForgotPassword = () => {
	const authContext = useContext(AuthContext);
	const [error, setError] = useState();
	const [message, setMessage] = useState();
	const [loading, setLoading] = useState(false);
	const email = useRef();
	const { resetPW } = authContext;

	const clear = () => {
		setLoading(false);
		setError();
	};

	const onSubmit = (e) => {
		e.preventDefault();
		try {
			resetPW(email.current.value);
			setMessage('Email sent! Please check your inbox and spam folders.');
			setLoading(true);
		} catch (error) {
			setError('Error resetting password');
			console.error(error);
			setTimeout(() => clear(), 2500);
		}
	};

	return (
		<Container>
			{error && (
				<Row>
					<Col md={6} className='offset-md-3 mt-3'>
						<Alert variant='danger'>{error}</Alert>
					</Col>
				</Row>
			)}
			<Row>
				<Col md={6} className='offset-md-3'>
					<Card className='mt-3'>
						<Card.Body>
							{message && (
								<Row>
									<Col md={6} className='offset-md-3 mt-3'>
										<Alert variant='info'>{message}</Alert>
									</Col>
								</Row>
							)}
							<Card.Title className='text-center'>
								<h1>Forgot password</h1>
							</Card.Title>
							<Form onSubmit={onSubmit}>
								<Form.Group id='email'>
									<Form.Label>Email</Form.Label>
									<Form.Control type='email' ref={email} autoComplete='username' required />
								</Form.Group>
								<Button type='submit' className={`w-100 mt-2 ${loading && 'disabled'}`}>
									Send Reset Email
								</Button>
							</Form>
						</Card.Body>
					</Card>
					<div className='w-100 text-center mt-2'>
						<Link to='/login'>Log in</Link>{' '}
					</div>
				</Col>
			</Row>
		</Container>
	);
};
