import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import 'semantic-ui-css/semantic.min.css';
import store from './store/store';
import App from './components/App';
import { ErrorBoundry } from './components/errors';
import { AuthServiceProvider } from './helpers';
import { AuthService } from './services';

const authService = new AuthService();
const storeService = store();

ReactDOM.render(
	<Provider store={storeService}>
		<ErrorBoundry>
			<BrowserRouter>
				<AuthServiceProvider value={authService}>
					<App />
				</AuthServiceProvider>
			</BrowserRouter>
		</ErrorBoundry>
	</Provider>,
	document.getElementById('root')
);
