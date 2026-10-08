import React from "react";
import { Link } from "react-router-dom";

function SuggestedVideo({ video }) {
  // YouTube search API se video ID
  const videoId = video?.id?.videoId;

  return (
    <div className="flex">
      <Link
        to={`/video/${videoId}`}
        className="w-full"
      >
        <div className="flex flex-row gap-3">

          {/* THUMBNAIL */}
          <div className="relative h-20 md:h-20 xl:h-24 w-40 min-w-[168px] lg:w-40 lg:min-w-[128px] xl:w-[168px] rounded-xl hover:rounded-none duration-200 overflow-hidden">

            {video?.snippet?.thumbnails?.medium?.url && (
              <img
                className="h-full w-full object-cover"
                src={video.snippet.thumbnails.medium.url}
                alt={video?.snippet?.title || "YouTube video"}
              />
            )}

          </div>

          {/* VIDEO DETAILS */}
          <div className="flex-1 min-w-0">

            {/* TITLE */}
            <span className="text-sm font-bold line-clamp-2">
              {video?.snippet?.title}
            </span>

            {/* CHANNEL */}
            <span className="flex items-center font-semibold mt-2 text-[12px] text-gray-600">
              {video?.snippet?.channelTitle}
            </span>

            {/* DATE */}
            <div className="flex text-gray-500 text-[12px]">

              <span className="flex text-[24px] leading-none font-bold relative top-[-10px] mx-1">
                .
              </span>

              <span>
                {video?.snippet?.publishedAt
                  ? new Date(
                      video.snippet.publishedAt
                    ).toLocaleDateString()
                  : ""}
              </span>

            </div>

          </div>

        </div>
      </Link>
    </div>
  );
}

export default SuggestedVideo;