import React, { useState } from "react";
import axios from "axios";
import YouTube from "react-youtube";

const API_KEY = "AIzaSyC89uAFGBhnQTKT5sFQmsGA8AeNv1hLTBs"; // Replace with your Jamendo client_id

function Bottom() {
  const [query, setQuery] = useState("");
  const [videos, setVideos] = useState([]);
  const [selectedVideoId, setSelectedVideoId] = useState(null);

  const searchYouTube = async () => {
    try {
      const response = await axios.get("https://www.googleapis.com/youtube/v3/search", {
        params: {
          part: "snippet",
          q: query,
          key: API_KEY,
          maxResults: 6,
          type: "video",
        },
      });
      setVideos(response.data.items);
      setSelectedVideoId(null); // reset previous video
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  return (
    <div className="bottom fade-in">
      <h1>Search your favorite song </h1>
      
      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Enter song name..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={searchYouTube}>Search</button>
      </div>

      {/* Show only if no video selected */}
      {!selectedVideoId && (
        <div className="songs-grid">
          {videos.map((video) => (
            <div
              className="song-card"
              key={video.id.videoId}
              onClick={() => setSelectedVideoId(video.id.videoId)}
            >
              <img src={video.snippet.thumbnails.medium.url} alt="thumbnail" />
              <h3>{video.snippet.title}</h3>
              <p>{video.snippet.channelTitle}</p>
            </div>
          ))}
        </div>
      )}

      {/* Show selected video */}
      {selectedVideoId && (
        <div className="now-playing">
          <YouTube videoId={selectedVideoId} opts={{ width: "100%", height: "390" }} />
          <p className="caption">Enjoy your music 🎧</p>
        </div>
      )}
    </div>
  );
}

export default Bottom;
