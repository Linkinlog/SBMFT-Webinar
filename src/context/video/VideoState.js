import React, { useReducer } from 'react'
import VideoContext from './videoContext'
import videoReducer from './videoReducer'
const VideoState = ({children}) => {
	const initialState = {
		// todo set up state
	}
	const [state, disptatch] = useReducer(videoReducer, initialState)
	
	// todo add functions for fetching, adding, and removing videos

	const value = {
		// todo set all states and functions to be exported here
	}
	return (
		<VideoContext.Provider value={value}>
			{children}
		</VideoContext.Provider>
	)
}

export default VideoState
