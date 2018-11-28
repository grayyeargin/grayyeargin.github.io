import React from 'react'

const tdPortfolio = () =>
	<div className="work-description">
		<div className="left-section">
			<div className="gallery">
				<a href="images/td-ss1.png" data-lightbox="td-set">
					<img className="box-image" src="images/td-ss1.png" alt=""/>
				</a>
				<a href="images/td-ss2.png" data-lightbox="td-set">
					<img className="box-image" src="images/td-ss2.png" alt=""/>
				</a>
			</div>
		</div>
		<div className="content">
			<h3 className="title-header">TD Ameritrade</h3>
			<h5 className="sub-header">Full Stack Web Developer</h5>
			<p>TD Ameritrade is an online brokerage firm with offices in Jersey City, NJ. I was hired by the Infrastructure team to develop dashboard reporting tools for both client and internal use.</p>
			<p>The project required accessing, analyzing, and srubbing data from multiple remote MS SQL databases. I constructed the back end with Ruby, using the Sinatra framework.</p>
			<p>On the front end D3.js was utilized to build interactive data visualizations. Stylus and the CSS framework Skeleton were front end tools used to build a responsive "mobile first" layout.</p>
			<h3>Skills Utilized</h3>
			<ul>
				<li>Javascript</li>
				<li>D3.js</li>
				<li>Stylus</li>
				<li>Ruby</li>
				<li>Sinatra</li>
				<li>Responsive Design</li>
				<li>Microsoft SQL</li>
				<li>jQuery</li>
				<li>HTML5</li>
				<li>CSS3</li>
			</ul>
		</div>
		<span className="close">&times;</span>
	</div>

export default tdPortfolio