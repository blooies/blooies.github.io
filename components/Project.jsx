import React, { Component } from 'react';

class Project extends Component {
	render() {
		return (
			<div className='project'>
				<a href={this.props.link} target='_blank'>
					<img src={this.props.source}></img>
				</a>
				<div className='overlay'><span>{this.props.name}</span></div>
			</div>
		)
	}
}

export default Project;