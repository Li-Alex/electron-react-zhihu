import React from 'react'
import {IndexLink} from 'react-router'
import {Commentbox} from '../components/commentbox'
import {Loading} from '../components/loading'

require('../css/articleDetail.scss')

export class ArticleDetail extends React.Component{
	constructor(props,context){
		super(props,context)
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
	
	goBack(){
		this.context.router.goBack(-1)
	}
	render(){
		let data = this.state.articleData
		if(!data.extra) return(<Loading />)
		let comments = data.extra.comments
		return(
			<div className="detail-box">
				<a className="close-btn" onClick={this.goBack.bind(this)}><i className="iconfont icon-close"></i></a>
				<div className="title-box">
					{data.extra.title}
				</div>
				<div className="extra-box">
					<span>
						<i className="iconfont icon-likefill"></i>{data.extra.popularity}
					</span>
					<span>
						<i className="iconfont icon-liuyan"></i>{data.extra.short_comments}
					</span>
				</div>
				<div className="img-box">
					<img src={data.extra.image} />
				</div>
				<div className="content-box" dangerouslySetInnerHTML={{__html: data.body}} />
				<div className="comment-wrapper">
					<div className="comment-tips">
						{data.extra.short_comments}条短评论
					</div>
					{
						comments.map(item => {
							return <Commentbox comments={item} key={item.id}/>
						})
					}
				</div>
			</div>
		)
	}
}
ArticleDetail.contextTypes = {
	router: React.PropTypes.object
}