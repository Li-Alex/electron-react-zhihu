import React from 'react'

require('../css/loading.scss')

export class Loading extends React.Component{
	render(){
		return(
			<div className="loading-wrapper">
				<div className="loading-box">
					<span className="rect1"></span>&nbsp;
					<span className="rect2"></span>&nbsp;
					<span className="rect3"></span>&nbsp;
					<span className="rect4"></span>&nbsp;
					<span className="rect5"></span>&nbsp;
				</div>
			</div>
		)
	}
}