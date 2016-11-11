import React from 'react'
import {Bgbox} from '../components/bgbox'
import {Articlebox} from '../components/articlebox'

require('../css/mainpage.scss')

export class Mainpage extends React.Component{
	render(){
		return(
			<div className="mainpage-box">
				<Bgbox />
				<Articlebox />
			</div>
		)
	}
} 