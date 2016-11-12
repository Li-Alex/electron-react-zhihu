import React from 'react'

require('../css/themepage.scss')

export class Themepage extends React.Component{
	constructor(props){
		super(props)
		this.state = {

		}
	}
	render(){
		return(
			<div className="themepage-box">
				<h1>thempage</h1>
			</div>
		)
	}
}