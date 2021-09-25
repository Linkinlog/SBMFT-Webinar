import React, { useState } from 'react'
import { SingleVideo } from './SingleVideo'

export const VideosMain = () => {
	const [video] = useState([
		{
			title: 'Fancy catchy unique title',
			desc : 'words that are describing the video that will enrich your life. ',
			imageURL : 'https://images.unsplash.com/photo-1626609572015-420cd41eddb0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=871&q=80'
		},
		{
			title: 'Fancy catchy unique title',
			desc : 'words that are describing the video that will enrich your life. ',
			imageURL : 'https://images.unsplash.com/photo-1626609572015-420cd41eddb0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=871&q=80'
		},
		{
			title: 'Fancy catchy unique title',
			desc : 'words that are describing the video that will enrich your life. ',
			imageURL : 'https://images.unsplash.com/photo-1626609572015-420cd41eddb0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=871&q=80'
		},
		{
			title: 'Fancy catchy unique title',
			desc : 'words that are describing the video that will enrich your life. ',
			imageURL : 'https://images.unsplash.com/photo-1626609572015-420cd41eddb0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=871&q=80'
		},
		{
			title: 'Fancy catchy unique title',
			desc : 'words that are describing the video that will enrich your life. ',
			imageURL : 'https://images.unsplash.com/photo-1626609572015-420cd41eddb0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=871&q=80'
		}
	])
	return (
		<div className='container row row-cols-2 row-cols-md-4 g-2 pt-4'>
			{video.map(vid => <SingleVideo video={vid} />)}
		</div>
	)
}
