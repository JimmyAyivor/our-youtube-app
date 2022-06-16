/** @format */

require('dotenv').config();
const API_KEY = process.env.REACT_APP_API_KEY;
const baseURL = 'https://www.googleapis.com/youtube/v3/';

export async function getYoutubeVideos() {
	const response = await fetch(`${baseURL}search?key=${API_KEY}
    &part=snippet,contentDetails,statistics,status`);
	return await response.json();
}
