import React from 'react';
import './App.scss';
import { IndexPage, NewsPage, ProfilePage } from '../pages';
import { LoginPage } from '../../containers/pages';
import { TopMenu } from '../../containers/elements';
import { Container } from 'semantic-ui-react';
import { Route, Switch } from 'react-router-dom';
import { ErrorButton } from '../errors';

const App = () => {
	return (
		<Container className="top">
			<TopMenu />
			{/* <ErrorButton /> */}
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
