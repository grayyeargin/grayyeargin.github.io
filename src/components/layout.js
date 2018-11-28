import React from 'react'
import {Link} from 'gatsby'
import {Helmet} from "react-helmet"

import '../css/index.scss'

export default ({children, location}) =>
	<div>
		<Helmet>
			<title>Gray Yeargin | Web Developer | Brooklyn, NY</title>
			<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" />
			<meta name="description" content="Gray Yeargin is a Full Stack Web Developer specializing in Front End Engineering. Based out of Brooklyn, New York." />
			<meta name="keywords" content="Web Front End Engineer React D3 CSS Developer Javascript JS" />
		</Helmet>
		<header>
			<div className="header-container">
				<div className="logo">
					<Link to="/">{`{gy}`}</Link>
				</div>
				<nav>
					<ul>
						<HeaderLink route={`Portfolio`}/>
						<HeaderLink route={`About`}/>
						<HeaderLink route={`Contact`}/>
					</ul>
				</nav>
			</div>
		</header>
		{children}
	</div>

const HeaderLink = ({route}) => {
	const active = typeof window !== 'undefined' && window.location.pathname.replace(/\//g, ``) === route.toLowerCase()
	return <li className={active ? `active-link` : ``}><Link to={`/${route.toLowerCase()}`}>{route}</Link></li>
}