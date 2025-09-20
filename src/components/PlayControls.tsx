


import React from "react";
import { Rewind, Play, Pause, FastForward, Shuffle } from "lucide-react";

interface PlayControlsProps {
	playlist: any[];
	currentSongIndex: number;
	setCurrentSongIndex: (idx: number) => void;
	isPlaying: boolean;
	setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
	speed: number;
	setSpeed: React.Dispatch<React.SetStateAction<number>>;
	shuffle: boolean;
	setShuffle: React.Dispatch<React.SetStateAction<boolean>>;
}

const PlayControls: React.FC<PlayControlsProps> = ({
	playlist,
	currentSongIndex,
	setCurrentSongIndex,
	isPlaying,
	setIsPlaying,
	speed,
	setSpeed,
	shuffle,
	setShuffle,
}) => {
	const speeds = [0.5, 1, 2];
		const handleSpeedClick = () => {
			const currentIdx = speeds.indexOf(speed);
			const nextIdx = (currentIdx + 1) % speeds.length;
			setSpeed(speeds[nextIdx]);
		};

		const handlePlayPause = () => {
			setIsPlaying((prev) => !prev);
			// Call parent onPlayPause if needed
		};


		const handlePrev = () => {
			if (currentSongIndex > 0) {
				setCurrentSongIndex(currentSongIndex - 1);
			} else if (playlist.length > 0) {
				setCurrentSongIndex(playlist.length - 1);
			}
		};

		const handleNext = () => {
			if (shuffle && playlist.length > 1) {
				let nextIdx = currentSongIndex;
				while (nextIdx === currentSongIndex) {
					nextIdx = Math.floor(Math.random() * playlist.length);
				}
				setCurrentSongIndex(nextIdx);
			} else if (currentSongIndex < playlist.length - 1) {
				setCurrentSongIndex(currentSongIndex + 1);
			} else if (playlist.length > 0) {
				setCurrentSongIndex(0);
			}
		};

		const handleShuffle = () => {
			setShuffle((prev) => !prev);
			// Call parent onShuffle if needed
		};

		return (
			<div className="flex items-center justify-between w-full px-8 py-4 ">
				{/* Speed */}
				<button
					className="text-xl font-bold text-burntorange focus:outline-none"
					type="button"
					onClick={handleSpeedClick}
					aria-label="Change playback speed"
				>
					{speed}x
				</button>

				{/* Previous */}
				<button
					className={`focus:outline-none ${currentSongIndex === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
					type="button"
					onClick={handlePrev}
					disabled={playlist.length === 0}
					aria-label="Previous song"
				>
					<Rewind size={32} strokeWidth={2.5} className="text-burntorange" />
				</button>

				{/* Play/Pause */}
				<button
					className="border-2 border-burntorange rounded-lg p-2 focus:outline-none"
					type="button"
					onClick={handlePlayPause}
					aria-label={isPlaying ? "Pause" : "Play"}
				>
					{isPlaying ? (
						<Pause size={32} strokeWidth={2.5} className="text fill-burntorange" />
					) : (
						<Play size={32} strokeWidth={2.5} className="text fill-burntorange" />
					)}
				</button>

				{/* Next */}
				<button
					className={`focus:outline-none ${(currentSongIndex === playlist.length - 1 && !shuffle) ? "opacity-50 cursor-not-allowed" : ""}`}
					type="button"
					onClick={handleNext}
					disabled={playlist.length === 0}
					aria-label="Next song"
				>
					<FastForward size={32} strokeWidth={2.5} className="text-burntorange" />
				</button>

				{/* Shuffle */}
				<button
					className="focus:outline-none"
					type="button"
					onClick={handleShuffle}
					aria-label="Toggle shuffle"
				>
					<Shuffle size={32} strokeWidth={2.5} className={shuffle ? "text-green-500" : "text-burntorange"} />
				</button>
			</div>
		);
};

export default PlayControls;
