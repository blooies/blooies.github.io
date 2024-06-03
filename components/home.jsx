import React, { Component } from 'react';
import Logo from './Logo';
import Banner from './Banner';
import Projects from './Projects';
import Footer from './Footer';

class Home extends Component {
    render() {
        return (
        	<div>
        		<Logo/>
	        	<Banner/>
	        	<Projects/>
	        	<Footer />
	        </div>
        )
    }
}

export default Home;
