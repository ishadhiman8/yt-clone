import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { IoMenu } from "react-icons/io5";
import youtube from "../assets/youtube.jpg";
import logo from "../assets/logo.jpg";
import { IoSearchOutline } from "react-icons/io5";
import { FaMicrophone } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdVideoCall } from "react-icons/md";
import { useUtils } from "../context/UtilsContext";
import { CiSearch } from "react-icons/ci";
import { IoMdArrowRoundBack } from "react-icons/io";

function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const { isSidebar, setIsSidebar, mobileShow, setMobileShow } = useUtils();
  const [searchbar, setSearchbar] = useState(false)

  useEffect(() => {
    console.log({ isSidebar, mobileShow });
  }, [isSidebar]);

  const navigate = useNavigate();

  // SEARCH FUNCTION
  const handleSearch = () => {
    const query = searchQuery.trim();
    if (!query) return;

    navigate(`/search/${encodeURIComponent(query)}`);
    setSearchQuery("");
    setSearchbar(false);
  };

  // ENTER KEY SEARCH
  const searchQueryHandler = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  const handlesidebar = () => {
    if (window.innerWidth <= 1280) {
      setIsSidebar(!isSidebar);
      setMobileShow(!mobileShow)
    }
    setIsSidebar(!isSidebar)
  }

  if (searchbar) {
    return(
      
     <div className="flex justify-between  fixed top-0  left-0 right-0 h-14 px-3 w-[100%] py-2 z-50 shadow-sm gap-2 ">
      <button
      onClick={() => setSearchbar(false)}
      className="p-2 hover:bg-gray-100 rounded-full cursor-pointer text-gray-700 flex-shrink-0"
      >
        <IoMdArrowRoundBack size={20}/>
      </button>      
      <div className=" flex flex-1  items-center border border-gray-300 rounded-full overflow-hidden bg-white  ">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyUp={searchQueryHandler}
            className="w-full px-4 py-1.5 outline-none text-sm text-gray-800"
          />
        
        <button
          onClick={handleSearch}
          className="px-4 py-2 border-l border-gray-300 bg-gray-100 hover:bg-gray-200 text-gray-600 flex items-center justify-center flex-shrink-0" 
        >
          <IoSearchOutline size={18} />          
        </button>

      </div>

      <button
        className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full cursor-pointer text-gray-700 flex-shrink " >
          <FaMicrophone size={16}/>
      </button>
      </div>
      );
  }
  return (
    <div className="flex justify-between items-center px-4 md:px-6 h-14 fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">

      {/* LEFT */}
      <div className=" flex items-center space-x-4">

        <IoMenu
          size={26}
          className="text-gray-700 hover:bg-gray-100 rounded-full cursor-pointer"
          onClick={handlesidebar}
        />

        <img
          src={youtube}
          alt="YouTube"
          className="hidden md:flex  w-24 h-auto cursor-pointer object-contain"
          onClick={() => navigate("/")}
        />

      </div>

      {/* MIDDLE - SEARCH */}
      <div className=" flex flex-1 max-w-[600px] mx-2  items-center">
        <div className=" flex w-full items-center border border-gray-400 rounded-l-full rounded-r-full overflow-hidden focus-within:border-blue-500">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyUp={searchQueryHandler}
            className="w-full px-4 py-2 outline-none text-sm text-gray-800"
          />

        {/* SEARCH BUTTON */}
        <button
          onClick={handleSearch}
          className="px-5 py-2 border-1 border-gray-300 bg-gray-100 hover:bg-gray-200 text-gray-600 flex items-center justify-center"
        >
          <IoSearchOutline size={20} />
        </button>

        </div>

      <div className="ml-3 p-2 bg-gray-100 hover:bg-gray-200 rounded-full cursor-pointer text-gray-700 flex-shrink-0 ">
        <FaMicrophone size={16} />
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex space-x-2 items-center md:space-x-4">
        <button
          onClick={() => setSearchbar(true)}
          className="md:hidden p-2 hover:bg-gray-100 text-gray-700 rounded-full">            
          <CiSearch size={22}/>
        </button>  

      <button className="hidden sm:flex p-2 hover:bg-gray-100 rounded-full text-gray-700">
          <IoMdNotificationsOutline  size={42} />
      </button>

      <button className="hidden sm:flex p-2 hover:bg-gray-100 rounded-full text-gray-700">
            <MdVideoCall size={42} />
      </button>

        <img
          src={logo}
          alt="Profile"
          className="hidden sm:flex w-8 h-8 rounded-full object-cover cursor-pointer ml-1"
        />

      </div>

    </div>
  );
}

export default Navbar;

