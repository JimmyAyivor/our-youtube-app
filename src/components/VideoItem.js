/** @format */

import React from 'react';

const VideoItem = ({ video, handleSelectedVideo }) => {
	return (
		<div className='video-item'>
			<div onClick={() => handleSelectedVideo(video)} className=''>
				<img
					className='image'
					src={video.snippet.thumbnails.medium.url}
					alt={video.snippet.description}
				/>
				<div className='content'>
					<div className='header '>{video.snippet.title}</div>
				</div>
			</div>
		</div>
	);
};
export default VideoItem;
