import React from 'react'
import {Bgbox} from '../components/bgbox'
import {Articlebox} from '../components/articlebox'

require('../css/mainpage.scss')

export class Mainpage extends React.Component{
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
		let time = new Date()
		let today = time.toLocaleString().split(' ')[0]
		today = today.split('/')
		today = today[0] + '·' + today[1] + '·' + today[2] + '·'
		return(
			<div className="mainpage-box">
				<Bgbox />
				<div className="right-side">
					<div className="date-box">
						<h2>{today}</h2>
					</div>
					<div className="article-list">
						{data.map(item => {
							return <Articlebox key={item.id} articleData={item}/>
						})}
					</div>
				</div>
			</div>
		)
	}
} 