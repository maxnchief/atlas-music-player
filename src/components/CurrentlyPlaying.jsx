
import CoverArt from "./CoverArt";
import SongTitle from "./SongTitle";
import PlayControls from "./PlayControls";
import VolumeControls from "./VolumeControls";

export default function CurrentlyPlaying() {
	return (
		<div className="flex flex-col items-center w-full p-6 bg-white rounded-lg shadow">
			<CoverArt />
			<div className="mt-6 w-full flex flex-col items-start">
				<SongTitle />
			</div>
			<div className="mt-8 w-full">
				<PlayControls />
			</div>
			<div className="mt-4 w-full">
				<VolumeControls />
			</div>
		</div>
	);
}
