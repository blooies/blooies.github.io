import React, { Component } from 'react';

class Project extends Component {
	render() {
		return (
			<div className='project'>
				<div className='overlay'>
					<a href={this.props.link} target='_blank'>{this.props.name}</a>
				</div>
				<img src={this.props.source}></img>
			</div>
		)
	}
}

export default Project;