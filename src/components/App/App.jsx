import React, { Fragment } from 'react';
import './App.scss';
import { LoginPage, IndexPage, NewsPage, ProfilePage } from '../pages';

const App = () => {
	return (
		<Fragment>
			<IndexPage />
			<NewsPage />
			<ProfilePage />
			<LoginPage />
		</Fragment>
	);
};

export default App;
