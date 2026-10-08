import React from "react";
import { useAuth } from "./context/AuthProvider";
import {Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import PlayingVideo from "./components/PlayingVideo";
import Search from "./components/Search";
import Home from "./components/Home";
import Loading from "./loader/Loading";


function App() {
    const {loading}=useAuth()
    return (
        <div>
            {loading && <Loading/>}
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search/:searchQuery" element={<Search />} />
                <Route path="/video/:id" element={<PlayingVideo  />} />
            </Routes>

        </div>
    );
}

export default App;