import React from 'react';
import './App.css';
import { Container } from 'semantic-ui-react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Menu from '../Menu/Menu.jsx';
import Login from '../../containers/Login/Login';
import Profile from '../Profile/Profile';
import News from '../News/News';

export default props => {
	props.loginCB();
	
	let routes = (
		<React.Fragment>
			<Menu {...props} />
			<Route path="/news" component={News} />
			<Route path="/profile" component={Profile} />
			<Route path="/" exact render={() => <h1>Главная</h1>} />
		</React.Fragment>
	);

	if (!props.isLogged) {
		routes = (
			<React.Fragment>
				<Menu {...props} />
				<Route path="/news" component={News} />
				<Route path="/login" component={Login} />
				<Route path="/" exact render={() => <h1>Главная</h1>} />
				{/* <Redirect to="/profile" from="/login"/> */}
			</React.Fragment>
		);
	}

	return <Container className="App">{routes}</Container>;

	// if (props.isLogged) {
	// return (
	// 	<Container className="App">
	// 		<Menu {...props} />
	// 		<Route path="/" exact render={() => <h1>Главная</h1>} />
	// 		<Route path="/news" component={News} />
	// 		<Route path="/profile" component={Profile} />
	// 	</Container>
	// );
	// } else {
	// 	return (
	// 		<Container className="App">
	// 			<Menu {...props} />
	// 			<Route path="/" exact render={() => <h1>Главная</h1>} />
	// 			<Route path="/news" component={News} />
	// 			<Route path="/login" component={Login} />
	// 		</Container>
	// 	);
	// }
	// return (
	// 	<Container className="App">
	// 		<Menu {...props} />
	// 		<Route path="/" exact render={() => <h1>Главная</h1>} />
	// 		<Route path="/news" component={News} />
	// 		{/* <Switch>
	// 			<Route path="/login" component={Login} />
	// 			<Route path="/profile" component={Profile} />
	// 		</Switch> */}

	// 		{/* {props.isLogged ?<Route path="/profile" component={Profile} /> : <Route path="/login" component={Login} />} */}
	// 		{/* {props.isLogged ? <Redirect from="/login" to="/profile" /> : null} */}
	// 	</Container>
	// );
};
