import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import './materialize.css';
import HomePage from './containers/HomePage/HomePage.js';
import CabinetPage from './containers/CabinetPage/CabinetPage.js';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<BrowserRouter>
		<Switch>
			<Route exact path= '/' component= {HomePage} />
			<Route path= '/cabinet' component= {CabinetPage} />
		</Switch>
	</BrowserRouter>


	, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
