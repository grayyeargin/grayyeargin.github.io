exports.onRouteUpdate = ({location}) => {
	updateAnalytics(location)
}

function updateAnalytics(location) {
	const path = location.pathname

	if (window.gtag) {
		window.gtag(`js`, new Date())
		window.gtag(`config`, `UA-52536376-1`, {page_path: path})
	}
}
