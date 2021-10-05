import './App.css';
import { Navbar } from './components/layout/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './components/layout/Home';
import { SignUp } from './components/layout/Auth/SignUp';
import AuthState from './context/auth/AuthState';
import { Login } from './components/layout/Auth/Login';
import { Logout } from './components/layout/Auth/Logout';
import { ForgotPassword } from './components/layout/Auth/ForgotPassword';
import { PrivateRoute } from './components/PrivateRoute';
import { Promo } from './components/layout/Promo';
import VideoPlayer from './components/videos/VideoPlayer';
import { Container } from 'react-bootstrap';
import VideoState from './context/video/VideoState';

const App = () => {
	return (
		<AuthState>
			<VideoState>
				<Router>
					<Navbar />
					<Container fluid>
						<Switch>
							<Route path='/signup' component={SignUp} />
							<Route path='/login' component={Login} />
							<Route path='/logout' component={Logout} />
							<Route path='/forgot-password' component={ForgotPassword} />
							<Route path='/video/:id' component={VideoPlayer} />
							<PrivateRoute exact path='/' component={Home} />
							<Route exact path='/promo' component={Promo} />
						</Switch>
					</Container>
				</Router>
			</VideoState>
		</AuthState>
	);
};

export default App;
