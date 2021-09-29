import './App.css';
import { Navbar } from './components/layout/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './components/layout/Home';
import { SignUp } from './components/layout/SignUp';
import AuthState from './context/auth/AuthState';
import { Login } from './components/layout/Login';
import { Logout } from './components/layout/Logout';

const App = () => {
	return (
		<AuthState>
			<Router>
				<Navbar />
				<div className='container'>
					<Switch>
						<Route exact path='/' component={Home} />
						<Route exact path='/signup' component={SignUp} />
						<Route exact path='/login' component={Login} />
						<Route exact path='/logout' component={Logout} />
					</Switch>
				</div>
			</Router>
		</AuthState>
	);
};

export default App;
