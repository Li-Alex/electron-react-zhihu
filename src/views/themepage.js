import React from 'react'
import {Themebox} from '../components/themebox'
import {Loading} from '../components/loading'

require('../css/themepage.scss')

export class Themepage extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			themeData: {}
		}
	}
	componentDidMount(){
		let themeUrl = 'http://localhost:3333/getMenu'
		fetch(themeUrl,{
			mode: 'cors'
		}).then(res => {
			return res.json()
		}).then(data => {
			this.setState({
				themeData: data
			})
		})
	}
	render(){
		if(!this.state.themeData.others) return(<Loading />)
		let data = this.state.themeData.others
		return(
			<div className="themepage-box">
				<div className="themebox-wrapper">
					{
						data.map(item => {
							return(
								<Themebox className="theme-box" key={item.id} themeData={item}></Themebox>
							)
						})
					}
				</div>
			</div>
		)
	}
}