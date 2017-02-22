import React, { Component } from 'react';
import Project from './Project';

class Projects extends Component {
	constructor(props) {
		super(props)
		this.funStuff = [
    		{ 
    			name: 'death stare battle', 
    			image:'./images/death-stare-battle.png',
                link: 'beverlymah.com/death-stare-battle',
    			git: 'www.github.com/blooies/death-stare-battle'
    		},
    		{
    			name: 'tetris',
    			image: './images/tetris.png',
                link: 'beverlymah.com/tetris',
    			git: 'www.github.com/blooies/tetris',
    		},
    		{
    			name: 'snake',
    			image: './images/snake.png',
                link: 'beverlymah.com/snake',
    			git: 'www.github.com/blooies/snake'
    		},
    		{
    			name: 'mantears',
    			image: './images/mantears.png',
                link: 'ibelieveicancry.club',
                git: 'www.github.com/blooies/man_tears'
    		},
    		{
    			name: 'truckhunter',
    			image: './images/truckhunter.png',
                link: 'truckhunter.herokuapp.com',
                git: 'www.github.com/blooies/TruckHunter'
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
                git={stuff.git}
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