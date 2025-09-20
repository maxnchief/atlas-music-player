import React, { useEffect, useState } from "react";
import coverPlaceholder from '../../images/cover.png';

interface CoverArtProps {
	songId: string;
}

export default function CoverArt({ songId }: CoverArtProps) {
	const [cover, setCover] = useState<string>(coverPlaceholder);

	useEffect(() => {
		async function fetchCover() {
			try {
				const res = await fetch("/api/v1/playlist");
				const data = await res.json();
				const song = Array.isArray(data) ? data.find((s: any) => s.id === songId) : null;
				setCover(song?.cover || coverPlaceholder);
			} catch (e) {
				setCover(coverPlaceholder);
			}
		}
		fetchCover();
	}, [songId]);

	return (
			<div className="w-full h-full rounded-lg overflow-hidden">
				<img
					src={cover}
					alt="Cover Art"
					className="w-full h-full object-cover rounded-lg border border-gray-300 dark:border-gray-700"
					style={{ display: "block" }}
				/>
			</div>
	);
}
