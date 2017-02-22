import React, { Component } from 'react';
import Logo from './Logo';
import Banner from './Banner';
import Projects from './Projects';

class Home extends Component {
    render() {
        return (
        	<div>
        		<Logo/>
	        	<Banner/>
	        	<Projects/>
	        </div>
        )
    }
}

export default Home;