import React, { useState } from 'react';
import { SingleVideo } from './SingleVideo';

export const VideosMain = () => {
	const [video] = useState([
		{
			id   : 1,
			title: 'Main Landing video!',
			desc: 'words that are describing the video that will enrich your life. ',
			imageURL: 'https://images.unsplash.com/photo-1626609572015-420cd41eddb0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=871&q=80',
		},
		{
			id   : 2,
			title: 'Fancy catchy unique title',
			desc: 'words that are describing the video that will enrich your life. ',
			imageURL: 'https://images.unsplash.com/photo-1626609572015-420cd41eddb0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=871&q=80',
		},
		{
			id   : 3,
			title: 'Fancy catchy unique title',
			desc: 'words that are describing the video that will enrich your life. ',
			imageURL: 'https://images.unsplash.com/photo-1626609572015-420cd41eddb0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=871&q=80',
		},
		{
			id   : 4,
			title: 'Fancy catchy unique title',
			desc: 'words that are describing the video that will enrich your life. ',
			imageURL: 'https://images.unsplash.com/photo-1626609572015-420cd41eddb0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=871&q=80',
		},
		{
			id   : 5,
			title: 'Fancy catchy unique title',
			desc: 'words that are describing the video that will enrich your life. ',
			imageURL: 'https://images.unsplash.com/photo-1626609572015-420cd41eddb0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=871&q=80',
		},
		{
			id   : 6,
			title: 'Fancy catchy unique title',
			desc: 'words that are describing the video that will enrich your life. ',
			imageURL: 'https://images.unsplash.com/photo-1626609572015-420cd41eddb0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=871&q=80',
		},
	]);
	return (
		<div className='container-fluid'>
			<div className="row">
				<SingleVideo video={video[0]} />
			</div>
			<div className='row row-cols-2 row-cols-md-4 g-4 mt-4'>
				{video.map((vid) => (
					<SingleVideo video={vid} key={vid.id} />
				))}
			</div>
		</div>
	);
};
