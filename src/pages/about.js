import React from 'react'
import Layout from '../components/layout'

import meImage from '../images/myphoto.png'

export default () => 
	<Layout>
		<section id="about">
			<div className="container">
				<img alt="Gray Yeargin" src={meImage} className="about-me-img" />
				<div id="about_me">
						<h1 className="title-header">About Gray</h1>
						<p>As a Full Stack Web Developer with experience working in various web related roles, I have a wide array of skills spanning from User Interface development to Database architecture.</p>
						<p>While specializing in client side programming, having the knowledge and experience of both sides of the web spectrum allows for development of the project with full scope in mind as well input and understanding of all aspects of the project. This results in a well-integrated web application that is more robust and maintainable.</p>
						<h3 className="minor-header">Front End Development</h3>
						<p>I focus on enhancing the user experience by creating quick, responsive, cross-browser compatable web applications that utilize the industries latest web technology and best practices. The goal is to produce code that work on older browsers and devices, while taking the next step in modern browsers that offer the most recent features.</p>
						<h3 className="minor-header">Back End Development</h3>
						<p>Many of the projects I have worked on have required a dynamic application with a fully customized back end built from the ground up, connecting to both local and remote databases.
						When developing these projects I aim to create scalable, quick, robust, and easily maintainable code.</p>
				</div>
			</div>
		</section>
	</Layout>
