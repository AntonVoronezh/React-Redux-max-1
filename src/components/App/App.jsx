import React, { Fragment } from 'react';
import './App.scss';
import { LoginPage, IndexPage, NewsPage, ProfilePage } from '../pages';
import { TopMenu } from '../elements';
import { Container } from 'semantic-ui-react';
import { Route } from 'react-router-dom';

const App = () => {
	return (
		<Container className="top">
			{/* <Fragment> */}
			<TopMenu />
			<Route path="/" render={() => <IndexPage />} />
			<Route path="/news" render={() => <NewsPage />} />
			<Route path="/profile" render={() => <ProfilePage />} />
			<Route path="/login" render={() => <LoginPage />} />

			{/* </Fragment> */}
		</Container>
	);
};

export default App;
