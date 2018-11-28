import React from 'react'

const musicMapPortfolio = () =>
	<div className="work-description">
		<div className="left-section">
			<a href="https://secret-spire-1033.herokuapp.com/" target="_blank"><div className="button"><i className="fa fa-external-link"></i> Launch App</div></a>
			<a href="https://github.com/grayyeargin/Disc-ovr" target="_blank"><div className="button"><i className="fa fa-github-square fa-lg"></i> View Code</div></a>
			<div className="gallery">
			
			</div>
		</div>
		<div className="content">
			<h3 className="title-header">MusicMap</h3>
			<h5 className="sub-header">Full Stack Web Developer</h5>
			<p>MusicMap is a web application designed to aggregate information on musical artist's to give the user more information in one search. To do this my team and I consumed multiple 3rd party API's and directed them to one page for each queried artist. This query would produce a page with relevant Twitter, Spotify, lastFM, and Reddit information on the artist. Bootstrap is utilized for page styling with jQuery effects on the album transitions on the home page.</p>
			<h3>Skills Utilized</h3>
			<ul>
				<li>Ruby on Rails</li>
				<li>Javascript</li>
				<li>Bootstrap</li>
				<li>CSS</li>
				<li>jQuery</li>
				<li>API</li>
			</ul>
		</div>
		<span className="close">&times;</span>
	</div>

export default musicMapPortfolio