

import React, { useEffect, useState } from "react";

export default function SongTitle({ songId = "" }) {
	const [title, setTitle] = useState("");
	const [subtitle, setSubtitle] = useState("");

	useEffect(() => {
		async function fetchSong() {
			try {
				const res = await fetch(`/api/v1/playlist`);
				const data = await res.json();
				const song = Array.isArray(data) ? data.find(s => s.id === songId) : null;
				setTitle(song?.title || "Unknown Title");
				setSubtitle(song?.artist || "Unknown Artist");
			} catch (e) {
				setTitle("Unknown Title");
				setSubtitle("Unknown Artist");
			}
		}
		fetchSong();
	}, [songId]);

	return (
		<div>
			<h1 className="text-3xl font-bold text-gray-50">{title}</h1>
			<h2 className="mt-4 text-2xl font-normal text-gray-200">{subtitle}</h2>
		</div>
	);
}
