import './App.css';
import { Navbar } from './components/layout/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './components/layout/Home';
import { AuthPage } from './components/layout/AuthPage';
import AuthState from './context/auth/AuthState';

const App = () => {
	return (
		<AuthState>
			<Router>
				<Navbar />
				<div className='container'>
					<Switch>
						<Route exact path='/' component={Home} />
						<Route exact path='/auth' component={AuthPage} />
					</Switch>
				</div>
			</Router>
		</AuthState>
	);
};

export default App;
