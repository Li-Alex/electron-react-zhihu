import React from 'react'
import {Link} from 'react-router'
require('../css/articlebox.scss')

export class Articlebox extends React.Component{
	render(){
		let data = this.props.articleData
		return(
			<div className="article-box">
				<div className="content-box">
					<Link to={'/story/' + data.id} className="title">
						{data.title}
					</Link>
					<span className="link">
						原文链接: <a href={'http://daily.zhihu.com/story/' + data.id}>{'http://daily.zhihu.com/story/'+data.id}</a>
					</span>
				</div>
				<div className="img-box">
					<img src={data.images[0]} />
				</div>
			</div>
		)
	}
}