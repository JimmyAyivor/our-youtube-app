/** @format */

import React from 'react';
import { Link } from 'react-router-dom';

const VideoItem = ({ video, handleSelectedVideo }) => {
	return (
		<div className='video-item'>
			<Link to={`/videos/${video.id.videoId}`}>
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
			</Link>
		</div>
	);
};
export default VideoItem;
