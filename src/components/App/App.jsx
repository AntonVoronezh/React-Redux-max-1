import React, { Fragment } from 'react';
import './App.scss';
import { LoginPage, IndexPage } from '../pages';

const App = () => {
	return (
		<Fragment>
			<IndexPage />
			<LoginPage />
		</Fragment>
	);
};

export default App;
