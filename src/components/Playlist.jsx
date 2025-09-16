
import React, { useEffect, useState } from "react";
import PlayListItem from "./PlayListItem";

function formatDuration(seconds) {
	const m = Math.floor(seconds / 60);
	const s = seconds % 60;
	return `${m}:${s.toString().padStart(2, "0")}`;
}

export default function Playlist({ selectedId, setSelectedId }) {
	const [songs, setSongs] = useState([]);

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
		<div className="w-full">
			<div className="text-2xl font-bold text-gray-900 mb-4">Playlist</div>
			{songs.map((song) => (
				<button
					key={song.id}
					className={`w-full text-left focus:outline-none ${
						song.id === selectedId ? "bg-gray-100 rounded-lg" : ""
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
}
