import React from "react";
import { Routes, Route } from "react-router-dom";
import Overview from "../../Pages/Overview/Overview";
import Playlists from "../../Pages/Playlist/Playlist";
import CreatePlaylist from "../../Pages/CreatePlaylist/CreatePlaylist";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Overview />}></Route>
      <Route path="/playlists" element={<Playlists />}></Route>
      <Route path="/playlists/create-playlist" element={<CreatePlaylist />}></Route>
    </Routes>
  );
}

export default AppRoutes;
