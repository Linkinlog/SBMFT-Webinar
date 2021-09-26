import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { app } from '../../Config';
import AuthContext from '../../context/auth/authContext';

export const Navbar = () => {
	const authContext = useContext(AuthContext)
	const { login } = authContext;
	console.log(app.auth());
	if(app.auth().currentUser){
		login(app.auth().currentUser.providerData[0])
	}
	return (
		<nav className='navbar navbar-expand-lg navbar-dark bg-light'>
			<div className='container-fluid'>
				<Link className='navbar-brand ' to='/' >
					Courtney Seyler M.A, LMFT
				</Link>
				<button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div className='collapse navbar-collapse' id='navbarNav'>
					<ul className='navbar-nav'>
						<li className='nav-item'>
							<Link className='nav-link' to='/'>
								Home
							</Link>
						</li>
						<li className='nav-item'>
							<Link className='nav-link' to='/about'>
								About
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
