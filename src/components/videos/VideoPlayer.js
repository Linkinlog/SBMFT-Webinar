import React, { useContext, useEffect, useState } from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import VideoContext from '../../context/video/videoContext';
const VideoPlayer = () => {
	const videoContext = useContext(VideoContext);
	const { videos } = videoContext;
	let { id } = useParams();
	id = Number(id);
	const [video, setVideo] = useState();
	useEffect(() => {
		const video = videos.filter((video) => video.id === id);
		setVideo(video[0]);
	}, [id, videos]);
	return (
		<Col key={video?.id} className='my-4'>
				<Card className='pb-1 text-center shadow1 rounded rounded-3'>
					<iframe src="https://www.youtube.com/embed/EVAQWRqL6LY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
					{video?.isPurchased && (
						<Card.ImgOverlay className='locked'>
							<h2>Not purchased yet</h2>
						</Card.ImgOverlay>
					)}
					<Card.Body>
						<Card.Title>{video?.title}</Card.Title>
						<Card.Text>{video?.desc?.substring(0, 40)}...</Card.Text>
					</Card.Body>
				</Card>
		</Col>
	);
};

export default VideoPlayer;
