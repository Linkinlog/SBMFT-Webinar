import { Card, Col } from 'react-bootstrap';
import React from 'react';

export const SingleVideo = ({ video }) => {
	return (
		<Col key={video.id} className='my-4'>
			<a href={`/video/${video.id}`} className='videoCard'>
				<Card className='pb-1 text-center videoCard shadow1 rounded rounded-3'>
					<Card.Img src={video.imageURL} className='shadow1 card-img rounded rounded-3' alt='Video' />
					<Card.Body>
						<Card.Title>{video.title}</Card.Title>
						<Card.Text>{video.desc.substring(0, 40)}...</Card.Text>
					</Card.Body>
				</Card>
			</a>
		</Col>
	);
};
