import React from 'react'
import { render } from 'react-dom'
import {Sidebar} from '../components/sidebar'

import {
	IndexRoute,
	Router,
	Link,
	Route,
	browserHistory 
} from 'react-router'

export class App extends React.Component{
	render(){
		return (
			<div className="container">
				<Sidebar />
				<div className="router-view">
					{this.props.children}
				</div>
			</div>
		)
	}
}