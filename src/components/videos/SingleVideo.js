import React from 'react';

export const SingleVideo = ({video}) => {
	return (
		<div>
			<div className='card text-center videoCard'>
				<img src={video.imageURL} className='card-img-top' alt='Video' />
				<div className='card-body'>
					<h5 className='card-title'>{video.title}</h5>
					<h6 className='card-subtitle mb-2 text-muted '>Video Description</h6>
					<p className='card-text'>{video.desc.substring(0, 40)}...</p>
					<a href=" "><img src="https://img.icons8.com/bubbles/50/000000/play.png" alt='play'/></a>
				</div>
			</div>
		</div>
	);
}