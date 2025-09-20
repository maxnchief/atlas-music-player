import React, { useState, useEffect } from "react";
import PlayListItem from "./PlayListItem";

interface Song {
	id: string;
	title: string;
	artist: string;
	duration: number;
}

interface PlaylistProps {
	selectedId: string;
	setSelectedId: (id: string) => void;
}

function formatDuration(seconds: number): string {
	const m = Math.floor(seconds / 60);
	const s = seconds % 60;
	return `${m}:${s.toString().padStart(2, "0")}`;
}

const Playlist: React.FC<PlaylistProps> = ({ selectedId, setSelectedId }) => {
	const [songs, setSongs] = useState<Song[]>([]);

	useEffect(() => {
		async function fetchPlaylist() {
			try {
				const res = await fetch("/api/v1/playlist");
				const data = await res.json();
				setSongs(Array.isArray(data) ? data : []);
			} catch (e) {
				setSongs([]);
			}
		}
		fetchPlaylist();
	}, []);

	return (
		<div className="w-full border-l border-tahiti ">
			<div className="text-2xl font-bold ml-2.5  text-gray-200 mb-4">Playlist</div>
			{songs.map((song: Song) => (
				<button
					key={song.id}
					className={`w-full text-left focus:outline-none ${
						song.id === selectedId ? "bg-tahiti rounded-lg  " : ""
					}`}
					onClick={() => setSelectedId(song.id)}
				>
					<PlayListItem
						title={song.title}
						artist={song.artist}
						duration={formatDuration(song.duration)}
					/>
				</button>
			))}
		</div>
	);
};

export default Playlist;
