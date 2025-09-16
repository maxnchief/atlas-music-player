import React, { useState } from "react";
import CurrentlyPlaying from "./CurrentlyPlaying";
import Playlist from "./Playlist";

export default function MusicPlayer() {
  const [selectedId, setSelectedId] = useState("soammx6oibpan244my4toqke");

  return (
    <div className="flex flex-col md:flex-row gap-8 w-full">
      <div className="flex-1">
        <CurrentlyPlaying songId={selectedId} />
      </div>
      <div className="flex-1">
        <Playlist selectedId={selectedId} setSelectedId={setSelectedId} />
      </div>
    </div>
  );
}
