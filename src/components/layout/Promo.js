import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import VideoContext from '../../context/video/videoContext';
import AllVideos from '../videos/AllVideos';
import EmbeddedVideo from '../videos/EmbeddedVideo';

export const Promo = () => {
	const videoContext = useContext(VideoContext);
	const { videos, promoVid } = videoContext;
	const top3 = [];
	for (let i = 0; i < 3; i++) {
		top3.push(videos[Math.floor(Math.random() * videos.length)]);
	}

	return (
		<Container fluid>
			<Row>
				<Col xs={{ span: 10, offset: 1 }} className='mt-3'>
					<EmbeddedVideo video={promoVid} />
				</Col>
			</Row>
			<Row>
				<Col xs={{ span: 6, offset: 3 }}>
					<p className='promoText'>Here might be some supporting text about what you do and to basically serve as the text form for readers to view that do not wish to watch a video right off the bat and would rather read a little about you instead of hear about you so they will read this paragraph to get an idea of all of that but for now it can just be this placeholder text which basically means nothing but gives a good idea of what it will look like to have text written all over the page instead of some weird latin words and instead of having to imagine what it would look like with a few lines of words here. So here are a good bit of words that may be roughly about the length of space it would be to describe what you do in enough detail to hook the person in.</p>
				</Col>
			</Row>
			<Row xs={3} className='g-4 mt-4'>
				<AllVideos videos={top3} />
			</Row>
		</Container>
	);
};
