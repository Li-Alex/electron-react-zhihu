import React from 'react'

require('../css/commentbox.scss')

export class Commentbox extends React.Component{
	constructor(props){
		super(props)
		this.state = {

		}
	}
	render(){
		let commentData = this.props.comments
		let time = new Date(parseInt(commentData.time + '000',10))
		commentData.time = time.toLocaleString()
		return(
			<div className="comment-box">
				<div className="head-box">
					<span className="avatar">
						<img src={commentData.avatar} />
					</span>
					<span className="author">
						{commentData.author}
					</span>
					<span className="time-box">
						{commentData.time}
					</span>
				</div>
				<div className="content">
					{commentData.content}
				</div>
				<div className="bottom-box">
					<span>
						<i className="iconfont icon-likefill"></i>{commentData.likes}
					</span>
				</div>
			</div>
		)
	}
}