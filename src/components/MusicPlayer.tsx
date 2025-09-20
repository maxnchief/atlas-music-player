import React, { useState, useEffect } from "react";
import CurrentlyPlaying from "./CurrentlyPlaying";
import Playlist from "./Playlist";
import LoadingSkeleton from "./LoadingSkeleton";

const MusicPlayer: React.FC = () => {
  const [playlist, setPlaylist] = useState<any[]>([]);
  const [currentSongIndex, setCurrentSongIndex] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchPlaylist() {
      setLoading(true);
      try {
        const res = await fetch("/api/v1/playlist");
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          setPlaylist(data);
          setCurrentSongIndex(0);
        } else {
          setPlaylist([]);
          setCurrentSongIndex(0);
        }
      } catch (e) {
        setPlaylist([]);
        setCurrentSongIndex(0);
      } finally {
        setLoading(false);
      }
    }
    fetchPlaylist();
  }, []);

  if (loading) {
    return <div className="flex w-full h-full items-center justify-center"><LoadingSkeleton /></div>;
  }

  const currentSong = playlist[currentSongIndex] || null;

  return (
  <div className="flex border border-tahiti flex-col md:flex-row gap-8 w-full min-w-[320px] min-h-screen">
      <div className="flex-1">
        <CurrentlyPlaying
          songId={currentSong?.id || ""}
          playlist={playlist}
          currentSongIndex={currentSongIndex}
          setCurrentSongIndex={setCurrentSongIndex}
        />
      </div>
      <div className="flex-1">
        <Playlist
          selectedId={currentSong?.id || ""}
          setSelectedId={id => {
            const idx = playlist.findIndex(song => song.id === id);
            if (idx !== -1) setCurrentSongIndex(idx);
          }}
        />
      </div>
    </div>
  );
};

export default MusicPlayer;
