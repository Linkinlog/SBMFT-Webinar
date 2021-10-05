import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import VideoContext from '../../context/video/videoContext';
import AllVideos from '../videos/AllVideos';
import { SingleVideo } from '../videos/SingleVideo';

export const Home = () => {
	const videoContext = useContext(VideoContext);
	const { videos } = videoContext;
	const randInt = Math.floor(Math.random() * videos.length + 1)
	return (
		<Container fluid>
			<Row>
				<Col className='p-0' lg={{ span: 10, offset: 1 }}>
					<h2 className='text-center pt-2'>Most recent video</h2>
					<SingleVideo video={videos[randInt]} />
					<h2 className='text-center pt-2'>All Videos</h2>
					<Row xs={1} sm={2} md={3} className='mt-4'>
						<AllVideos videos={videos} />
					</Row>
				</Col>
			</Row>
		</Container>
	);
};
