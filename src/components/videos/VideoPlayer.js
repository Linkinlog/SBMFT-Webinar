import React, { useContext, useEffect, useState } from 'react';
import { Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import VideoContext from '../../context/video/videoContext';
import EmbeddedVideo from './EmbeddedVideo';
import { SingleVideo } from './SingleVideo';
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
			{video?.isPurchased ?
				<EmbeddedVideo video={video} /> : <SingleVideo video={video} />
		}
		</Col>
	);
};

export default VideoPlayer;
