import React from 'react'
import {Link} from 'react-router'

export class Sidebar extends React.Component {
	render(){
		return(
			<div className="sidebar-box">
				<ul>
					<li className="mainpage-btn">
						<Link to="/main">首页</Link>
					</li>
					<li className="more-btn">
						<a href="javascript:;"><i className="iconfont"></i>more</a>
					</li>
				</ul>
			</div>
		)
	}
}
