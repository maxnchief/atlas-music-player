import React, { useState, useEffect } from "react";
import CurrentlyPlaying from "./CurrentlyPlaying";
import Playlist from "./Playlist";

export default function MusicPlayer() {
  const [selectedId, setSelectedId] = useState("");

  useEffect(() => {
    async function fetchPlaylist() {
      try {
        const res = await fetch("/api/v1/playlist");
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          setSelectedId(data[0].id);
        }
      } catch (e) {
        setSelectedId("");
      }
    }
    fetchPlaylist();
  }, []);

  return (
    <div className="flex bg-midnight border border-tahiti flex-col md:flex-row gap-8 w-full">
      <div className="flex-1">
        <CurrentlyPlaying songId={selectedId} />
      </div>
      <div className="flex-1">
        <Playlist selectedId={selectedId} setSelectedId={setSelectedId} />
      </div>
    </div>
  );
}
