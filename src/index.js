import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import createStore from './store/store';
import App from './components/App';
import 'semantic-ui-css/semantic.min.css';

// const store = createStore();

ReactDOM.render(
	// <Provider store={store}>
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	// </Provider>
	document.getElementById('root')
);
