
import CoverArt from "./CoverArt";
import SongTitle from "./SongTitle";
import PlayControls from "./PlayControls";
import VolumeControls from "./VolumeControls";

export default function CurrentlyPlaying({ songId }) {
	return (
		<div className="flex flex-col items-center w-full p-6   shadow">
			<CoverArt />
			<div className="mt-6 w-full flex flex-col items-start">
				<SongTitle songId={songId} />
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
