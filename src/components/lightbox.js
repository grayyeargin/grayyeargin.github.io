import React from 'react'
import PropTypes from 'prop-types'

class Lightbox extends React.Component {
	static propTypes = {
		images: PropTypes.arrayOf(PropTypes.object),
		thumbOptions: PropTypes.object
	}

	state = {
		activeLightbox: false,
		currentImage: 0
	}
	
	toggleLightbox = imageIdx => {
		this.setState({
			activeLightbox: !this.state.activeLightbox,
			currentImage: imageIdx
		})
	}

	render() {
		const {images, thumbStyle} = this.props
		const {activeLightbox, currentImage} = this.state
		
		return (
			<React.Fragment>
				{activeLightbox ? <ExpandedLightbox close={() => this.toggleLightbox()}image={images[currentImage]} /> : null}
				<div className="lightbox--thumbnail-gallery" >
					{images.map((image, idx) => <ThumbnailImg onClick={() => this.toggleLightbox(idx)} src={image.src} title={image.title} styls={thumbStyle} key={`thumb-${idx}`}/>)}
				</div>
			</React.Fragment>
		)
	}
}

export default Lightbox


const ThumbnailImg = ({src, title, styles, onClick}) => {
	const defaultStyles = {
		width: 75,
		height: 75
	}

	return <img className="lightbox--thumbnail" onClick={onClick} style={{...defaultStyles, ...styles}} alt={title} src={src} />
}


const ExpandedLightbox = ({image, close}) => {
	return (
		<div className="lightbox--body">
			<div className="lightbox--flex vert-ctr horz-ctr">
				<div className="lightbox--image-container">
					<span onClick={close} className="lightbox-close-btn">&#10006;</span>
					<img className="lightbox--image" src={image.src} alt={image.title} />
				</div>
			</div>
		</div>
	)
}
