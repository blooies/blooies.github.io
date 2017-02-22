import React, { Component } from 'react';

class Project extends Component {
	render() {
		return (
			<div className='project'>
				<a href={this.props.link} target='_blank'>
					<div className='overlay'></div>
				</a>
				<span>{this.props.name}</span>
				<img src={this.props.source}></img>
			</div>
		)
	}
}

export default Project;

