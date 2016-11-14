import React from 'react'
import {App} from './views/app'
import {Mainpage} from './views/mainpage'
import {Themepage} from './views/themepage'
import {ArticleDetail} from './views/articledetail'
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
			<Route path="main/story/:id" component={ArticleDetail} />
			<Route path="theme" component={Themepage} />
		</Route>
		<Redirect from="/" to="main" />
	</Router>
)
export default RouterConfig