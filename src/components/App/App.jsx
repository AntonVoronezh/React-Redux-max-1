import React, { Fragment } from 'react';
import './App.scss';
import { LoginPage, IndexPage, NewsPage, ProfilePage } from '../pages';
import { TopMenu } from '../elements';
import { Container } from 'semantic-ui-react';

const App = () => {
	return (
		<Container className="top">
			<Fragment>

				<TopMenu />
				<IndexPage />
				<NewsPage />
				<ProfilePage />
				<LoginPage />
			</Fragment>
		</Container>
	);
};

export default App;
