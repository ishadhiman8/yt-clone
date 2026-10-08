
import React from "react";
import { Link } from "react-router-dom";
import Time from "../loader/Time";

function Video({ video }) {
  console.log("Video:", video);

  const videoId =
    video?.id?.videoId ||
    video?.id;

  return (
    <div className="">
      <Link to={`/video/${videoId}`}>

        <div className="flex flex-col">

          {/* THUMBNAIL */}
          <div className="relative h-48 md:h-56 md:rounded-xl hover:rounded-none duration-200 overflow-hidden">

            <img
              className="h-full w-full object-cover"
              src={video?.snippet?.thumbnails?.medium?.url}
              alt={video?.snippet?.title || "YouTube video"}
            />

            {video?.lengthSeconds && (
              <Time time={video.lengthSeconds} />
            )}

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
            <div className="flex-1">

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

        </div>

      </Link>
    </div>
  );
}

export default Video;

