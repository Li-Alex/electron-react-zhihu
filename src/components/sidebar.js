import React from 'react'
import {Link} from 'react-router'

require('../css/sidebar.scss')

export class Sidebar extends React.Component {
	render(){
		return(
			<div className="sidebar-box">
				<ul>
					<li>
						<Link className="menu-btn mainpage-btn active" to="/main">首</Link>
					</li>
					<li>
						<a className="menu-btn more-btn iconfont icon-caidan" href="javascript:;"></a>
					</li>
				</ul>
			</div>
		)
	}
}
