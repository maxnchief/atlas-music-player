import React, { useState, useEffect } from "react";
import CurrentlyPlaying from "./CurrentlyPlaying";
import Playlist from "./Playlist";
import LoadingSkeleton from "./LoadingSkeleton";

const MusicPlayer: React.FC = () => {
  const [playlist, setPlaylist] = useState<any[]>([]);
  const [selectedId, setSelectedId] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchPlaylist() {
      setLoading(true);
      try {
        const res = await fetch("/api/v1/playlist");
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          setPlaylist(data);
          setSelectedId(data[0].id);
        } else {
          setPlaylist([]);
          setSelectedId("");
        }
      } catch (e) {
        setPlaylist([]);
        setSelectedId("");
      } finally {
        setLoading(false);
      }
    }
    fetchPlaylist();
  }, []);

  if (loading) {
    return <div className="flex w-full h-full items-center justify-center"><LoadingSkeleton /></div>;
  }

  const currentSong = playlist.find(song => song.id === selectedId) || playlist[0];

  return (
    <div className="flex border border-tahiti flex-col md:flex-row gap-8 w-full">
      <div className="flex-1">
        <CurrentlyPlaying songId={currentSong?.id || ""} />
      </div>
      <div className="flex-1">
        <Playlist selectedId={selectedId} setSelectedId={setSelectedId} />
      </div>
    </div>
  );
};

export default MusicPlayer;
