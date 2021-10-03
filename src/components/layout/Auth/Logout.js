import React, { useContext, useEffect } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import AuthContext from '../../../context/auth/authContext';

export const Logout = () => {
	const authContext = useContext(AuthContext);
	const { logout, isAuthenticated } = authContext;
	const history = useHistory();
	const onClick = (e) => {
		e.preventDefault();
		logout();
	};

	useEffect(() => {
		!isAuthenticated && history.push('/');
		// eslint-disable-next-line
	}, [isAuthenticated]);

	return (
		<Container>
			<Row>
				<Col md={6} className='offset-md-3'>
					<Card className='mt-4 text-center'>
						<Card.Body>
							<Card.Title>
								<h2>Log Out</h2>
							</Card.Title>
							<Card.Text>Click below to sign out</Card.Text>
							<Button variant='primary' onClick={onClick}>
								Log Out
							</Button>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};
