import './App.css';
import { Navbar } from './components/layout/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './components/layout/Home';
const App = () => {
	return (
		<Router>
			<Navbar />
			<div className='container'>
				<Switch>
					<Route exact path='/' component={Home} />
				</Switch>
			</div>
		</Router>
	);
};

export default App;
