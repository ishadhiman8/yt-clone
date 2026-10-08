import axios from "axios";

// const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const BASE_URL = "https://www.googleapis.com/youtube/v3";

// const options = {
//     headers:{
//         'x-rapidapi-key': API_KEY ,
//         'x-rapidapi-host':'https://www.googleapis.com/youtube/v3'
//     }
// };

export const fetchData = async (url) => {
    try {
        const { data } = await axios.get(`${BASE_URL}/${url}`,{
            params:{
                part:"snippet",
                maxResults:50,
                key:import.meta.env.VITE_YOUTUBE_API_KEY
            }
        }) 
        return data;
    }catch(error) {
        console.error( "error fetching api data:",error);
        throw error;
    }
};