import { GoHome } from "react-icons/go";
import { FaChevronRight } from "react-icons/fa";
import { MdOutlineSubscriptions } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { CgProfile } from "react-icons/cg";
import { MdHistory } from "react-icons/md";
import { MdOutlinePlaylistPlay } from "react-icons/md";
import { MdOndemandVideo } from "react-icons/md";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { IoMdTrendingUp } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { FaMusic } from "react-icons/fa";
import { FaRegFile } from "react-icons/fa";
import { CgMediaLive } from "react-icons/cg";
import { SiYoutubegaming } from "react-icons/si";
import { FaRegNewspaper } from "react-icons/fa";
import { SiShortcut } from "react-icons/si";
import { MdOutlineMenuBook } from "react-icons/md";
import { CiBeaker1 } from "react-icons/ci";
import { PiYoutubeLogo } from "react-icons/pi";
import { SiYoutubestudio } from "react-icons/si";
import { SiYoutubemusic } from "react-icons/si";
import { TbBrandYoutubeKids } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { CiFlag1 } from "react-icons/ci";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { MdOutlineFeedback } from "react-icons/md";
import { useUtils } from "../context/UtilsContext";


function Sidebar() {
    
    const {isSidebar, mobileShow, setMobileShow} = useUtils();
    const sidebarItems = [
        {
            groupName: "Home",
            groupItems: [
                {
                    id: 1,
                    name: "Home",
                    icon: <GoHome />,
                },
                {
                    id: 2,
                    name: "Shorts",
                    icon: <SiYoutubeshorts />,
                },
                {
                    id: 3,
                    name: "Subscriptions",
                    icon: <MdOutlineSubscriptions />,
                },
            ],
        },

        {
            groupName: "You",
            groupItems: [
                {
                    id: 1,
                    name: "Your Channel",
                    icon: <CgProfile />,
                },
                {
                    id: 2,
                    name: "History",
                    icon: <MdHistory />,
                },
                {
                    id: 3,
                    name: "Playlists",
                    icon: <MdOutlinePlaylistPlay />,
                },
                {
                    id: 4,
                    name: "Your Videos",
                    icon: <MdOndemandVideo />,
                },
                {
                    id: 5,
                    name: "Watch later",
                    icon: <MdOutlineWatchLater />,
                },
                {
                    id: 6,
                    name: "Liked videos",
                    icon: <AiOutlineLike />,
                },
            ],
        },

        {
            groupName: "Explore",
            groupItems: [
                {
                    id: 1,
                    name: "Trending",
                    icon: <IoMdTrendingUp />,
                },
                {
                    id: 2,
                    name: "Shopping",
                    icon: <FaShoppingCart />,
                },
                {
                    id: 3,
                    name: "Music",
                    icon: <FaMusic />,
                },
                {
                    id: 4,
                    name: "Files",
                    icon: <FaRegFile />,
                },
                {
                    id: 5,
                    name: "Live",
                    icon: <CgMediaLive />,
                },
                {
                    id: 6,
                    name: "Gaming",
                    icon: <SiYoutubegaming />,
                },
                {
                    id: 7,
                    name: "News",
                    icon: <FaRegNewspaper />,
                },
                {
                    id: 8,
                    name: "Sport",
                    icon: <SiShortcut />,
                },
                {
                    id: 9,
                    name: "Courses",
                    icon: <MdOutlineMenuBook />,
                },
                {
                    id: 10,
                    name: "Fashion & Beauty",
                    icon: <CiBeaker1 />,
                },
            ],
        },

        {
            groupName: "More from YouTube",
            groupItems: [
                {
                    id: 1,
                    name: "YouTube Premium",
                    icon: <PiYoutubeLogo />,
                },
                {
                    id: 2,
                    name: "YouTube Studio",
                    icon: <SiYoutubestudio />,
                },
                {
                    id: 3,
                    name: "YouTube Music",
                    icon: <SiYoutubemusic />,
                },
                {
                    id: 4,
                    name: "YouTube Kids",
                    icon: <TbBrandYoutubeKids />,
                },
            ],
        },

        {
            groupName: "More",
            groupItems: [
                {
                    id: 1,
                    name: "Settings",
                    icon: <IoSettingsOutline />,
                },
                {
                    id: 2,
                    name: "Report history",
                    icon: <CiFlag1 />,
                },
                {
                    id: 3,
                    name: "Help",
                    icon: <IoMdHelpCircleOutline />,
                },
                {
                    id: 4,
                    name: "Send feedback",
                    icon: <MdOutlineFeedback />,
                },
            ],
        },
    ];

    const ModelOverlay = () => {
        return(
            <div className="flex fixed top-0 right-0 bottom-0 left-0 bg-black/50 z-30"
            onClick={() => setMobileShow(!mobileShow)}
            >
            </div>
        )
    }

    return (
        <>
        <div className={`${
            mobileShow 
            ? "fixed top-0 bottom-0 left-0 z-40 transition-all duration-300 bg-white  h-screen w-[70%] sm:w-[30%]"
             : "hidden  md:block "
             } md:w-[240px] md:relative  px-6  h-[calc(100vh-6.625rem)] overflow-y-scroll overflow-x-hidden `}>
            {/* home */ }
            < div className = "space-y-4 items-center" >
            {
                sidebarItems.map((group) => {
                    return (
                        <div className="mb-5" >
                            <h1 className="font-bold text-lg mb-2">{group.groupName}</h1>
                            {group.groupItems.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1 cursor-pointer"
                                >
                                    {/* ICON */}
                                    <div className="text-xl cursor-pointer">{item.icon} </div>
                                    {/* ITEM NAME */}
                                    <span className="cursor-pointer">{item.name}</span>

                                </div>
                            ))}

                        </div>
                
                    )
            })
}

            </div >

    {/* FOOTER */ }
    < span className = " text-xs text-gray-600 font-sem" >
        About Press Copyright < br />
            Contact us Creators < br />
                Advertise Developers < br />

                <p className="mt-3">
                    Terms Privacy Policy & safety <br />
                    How YouTube works{""} <br />
                    Test new features</p><br />

                <p className="text-xs text-gray-500 mt-3"> © 2024 learn Coding</p>
            </span >

        </div >
        {mobileShow ? <ModelOverlay/> : null}
        </>
    );
}

export default Sidebar;



