import React from 'react'

export class Articlebox extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			totalData: {}
		}
	}
	componentDidMount(){
		this.getData()
	}
	getData(){
		let newsUrl = 'http://localhost:3333/getNews'
		let headers = new Headers()
		fetch(newsUrl,{
			method: 'get',
			mode: 'cors',
			headers: headers,
			cache: 'default'
		}).then(res => {
			return res.json()
		}).then(json => {
			this.setState({
				totalData: json
			})
			console.log(this.state.totalData)
		})
	}
	render(){
		let data = this.state.totalData.stories || []
		return(
			<div className="article-box">
				{data.map(item => {
					return <p>{item.title}</p>
				})}
			</div>
		)
	}
}