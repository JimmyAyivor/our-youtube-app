const API_KEY = process.env.REACT_APP_API_KEY;
const baseURL = "https://www.googleapis.com/youtube/v3/";

export async function getYoutubeVideos(searchTerm, maxResults) {
  const response = await fetch(`${baseURL}search?&key=${API_KEY}
    &part=snippet&maxResults=${maxResults}&q=${searchTerm}`);
  return await response.json();
}
