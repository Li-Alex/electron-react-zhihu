import React from 'react'

require('../css/bgbox.scss')

export class Bgbox extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			bgUrl: ''
		}
	}
	componentDidMount(){
		this.getBgUrl()
	}
	getBgUrl(){
		let imgUrl = 'http://localhost:3333/getImage'
		let headers = new Headers()
		let fetchInit = {
			method: 'get',
			headers: headers,
			mode: 'cors',
			cache: 'default'
		}
		let requestImgUrl = new Request(imgUrl,fetchInit)
		fetch(imgUrl,fetchInit).then(res => {
			res.json().then(data =>{
				data.fileName = data.fileName.length ? data.fileName:'test'
				this.setState({
					bgUrl: '../static/images/' + data.fileName + '.png'
				})
			})
		})
	}
	render(){
		let style = {
			backgroundImage: 'url(' + this.state.bgUrl + ')',
			backgroundSize: 'cover'
		}
		return(
			<div className="bg-box" style={style}>
			</div>
		)
	}
}