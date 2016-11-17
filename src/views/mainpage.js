import React from 'react'
import {Bgbox} from '../components/bgbox'
import {Articlebox} from '../components/articlebox'
import {Loading} from '../components/loading'
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
	componentWillReceiveProps(nextProps){
		if(this.props.location.pathname !== nextProps.location.pathname){
			this.setState({totalData: {}})
			let newsUrl = 'http://localhost:3333/getNews'
			let themeUrl = 'http://localhost:3333/getThemeDetail/' + nextProps.params.id
			let newResultUrl = nextProps.location.pathname.indexOf('theme') > 0 ? themeUrl : newsUrl
			
			this.getData(newResultUrl)
		}
	}
	getData(newResultUrl){
		let newsUrl = 'http://localhost:3333/getNews'
		let themeUrl = 'http://localhost:3333/getThemeDetail/' + this.props.params.id
		let resultUrl = this.props.location.pathname.indexOf('theme') > 0 ? themeUrl : newsUrl
		newResultUrl && (resultUrl = newResultUrl)
		let headers = new Headers()

		fetch(resultUrl,{
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
		})
	}
	render(){
		if(!this.state.totalData.stories) return(<Loading />)
		let data = this.state.totalData.stories
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