

import React, { useEffect, useState } from "react";

interface SongTitleProps {
	songId: string;
}

export default function SongTitle({ songId }: SongTitleProps) {
	const [title, setTitle] = useState<string>("");
	const [subtitle, setSubtitle] = useState<string>("");

	useEffect(() => {
		async function fetchSong() {
			try {
				const res = await fetch(`/api/v1/playlist`);
				const data = await res.json();
				const song = Array.isArray(data) ? data.find((s: any) => s.id === songId) : null;
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
