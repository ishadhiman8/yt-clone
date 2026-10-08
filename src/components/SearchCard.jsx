
import React from "react";
import { Link } from "react-router-dom";

function SearchCard({ video }) {

  const videoId = video?.id?.videoId;
  console.log("card video ID:" ,videoId)

  return (
    <div>

      <Link to={"/video/" + videoId}>

        <div className="flex flex-col md:flex-row mb-6 gap-4">

          {/* THUMBNAIL */}
          <div className="relative h-48 md:w-80 min-w-[240px] rounded-xl overflow-hidden flex-shrink-0">

            <img
              className="h-full w-full  object-cover"
              src={video?.snippet?.thumbnails?.medium?.url || video?.snippet?.thumbnails?.default?.url}
              alt={video?.snippet?.title || "YouTube video"}
            />

          </div>

          {/* CHANNEL + TITLE */}
          <div className="flex mt-3 space-x-2">

            {/* CHANNEL IMAGE */}
            <div className="flex items-start">

              <div className="flex h-9 w-9 rounded-full overflow-hidden border">

                <img
                  className="h-full w-full rounded-full object-cover"
                  src={
                    video?.snippet?.thumbnails?.default?.url ||
                    video?.snippet?.thumbnails?.medium?.url
                  }
                  alt=""
                />

              </div>

            </div>

            {/* VIDEO DETAILS */}
            <div className="flex flex-col">

              {/* TITLE */}
              <span className="text-lg font-semibold line-clamp-2">
                {video?.snippet?.title}
              </span>

              {/* CHANNEL */}
              <span className="text-xs mt-1  text-gray-600">
                {video?.snippet?.channelTitle}
              </span>
                
              {/* Description */}
              <span className="text-xs mt-1  text-gray-600">
                {video?.snippet?.description}
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

        </div>

      </Link>

    </div>
  );
}

export default SearchCard;

