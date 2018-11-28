import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import parse from 'html-react-parser'
import Lightbox from '../components/lightbox'

const PortfolioPage = ({data}) => {
	return (
		<Layout>
			<section id="portfolio">
				<div className="container">
						{data.examples.items.map((example, idx) =>
							<div className="work-description" key={`${example.name}-${idx}`}>
								<div className="assets">
									<img className="work-image" alt={example.portfolioImage.title} src={example.portfolioImage.file.url}/>
									<div className="work-links">
										{example.webLinks ? example.webLinks.map(({displayText, url, icon}, idx) => 
											<a href={url} target="_blank" rel="noopener noreferrer" key={`${example.name}-link-${idx}`}><div className="button"><i className={`fa fa-${icon}`}></i> {displayText}</div></a>
										) : null}
									</div>
									{example.screenShots ? <Lightbox images={example.screenShots.map(({file}) => ({src: file.url, title: file.fileName, width: file.details.image.width, height: file.details.image.height}))} /> : null}
								</div>

								<div className="content">
									<h3 className="title-header">{example.name}</h3>
									<h5 className="sub-header">{example.role}</h5>
									{parse(example.description.description)}
									<h3>Skills Performed</h3>
									{example.techItems.map((item, idx) => <div className="tech-item" key={`${example.name}-tech-${idx}`}>{item}</div>)}
								</div>
							</div>
						)}

				</div>
			</section>
		</Layout>
	)
}

export default PortfolioPage

export const query = graphql`
  	query PortfolioPageQuery {
	    examples: contentfulOrder(name: {eq: "Portfolio Items"}) {
	    	items {
	        	id
	        	name
	        	role
	        	description {
	          		description
	        	}
	        	techItems
	        	webLinks {
	          		displayText
	          		url
	          		icon
	        	}
	        	portfolioImage {
	          		file {
	            		url
	            		fileName
	          		}
	        	}
	        	screenShots {
	          		id
	          		file {
	            		url
	            		fileName
	            		details {
			              	image {
			                	height
			                	width
			              	}
			            }
	          		}
	        	}
	      	}
	    }
	}
 `
