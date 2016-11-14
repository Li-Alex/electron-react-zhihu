import React from 'react'

require('../css/articleDetail.scss')

export class ArticleDetail extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			articleId: this.props.params.id,
			articleData: {}
		}
	}
	componentWillMount(){
		let detailUrl = 'http://localhost:3333/getNewsDetail'
		$.ajax({
			method: 'get',
			url: detailUrl,
			data: {id: this.state.articleId},
			success: data => {
				this.setState({articleData: data})
			}
		})

	}
	render(){
		let data = this.state.articleData
		data.extra ? '' : data.extra = {}
		return(
			<div className="detail-box">
				<div className="title-box">
					{data.extra.title}
				</div>
				<div className="extra-box">
					<span>
						点赞:{data.extra.popularity}
					</span>
					<span>
						短评论:{data.extra.short_comments}
					</span>
				</div>
				<div className="img-box">

				</div>
				<div className="content-box" dangerouslySetInnerHTML={{__html: data.body}} />
			</div>
		)
	}
}