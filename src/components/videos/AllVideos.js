import React from 'react';
import { SingleVideo } from './SingleVideo';

const AllVideos = ({ videos }) => {
	return (
		<>
			{videos.map((vid) => (
				<SingleVideo video={vid} key={vid?.id} />
			))}
		</>
	);
};

export default AllVideos;
