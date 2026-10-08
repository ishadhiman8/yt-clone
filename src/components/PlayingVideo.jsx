
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import axios from "axios";
import SuggestedVideo from "./SuggestedVideo";

function PlayingVideo() {
  const { id } = useParams();

  const [video, setVideo] = useState(null);
  const [related, setRelated] = useState([]);
  const [error, setError] = useState("");

  const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

  useEffect(() => {
    if (!id || !API_KEY) {
      setError("Video ID or API key is missing.");
      return;
    }

    const fetchVideoDetails = async () => {
      try {
        console.log("================================");
        console.log("VIDEO ID:", id);
        console.log("API KEY EXISTS:", !!API_KEY);
        console.log("================================");

        // =========================
        // CURRENT VIDEO
        // =========================

        const response = await axios.get(
          "https://www.googleapis.com/youtube/v3/videos",
          {
            params: {
              part: "snippet,contentDetails,statistics",
              id: id,
              key: API_KEY,
            },
          }
        );

        console.log("VIDEO API RESPONSE:", response.data);

        // Video not found
        if (
          !response.data.items ||
          response.data.items.length === 0
        ) {
          setError("Video not found.");
          return;
        }

        const currentVideo = response.data.items[0];

        // Current video set
        setVideo(currentVideo);

        // =========================
        // RELATED / SUGGESTED VIDEOS
        // =========================

        const relatedResponse = await axios.get(
          "https://www.googleapis.com/youtube/v3/search",
          {
            params: {
              part: "snippet",
              q: currentVideo.snippet.title,
              type: "video",
              maxResults: 10,
              key: API_KEY,
            },
          }
        );

        console.log(
          "RELATED VIDEOS:",
          relatedResponse.data.items
        );

        // Current video ko suggested list se remove karo
        const filteredVideos =
          relatedResponse.data.items.filter(
            (item) => item?.id?.videoId !== id
          );

        setRelated(filteredVideos);

      } catch (error) {
        console.error("Video API Error:", error);

        setError(
          error?.response?.data?.error?.message ||
          "Unable to load video."
        );
      }
    };

    fetchVideoDetails();
  }, [id, API_KEY]);

  // =========================
  // ERROR
  // =========================

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center h-screen">

        <p className="text-xl font-semibold">
          {error}
        </p>

        <p className="text-sm text-gray-500 mt-2">
          Video ID: {id}
        </p>

      </div>
    );
  }

  // =========================
  // LOADING
  // =========================

  if (!video) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg font-semibold">
          Loading video...
        </p>
      </div>
    );
  }

  // =========================
  // VIDEO THUMBNAIL
  // =========================

  const thumbnail =
    video?.snippet?.thumbnails?.default?.url ||
    video?.snippet?.thumbnails?.medium?.url ||
    null;

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-4 mt-20">

      {/* ================================= */}
      {/* LEFT SIDE - PLAYING VIDEO */}
      {/* ================================= */}

      <div className="flex-1 min-w-0">

        {/* VIDEO PLAYER */}

        <div className="w-full aspect-video bg-black rounded-lg overflow-hidden">

          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id}`}
            width="100%"
            height="100%"
            controls
          />

        </div>

        {/* TITLE */}

        <h1 className="text-xl font-bold mt-4">
          {video?.snippet?.title}
        </h1>

        {/* CHANNEL DETAILS */}

        <div className="flex items-center gap-3 mt-4">

          {/* CHANNEL IMAGE */}

          <div className="h-10 w-10 rounded-full overflow-hidden flex-shrink-0">

            {thumbnail && (
              <img
                src={thumbnail}
                alt="channel"
                className="h-full w-full object-cover"
              />
            )}

          </div>

          {/* CHANNEL NAME + DATE */}

          <div>

            <p className="font-semibold text-sm">
              {video?.snippet?.channelTitle}
            </p>

            <p className="text-xs text-gray-500">

              {video?.snippet?.publishedAt
                ? new Date(
                    video.snippet.publishedAt
                  ).toLocaleDateString()
                : ""}

            </p>

          </div>

        </div>

        {/* DESCRIPTION */}

        <div className="mt-5 p-4 bg-gray-100 rounded-lg">

          <p className="text-sm whitespace-pre-line">

            {video?.snippet?.description ||
              "No description available."}

          </p>

        </div>

      </div>

      {/* ================================= */}
      {/* RIGHT SIDE - SUGGESTED VIDEOS */}
      {/* ================================= */}

      <div className="w-full lg:w-[380px]">

        <div className="flex flex-col px-4 py-6 h-[calc(100vh-4.625rem)] overflow-y-scroll overflow-x-hidden lg:w-[350px] xl:w-[400px] gap-4">

          {related.map((item) => (

            <SuggestedVideo
              key={item?.id?.videoId}
              video={item}
            />

          ))}

        </div>

      </div>

    </div>
  );
}

export default PlayingVideo;




