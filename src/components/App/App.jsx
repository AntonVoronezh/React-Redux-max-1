import React from 'react';
import './App.scss';
import { LoginPage, IndexPage, NewsPage, ProfilePage } from '../pages';
import { TopMenu } from '../elements';
import { Container } from 'semantic-ui-react';
import { Route, Switch } from 'react-router-dom';

const App = () => {
	return (
		<Container className="top">
			<TopMenu />
			<Switch>
				<Route path="/" exact render={() => <IndexPage />} />
				<Route path="/news" render={() => <NewsPage />} />
				<Route path="/profile" render={() => <ProfilePage />} />
				<Route path="/login" render={() => <LoginPage />} />
				<Route render={() => <h2>Page not found</h2>} />
			</Switch>
		</Container>
	);
};

export default App;
