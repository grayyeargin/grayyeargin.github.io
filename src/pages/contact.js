import React from 'react'
import Layout from '../components/layout'

export default () => 
	<Layout>
		<section id="contact">
			<div className="container">
					<h1 className="title-header">Contact Gray</h1>
					<div id="contact-hello">
						<p>I would love to hear from you, whether your inquiring about work or just to chat. Feel free to contact me through any of the following media sources and I will be back in touch as soon as possible.</p>
						<p>Cheers!</p>	
					</div>
					<div id="contact-icons">
						<div className="icon">
							<i className="fa fa-mobile fa-2x"></i>
							<a href="tel:+18644190741"><div className="social-text">864.419.0741</div></a>
						</div>
						<div className="icon">
							<i className="fa fa-envelope-o fa-2x"></i>
							<a href="mailto:grayyeargin@gmail.com"><div className="social-text">grayyeargin@gmail.com</div></a>
						</div>
						<div className="icon">
							<i className="fa fa-github fa-2x"></i>
							<a href="https://github.com/grayyeargin"><div className="social-text">github.com/grayyeargin</div></a>
						</div>
						<div className="icon">
							<i className="fa fa-linkedin fa-2x"></i>
							<a href="https://www.linkedin.com/pub/gray-yeargin/24/368/79a" target="_blank" rel="noopener noreferrer"><div className="social-text">linkedin.com/in/grayyeargin</div></a>
						</div>
						<div className="icon">
							<i className="fa fa-instagram fa-2x"></i>
							<a href="https://instagram.com/grayyeargin/"><div className="social-text">instagram.com/grayyeargin</div></a>
						</div>
						<div className="icon">
							<i className="fa fa-angellist fa-2x"></i>
							<a href="https://angel.co/gray-yeargin"><div className="social-text">angel.co/gray-yeargin</div></a>
						</div>
					</div>
			</div>
		</section>
	</Layout>
