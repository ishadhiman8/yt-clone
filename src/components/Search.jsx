
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Sidebar from "./Sidebar";
import SearchCard from "./SearchCard";

function Search() {
  const [result, setResult] = useState([]);
  const { searchQuery } = useParams();

  const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

  useEffect(() => {
    if (!searchQuery || !API_KEY) return;

    const fetchSearchResult = async () => {
      try {
        const response = await axios.get(
          "https://www.googleapis.com/youtube/v3/search",
          {
            params: {
              part: "snippet",
              q: searchQuery,
              type: "video",
              maxResults: 20,
              key: API_KEY,
            },
          }
        );

        console.log("Search Result:", response.data.items);

        setResult(response.data.items || []);
      } catch (error) {
        console.error("Search API Error:", error);
      }
    };

    fetchSearchResult();
  }, [searchQuery, API_KEY]);

  return (
    <div className="mt-20 flex flex-row h-[calc(100vh-80px)]">

      {/* SIDEBAR */}
      <Sidebar />

      {/* SEARCH RESULTS */}
      <div className="grow overflow-y-scroll overflow-x-hidden">

        <div className="grid grid-cols-1 gap-2 p-4">

          {result.map((item) => (
            <SearchCard
              key={item?.id?.videoId}
              video={item}
            />
          ))}

        </div>

      </div>

    </div>
  );
}

export default Search;

