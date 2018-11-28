require('dotenv').config()

module.exports = {
	siteMetadata: {
	    title: `Title from siteMetadata`,
	},
	plugins: [
		`gatsby-plugin-sass`,
		`gatsby-plugin-react-helmet`,
		{
	      	resolve: `gatsby-source-contentful`,
	      	options: {
	        	spaceId: process.env.CONTENTFUL_SPACE_ID,
	        	accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
	      	},
	    },
	    {
	      	resolve: 'gatsby-plugin-web-font-loader',
	      	options: {
	        	google: {
	          		families: ['Raleway']
	        	}
	      	}
	    },
	    {
			resolve: `gatsby-plugin-google-tagmanager`,
			options: {
				id: 'UA-52536376-1',
			},
		},
	]
}