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
	browserHistory,
	IndexRoute
} from 'react-router'

const RouterConfig = (
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Mainpage} />
			<Route path="story/:id" component={ArticleDetail} />
			<Route path="theme" component={Themepage} />
			<Route path="theme/:id" component={Mainpage}></Route>
		</Route>
	</Router>
)
export default RouterConfig