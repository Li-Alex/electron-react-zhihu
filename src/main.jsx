import React from 'react'
import { render } from 'react-dom'
import {
	IndexRoute,
	Router,
	Link,
	Route,
	browserHistory 
} from 'react-router'

import {Login} from './components/login.jsx'

export class App extends React.Component {
	
	render(){
		return (
			<div className="nav">
				<Link to="/">Home</Link>
				<Link to="/login">Login</Link>
				{this.props.children}
			</div>
		)
	}
}

export class Dashboard extends React.Component{
	render(){
		return(
			<div>Dashboard</div>
		)
	}
}

render((
	<Router history={browserHistory}>
		<Route name="app" path="/" component={App}>
			<IndexRoute component={Dashboard} />
		    <Route name="login" path="/login" component={Login}/>
		</Route>
	</Router>
),document.getElementById('app'))