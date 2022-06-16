/** @format */

import React from 'react';
import YouTube from 'react-youtube';
import { getYoutubeVideos } from '../apis/youtube';

const VideoItem = (props) => {
	const { response, getYoutubeVideos } = props;

	const opts = {
		height: '390',
		width: '640',
		playerVars: {
			// https://developers.google.com/youtube/player_parameters
			autoplay: 1,
		},
	};

	return <YouTube videoId={getYoutubeVideos} opts={opts} />;
};

export default VideoItem;
