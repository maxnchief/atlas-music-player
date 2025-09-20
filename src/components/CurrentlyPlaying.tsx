
import React from "react";
import CoverArt from "./CoverArt";
import SongTitle from "./SongTitle";
import PlayControls from "./PlayControls";
import VolumeControls from "./VolumeControls";

interface CurrentlyPlayingProps {
	songId: string;
	playlist: any[];
	currentSongIndex: number;
	setCurrentSongIndex: (idx: number) => void;
}

const CurrentlyPlaying: React.FC<CurrentlyPlayingProps> = ({ songId, playlist, currentSongIndex, setCurrentSongIndex }) => {
	return (
		<div className="flex flex-col items-center w-full p-6 shadow">
			<CoverArt songId={songId} />
			<div className="mt-6 w-full flex flex-col items-start">
				<SongTitle songId={songId} />
			</div>
			<div className="mt-8 w-full">
				<PlayControls
					playlist={playlist}
					currentSongIndex={currentSongIndex}
					setCurrentSongIndex={setCurrentSongIndex}
				/>
			</div>
			<div className="mt-4 w-full">
				<VolumeControls />
			</div>
		</div>
	);
};

export default CurrentlyPlaying;
