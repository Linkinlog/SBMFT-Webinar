import React, { useReducer } from 'react';
import VideoContext from './videoContext';
import videoReducer from './videoReducer';

const VideoState = ({ children }) => {
	const initialState = {
		videos: [
			{
				id: 1,
				title: 'Communication with couples',
				desc: 'words that are describing the video that will enrich your life. ',
				imageURL: 'https://img.youtube.com/vi/4gz-a19Sj1k/0.jpg',
				videoURL: 'https://youtube.com/embed/4gz-a19Sj1k',
				isPurchased: true
			},
			{
				id: 2,
				title: 'Fancy catchy unique title',
				desc: 'words that are describing the video that will enrich your life. ',
				imageURL: 'https://source.unsplash.com/random/?therapy',
				isPurchased: false
			},
			{
				id: 3,
				title: 'Fancy catchy unique title',
			desc: 'words that are describing the video that will enrich your life. ',
				imageURL: 'https://source.unsplash.com/random/?therapy',
				isPurchased: false
			},
			{
				id: 4,
				title: 'Fancy catchy unique title',
				desc: 'words that are describing the video that will enrich your life. ',
				imageURL: 'https://source.unsplash.com/random/?therapy',
				isPurchased: false
			},
			{
				id: 5,
				title: 'Fancy catchy unique title',
				desc: 'words that are describing the video that will enrich your life. ',
				imageURL: 'https://source.unsplash.com/random/?therapy',
				isPurchased: false
			},
			{
				id: 6,
				title: 'Fancy catchy unique title',
				desc: 'words that are describing the video that will enrich your life. ',
				imageURL: 'https://source.unsplash.com/random/?therapy',
				isPurchased: false
			},
			{
				id: 7,
				title: 'Fancy catchy unique title',
				desc: 'words that are describing the video that will enrich your life. ',
				imageURL: 'https://source.unsplash.com/random/?therapy',
				isPurchased: false
			},
			{
				id: 8,
				title: 'Fancy catchy unique title',
				desc: 'words that are describing the video that will enrich your life. ',
				imageURL: 'https://source.unsplash.com/random/?therapy',
				isPurchased: false
			},
			{
				id: 9,
				title: 'Fancy catchy unique title',
				desc: 'words that are describing the video that will enrich your life. ',
				imageURL: 'https://source.unsplash.com/random/?therapy',
				isPurchased: false
			},
			{
				id: 10,
				title: 'Fancy catchy unique title',
				desc: 'words that are describing the video that will enrich your life. ',
				imageURL: 'https://source.unsplash.com/random/?therapy',
				isPurchased: false
			},
		],
		promoVid: {
			id: 11,
			title: 'Main promotional video!',
			desc: 'words that are describing the video that will enrich your life. ',
			imageURL: 'https://source.unsplash.com/random/?therapy',
			videoURL: 'https://youtube.com/embed/mIDp_TrovRs',
			isPurchased: true,
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
