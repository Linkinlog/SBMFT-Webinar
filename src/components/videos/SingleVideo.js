import React from 'react';

export const SingleVideo = ({ video }) => {
	return (
		<div key={video.id} className='col my-4'>
			<a href={`/video/${video.id}`} className='videoCard'>
				<div className='card pb-1 text-center videoCard shadow1 rounded rounded-3'>
					<img src={video.imageURL} className='card-img-top shadow1 rounded rounded-3' alt='Video' />
					<div className='card-body'>
						<h5 className='card-title'>{video.title}</h5>
						<p className='card-text'>{video.desc.substring(0, 40)}...</p>
					</div>
				</div>
			</a>
		</div>
	);
};
