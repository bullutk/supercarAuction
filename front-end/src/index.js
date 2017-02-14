import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers/index';

const theStore = createStore(reducers);
const dest = document.getElementById('root');

ReactDOM.render(
	<Provider store={theStore}>
  		<App />
  	</Provider>,
  	dest
);
