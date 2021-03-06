import React, { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

export const Navbar = () => {
	const authContext = useContext(AuthContext);
	const { isAuthenticated } = authContext;
	const nav = useRef()
	const onClick = () => {
		nav.current.classList.contains('show') && nav.current.classList.remove('show') 
	}
	
	return (
		<nav className='navbar navbar-expand-lg navbar-dark bg-light'>
			<div className='container-fluid'>
				<Link className='navbar-brand ' to='/'>
					Courtney Seyler M.A., Licensed Marriage & Family Therapist
				</Link>
				<button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div ref={nav} onClick={onClick} className='collapse navbar-collapse' id='navbarNav'>
					<ul className='navbar-nav ms-auto'>
						<li className='nav-item'>
							<Link className='nav-link' to='/'>
								Home
							</Link>
						</li>
					</ul>
					{isAuthenticated ? (
						<ul className='navbar-nav'>
							<li className='nav-item'>
								<Link className='nav-link' to='/logout'>
									Log Out
								</Link>
							</li>
						</ul>
					) : (
						<ul className='navbar-nav'>
							<li className='nav-item'>
								<Link className='nav-link' to='/login'>
									Log In
								</Link>
							</li>
							<li className='nav-item'>
								<Link className='nav-link' to='/signup'>
									Sign Up
								</Link>
							</li>
						</ul>
					)}
				</div>
			</div>
		</nav>
	);
};
