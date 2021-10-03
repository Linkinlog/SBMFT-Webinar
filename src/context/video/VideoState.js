import React, { useReducer } from 'react';
import VideoContext from './videoContext';
import videoReducer from './videoReducer';

const VideoState = ({ children }) => {
	const initialState = {
		videos: [
			{
				id: 1,
				title: 'Fancy catchy unique title',
				desc: 'words that are describing the video that will enrich your life. ',
				imageURL: 'https://source.unsplash.com/random/?therapy',
			},
			{
				id: 2,
				title: 'Fancy catchy unique title',
				desc: 'words that are describing the video that will enrich your life. ',
				imageURL: 'https://source.unsplash.com/random/?therapy',
			},
			{
				id: 3,
				title: 'Fancy catchy unique title',
				desc: 'words that are describing the video that will enrich your life. ',
				imageURL: 'https://source.unsplash.com/random/?therapy',
			},
			{
				id: 4,
				title: 'Fancy catchy unique title',
				desc: 'words that are describing the video that will enrich your life. ',
				imageURL: 'https://source.unsplash.com/random/?therapy',
			},
			{
				id: 5,
				title: 'Fancy catchy unique title',
				desc: 'words that are describing the video that will enrich your life. ',
				imageURL: 'https://source.unsplash.com/random/?therapy',
			},
			{
				id: 6,
				title: 'Fancy catchy unique title',
				desc: 'words that are describing the video that will enrich your life. ',
				imageURL: 'https://source.unsplash.com/random/?therapy',
			},
			{
				id: 7,
				title: 'Fancy catchy unique title',
				desc: 'words that are describing the video that will enrich your life. ',
				imageURL: 'https://source.unsplash.com/random/?therapy',
			},
			{
				id: 8,
				title: 'Fancy catchy unique title',
				desc: 'words that are describing the video that will enrich your life. ',
				imageURL: 'https://source.unsplash.com/random/?therapy',
			},
			{
				id: 9,
				title: 'Fancy catchy unique title',
				desc: 'words that are describing the video that will enrich your life. ',
				imageURL: 'https://source.unsplash.com/random/?therapy',
			},
			{
				id: 10,
				title: 'Fancy catchy unique title',
				desc: 'words that are describing the video that will enrich your life. ',
				imageURL: 'https://source.unsplash.com/random/?therapy',
			},
		],
		promoVid: {
			id: 11,
			title: 'Main promotional video!',
			desc: 'words that are describing the video that will enrich your life. ',
			imageURL: 'https://source.unsplash.com/random/?therapy',
			purchased: true,
		},
	};
	const [state] = useReducer(videoReducer, initialState);

	// todo add functions for fetching, adding, and removing videos

	const value = {
		videos: state.videos,
		promoVid: state.promoVid,
	};
	return <VideoContext.Provider value={value}>{children}</VideoContext.Provider>;
};

export default VideoState;
