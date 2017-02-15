import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/index';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import reduxPromise from 'redux-promise';
import Home from './containers/Home';
import Login from './containers/Login';
import Register from './containers/Register';
import Search from './containers/Search';


const theStoreWithMiddleware = applyMiddleware(reduxPromise)(createStore)(reducers);
const dest = document.getElementById('root');

ReactDOM.render(	
	<Provider store={theStoreWithMiddleware}>
		<Router history={hashHistory}>
			<Route path="/" component={App}>	
				<IndexRoute component={Home} />
				<Route path="/login" component={Login} />
				<Route path="/register" component={Register} />
				<Route path="/search/:term" component={Search} />
			</Route>
  		</Router>
  	</Provider>,	
  	dest
);
