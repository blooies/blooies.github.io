import React, { Component } from 'react';
import Project from './Project';

class Projects extends Component {
	constructor(props) {
		super(props)
		this.funStuff = [
    		{ 
    			name: 'death stare battle', 
    			image:'./images/death-stare-battle.png',
    			link: 'github.com/blooies/death-stare-battle'
    		},
    		{
    			name: 'tetris',
    			image: './images/tetris.png',
    			link: 'github.com/blooies/tetris',
    		},
    		{
    			name: 'snake',
    			image: './images/snake.png',
    			link: 'github.com/blooies/snake'
    		},
    		{
    			name: 'mantears',
    			image: './images/mantears.png',
    		},
    		{
    			name: 'truckhunter',
    			image: './images/truckhunter.png'
    		}
    	]
	}

	renderProjects() {
		return this.funStuff.map((stuff) => (
			<Project
				key={stuff.name}
				source={stuff.image}
				name={stuff.name}
				link={stuff.link}
			/>
		))
	}

	render() {
		return (
			<div className='projects-container'>
				{this.renderProjects()}
			</div>
		)
	}
}



export default Projects;

