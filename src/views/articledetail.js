import React from 'react'
import {Link} from 'react-router'
import {Commentbox} from '../components/commentbox'
import {Loading} from '../components/loading'

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
		if(!data.extra) return(<Loading />)
		let comments = data.extra.comments
		return(
			<div className="detail-box">
				<Link className="close-btn" to="/main"><i className="iconfont icon-close"></i></Link>
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