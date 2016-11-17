import React from 'react'
import {Link,IndexLink} from 'react-router'

require('../css/sidebar.scss')

export class Sidebar extends React.Component {
	render(){
		return(
			<div className="sidebar-box">
				<ul>
					<li>
						<IndexLink className="menu-btn mainpage-btn" activeClassName="active" to="/">首</IndexLink>
					</li>
					<li>
						<Link className="menu-btn more-btn iconfont icon-caidan" activeClassName="active" to="/theme"></Link>
					</li>
				</ul>
			</div>
		)
	}
}
