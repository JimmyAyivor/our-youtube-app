/** @format */

import React from 'react';
import Comments from './Comments/Comments';
import YouTube from 'react-youtube';
import { useParams } from 'react-router-dom';

const VideoDetail = () => {
	let params = useParams();
	const { id } = params;

	return (
		<div className=''>
			<YouTube videoId={id} /> <Comments />
		</div>
	);
};

export default VideoDetail;
