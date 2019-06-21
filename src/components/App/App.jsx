import React from 'react';
import './App.scss';
import { LoginPage, IndexPage, NewsPage, ProfilePage } from '../pages';
import { TopMenu } from '../elements';
import { Container } from 'semantic-ui-react';
import { Route } from 'react-router-dom';

const App = () => {
	return (
		<Container className="top">
			<TopMenu />
			<Route path="/" exact render={() => <IndexPage />} />
			<Route path="/news" render={() => <NewsPage />} />
			<Route path="/profile" render={() => <ProfilePage />} />
			<Route path="/login" render={() => <LoginPage />} />
		</Container>
	);
};

export default App;
