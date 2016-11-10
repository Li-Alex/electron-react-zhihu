import React from 'react'
import {App} from './views/app'
import {Mainpage} from './components/mainpage'
import {
	Router,
	Link,
	Route,
	Redirect,
	browserHistory 
} from 'react-router'

const RouterConfig = (
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<Route path="main" component={Mainpage} />
		</Route>
		<Redirect from="/" to="main" />
	</Router>
)
export default RouterConfig