import React from 'react'
import Layout from '../components/layout'

import bgImage from '../images/splat-bg.png'

export default () => 
	<Layout>
		<section id="intro"> 
			<img className="intro-bg" src={bgImage} alt="Gray Yeargin Background"/>
			<div className="intro-titles">
				<h1 className="intro-titles" id="name-title">Gray Yeargin</h1>
				<h3 className="intro-titles" id="location">Brooklyn, New York</h3>
				<h3 className="intro-titles" id="occupation">Web Developer | Programmer | UI Enthusiast</h3>
			</div>
		</section>
	</Layout>
