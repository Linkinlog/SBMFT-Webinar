import React from 'react'
import { Card } from 'react-bootstrap'

const EmbeddedVideo = ({video}) => {
	return (
		<Card className='pb-1 text-center shadow1 rounded rounded-3'>
		<iframe src={video?.videoURL} title="YouTube video player" className='rounded rounded-3' frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
		{!video?.isPurchased && (
			<Card.ImgOverlay className='locked'>
				<h2>Not purchased yet</h2>
			</Card.ImgOverlay>
		)}
		<Card.Body>
			<Card.Title>{video?.title}</Card.Title>
			<Card.Text>{video?.desc?.substring(0, 40)}...</Card.Text>
		</Card.Body>
	</Card>
	)
}

export default EmbeddedVideo
