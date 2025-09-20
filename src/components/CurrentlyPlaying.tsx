
import React from "react";
import AudioPlayer from "./AudioPlayer";
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
	// State for playback controls
	const [isPlaying, setIsPlaying] = React.useState<boolean>(false);
	const [speed, setSpeed] = React.useState<number>(1);
	const [shuffle, setShuffle] = React.useState<boolean>(false);
	const [volume, setVolume] = React.useState<number>(60);

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
					isPlaying={isPlaying}
					setIsPlaying={setIsPlaying}
					speed={speed}
					setSpeed={setSpeed}
					shuffle={shuffle}
					setShuffle={setShuffle}
				/>
			</div>
			<div className="mt-4 w-full">
				<VolumeControls volume={volume} setVolume={setVolume} />
			</div>
			<AudioPlayer
				songId={songId}
				isPlaying={isPlaying}
				volume={volume}
				playbackRate={speed}
			/>
		</div>
	);
};

export default CurrentlyPlaying;
