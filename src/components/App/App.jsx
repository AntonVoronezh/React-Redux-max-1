import React, { Component } from 'react';
import './App.scss';
import { IndexPage, NewsPage, ProfilePage } from '../pages';
import { LoginPage } from '../../containers/pages';
import { TopMenu } from '../../containers/elements';
import { Container } from 'semantic-ui-react';
import { Route, Switch } from 'react-router-dom';
import { ErrorButton } from '../errors';

class App extends Component {
	state = {
		isLoggedIn: false,
	};
	onLogin = () => {
		this.setState({ isLoggedIn: true });
	};

	render() {
		const { isLoggedIn } = this.state;

		return (
			<Container className="top">
				<TopMenu />
				{/* <ErrorButton /> */}
				<Switch>
					<Route path="/" exact render={() => <IndexPage />} />
					<Route path="/news" render={() => <NewsPage />} />
					<Route path="/profile" render={() => <ProfilePage isLoggedIn={isLoggedIn} />} />
					<Route path="/login" render={() => <LoginPage onLogin={this.onLogin} isLoggedIn={isLoggedIn} />} />
					<Route render={() => <h2>Page not found</h2>} />
				</Switch>
			</Container>
		);
	}
}

export default App;
