import { createContext, useContext, useEffect, useState } from "react";
import { fetchData } from "../utils/rapidapi";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
    const [value, setValue] = useState("New")

    useEffect(() => {
        fetchAllData(value);
    }, [value])

    const fetchAllData = (query) => {
        setLoading(true)
        fetchData(`search/?q=${query}`).then((contents)=>{
            console.log(contents.items)
            // console.log("Video ID:",contents.items[0]?.id?.videoId);
            // console.log("Thumbnail:",contents.items[0]?.snippet?.thumbnails?.medium?.url);
            setData(contents.items);
            setLoading(false)
        })
    };

    return (
        <AuthContext.Provider 
            value={{
                loading,
                data,
                value,
                setValue,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);