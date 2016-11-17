import React from 'react'
import {Link} from 'react-router'
require('../css/themebox.scss')

export class Themebox extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		let item = this.props.themeData
		let themebox = {
			position: 'relative',
			marginTop: '20px',
			marginLeft: '1%',
			width: '25%',
			minWidth: '300px',
			maxWidth: '350px',
			height: '500px',
			boxShadow: '2px 5px 5px rgba(0,0,0,.2)'
		}
		let imgbox = {
			position: 'relative',
			width: '100%',
			height: '250px'
		}
		let img = {
			position: 'relative',
			width: '100%',
			height: '100%',
			backgroundImage: 'url(' + item.thumbnail + ')',
			backgroundSize: 'cover'
		}
		let imgCover = {
			position: 'absolute',
			top: '0',
			width: '100%',
			height: '100%',
			zIndex: '100'
		}
		let content = {
			padding: '2px 10%',
			width: '100%',
			height: 'auto',
			fontSize: '16px',
			fontWeight: 'bold',
			textAlign: 'center',
			color: '#2f2f2f'
		}
		let line = {
			display: 'inline-block',
			width: '40px',
			height: '2px',
			background: '#d9d9d9'
		}
		let description = {
			fontWeight: 'normal'
		}
		return(
			<div className="themebox" style={themebox}>
				<Link className="box-cover" to={'/theme/' + item.id}>
					<button className="see-more-btn">查看更多</button>
				</Link>
				<div className="imgbox" style={imgbox}>
					<div className="img" style={img}></div>
					<div className="img-cover" style={imgCover}></div>
				</div>
				<div className="content" style={content}>
					<p>{item.name}</p>
					<p style={{margin: '10px 0 16px'}}>
						<span style={line}></span>
					</p>
					<p style={description}>
						{item.description}
					</p>
				</div>
			</div>
		)
	}
}