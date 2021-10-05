import { Card, Col } from 'react-bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';

export const SingleVideo = ({ video }) => {
	return (
		<Col key={video?.id} className='my-4'>
			<Link to={`/video/${video?.id}`} className='videoCard'>
				<Card className='pb-1 text-center videoCard shadow1 rounded rounded-3'>
					<Card.Img src={video?.imageURL} className='shadow1 card-img rounded rounded-3' alt='Video' />
					{!video?.isPurchased && (
						<Card.ImgOverlay className='locked'>
							<h2>Not purchased yet</h2>
						</Card.ImgOverlay>
					)}
					<Card.Body>
						<Card.Title>{video?.title}</Card.Title>
						<Card.Text>{video?.desc.substring(0, 40)}...</Card.Text>
					</Card.Body>
				</Card>
			</Link>
		</Col>
	);
};
